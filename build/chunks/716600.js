/** chunk id: 716600, original params: e,t,n (module,exports,require) **/
n.d(t, {
    t: () => m
});
var i = n(627968);
n(64700);
var r = n(934551),
    l = n(232582),
    a = n(732955),
    s = n(397927),
    o = n(954571),
    d = n(975571),
    c = n(795269),
    u = n(498470),
    A = n(652215),
    h = n(985018),
    _ = n(749322);

function m(e) {
    let {
        componentId: t,
        promotionId: n,
        content: m,
        renderModalProps: g,
        analyticsLocations: p,
        analyticsLocation: E,
        isLightTheme: I
    } = e, f = `AnnouncementModalVariant1_${t}`, {
        onClose: C
    } = g, T = m.button?.copy ?? h.intl.string(h.t.YScQSF), N = m.button?.buttonAction === l.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", S = (0, u.h)({
        buttonAction: m.button?.buttonAction,
        analyticsLocations: p,
        analyticsLocation: E,
        onClose: C
    }), x = "" !== m.helpArticleId ? () => (0, i.jsxs)(i.Fragment, {
        children: ["\xa0", (0, i.jsx)(s.MzZ, {
            className: _.$T,
            href: d.A.getArticleURL(m.helpArticleId),
            children: h.intl.string(h.t["sBp+u0"])
        })]
    }) : void 0, v = {
        type: "video",
        src: I ? m.heroArtVideoLinkLightTheme : m.videoLink
    };
    null != m.heroArtVideoSubtitles && (v.subtitles = m.heroArtVideoSubtitles.map(e => ({
        locale: e.locale,
        src: e.link,
        isDefault: !1
    }))), ("" !== m.heroArtImageLinkDarkTheme || "" !== m.heroArtImageLinkLightTheme) && (v = {
        type: "image",
        src: I ? m.heroArtImageLinkLightTheme : m.heroArtImageLinkDarkTheme
    });
    let y = "" !== m.modalTopPill ? () => (0, i.jsx)(c.R, {
        text: m.modalTopPill,
        className: _.ON
    }) : void 0;
    return {
        componentId: t,
        promotionId: n,
        renderModalProps: g,
        header: m.header,
        modalTopExtra: y,
        subHeader: m.subheader,
        subHeaderExtra: x,
        body: m.body,
        heroArt: v,
        featureCards: m.featureCards.map(e => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: I ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0
        })),
        changeLogId: f,
        button: () => {
            let e = Date.now();
            return (0, i.jsx)(a.$nd, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    o.default.track(A.HAw.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: f,
                        cta_type: N,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        target: f
                    }), S()
                },
                text: T,
                icon: r.NitroWheelIcon
            })
        }
    }
}