/** chunk id: 716600 params = (module,exports,require) **/
n.d(t, {
    t: () => _
});
var i = n(627968);
n(64700);
var l = n(934551),
    r = n(232582),
    a = n(732955),
    s = n(397927),
    o = n(954571),
    d = n(975571),
    c = n(498470),
    u = n(652215),
    A = n(985018),
    h = n(654513);

function _(e) {
    let {
        componentId: t,
        promotionId: n,
        content: _,
        renderModalProps: m,
        analyticsLocations: g,
        analyticsLocation: p,
        isLightTheme: E
    } = e, I = `AnnouncementModalVariant1_${t}`, {
        onClose: f
    } = m, C = _.button?.copy ?? A.intl.string(A.t.YScQSF), T = _.button?.buttonAction === r.dz.OPEN_MARKETING_PAGE ? "jump_to_mkt_button" : "get_nitro_button", S = (0, c.h)({
        buttonAction: _.button?.buttonAction,
        analyticsLocations: g,
        analyticsLocation: p,
        onClose: f
    }), N = "" !== _.helpArticleId ? () => (0, i.jsxs)(i.Fragment, {
        children: ["\xa0", (0, i.jsx)(s.MzZ, {
            className: h.$T,
            href: d.A.getArticleURL(_.helpArticleId),
            children: A.intl.string(A.t["sBp+u0"])
        })]
    }) : void 0, x = _.disclaimer?.disclaimerHelpArticle, v = x?.id != null && "" !== x.id ? () => (0, i.jsxs)(i.Fragment, {
        children: ["\xa0", (0, i.jsx)(s.MzZ, {
            className: h.$T,
            href: d.A.getArticleURL(x.id),
            children: "" !== x.linkText ? x.linkText : A.intl.string(A.t["sBp+u0"])
        })]
    }) : void 0, b = {
        type: "video",
        src: E ? _.heroArtVideoLinkLightTheme : _.videoLink
    };
    return null != _.heroArtVideoSubtitles && (b.subtitles = _.heroArtVideoSubtitles.map(e => ({
        locale: e.locale,
        src: e.link,
        isDefault: !1
    }))), ("" !== _.heroArtImageLinkDarkTheme || "" !== _.heroArtImageLinkLightTheme) && (b = {
        type: "image",
        src: E ? _.heroArtImageLinkLightTheme : _.heroArtImageLinkDarkTheme
    }), {
        componentId: t,
        promotionId: n,
        renderModalProps: m,
        header: _.header,
        modalTopPill: _.modalTopPill,
        subHeader: _.subheader,
        subHeaderExtra: N,
        body: _.body,
        heroArt: b,
        featureCards: _.featureCards.map(e => ({
            header: e.header,
            subHeader: e.body,
            imageSrc: E ? e.imageLinkLightTheme : e.imageLink,
            tagText: "" !== e.pill ? e.pill : void 0
        })),
        changeLogId: I,
        button: () => {
            let e = Date.now();
            return (0, i.jsx)(a.$nd, {
                variant: "expressive",
                size: "md",
                onClick: () => {
                    o.default.track(u.HAw.CHANGE_LOG_CTA_CLICKED, {
                        change_log_id: I,
                        cta_type: T,
                        seconds_open: Math.round((Date.now() - e) / 1e3),
                        target: I
                    }), S()
                },
                text: C,
                icon: l.NitroWheelIcon
            })
        },
        disclaimer: _.disclaimer?.disclaimerText !== "" ? _.disclaimer?.disclaimerText : void 0,
        disclaimerExtra: v
    }
}