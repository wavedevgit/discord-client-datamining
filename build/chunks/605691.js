/** chunk id: 605691, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    a = n(308528),
    d = n(994500),
    u = n(287809),
    s = n(47167),
    o = n(985018);

function c(e, t) {
    let c = i.useCallback(() => {
        let i = (0, s.m1)(e, u.default, d.A),
            c = o.intl.formatToPlainString(o.t.hJ5Ap4, {
                name: i
            }),
            A = o.intl.format(o.t.SSIVOu, {
                name: i
            });
        e.isManaged() && (c = o.intl.formatToPlainString(o.t.hVGjEW, {
            name: i
        }), A = o.intl.format(o.t.IK1Qvs, {
            name: i
        }));
        let E = function(n) {
            let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            a.A.closePrivateChannel(e.id, t, r)
        };
        (0, l.mMO)(async () => {
            let {
                default: e
            } = await n.e("37803").then(n.bind(n, 148166));
            return t => (0, r.jsx)(e, {
                title: c,
                body: A,
                onSubmit: E,
                ...t
            })
        })
    }, [e, t]);
    return (0, r.jsx)(l.Drp, {
        id: "leave-channel",
        label: o.intl.string(o.t["26C4oi"]),
        action: c,
        color: "danger"
    })
}