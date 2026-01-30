/** chunk id: 458334, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
});
var r = n(627968),
    i = n(64700),
    l = n(125744),
    s = n(311907),
    a = n(282956),
    o = n(573648),
    c = n(95035),
    d = n(997509),
    u = n(555337),
    g = n(652215),
    m = n(985018);

function p(e, t) {
    let n = (0, s.bG)([u.A], () => u.A.getProps().integrations);
    return i.useMemo(() => (function(e, t, n) {
        var i, s, u, p;
        let f;
        if (!t.managed) return null;
        let h = null == (i = t.tags) ? void 0 : i.bot_id,
            b = null == (s = t.tags) ? void 0 : s.integration_id,
            x = (null == (u = t.tags) ? void 0 : u.premium_subscriber) !== void 0,
            j = (null == (p = t.tags) ? void 0 : p.guild_connections) !== void 0;
        if (null != h ? f = null == n ? void 0 : n.find(e => {
                var t;
                let {
                    application: n
                } = e;
                return (null == n || null == (t = n.bot) ? void 0 : t.id) === h
            }) : null != b && (f = null == n ? void 0 : n.find(e => {
                let {
                    id: t
                } = e;
                return t === b
            })), null != f && null != f.application && null != f.name) {
            let e = f.application.id,
                t = f.name;
            [l.s.TWITCH, l.s.YOUTUBE].includes(f.type) && (t = "".concat(o.A.get(f.type).name, " - ").concat(t));
            let n = () => {
                d.A.setSection(g.BEX.INTEGRATIONS), a.A.setSection(g.wLn.APPLICATION, e)
            };
            return m.intl.format(m.t.FuXsWm, {
                name: t,
                integrationNameHook: (e, t) => (0, r.jsx)(c.A, {
                    onClick: n,
                    children: e
                }, t)
            })
        }
        return x ? m.intl.string(m.t.oF6FYT) : j ? m.intl.string(m.t.ZQ37tH) : m.intl.string(m.t.k5d7DJ)
    })(0, t, n), [e, t, n])
}