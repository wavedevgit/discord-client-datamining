/** chunk id: 18108 params = (module,exports,require) **/
n.d(t, {
    g: () => a
});
let i = (e, t) => {
        let n = s(e, t);
        if (n > 0) {
            let i = l(e, t),
                s = (n / e.length + n / t.length + (n - i) / n) / 3;
            return s < .7 ? s : s + .1 * r(e, t) * (1 - s)
        }
        return 0
    },
    s = (e, t) => {
        let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            i = [],
            s = 0;
        for (var l = 0; l < e.length; l++)
            for (var r = Math.max(0, l - n); r <= Math.min(t.length, l + n); r++)
                if (e[l] === t[r] && !i[r]) {
                    i[r] = !0, s++;
                    break
                } return s
    },
    l = (e, t) => {
        let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            i = {
                a: "",
                b: ""
            },
            s = [];
        for (let l = 0; l < e.length; l++)
            for (let r = Math.max(0, l - n); r <= Math.min(t.length, l + n); r++)
                if (e[l] === t[r] && !s[r]) {
                    i.a += e[l], s[r] = !0;
                    break
                } s = [];
        for (let l = 0; l < t.length; l++)
            for (let r = Math.max(0, l - n); r <= Math.min(e.length, l + n); r++)
                if (t[l] === e[r] && !s[r]) {
                    i.b += t[l], s[r] = !0;
                    break
                } let l = 0;
        for (let e = 0; e < i.a.length; e++) i.a[e] !== i.b[e] && l++;
        return Math.floor(l / 2)
    },
    r = (e, t) => {
        let n = 0;
        for (; n < 4; n++)
            if (e[n] !== t[n]) return n;
        return ++n
    };

function a(e, t, n) {
    let {
        caseSensitive: s = !1
    } = n ?? {};
    return s ? i(e, t) : i(e.toLowerCase(), t.toLowerCase())
}