/** chunk id: 18108, original params: e,t,n (module,exports,require) **/
n.d(t, {
    g: () => l
});
let i = (e, t) => {
        let n = s(e, t);
        if (n > 0) {
            let i = a(e, t),
                s = (n / e.length + n / t.length + (n - i) / n) / 3;
            return s < .7 ? s : s + .1 * r(e, t) * (1 - s)
        }
        return 0
    },
    s = (e, t) => {
        let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            i = [],
            s = 0;
        for (var a = 0; a < e.length; a++)
            for (var r = Math.max(0, a - n); r <= Math.min(t.length, a + n); r++)
                if (e[a] === t[r] && !i[r]) {
                    i[r] = !0, s++;
                    break
                } return s
    },
    a = (e, t) => {
        let n = Math.floor(Math.max(e.length, t.length) / 2) - 1,
            i = {
                a: "",
                b: ""
            },
            s = [];
        for (let a = 0; a < e.length; a++)
            for (let r = Math.max(0, a - n); r <= Math.min(t.length, a + n); r++)
                if (e[a] === t[r] && !s[r]) {
                    i.a += e[a], s[r] = !0;
                    break
                } s = [];
        for (let a = 0; a < t.length; a++)
            for (let r = Math.max(0, a - n); r <= Math.min(e.length, a + n); r++)
                if (t[a] === e[r] && !s[r]) {
                    i.b += t[a], s[r] = !0;
                    break
                } let a = 0;
        for (let e = 0; e < i.a.length; e++) i.a[e] !== i.b[e] && a++;
        return Math.floor(a / 2)
    },
    r = (e, t) => {
        let n = 0;
        for (; n < 4; n++)
            if (e[n] !== t[n]) return n;
        return ++n
    };

function l(e, t, n) {
    let {
        caseSensitive: s = !1
    } = n ?? {};
    return s ? i(e, t) : i(e.toLowerCase(), t.toLowerCase())
}