import low      from 'lowdb';
import axios    from 'axios';

const fakeDB = low();

function callFakeDB(usersPaged) {
    console.log(usersPaged);

    fakeDB.defaults({ data: usersPaged }).value();
}

export default function (page, perPage, sort, order, filter, callback) {

    const start = (page - 1) * perPage;
    const end = page * perPage;
    var _page = ((page - 1) * perPage) + 1;
    setPage(_page);

    function setPage() {

        axios.get('https://api.github.com/users')
            .then(function (response) {
                let usersPaged = response.data;
                console.log(usersPaged);

                fakeDB.defaults({ data: usersPaged }).value();

                callFilter();

            })
            .catch(function (error) {
                    console.log(error);
                }
            );
    }

    function callFilter() {

        if (filter !== '') {
            const pattern = new RegExp(filter.toLowerCase());
            setTimeout(() => {
                const result = {
                    count: fakeDB.get('data').filter((data) => {
                        return pattern.test(data.name.toLowerCase());
                    }).size().value(),
                    data: fakeDB.get('data').filter((data) => {
                        return pattern.test(data.name.toLowerCase());
                    }).orderBy([sort], [order]).slice(start, end).value(),
                };
                callback(result);
            }, 200);
        } else {
            setTimeout(() => {
                const result = {
                    count: fakeDB.get('data').size().value(),
                    data: fakeDB.get('data').orderBy([sort], [order]).slice(start, end).value(),
                };
                callback(result);
            }, 200);
        }
    }
}