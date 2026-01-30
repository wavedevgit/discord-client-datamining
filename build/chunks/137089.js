/** chunk id: 137089, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => j,
    fz: () => O,
    tt: () => _
}), n(321073), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(311907),
    o = n(104171),
    c = n(186369),
    u = n(970812),
    d = n(395504),
    h = n(543465),
    p = n(147036),
    g = n(32603),
    f = n(85808),
    m = n(823142);
n(83766);
var b = n(728444),
    A = n(495401);
let y = l.memo(function(e) {
    let {
        guildChannels: t,
        guildChannelsVersion: n
    } = e, i = l.useMemo(() => t.getCategoryFromSection(t.voiceChannelsSectionNumber), [t, n]);
    return null == i ? null : (0, r.jsx)(m.AV, {
        category: i
    })
});

function O(e) {
    let {
        sectionIndex: t,
        guildChannels: n,
        voiceStates: r,
        selectedChannelId: l,
        selectedVoiceChannelId: i,
        optInEnabled: s,
        visualRefreshEnabled: a,
        density: o
    } = e;
    if (t === n.voiceChannelsSectionNumber) return 44;
    let {
        hasDivider: c,
        canHaveVoiceSummary: u
    } = (0, f.B3)(n, s, t), d = c ? a ? 9 : 12 : 0;
    if (!u || t === g.PU) return d;
    let h = n.getNamedCategoryFromSection(t);
    return null == h ? d : (0, f.Bo)({
        category: h,
        selectedChannelId: l,
        selectedVoiceChannelId: i,
        voiceStates: r
    }) ? (a && "cozy" === o ? 42 : 34) + d : d
}

function _(e, t, n) {
    if (e === t.voiceChannelsSectionNumber) return "voice-channels-button";
    let {
        hasDivider: r,
        canHaveVoiceSummary: l
    } = (0, f.B3)(t, n, e);
    return "section-footer-".concat(e).concat(r ? "-divider" : "").concat(l ? "-voice-summary" : "")
}
let j = l.memo(function(e) {
    let {
        sectionIndex: t,
        guildChannels: n,
        guildChannelsVersion: i,
        voiceStates: m,
        guildId: O,
        selectedChannelId: _,
        selectedVoiceChannelId: j,
        optInEnabled: x
    } = e, {
        hasDivider: v,
        canHaveVoiceSummary: E
    } = l.useMemo(() => (0, f.B3)(n, x, t), [n, x, t, i]), C = l.useMemo(() => t === g.PU ? null : n.getCategoryFromSection(t), [n, t, i]), S = (0, d.jN)(O), {
        enableWaveformIcon: I
    } = (0, c.b)(O, "ChannelListSectionFooter"), N = (0, a.yK)([h.Ay], () => {
        if (null == C || !C.isCollapsed || !E) return [];
        let e = C.getChannelRecords(),
            t = [];
        for (let n of e) {
            if (!n.isGuildVocal()) continue;
            let e = h.Ay.isChannelOrParentOptedIn(O, n.id);
            (!S || e) && t.push(n)
        }
        return t
    }, [C, E, O, S]), T = l.useMemo(() => (0, p.fK)({
        channels: N,
        selectedChannelId: _,
        selectedVoiceChannelId: j,
        voiceStates: m
    }), [N, _, j, m]);
    if (t === n.voiceChannelsSectionNumber) return (0, r.jsx)(y, {
        guildChannels: n,
        guildChannelsVersion: i
    });
    let P = v ? (0, r.jsx)("div", {
        className: A.ts
    }) : null;
    return E && 0 !== T.length ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
            className: A.qz,
            children: (0, r.jsx)(o.Ay, {
                renderIcon: !0,
                users: T,
                max: 8,
                showUserPopout: !0,
                guildId: O,
                renderLeadingIcon: I ? e => (0, r.jsx)(u.A, {
                    color: "currentColor",
                    className: s()(e, b.Gj)
                }) : void 0
            })
        }), P]
    }) : P
})