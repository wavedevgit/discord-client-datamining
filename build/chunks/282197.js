/** chunk id: 282197, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968);
n(64700);
var i = n(889137),
    a = n(20805),
    o = n(506326),
    s = n(365185),
    l = n(82149),
    c = n(78871),
    u = n(652215);
let d = e => (0, l.Cy)(e) ? [] : e.type === u.$pd.PLAYING ? [c.QA, c.cy] : e.type === u.$pd.LISTENING ? [c.QA] : e.type === u.$pd.WATCHING ? [c.QA, c.Rq] : e.type === u.$pd.COMPETING ? [c.QA] : [];

function f(e) {
    let {
        entry: t
    } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [o.$X, o.tR, o.K7, o.fg, o.sp, o.MK].map((e, n) => (0, r.jsx)(e, {
            entry: t
        }, "entry-".concat(n)))
    })
}

function p(e) {
    let {
        entry: t
    } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [o.Xr].map((e, n) => (0, r.jsx)(e, {
            entry: t
        }, "entry-".concat(n)))
    })
}

function _(e) {
    let {
        entry: t
    } = e;
    return (0, r.jsx)(r.Fragment, {
        children: [o.Y8].map((e, n) => (0, r.jsx)(e, {
            entry: t
        }, "entry-".concat(n)))
    })
}

function h(e) {
    let {
        user: t,
        activity: n,
        className: l
    } = e, c = (0, s.A)({
        activity: n,
        user: t
    }), u = d(n);
    return 0 === u.length ? null : (0, r.jsxs)(o.mG, {
        location: o.N5.USER_PROFILE,
        className: l,
        children: [u.map((e, t) => (0, r.jsx)(e, {
            activity: n
        }, "activity-".concat(t))), (0, i.YW)(c).when(a.qQ, e => (0, r.jsx)(f, {
            entry: e
        })).when(a.UQ, e => (0, r.jsx)(p, {
            entry: e
        })).when(a.p6, e => (0, r.jsx)(_, {
            entry: e
        })).otherwise(() => null)]
    })
}