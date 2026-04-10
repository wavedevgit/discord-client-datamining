/** chunk id: 179615 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    s = n(64700),
    i = n(158954),
    a = n(697397),
    l = n(475815),
    o = n(341915),
    u = n(245853),
    c = n(579473),
    d = n(590202),
    m = n(971649),
    E = n(651892),
    _ = n(73473),
    f = n(795068),
    p = n(54291),
    S = n(781121),
    v = n(654487),
    h = n(985018),
    g = n(246878);

function A(e) {
    let {
        videoRef: t,
        onTrackQuestContentClick: n,
        orientation: A
    } = e, {
        onClose: C,
        sourceQuestContent: x,
        quest: T,
        isFullscreenEnabled: D
    } = s.useContext(f.a), I = (0, m.go)(), y = (0, S.H)({
        quest: T,
        onClose: C,
        sourceQuestContent: x,
        impressionId: I
    }), R = s.useCallback(e => {
        if (D) {
            let e = (0, l.qf)(t.current?.parentNode, t.current);
            null != e && (0, l.sP)(e)
        }
        n(e, d.Cy.LEARN_MORE), y(e, d.Cy.OPEN_GAME_LINK)
    }, [D, t, y, n]), {
        title: N,
        subtitle: b
    } = {
        title: (0, E.wr)(T),
        subtitle: T.config.ctaConfig.subtitle ?? h.intl.string(h.t.mxaHfx)
    }, {
        enabled: O
    } = u.uK.useConfig({
        location: v.rE.VIDEO_MODAL
    }), L = s.useMemo(() => (0, c.tW)(T, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [T]);
    return O ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.nY, {
            url: L
        }), (0, r.jsx)(a.KP, {}), (0, r.jsxs)(a.zj, {
            orientation: A,
            children: [null != L && (0, r.jsx)(_.R, {
                questOrQuests: T,
                questContent: o.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: x,
                children: e => (0, r.jsx)(a.Kb, {
                    ref: t => {
                        e.current = t
                    },
                    url: L,
                    orientation: A
                })
            }), (0, r.jsx)(a.lx, {
                title: N,
                subtitle: b,
                ctaBtnLabel: T.config.ctaConfig.buttonLabel,
                ctaIcon: i.KS6,
                onCTAClick: () => R(o.uF.VIDEO_MODAL),
                orientation: A
            })]
        })]
    }) : (0, r.jsxs)(r.Fragment, {
        children: [null != L && (0, r.jsx)(_.R, {
            questOrQuests: T,
            questContent: o.uF.VIDEO_MODAL_END_CARD,
            sourceQuestContent: x,
            children: e => (0, r.jsx)(a.pK, {
                ref: t => {
                    e.current = t
                },
                url: L
            })
        }), (0, r.jsx)("div", {
            className: g.MT,
            "data-testid": "discord-web-video-player-end-screen"
        }), (0, r.jsx)(a.OH, {
            title: N,
            subtitle: b,
            icon: i.KS6,
            className: g.mT,
            onClick: () => R(o.uF.VIDEO_MODAL),
            divider: (0, r.jsx)(p.A, {
                color: "#747783"
            })
        })]
    })
}