/** Chunk was on web.js **/
/** chunk id: 667050, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Bf: () => k,
    Br: () => F,
    fr: () => B,
    m4: () => x,
    oS: () => G,
    tm: () => U
});
var r = n(735438),
    i = n.n(r),
    a = n(791454),
    o = n(54991),
    s = n(149834),
    l = n(372889),
    c = n(764724),
    u = n(535275),
    d = n(228158),
    f = n(980883),
    p = n(577436),
    _ = n(502561),
    h = n(71442),
    m = n(213961),
    g = n(942344),
    E = n(640319),
    y = n(24902),
    b = n(649685),
    O = n(343076),
    v = n(148743),
    A = n(930658),
    I = n(843505),
    S = n(751212),
    T = n(596963),
    C = n(7584),
    N = n(776231),
    w = n(287809),
    R = n(486020),
    P = n(690521),
    D = n(194486),
    L = n(985018);
let x = {
        start: 10,
        end: 15
    },
    M = [a],
    j = [o, s, l, c, u, d, f, p, _, h, m, g, E, y, b, O, v, A, I, S, T],
    k = {
        [D.B.BASIC]: M,
        [D.B.PREMIUM]: j
    },
    U = i().memoize(e => new Promise(t => {
        let n = new Image;
        n.src = e, n.crossOrigin = "Anonymous", n.onload = () => {
            let r = 32 * (0, N.mZ)();
            if (n.width === r && n.height === r) t(e);
            else {
                var i;
                let e = document.createElement("canvas");
                e.width = r, e.height = r, null == (i = e.getContext("2d")) || i.drawImage(n, 0, 0), t(e.toDataURL("image/png"))
            }
        }
    })),
    G = (e, t) => {
        let n = k[e];
        if (null != t && e === D.B.PREMIUM) {
            let e = t.end + 1;
            return Math.floor(Math.random() * (t.start - e) + e)
        }
        return Math.floor(Math.random() * n.length)
    };

function F(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 32;
    if (null != e.id) {
        var n;
        return R.Ay.getEmojiURL({
            id: e.id,
            animated: null != (n = e.animated) && n,
            size: t
        })
    }
    let r = C.Ay.convertSurrogateToName(e.name, !1),
        i = C.Ay.getByName(r);
    return null != i ? P.Ay.getURL(i.surrogates) : ""
}

function V(e, t) {
    return i()(e).map(e => {
        var n;
        return null != (n = e[t]) ? n : null
    }).filter(e => null != e).uniq().value()
}

function B(e) {
    var t, n, r, i, a, o;
    if (e.length < 1) return "";
    let s = V(e, "userId"),
        l = V(e, "emojiName"),
        c = l.length < 2 ? null != (t = null == l ? void 0 : l[0]) ? t : "" : l.join(", ");
    return s.length < 1 ? "" : 1 === s.length ? L.intl.formatToPlainString(L.t.yZYxzF, {
        firstUsername: null == (n = w.default.getUser(s[0])) ? void 0 : n.username,
        emojiNames: c
    }) : 2 === s.length ? L.intl.formatToPlainString(L.t["8rmtbd"], {
        firstUsername: null == (r = w.default.getUser(s[0])) ? void 0 : r.username,
        secondUsername: null == (i = w.default.getUser(s[1])) ? void 0 : i.username,
        emojiNames: c
    }) : L.intl.formatToPlainString(L.t["/okjv0"], {
        firstUsername: null == (a = w.default.getUser(s[0])) ? void 0 : a.username,
        secondUsername: null == (o = w.default.getUser(s[1])) ? void 0 : o.username,
        count: s.length - 2,
        emojiNames: c
    })
}