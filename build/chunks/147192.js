/** chunk id: 147192 params = (module,exports,require) **/
n.d(t, {
    Ay: () => P,
    aW: () => O,
    rj: () => D
}), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(735438),
    o = n.n(r),
    c = n(311907),
    d = n(827734),
    u = n(397927),
    h = n(657299),
    m = n(770178),
    A = n(84),
    g = n(587895),
    _ = n(144945),
    p = n(912996),
    f = n(629016),
    E = n(994500),
    C = n(461213),
    x = n(741961),
    S = n(287809),
    I = n(531685),
    T = n(954571),
    v = n(403362),
    N = n(562153),
    y = n(652215),
    b = n(985018),
    j = n(323837);
let R = [];
class M extends l.PureComponent {
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
        null != e && -1 === R.indexOf(e) && (T.default.track(y.HAw.SHOW_TUTORIAL, {
            tutorial: "activity-invite-nux-inline",
            application_id: e
        }), R.push(e))
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout)
    }
    handleDismissInviteEducation = () => {
        let {
            activity: e
        } = this.props;
        null != e && null != e.application_id && h.A.dismissForApplicationId(e.application_id)
    };
    render() {
        let {
            activity: e
        } = this.props;
        return (0, i.jsxs)("div", {
            className: a()(j.F4, {
                [j.gV]: this.state.fadeIn
            }),
            children: [(0, i.jsx)("div", {
                className: j.GZ
            }), (0, i.jsx)("span", {
                children: b.intl.format(b.t["i/MoCt"], {
                    game: e.name,
                    dismissOnClick: this.handleDismissInviteEducation
                })
            })]
        })
    }
}

function L(e) {
    let {
        activityInviteEducationActivity: t,
        isFocused: n,
        typingUsers: s,
        className: r,
        channel: o,
        isThreadCreation: c,
        renderDots: d,
        isInTextChannel: h = !1
    } = e, {
        rateLimitPerUser: A
    } = o, g = l.useRef(null), p = l.useRef(null), [f, E] = l.useState(!1), C = l.useCallback(() => {
        if (null == g.current || null == p.current) return;
        let e = g.current.getBoundingClientRect();
        p.current.scrollWidth + 48 > e.width ? E(!0) : E(!1)
    }, []);
    if ((0, m.g)(g, C, [], {
            enabled: h
        }), (0, m.g)(p, C, [], {
            enabled: h
        }), 0 === s.length && !(A > 0)) return null != t ? (0, i.jsx)(M, {
        activity: t,
        isFocused: n
    }) : null;
    let [x, S, I] = s, T = "";
    1 === s.length ? T = b.intl.format(b.t.lJ9sZX, {
        a: x
    }) : 2 === s.length ? T = b.intl.format(b.t.rB0CUa, {
        a: x,
        b: S
    }) : 3 === s.length ? T = b.intl.format(b.t.StKThj, {
        a: x,
        b: S,
        c: I
    }) : s.length > 3 && (T = b.intl.format(b.t.Q8lUnE, {}));
    let v = f && s.length > 0 && s.length <= 3 ? b.intl.format(b.t["qD/0qZ"], {}) : T;
    return (0, i.jsxs)("div", {
        className: a()(j.IW, {
            "stop-animation": !n,
            [j.Il]: h
        }, r),
        children: [(0, i.jsxs)("div", {
            className: j.y5,
            ref: g,
            children: [s.length > 0 && !1 !== d && (0, i.jsx)(u.nvX, {
                className: j.gO,
                dotRadius: 3.5,
                themed: !0
            }), (0, i.jsx)("span", {
                className: j.Qq,
                "aria-live": "polite",
                "aria-atomic": !0,
                children: v
            }), (0, i.jsx)("span", {
                className: j.Qq,
                style: {
                    position: "absolute",
                    visibility: "hidden"
                },
                "aria-hidden": !0,
                ref: p,
                children: T
            })]
        }), (0, i.jsx)(_.A, {
            channel: o,
            isThreadCreation: c
        })]
    })
}

function D(e) {
    let t = (0, c.bG)([x.A], () => x.A.getTypingUsers(e.id)),
        n = (0, c.bG)([S.default], () => S.default.getCurrentUser());
    return o()(t).keys().filter(e => e !== n?.id).reject(e => E.A.isBlockedOrIgnored(e)).map(e => S.default.getUser(e)).filter(v.Vq).map(t => N.Ay.getName(e.guild_id, e.id, t)).value()
}

function O(e) {
    let t = (0, c.bG)([C.A], () => C.A.findActivity(e => null != e.application_id));
    return (0, c.bG)([p.A, g.A, E.A, f.A], () => (0, A.A)({
        channel: e,
        activity: t,
        ActivityInviteEducationStore: p.A,
        ApplicationStore: g.A,
        RelationshipStore: E.A,
        GamePartyStore: f.A
    })) ? t : null
}

function P(e) {
    let {
        channel: t,
        isThreadCreation: n = !1,
        ...l
    } = e, s = D(t), a = {
        ...l,
        baseTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activeTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activityInviteEducationActivity: O(t),
        typingUsers: n ? [] : s,
        isFocused: (0, c.bG)([I.A], () => I.A.isFocused()),
        guildId: t.guild_id,
        channel: t,
        isThreadCreation: n
    };
    return (0, i.jsx)(L, {
        ...a
    })
}