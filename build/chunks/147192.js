/** chunk id: 147192 params = (module,exports,require) **/
n.d(t, {
    Ay: () => U,
    aW: () => w,
    rj: () => D
}), n(321073);
var a = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(827734),
    u = n(397927),
    m = n(657299),
    p = n(770178),
    _ = n(84),
    h = n(587895),
    A = n(144945),
    g = n(912996),
    f = n(629016),
    b = n(994500),
    T = n(461213),
    x = n(741961),
    I = n(287809),
    C = n(531685),
    y = n(954571),
    E = n(403362),
    S = n(562153),
    v = n(652215),
    M = n(985018),
    N = n(152076);
let j = [];
class R extends i.PureComponent {
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
        null != e && -1 === j.indexOf(e) && (y.default.track(v.HAw.SHOW_TUTORIAL, {
            tutorial: "activity-invite-nux-inline",
            application_id: e
        }), j.push(e))
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout)
    }
    handleDismissInviteEducation = () => {
        let {
            activity: e
        } = this.props;
        null != e && null != e.application_id && m.A.dismissForApplicationId(e.application_id)
    };
    render() {
        let {
            activity: e
        } = this.props;
        return (0, a.jsxs)("div", {
            className: s()(N.F4, {
                [N.gV]: this.state.fadeIn
            }),
            children: [(0, a.jsx)("div", {
                className: N.GZ
            }), (0, a.jsx)("span", {
                children: M.intl.format(M.t["i/MoCt"], {
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
        className: r,
        channel: o,
        isThreadCreation: c,
        renderDots: d,
        isInTextChannel: m = !1
    } = e, {
        rateLimitPerUser: _
    } = o, h = i.useRef(null), g = i.useRef(null), [f, b] = i.useState(!1), T = i.useCallback(() => {
        if (null == h.current || null == g.current) return;
        let e = h.current.getBoundingClientRect();
        g.current.scrollWidth + 48 > e.width ? b(!0) : b(!1)
    }, []);
    if ((0, p.g)(h, T, [], {
            enabled: m
        }), (0, p.g)(g, T, [], {
            enabled: m
        }), 0 === l.length && !(_ > 0)) return null != t ? (0, a.jsx)(R, {
        activity: t,
        isFocused: n
    }) : null;
    let [x, I, C] = l, y = "";
    1 === l.length ? y = M.intl.format(M.t.lJ9sZX, {
        a: x
    }) : 2 === l.length ? y = M.intl.format(M.t.rB0CUa, {
        a: x,
        b: I
    }) : 3 === l.length ? y = M.intl.format(M.t.StKThj, {
        a: x,
        b: I,
        c: C
    }) : l.length > 3 && (y = M.intl.format(M.t.Q8lUnE, {}));
    let E = f && l.length > 0 && l.length <= 3 ? M.intl.format(M.t["qD/0qZ"], {}) : y;
    return (0, a.jsxs)("div", {
        className: s()(N.IW, {
            "stop-animation": !n,
            [N.Il]: m
        }, r),
        children: [(0, a.jsxs)("div", {
            className: N.y5,
            ref: h,
            children: [l.length > 0 && !1 !== d && (0, a.jsx)(u.nvX, {
                className: N.gO,
                dotRadius: 3.5,
                themed: !0
            }), (0, a.jsx)("span", {
                className: N.Qq,
                "aria-live": "polite",
                "aria-atomic": !0,
                children: E
            }), (0, a.jsx)("span", {
                className: N.Qq,
                style: {
                    position: "absolute",
                    visibility: "hidden"
                },
                "aria-hidden": !0,
                ref: g,
                children: y
            })]
        }), (0, a.jsx)(A.A, {
            channel: o,
            isThreadCreation: c
        })]
    })
}

function D(e) {
    let t = (0, c.bG)([x.A], () => x.A.getTypingUsers(e.id)),
        n = (0, c.bG)([I.default], () => I.default.getCurrentUser());
    return o()(t).keys().filter(e => e !== n?.id).reject(e => b.A.isBlockedOrIgnored(e)).map(e => I.default.getUser(e)).filter(E.Vq).map(t => S.Ay.getName(e.guild_id, e.id, t)).value()
}

function w(e) {
    let t = (0, c.bG)([T.A], () => T.A.findActivity(e => null != e.application_id));
    return (0, c.bG)([g.A, h.A, b.A, f.A], () => (0, _.A)({
        channel: e,
        activity: t,
        ActivityInviteEducationStore: g.A,
        ApplicationStore: h.A,
        RelationshipStore: b.A,
        GamePartyStore: f.A
    })) ? t : null
}

function U(e) {
    let {
        channel: t,
        isThreadCreation: n = !1,
        ...i
    } = e, l = D(t), s = {
        ...i,
        baseTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activeTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activityInviteEducationActivity: w(t),
        typingUsers: n ? [] : l,
        isFocused: (0, c.bG)([C.A], () => C.A.isFocused()),
        guildId: t.guild_id,
        channel: t,
        isThreadCreation: n
    };
    return (0, a.jsx)(O, {
        ...s
    })
}