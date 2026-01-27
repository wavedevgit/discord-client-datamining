/** Chunk was on 65298 **/
/** chunk id: 977700, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => j
});
var a = n(627968);
n(64700);
var l = n(397927),
    r = n(793574),
    i = n(688810),
    s = n(826673),
    o = n(750506),
    c = n(780964),
    d = n(358776),
    u = n(840065),
    m = n(223567),
    p = n(552122),
    h = n(41280),
    x = n(652215),
    g = n(49999),
    f = n(985018),
    b = n(653246);

function v(e) {
    let {
        dismissibleContent: t,
        backgroundColor: n,
        specialTextColor: m
    } = e, v = p.A.useIsEligible(), j = (0, s.JZ)(t), _ = null != n, y = null != m ? {
        color: m
    } : void 0, {
        analyticsLocations: A
    } = (0, i.Ay)(r.A.HOLIDAY_COACHMARK), C = e => {
        (0, s.Dr)(t, {
            dismissAction: e
        })
    }, S = () => {
        let e = (0, d.E7)("HolidayCoachmark");
        (0, u.openUserSettings)(e ? c.X.NOTIFICATIONS_PANEL : c.X.LEGACY_NOTIFICATIONS_SETTINGS_PANEL, {
            section: x.nc_.NOTIFICATIONS,
            analyticsLocations: A
        }), C(g.i.TAKE_ACTION)
    };
    return v && !j ? (0, a.jsx)(o.Ay, {
        children: (0, a.jsxs)("div", {
            className: b.iE,
            style: {
                backgroundColor: _ ? n : void 0
            },
            children: [!_ && (0, a.jsxs)("div", {
                className: b.o5,
                children: [(0, a.jsx)(h.A, {
                    className: b.iL,
                    pageMultiplier: 5
                }), (0, a.jsx)("div", {
                    className: b.Np
                })]
            }), (0, a.jsx)("div", {
                className: b.c8
            }), (0, a.jsxs)("div", {
                className: b.Qs,
                children: [(0, a.jsxs)("div", {
                    children: [(0, a.jsx)(l.Heading, {
                        variant: "heading-md/bold",
                        color: null != y ? void 0 : "always-white",
                        style: y,
                        children: f.intl.string(f.t["6CxPoB"])
                    }), (0, a.jsx)(l.Text, {
                        variant: "text-xs/normal",
                        color: "always-white",
                        children: f.intl.format(f.t.IVzJ8G, {
                            settingsHook: (e, t) => (0, a.jsx)(l.DUT, {
                                tag: "span",
                                className: b.nf,
                                style: y,
                                onClick: S,
                                children: e
                            }, t)
                        })
                    })]
                }), (0, a.jsx)(l.DUT, {
                    className: b.l2,
                    onClick: () => C(g.i.USER_DISMISS),
                    children: (0, a.jsx)(l.PGe, {
                        color: "currentColor",
                        size: "xs"
                    })
                })]
            })]
        })
    }) : null
}

function j() {
    return null == m.A.coachmarkDismissibleContent ? null : (0, a.jsx)(v, {
        dismissibleContent: m.A.coachmarkDismissibleContent,
        backgroundColor: m.A.coachmarkBackgroundColor,
        specialTextColor: m.A.coachmarkSpecialTextColor
    })
}