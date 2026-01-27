/** Chunk was on 39048 **/
/** chunk id: 259866, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Mj: () => f,
    mU: () => h,
    tB: () => p
}), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(417597),
    s = n(314116),
    a = n(397927),
    o = n(591552),
    c = n(961973),
    d = n(527678),
    u = n(655943),
    g = n(539916),
    m = n(985018);

function p(e, t) {
    let n = (0, l.yK)([u.A], () => (0, c.G4)(e, t, u.A.editedOnboardingPrompts));
    return [(0, l.yK)([u.A], () => (0, c.G4)(e, t, u.A.editedOnboardingPrompts, c.VU)), n]
}

function f(e) {
    let t = (0, l.bG)([o.A], () => o.A.isAdvancedMode(e)),
        [n] = [(0, l.yK)([o.A], () => (0, c.G4)(e, o.A.getDefaultChannelIds(e), o.A.getOnboardingPrompts(e), c.VU))];
    return !!t && n.length >= g.Kd
}

function h(e) {
    let {
        guildId: t,
        className: n
    } = e, c = (0, l.bG)([o.A], () => o.A.isAdvancedMode(t)), u = i.useCallback(() => {
        let e = c ? g.SD.ONBOARDING_DEFAULT : g.SD.ONBOARDING_ADVANCED;
        c ? (0, s.A)({
            title: m.intl.string(m.t["49+ONj"]),
            subtitle: m.intl.string(m.t.TLkoOt),
            variant: "primary",
            confirmText: m.intl.string(m.t.R9GHya),
            onConfirm: () => (0, d.CP)(t, e)
        }) : (0, s.A)({
            title: m.intl.string(m.t.YB9xUF),
            subtitle: m.intl.string(m.t.BcGGVn),
            variant: "primary",
            confirmText: m.intl.string(m.t.ts6u6r),
            onConfirm: () => (0, d.CP)(t, e)
        })
    }, [t, c]);
    return (0, r.jsx)("div", {
        className: n,
        children: (0, r.jsx)(a.MzZ, {
            onClick: u,
            children: (0, r.jsx)(a.Text, {
                variant: "text-sm/medium",
                color: "text-link",
                children: c ? m.intl.string(m.t.OmpxWy) : m.intl.string(m.t.ozsQBC)
            })
        })
    })
}