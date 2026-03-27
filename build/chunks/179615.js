/** chunk id: 179615 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    i = n(64700),
    s = n(158954),
    a = n(892358),
    l = n(475815),
    o = n(341915),
    u = n(245853),
    c = n(579473),
    d = n(590202),
    m = n(971649),
    E = n(651892),
    p = n(73473),
    _ = n(795068),
    f = n(54291),
    v = n(781121),
    S = n(654487),
    h = n(985018),
    g = n(655833);

function A(e) {
    let {
        videoRef: t,
        onTrackQuestContentClick: n,
        orientation: A
    } = e, {
        onClose: x,
        sourceQuestContent: C,
        quest: T,
        isFullscreenEnabled: b
    } = i.useContext(_.a), D = (0, m.go)(), y = (0, v.H)({
        quest: T,
        onClose: x,
        sourceQuestContent: C,
        impressionId: D
    }), I = i.useCallback(e => {
        if (b) {
            let e = (0, l.qf)(t.current?.parentNode, t.current);
            null != e && (0, l.sP)(e)
        }
        n(e, d.Cy.LEARN_MORE), y(e, d.Cy.OPEN_GAME_LINK)
    }, [b, t, y, n]), {
        title: N,
        subtitle: L
    } = {
        title: (0, E.wr)(T),
        subtitle: T.config.ctaConfig.subtitle ?? h.intl.string(h.t.mxaHfx)
    }, {
        enabled: R
    } = u.uK.useConfig({
        location: S.rE.VIDEO_MODAL
    }), O = i.useMemo(() => (0, c.tW)(T, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [T]);
    return R ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(a.nY, {
            url: O
        }), (0, r.jsx)(a.KP, {}), (0, r.jsxs)(a.zj, {
            orientation: A,
            children: [null != O && (0, r.jsx)(p.R, {
                questOrQuests: T,
                questContent: o.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: C,
                children: e => (0, r.jsx)(a.Kb, {
                    ref: t => {
                        e.current = t
                    },
                    url: O,
                    orientation: A
                })
            }), (0, r.jsx)(a.lx, {
                title: N,
                subtitle: L,
                ctaBtnLabel: T.config.ctaConfig.buttonLabel,
                ctaIcon: s.KS6,
                onCTAClick: () => I(o.uF.VIDEO_MODAL),
                orientation: A
            })]
        })]
    }) : (0, r.jsxs)(r.Fragment, {
        children: [null != O && (0, r.jsx)(p.R, {
            questOrQuests: T,
            questContent: o.uF.VIDEO_MODAL_END_CARD,
            sourceQuestContent: C,
            children: e => (0, r.jsx)(a.pK, {
                ref: t => {
                    e.current = t
                },
                url: O
            })
        }), (0, r.jsx)("div", {
            className: g.MT,
            "data-testid": "discord-web-video-player-end-screen"
        }), (0, r.jsx)(a.OH, {
            title: N,
            subtitle: L,
            icon: s.KS6,
            className: g.mT,
            onClick: () => I(o.uF.VIDEO_MODAL),
            divider: (0, r.jsx)(f.A, {
                color: "#747783"
            })
        })]
    })
}