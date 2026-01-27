/** Chunk was on web.js **/
/** chunk id: 256195, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    o = n(311907),
    s = n(435371),
    l = n(397927),
    c = n(401843),
    u = n(315606),
    d = n(616356),
    f = n(961350),
    p = n(200749),
    _ = n(985018),
    h = n(438823);
let m = 175,
    g = 195,
    E = n(913516);

function y(e) {
    let {
        participant: t,
        width: n,
        noArt: i = !1,
        selected: y = !1
    } = e, b = n < g, {
        defaultWatchMultipleStreams: O
    } = (0, u.W)({
        location: "StreamHidden"
    }), v = (0, o.bG)([d.A, f.default], () => d.A.getAllActiveStreams().some(e => {
        let {
            ownerId: t
        } = e;
        return t !== f.default.getId()
    }));
    return (0, r.jsx)("div", {
        className: a()(h.Qs, h.FY),
        children: (0, r.jsx)(p.A, {
            className: h.FP,
            artURL: E,
            noArt: i,
            selected: y,
            size: (0, p.J)(n),
            header: b ? null : _.intl.string(_.t.epU4Ec),
            description: y ? null : (0, r.jsxs)("div", {
                className: a()(h.t2, {
                    [h.y8]: !b
                }),
                children: [(0, r.jsx)("div", {
                    className: h.lO,
                    children: (0, r.jsx)(l.Button, {
                        variant: "secondary",
                        size: b ? "sm" : "md",
                        text: n < m ? _.intl.string(_.t.I6JG46) : _.intl.string(_.t["7Xq/nV"])
                    })
                }), v && !O ? (0, r.jsx)("div", {
                    className: a()(h.lO, h.EU),
                    children: (0, r.jsx)(s.m_, {
                        text: _.intl.string(_.t.wCrzut),
                        children: (0, r.jsx)(l.K0, {
                            variant: "secondary",
                            size: b ? "sm" : "md",
                            icon: l.vAm,
                            "aria-label": _.intl.string(_.t.wCrzut),
                            onClick: e => {
                                e.stopPropagation(), (0, c.A9)(t.stream, {
                                    forceMultiple: !0
                                })
                            }
                        })
                    })
                }) : null]
            })
        })
    })
}