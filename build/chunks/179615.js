/** chunk id: 179615 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    l = n(64700),
    s = n(158954),
    i = n(892358),
    a = n(475815),
    o = n(341915),
    u = n(245853),
    c = n(579473),
    d = n(590202),
    m = n(971649),
    p = n(651892),
    f = n(73473),
    E = n(752231),
    h = n(881621),
    v = n(781121),
    x = n(654487),
    g = n(985018),
    S = n(681636);

function A(e) {
    let {
        videoRef: t,
        onTrackQuestContentClick: n,
        orientation: A
    } = e, {
        onClose: C,
        sourceQuestContent: _,
        quest: b,
        isFullscreenEnabled: y
    } = l.useContext(E.VideoQuestModalContext), T = (0, m.go)(), N = (0, v.H)({
        quest: b,
        onClose: C,
        sourceQuestContent: _,
        impressionId: T
    }), D = l.useCallback(e => {
        if (y) {
            let e = (0, a.qf)(t.current?.parentNode, t.current);
            null != e && (0, a.sP)(e)
        }
        n(e, d.Cy.LEARN_MORE), N(e, d.Cy.OPEN_GAME_LINK)
    }, [y, t, N, n]), {
        title: R,
        subtitle: j
    } = {
        title: (0, p.wr)(b),
        subtitle: b.config.ctaConfig.subtitle ?? g.intl.string(g.t.mxaHfx)
    }, {
        enabled: L
    } = u.uK.useConfig({
        location: x.rE.VIDEO_MODAL
    }), M = l.useMemo(() => (0, c.tW)(b, c.fY.VIDEO_PLAYER_THUMBNAIL, void 0, !1)?.url ?? null, [b]);
    return L ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.nY, {
            url: M
        }), (0, r.jsx)(i.KP, {}), (0, r.jsxs)(i.zj, {
            orientation: A,
            children: [null != M && (0, r.jsx)(f.R, {
                questOrQuests: b,
                questContent: o.uF.VIDEO_MODAL_END_CARD,
                sourceQuestContent: _,
                children: e => (0, r.jsx)(i.Kb, {
                    ref: t => {
                        e.current = t
                    },
                    url: M,
                    orientation: A
                })
            }), (0, r.jsx)(i.lx, {
                title: R,
                subtitle: j,
                ctaBtnLabel: b.config.ctaConfig.buttonLabel,
                ctaIcon: s.KS6,
                onCTAClick: () => D(o.uF.VIDEO_MODAL),
                orientation: A
            })]
        })]
    }) : (0, r.jsxs)(r.Fragment, {
        children: [null != M && (0, r.jsx)(f.R, {
            questOrQuests: b,
            questContent: o.uF.VIDEO_MODAL_END_CARD,
            sourceQuestContent: _,
            children: e => (0, r.jsx)(i.pK, {
                ref: t => {
                    e.current = t
                },
                url: M
            })
        }), (0, r.jsx)("div", {
            className: S.MT,
            "data-testid": "discord-web-video-player-end-screen"
        }), (0, r.jsx)(i.OH, {
            title: R,
            subtitle: j,
            icon: s.KS6,
            className: S.mT,
            onClick: () => D(o.uF.VIDEO_MODAL),
            divider: (0, r.jsx)(h.A, {
                color: "#747783"
            })
        })]
    })
}