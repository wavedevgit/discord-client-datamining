/** chunk id: 829869, original params: e,t,a (module,exports,require) **/
a.d(t, {
    Q: () => g
}), a(896048), a(321073);
var r = a(627968),
    s = a(64700),
    l = a(503698),
    n = a.n(l),
    i = a(595768),
    o = a(323125),
    c = a(137540),
    d = a(518579),
    u = a(709808),
    _ = a(464261),
    N = a(818348),
    A = a(396574),
    p = a(563853),
    h = a(855522),
    m = a(33221);

function I(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e
}
let k = N.sE.MAIN_NAVIGATION_MENU;
class g extends s.PureComponent {
    componentDidMount() {
        this.setState({
            isAppCompatible: A.VP
        })
    }
    render() {
        let {
            className: e,
            mainContentId: t,
            skipToContentLabel: a,
            onChangeLocale: s,
            TrackClick: l,
            avoidRouter: i
        } = this.props;
        return (0, r.jsxs)("header", {
            className: n()(m.header, e),
            children: [(0, r.jsxs)("nav", {
                className: m.headerInner,
                children: [(0, r.jsxs)("div", {
                    className: m.headerLogo,
                    children: [(0, r.jsx)(l, {
                        tag: "div",
                        eventName: k,
                        data: {
                            linkClicked: "logo"
                        },
                        children: (0, r.jsx)(c.A, {
                            avoidRouter: i,
                            to: N.Tk.INDEX,
                            from: N.sE.MAIN_NAVIGATION_MENU,
                            children: (0, r.jsx)(d.z, {})
                        })
                    }), null != t ? (0, r.jsx)("a", {
                        className: m.skipToContent,
                        href: "#".concat(t),
                        children: a
                    }) : null]
                }), (0, r.jsx)("ul", {
                    className: m.headerNav,
                    children: (0, r.jsx)(_.C, {
                        avoidRouter: i,
                        TrackClick: l,
                        styles: m
                    })
                }), (0, r.jsxs)("ul", {
                    className: m.headerNavRight,
                    children: [this.renderSocialMediaNav(), (0, r.jsx)(u.B, {
                        onChange: s
                    })]
                })]
            }), null != t && (0, r.jsx)("div", {
                id: t,
                tabIndex: -1
            })]
        })
    }
    constructor(...e) {
        super(...e), I(this, "state", {
            isAppCompatible: !0
        }), I(this, "getAppButton", () => {
            let {
                token: e,
                TrackClick: t,
                authRedirectTo: a
            } = this.props, {
                isAppCompatible: s
            } = this.state, l = (0, o.T2)(a), n = h.A.Messages.NAVIGATION_LOGIN;
            return null != e && (l = N.Sb.ME, n = h.A.Messages.NAVIGATION_OPEN), s ? (0, r.jsx)("li", {
                className: m.listItemInactive,
                children: (0, r.jsx)(t, {
                    eventName: k,
                    className: m.appButton,
                    data: {
                        linkClicked: e ? "open" : "login",
                        googleAnalytics: !0
                    },
                    href: l,
                    children: n
                })
            }, "app-button") : null
        }), I(this, "renderSocialMediaNav", () => {
            let {
                TrackClick: e
            } = this.props, t = [{
                route: (0, i.S)(N.Pq.TWITTER),
                linkClicked: "twitter",
                alt: "Discord's Twitter",
                img: p.T.ASSET_SOCIAL_TWITTER
            }, {
                route: N.w7.FACEBOOK_URL,
                linkClicked: "facebook",
                alt: "Discord's Facebook",
                img: p.T.ASSET_SOCIAL_FACEBOOK
            }, {
                route: N.w7.INSTAGRAM_URL,
                linkClicked: "instagram",
                alt: "Discord's Instagram",
                img: p.T.ASSET_SOCIAL_INSTAGRAM
            }].map(t => (0, r.jsx)("li", {
                className: n()(m.listItemInactive, m.listItemSocialMedia),
                children: (0, r.jsx)(e, {
                    eventName: k,
                    className: m.rightNavLink,
                    data: {
                        linkClicked: t.linkClicked
                    },
                    href: t.route,
                    rel: "me",
                    target: "_blank",
                    children: (0, r.jsx)("img", {
                        src: t.img,
                        alt: t.alt
                    })
                })
            }, t.route)), a = this.getAppButton();
            return null != a && t.push(a), t
        })
    }
}