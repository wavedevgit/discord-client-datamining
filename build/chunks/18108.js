/** chunk id: 18108, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => r
});
let i = (e, t) => {
        let n = s(e, t);
        if (n > 0) {
            let i = l(e, t),
                s = (n / e.length + n / t.length + (n - i) / n) / 3;
            return s < .7 ? s : s + .1 * a(e, t) * (1 - s)
        }
        return 0
    },
    s = (e, t) => {
        let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            i = [],
            s = 0;
        for (var l = 0; l < e.length; l++)
            for (var a = Math.max(0, l - n); a <= Math.min(t.length, l + n); a++)
                if (e[l] === t[a] && !i[a]) {
                    i[a] = !0, s++;
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
            for (let a = Math.max(0, l - n); a <= Math.min(t.length, l + n); a++)
                if (e[l] === t[a] && !s[a]) {
                    i.a += e[l], s[a] = !0;
                    break
                } s = [];
        for (let l = 0; l < t.length; l++)
            for (let a = Math.max(0, l - n); a <= Math.min(e.length, l + n); a++)
                if (t[l] === e[a] && !s[a]) {
                    i.b += t[l], s[a] = !0;
                    break
                } let l = 0;
        for (let e = 0; e < i.a.length; e++) i.a[e] !== i.b[e] && l++;
        return Math.floor(l / 2)
    },
    a = (e, t) => {
        let n = 0;
        for (; n < 4; n++)
            if (e[n] !== t[n]) return n;
        return ++n
    };

function r(e, t, n) {
    let {
        caseSensitive: s = !1
    } = n ?? {};
    return s ? i(e, t) : i(e.toLowerCase(), t.toLowerCase())
}