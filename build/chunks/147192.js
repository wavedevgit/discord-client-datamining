/** chunk id: 147192 params = (module,exports,require) **/
n.d(t, {
    Ay: () => k,
    aW: () => D,
    rj: () => w
}), n(321073);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(735438),
    o = n.n(s),
    c = n(311907),
    d = n(827734),
    u = n(397927),
    _ = n(657299),
    m = n(770178),
    p = n(84),
    f = n(587895),
    b = n(144945),
    h = n(912996),
    g = n(629016),
    A = n(994500),
    T = n(461213),
    x = n(741961),
    I = n(287809),
    C = n(531685),
    E = n(954571),
    S = n(403362),
    y = n(562153),
    v = n(652215),
    j = n(985018),
    R = n(323837);
let M = [];
class N extends i.PureComponent {
    state = {
        fadeIn: !1
    };
    timeout = null;
    componentDidMount() {
        this.timeout = setTimeout(() => {
            this.setState({
                fadeIn: !0
            }), this.timeout = null, this.logShownEventIfNeeded()
        }, 100)
    }
    componentDidUpdate() {
        this.logShownEventIfNeeded()
    }
    logShownEventIfNeeded() {
        let e = this.props.activity.application_id;
        null != e && -1 === M.indexOf(e) && (E.default.track(v.HAw.SHOW_TUTORIAL, {
            tutorial: "activity-invite-nux-inline",
            application_id: e
        }), M.push(e))
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout)
    }
    handleDismissInviteEducation = () => {
        let {
            activity: e
        } = this.props;
        null != e && null != e.application_id && _.A.dismissForApplicationId(e.application_id)
    };
    render() {
        let {
            activity: e
        } = this.props;
        return (0, a.jsxs)("div", {
            className: r()(R.F4, {
                [R.gV]: this.state.fadeIn
            }),
            children: [(0, a.jsx)("div", {
                className: R.GZ
            }), (0, a.jsx)("span", {
                children: j.intl.format(j.t["i/MoCt"], {
                    game: e.name,
                    dismissOnClick: this.handleDismissInviteEducation
                })
            })]
        })
    }
}

function O(e) {
    let {
        activityInviteEducationActivity: t,
        isFocused: n,
        typingUsers: l,
        className: s,
        channel: o,
        isThreadCreation: c,
        renderDots: d,
        isInTextChannel: _ = !1
    } = e, {
        rateLimitPerUser: p
    } = o, f = i.useRef(null), h = i.useRef(null), [g, A] = i.useState(!1), T = i.useCallback(() => {
        if (null == f.current || null == h.current) return;
        let e = f.current.getBoundingClientRect();
        h.current.scrollWidth + 48 > e.width ? A(!0) : A(!1)
    }, []);
    if ((0, m.g)(f, T, [], {
            enabled: _
        }), (0, m.g)(h, T, [], {
            enabled: _
        }), 0 === l.length && !(p > 0)) return null != t ? (0, a.jsx)(N, {
        activity: t,
        isFocused: n
    }) : null;
    let [x, I, C] = l, E = "";
    1 === l.length ? E = j.intl.format(j.t.lJ9sZX, {
        a: x
    }) : 2 === l.length ? E = j.intl.format(j.t.rB0CUa, {
        a: x,
        b: I
    }) : 3 === l.length ? E = j.intl.format(j.t.StKThj, {
        a: x,
        b: I,
        c: C
    }) : l.length > 3 && (E = j.intl.format(j.t.Q8lUnE, {}));
    let S = g && l.length > 0 && l.length <= 3 ? j.intl.format(j.t["qD/0qZ"], {}) : E;
    return (0, a.jsxs)("div", {
        className: r()(R.IW, {
            "stop-animation": !n,
            [R.Il]: _
        }, s),
        children: [(0, a.jsxs)("div", {
            className: R.y5,
            ref: f,
            children: [l.length > 0 && !1 !== d && (0, a.jsx)(u.nvX, {
                className: R.gO,
                dotRadius: 3.5,
                themed: !0
            }), (0, a.jsx)("span", {
                className: R.Qq,
                "aria-live": "polite",
                "aria-atomic": !0,
                children: S
            }), (0, a.jsx)("span", {
                className: R.Qq,
                style: {
                    position: "absolute",
                    visibility: "hidden"
                },
                "aria-hidden": !0,
                ref: h,
                children: E
            })]
        }), (0, a.jsx)(b.A, {
            channel: o,
            isThreadCreation: c
        })]
    })
}

function w(e) {
    let t = (0, c.bG)([x.A], () => x.A.getTypingUsers(e.id)),
        n = (0, c.bG)([I.default], () => I.default.getCurrentUser());
    return o()(t).keys().filter(e => e !== n?.id).reject(e => A.A.isBlockedOrIgnored(e)).map(e => I.default.getUser(e)).filter(S.Vq).map(t => y.Ay.getName(e.guild_id, e.id, t)).value()
}

function D(e) {
    let t = (0, c.bG)([T.A], () => T.A.findActivity(e => null != e.application_id));
    return (0, c.bG)([h.A, f.A, A.A, g.A], () => (0, p.A)({
        channel: e,
        activity: t,
        ActivityInviteEducationStore: h.A,
        ApplicationStore: f.A,
        RelationshipStore: A.A,
        GamePartyStore: g.A
    })) ? t : null
}

function k(e) {
    let {
        channel: t,
        isThreadCreation: n = !1,
        ...i
    } = e, l = w(t), r = {
        ...i,
        baseTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activeTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activityInviteEducationActivity: D(t),
        typingUsers: n ? [] : l,
        isFocused: (0, c.bG)([C.A], () => C.A.isFocused()),
        guildId: t.guild_id,
        channel: t,
        isThreadCreation: n
    };
    return (0, a.jsx)(O, {
        ...r
    })
}