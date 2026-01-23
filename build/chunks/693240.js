/** Chunk was on 36054 **/
/** chunk id: 693240, original params: e,t,n (module,exports,require) **/
n.d(t, {
    o: () => x,
    w: () => g
});
var a = n(627968);
n(64700);
var l = n(311907),
    r = n(116833),
    i = n(342494),
    s = n(73153),
    o = n(626584),
    c = n(71393),
    d = n(685073),
    u = n(514661),
    m = n(49999),
    p = n(985018);
let h = new o.A("GuildTagAvailableCoachmark");

function x(e) {
    var t;
    let n = (0, l.bG)([c.A], () => c.A.getGuild(e.guildId));

    function o(t) {
        var a, l;
        (null == n || null == (a = n.profile) ? void 0 : a.tag) != null && s.h.dispatch({
            type: "GUILD_TAG_CHANGED_COACHMARK_SEEN",
            guildId: n.id,
            lastSeenInfo: {
                tag: n.profile.tag
            }
        }), null == (l = e.onDismiss) || l.call(e, t)
    }
    let {
        isAdopting: x,
        onAdoptTag: g,
        onEditProfile: f
    } = (0, u.A)(null != (t = null == n ? void 0 : n.id) ? t : null, () => o(m.i.TAKE_ACTION));
    if (null == n || !(0, d.q0)(n)) return h.error("GuildTagChangedCoachmark rendered without guildId for a guild with tags."), e.children;
    let b = [{
        text: p.intl.string(p.t.jwEaiX),
        loading: x,
        onClick: g,
        variant: "primary"
    }, {
        text: p.intl.string(p.t.s5vZlQ),
        onClick: f,
        variant: "secondary"
    }];
    return (0, a.jsxs)(a.Fragment, {
        children: [e.children, (0, a.jsx)(i.AM, {
            targetElementRef: e.targetElementRef,
            shouldShow: !0,
            position: "top",
            graphic: {
                type: "dynamic",
                component: r.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                props: {
                    guildId: n.id,
                    guildProfile: n.profile
                }
            },
            title: p.intl.formatToPlainString(p.t["m/Tc3n"], {
                guildName: n.name
            }),
            body: p.intl.string(p.t.DrAXIr),
            actions: b,
            size: "md",
            onRequestClose: () => o(m.i.USER_DISMISS)
        })]
    })
}

function g(e) {
    var t;
    let n = (0, l.bG)([c.A], () => c.A.getGuild(e.guildId));

    function s(t) {
        var n;
        null == (n = e.onDismiss) || n.call(e, t)
    }
    let {
        isAdopting: o,
        onAdoptTag: x,
        onEditProfile: g
    } = (0, u.A)(null != (t = null == n ? void 0 : n.id) ? t : null, () => s(m.i.TAKE_ACTION));
    if (null == n || !(0, d.q0)(n)) return h.error("GuildTagAvailableCoachmark rendered without guildId for a guild with tags."), e.children;
    let f = [{
        text: p.intl.string(p.t.jwEaiX),
        loading: o,
        onClick: x,
        variant: "primary"
    }, {
        text: p.intl.string(p.t.s5vZlQ),
        onClick: g,
        variant: "secondary"
    }];
    return (0, a.jsxs)(a.Fragment, {
        children: [e.children, (0, a.jsx)(i.AM, {
            targetElementRef: e.targetElementRef,
            shouldShow: !0,
            position: "top",
            graphic: {
                type: "dynamic",
                component: r.DynamicGraphicComponent.GUILD_TAG_COACHMARK_ASSET,
                props: {
                    guildId: n.id,
                    guildProfile: n.profile
                }
            },
            title: p.intl.formatToPlainString(p.t.VFqnyU, {
                guildName: n.name
            }),
            body: p.intl.string(p.t.DrAXIr),
            actions: f,
            size: "md",
            onRequestClose: () => s(m.i.USER_DISMISS)
        })]
    })
}