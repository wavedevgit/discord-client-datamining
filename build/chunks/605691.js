/** chunk id: 605691, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => u
});
var i = e(627968),
    l = e(64700),
    r = e(397927),
    a = e(308528),
    d = e(994500),
    s = e(287809),
    o = e(47167),
    c = e(985018);

function u(n, t) {
    let u = l.useCallback(() => {
        let l = (0, o.m1)(n, s.default, d.A),
            u = c.intl.formatToPlainString(c.t.hJ5Ap4, {
                name: l
            }),
            h = c.intl.format(c.t.SSIVOu, {
                name: l
            });
        n.isManaged() && (u = c.intl.formatToPlainString(c.t.hVGjEW, {
            name: l
        }), h = c.intl.format(c.t.IK1Qvs, {
            name: l
        }));
        let A = function(e) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            a.A.closePrivateChannel(n.id, t, i)
        };
        (0, r.mMO)(async () => {
            let {
                default: n
            } = await e.e("37803").then(e.bind(e, 148166));
            return t => (0, i.jsx)(n, {
                title: u,
                body: h,
                onSubmit: A,
                ...t
            })
        })
    }, [n, t]);
    return (0, i.jsx)(r.Drp, {
        id: "leave-channel",
        label: c.intl.string(c.t["26C4oi"]),
        action: u,
        color: "danger"
    })
}