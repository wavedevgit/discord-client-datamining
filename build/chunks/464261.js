/** chunk id: 464261, original params: e,t,a (module,exports,require) **/
a.d(t, {
    C: () => N
}), a(896048);
var r, s = a(627968),
    l = a(64700),
    n = a(877227),
    i = a(137540),
    o = a(112895),
    c = a(818348),
    d = a(855522);

function u(e, t, a) {
    return t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = a, e
}
let _ = c.sE.MAIN_NAVIGATION_MENU;
class N extends(r = l.PureComponent) {
    render() {
        let e, t = (0, n.dI)(this.context.router),
            {
                isMobile: a,
                isVisible: r,
                styles: l,
                TrackClick: u,
                avoidRouter: N
            } = this.props,
            {
                sectionShown: A
            } = this.state;
        return (e = null != d.A ? d.A.getLocale().toLowerCase() : "", [{
            route: c.Tk.DOWNLOAD,
            linkClicked: "download",
            title: d.A.Messages.NAVIGATION_DOWNLOAD
        }, {
            route: c.Tk.NITRO,
            linkClicked: "nitro",
            title: d.A.Messages.NAVIGATION_NITRO,
            external: !0
        }, {
            route: c.Tk.JOBS,
            linkClicked: "jobs",
            title: d.A.Messages.NAVIGATION_JOBS,
            external: !0
        }, {
            title: d.A.Messages.NAVIGATION_DEVELOPERS,
            links: [{
                route: c.Tk.RICH_PRESENCE,
                linkClicked: "rich_presence",
                title: d.A.Messages.NAVIGATION_RICH_PRESENCE
            }, {
                route: c.Tk.VERIFICATION,
                linkClicked: "verification",
                title: d.A.Messages.NAVIGATION_VERIFICATION,
                external: !0
            }, {
                route: c.qF.DEV_PORTAL,
                linkClicked: "developers",
                title: d.A.Messages.NAVIGATION_DEVELOPER_PORTAL,
                external: !0
            }, {
                route: c.qF.DEV_PORTAL_DOCUMENTATION,
                linkClicked: "documentation",
                title: d.A.Messages.NAVIGATION_DOCUMENTATION,
                external: !0
            }]
        }, {
            title: d.A.Messages.NAVIGATION_COMMUNITY,
            links: [{
                route: c.Tk.OPEN_SOURCE,
                linkClicked: "open_source",
                title: d.A.Messages.NAVIGATION_OPEN_SOURCE
            }, {
                route: c.Tk.PARTNERS,
                linkClicked: "partners",
                title: d.A.Messages.NAVIGATION_PARTNERS,
                external: !0
            }, {
                route: c.Tk.HYPESQUAD,
                linkClicked: "hypesquad",
                title: d.A.Messages.NAVIGATION_HYPESQUAD,
                external: !0
            }, {
                route: c.Tk.GUIDELINES,
                linkClicked: "guidelines",
                title: d.A.Messages.NAVIGATION_GUIDELINES,
                external: !0
            }]
        }, {
            title: d.A.Messages.NAVIGATION_SUPPORT,
            links: [{
                route: "//support.discord.com/hc/".concat(e),
                linkClicked: "helpandsupport",
                title: d.A.Messages.NAVIGATION_HELP_AND_SUPPORT,
                external: !0
            }, {
                route: c.qF.STATUS,
                linkClicked: "status",
                title: d.A.Messages.NAVIGATION_STATUS,
                external: !0
            }, {
                route: c.Tk.SAFETY_LANDING,
                linkClicked: "safetycenter",
                title: d.A.Messages.NAVIGATION_SAFETY_CENTER,
                external: !0
            }]
        }]).map(e => null != e.links ? (0, s.jsx)(o.A, {
            title: e.title,
            links: e.links,
            isOpen: A === e.title,
            isMobile: a,
            avoidRouter: N,
            TrackClick: u,
            onClose: this.closeSubNav,
            onOpen: this.openSubNav
        }, e.title) : e.external && null != e.route ? (0, s.jsx)("li", {
            className: l.listItemInactive,
            role: "none",
            children: (0, s.jsx)(u, {
                className: l.mainNavLink,
                eventName: _,
                data: e.linkClicked ? {
                    linkClicked: e.linkClicked
                } : {},
                href: e.route,
                rel: "me",
                children: e.title
            })
        }, "external_link_".concat(e.route)) : null != e.route ? (0, s.jsx)("li", {
            className: t(e.route) ? l.listItemActive : l.listItemInactive,
            role: "none",
            children: (0, s.jsx)(i.A, {
                avoidRouter: N,
                to: e.route,
                from: c.sE.MAIN_NAVIGATION_MENU,
                tabIndex: r ? 0 : -1,
                role: "menuitem",
                children: (0, s.jsx)(u, {
                    tag: "span",
                    className: l.mainNavLink,
                    eventName: _,
                    data: {
                        linkClicked: e.linkClicked
                    },
                    children: e.title
                })
            })
        }, "link_".concat(e.route)) : [])
    }
    constructor(...e) {
        super(...e), u(this, "state", {
            sectionShown: null
        }), u(this, "closeSubNav", () => {
            let {
                sectionShown: e
            } = this.state;
            null !== e && this.setState({
                sectionShown: null
            })
        }), u(this, "openSubNav", e => {
            let {
                sectionShown: t
            } = this.state;
            t !== e && this.setState({
                sectionShown: e
            })
        })
    }
}
u(N, "defaultProps", {
    isMobile: !1,
    isVisible: !0
})