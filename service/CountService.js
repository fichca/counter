class CountService {

    async increment(id) {
        if (views.has(id)) {
            let count = views.get(id);
            views.set(id, ++count);
            return count;
        } else {
            views.set(id, 1);
            return 1;
        }
    }

    getViews(id) {
        if (views.has(id)) {
            return views.get(id);
        } else {
            return 0;
        }
    }

    getAll() {
        return views
    }
}

const views = new Map();
module.exports = CountService;