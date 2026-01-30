/** chunk id: 966394, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    s: () => j
}), n(228524), n(896048), n(667532);
var r = n(627968),
    i = n(64700),
    l = n(136722),
    s = n(311907),
    a = n(397927),
    o = n(47167),
    c = n(808728),
    d = n(576705),
    u = n(994500),
    g = n(287809),
    m = n(997509),
    p = n(875331),
    f = n(652215),
    h = n(985018);
let b = "NO_CHANNEL",
    x = l.kg(f.xBc.VIEW_CHANNEL, f.xBc.CREATE_INSTANT_INVITE);

function j(e) {
    let {
        label: t,
        description: n,
        guildId: l,
        widgetEnabled: f,
        widgetChannelId: j,
        enableLocalUpdate: _
    } = e, O = (0, s.bG)([c.Ay], () => c.Ay.getChannels(l)), v = i.useMemo(() => {
        let e = [...O[c.I6], ...O[c.vM]].filter(e => {
            let {
                channel: t
            } = e;
            return t.guild_id === l
        }).filter(e => {
            let {
                channel: t
            } = e;
            return t.id === j || d.A.can(x, t)
        }).map(e => {
            let {
                channel: t
            } = e;
            return {
                id: t.id,
                value: t.id,
                label: (0, o.m1)(t, g.default, u.A, !0)
            }
        });
        return e.unshift({
            id: "no-instant-invite",
            value: b,
            label: h.intl.string(h.t.u197b7)
        }), e
    }, [O, l, j]), y = i.useCallback(e => {
        _ ? (0, p.E)(l, f, e !== b ? e : null) : m.A.updateEmbed(l, f, e !== b ? e : null)
    }, [l, f, _]);
    return (0, r.jsx)(a.l6P, {
        label: t,
        description: n,
        options: v,
        value: null != j ? j : void 0,
        onSelectionChange: y,
        selectionMode: "single",
        fullWidth: !0
    })
}