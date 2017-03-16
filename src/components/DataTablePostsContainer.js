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

        axios.get('http://muiplayground-alandbh.c9users.io/wp-json/wp/v2/posts')
            .then(function (response) {
                let usersPaged = response.data;
                console.log(usersPaged);

                fakeDB.defaults({ data: usersPaged }).value();

                callFilter();

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function callFilter() {
        if (filter !== '') {
            const pattern = new RegExp(filter, 'i');
            setTimeout(() => {
                const result = {
                    count: fakeDB.get('data').filter(
                        { status: { $regex: pattern } }).size().value(),
                    data: fakeDB.get('data').filter(
                        { status: { $regex: pattern } }).sort([sort], [order]).slice(start, end).value(),
                };
                console.log(result)
                callback(result);
            }, 200);
        } else {
            setTimeout(() => {
                const result = {
                    count: fakeDB.get('data').size().value(),
                    data: fakeDB.get('data').sort([sort], [order]).slice(start, end).value(),
                };
                console.log(result)
                callback(result);
            }, 200);
        }
    }
}
