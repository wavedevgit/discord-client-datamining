/** Chunk was on 40394 **/
/** chunk id: 24661, original params: n,t,e (module,exports,require) **/
e.d(t, {
    A: () => A
});
var i = e(627968);
e(64700);
var l = e(311907),
    r = e(397927),
    a = e(931991),
    s = e(849736),
    c = e(698441),
    o = e(496092),
    d = e(988794),
    u = e(985018);

function A(n, t, A) {
    let {
        canManageGuildEvent: b
    } = (0, a.nr)(null != A ? A : t), g = (0, l.bG)([c.Ay], () => c.Ay.isActive(n)), h = (0, l.bG)([c.Ay], () => c.Ay.getGuildScheduledEvent(n), [n]), j = b(h);
    if (null == n || !j || !g || (null == h ? void 0 : h.entity_type) === d.Ps.EXTERNAL) return null;
    let v = () => {
        (null == A ? void 0 : A.isGuildStageVoice()) ? (0, s.OE)(A) : null != n && o.A.endEvent(n, t.id), (0, r.s7G)()
    };
    return (0, i.jsx)(r.Drp, {
        id: u.intl.string(u.t.qaYzPA),
        label: u.intl.string(u.t.qaYzPA),
        action: function() {
            (0, r.mMO)(async () => {
                let {
                    Modal: n
                } = await Promise.resolve().then(e.bind(e, 158954));
                return t => {
                    let {
                        onClose: e,
                        transitionState: l
                    } = t;
                    return (0, i.jsx)(n, {
                        transitionState: l,
                        title: u.intl.string(u.t.qaYzPA),
                        subtitle: u.intl.string(u.t.bnDQ7E),
                        onClose: e,
                        actions: [{
                            onClick: e,
                            variant: "secondary",
                            text: u.intl.string(u.t["ETE/oC"])
                        }, {
                            onClick: v,
                            variant: "critical-primary",
                            text: u.intl.string(u.t.mjB9pd)
                        }]
                    })
                }
            })
        },
        color: "danger"
    })
}