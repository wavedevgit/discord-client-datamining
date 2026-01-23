/** Chunk was on web.js **/
/** chunk id: 674168, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    m: () => v
});
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(571356),
    s = n(421380),
    o = n(397927),
    l = n(465794),
    c = n(212168),
    u = n(780964),
    d = n(358776),
    f = n(840065),
    p = n(287809),
    _ = n(927578),
    h = n(652215),
    m = n(49999),
    g = n(788868),
    E = n(355097),
    y = n(985018),
    b = n(956790);

function O(e) {
    return e === g.PremiumTypes.TIER_2 ? y.intl.string(y.t.jqO5Qn) : null == e ? y.intl.string(y.t.f2qjw5) : y.intl.string(y.t.SblICW)
}

function v(e) {
    let {
        onClose: t,
        markAsDismissed: n
    } = e, v = (0, i.bG)([p.default], () => p.default.getCurrentUser()), A = O(null == v ? void 0 : v.premiumType), I = _.Ay.canUseCustomCallSounds(v);

    function S() {
        let e = (0, d.qz)("CustomCallSoundUpsell") ? u.X.SOUNDBOARD_CATEGORY : u.X.VOICE_AND_VIDEO_PANEL;
        (0, f.openUserSettings)(e, {
            section: h.nc_.VOICE,
            subsection: E.MJ
        }), null == t || t(), null == n || n(m.i.PRIMARY)
    }
    return (0, r.jsxs)(c.A, {
        isShown: !0,
        type: c.i.PREMIUM,
        className: b.ne,
        backgroundClassName: b.u4,
        children: [null != n ? (0, r.jsx)(o.DUT, {
            className: b.VN,
            onClick: () => null == n ? void 0 : n(m.i.DISMISS),
            "aria-label": y.intl.string(y.t.cpT0Cq),
            children: (0, r.jsx)(o.PGe, {
                size: "xs",
                color: "currentColor",
                className: b.ut
            })
        }) : null, (0, r.jsxs)("div", {
            className: b.ex,
            children: [(0, r.jsx)(o.tvc, {
                size: "sm",
                color: "currentColor",
                className: b.ax
            }), (0, r.jsx)(o.Heading, {
                variant: "heading-sm/bold",
                children: y.intl.string(y.t.dTbAxx)
            })]
        }), (0, r.jsx)(a.E, {
            variant: "text-sm/normal",
            children: A
        }), I ? (0, r.jsx)(o.Button, {
            onClick: S,
            text: y.intl.string(y.t.RzWDqY),
            fullWidth: !0
        }) : (0, r.jsx)(l.A, {
            textOptions: {
                textOverride: y.intl.string(y.t.pj0XBN)
            },
            subscriptionTier: g.pe.TIER_2,
            premiumModalAnalyticsLocation: {
                section: h.JJy.SOUNDBOARD_SOUND_PICKER,
                object: h.ZSU.BUTTON_CTA
            },
            color: s.$n.Colors.GREEN,
            onSubscribeModalClose: () => null == n ? void 0 : n(m.i.PRIMARY)
        })]
    })
}