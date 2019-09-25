var tt = { a: { b: 1 } }

function getter(target, paths = '_') {
    console.log(paths)
    if (!Array.isArray(paths)) {
        // 只在第一次将字符串处理成数组
        paths = paths.replace(/\[(\d+)\]/g, '.$1').split('.')
    }

    return new Proxy(target, {
        get: (t, p) => {
            console.log(t, p)
            if (p === paths[0] && typeof target === 'undefined') {
                return target
            } else {
                return getter(target[p], paths.slice(1))
            }
        }
    });
}

var tt = { a: { b: 1 } }

function safeProps(target, path, defaultVal) {

    const fn = () => {
        path = path.replace(/\[(\d+)\]/g, '.$1')

        console.log(path, Object(target))

        return Object(target)[path]
    }

    try {
        return fn();
    } catch (e) {
        return defaultVal;
    }
}

safeProps(tt, 'a.b', undefined);

