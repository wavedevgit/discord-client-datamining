/** chunk id: 716600, original params: e,t,n (module,exports,require) **/
n.d(t, {
    t: () => g
});
var r = n(627968);
n(64700);
var i = n(934551),
    l = n(232582),
    a = n(732955),
    s = n(397927),
    o = n(954571),
    c = n(975571),
    u = n(795269),
    d = n(498470),
    p = n(652215),
    h = n(985018),
    f = n(787076);

function g(e) {
    var t, n, g, m;
    let {
        componentId: A,
        promotionId: _,
        content: b,
        renderModalProps: E,
        analyticsLocations: O,
        analyticsLocation: y,
        isLightTheme: I
    } = e, v = "AnnouncementModalVariant1_".concat(A), {
        onClose: S
    } = E, C = null != (t = null == (n = b.button) ? void 0 : n.copy) ? t : h.intl.string(h.t.YScQSF), N = (null == (g = b.button) ? void 0 : g.buttonAction) === l.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", T = (0, d.h)({
        buttonAction: null == (m = b.button) ? void 0 : m.buttonAction,
        analyticsLocations: O,
        analyticsLocation: y,
        onClose: S
    }), j = "" !== b.helpArticleId ? () => (0, r.jsxs)(r.Fragment, {
        children: ["\xa0", (0, r.jsx)(s.MzZ, {
            className: f.$T,
            href: c.A.getArticleURL(b.helpArticleId),
            children: h.intl.string(h.t["sBp+u0"])
        })]
    }) : void 0, x = {
        type: "video",
        src: I ? b.heroArtVideoLinkLightTheme : b.videoLink
    };
    null != b.heroArtVideoSubtitles && (x.subtitles = b.heroArtVideoSubtitles.map(e => ({
        locale: e.locale,
        src: e.link,
        isDefault: !1
    }))), ("" !== b.heroArtImageLinkDarkTheme || "" !== b.heroArtImageLinkLightTheme) && (x = {
        type: "image",
        src: I ? b.heroArtImageLinkLightTheme : b.heroArtImageLinkDarkTheme
    });
    let P = "" !== b.modalTopPill ? () => (0, r.jsx)(u.R, {
        text: b.modalTopPill,
        className: f.ON
    }) : void 0;
    return {
        componentId: A,
        promotionId: _,
        renderModalProps: E,
        header: b.header,
        modalTopExtra: P,
        subHeader: b.subheader,
        subHeaderExtra: j,
        body: b.body,
        heroArt: x,
        featureCards: b.featureCards.map(e => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: I ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0
        })),
        changeLogId: v,
        button: () => {
            let e = Date.now();
            return (0, r.jsx)(a.$nd, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    o.default.track(p.HAw.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: v,
                        cta_type: N,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        target: v
                    }), T()
                },
                text: C,
                icon: i.NitroWheelIcon
            })
        }
    }
}