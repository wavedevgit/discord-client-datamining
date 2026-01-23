/** Chunk was on 36054 **/
/** chunk id: 358622, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048);
var a = n(627968);
n(64700);
var l = n(989349),
    r = n.n(l),
    i = n(311907),
    s = n(554146),
    o = n(105565),
    c = n(771781),
    d = n(303054),
    u = n(957196);
let m = e => {
        switch (e) {
            case o.r.DC_DISMISSED:
                return "DISMISS:";
            case o.r.DC_SHOWN:
                return "SHOW:";
            case o.r.DC_SHOW_REQUEST:
                return "REQUEST TO SHOW:";
            default:
                return "UNKNOWN TYPE:"
        }
    },
    p = [{
        key: "events",
        render(e) {
            let {
                event: t,
                dismissibleContent: n
            } = e;
            return "".concat(t, " ").concat(s.M[n])
        }
    }],
    h = [{
        key: "candidates",
        render(e) {
            let {
                dismissibleContent: t
            } = e;
            return "".concat(s.M[t])
        }
    }];

function x() {
    let e = (0, i.bG)([o.A], () => o.A.getDCFEvents()),
        t = (0, c.Ay)(e => e.candidates),
        n = (0, c.Ay)(e => e.lastWinnerTime),
        l = 0 !== n ? r()(n).fromNow() : "n/a",
        x = (0, c.Ay)(e => 0 === e.lastWinnerTime ? null : e.recentlyShown[0]),
        g = e.map(e => {
            let {
                eventType: t,
                dismissibleContent: n
            } = e;
            return {
                key: m(t) + n.toString(),
                event: m(t),
                dismissibleContent: n
            }
        }),
        f = Array.from(t.keys()).map(e => ({
            key: e.toString(),
            dismissibleContent: e
        }));
    return (0, a.jsxs)("div", {
        className: u.KE,
        children: [(0, a.jsxs)("div", {
            className: u.pq,
            children: ["Last winner time: ", l]
        }), (0, a.jsx)("br", {}), (0, a.jsxs)("div", {
            className: u.pq,
            children: ["Last winner: ", null != x ? s.M[x] : "None"]
        }), (0, a.jsx)("br", {}), (0, a.jsx)("div", {
            className: u.uI,
            children: (0, a.jsx)(d.A, {
                className: u.Th,
                columns: h,
                data: f
            })
        }), (0, a.jsx)("br", {}), (0, a.jsx)(d.A, {
            columns: p,
            data: g
        })]
    })
}