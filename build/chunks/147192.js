/** chunk id: 147192 params = (module,exports,require) **/
n.d(t, {
    Ay: () => L,
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
    p = n(144945),
    f = n(912996),
    _ = n(994500),
    E = n(461213),
    x = n(741961),
    C = n(287809),
    S = n(531685),
    I = n(954571),
    T = n(403362),
    N = n(562153),
    v = n(652215),
    b = n(985018),
    y = n(612986);
let j = [];
class R extends l.PureComponent {
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
        null != e && -1 === j.indexOf(e) && (I.default.track(v.HAw.SHOW_TUTORIAL, {
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
        null != e && null != e.application_id && h.A.dismissForApplicationId(e.application_id)
    };
    render() {
        let {
            activity: e
        } = this.props;
        return (0, i.jsxs)("div", {
            className: a()(y.F4, {
                [y.gV]: this.state.fadeIn
            }),
            children: [(0, i.jsx)("div", {
                className: y.GZ
            }), (0, i.jsx)("span", {
                children: b.intl.format(b.t["i/MoCt"], {
                    game: e.name,
                    dismissOnClick: this.handleDismissInviteEducation
                })
            })]
        })
    }
}

function M(e) {
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
    } = o, g = l.useRef(null), f = l.useRef(null), [_, E] = l.useState(!1), x = l.useCallback(() => {
        if (null == g.current || null == f.current) return;
        let e = g.current.getBoundingClientRect();
        f.current.scrollWidth + 48 > e.width ? E(!0) : E(!1)
    }, []);
    if ((0, m.g)(g, x, [], {
            enabled: h
        }), (0, m.g)(f, x, [], {
            enabled: h
        }), 0 === s.length && !(A > 0)) return null != t ? (0, i.jsx)(R, {
        activity: t,
        isFocused: n
    }) : null;
    let [C, S, I] = s, T = "";
    1 === s.length ? T = b.intl.format(b.t.lJ9sZX, {
        a: C
    }) : 2 === s.length ? T = b.intl.format(b.t.rB0CUa, {
        a: C,
        b: S
    }) : 3 === s.length ? T = b.intl.format(b.t.StKThj, {
        a: C,
        b: S,
        c: I
    }) : s.length > 3 && (T = b.intl.format(b.t.Q8lUnE, {}));
    let N = _ && s.length > 0 && s.length <= 3 ? b.intl.format(b.t["qD/0qZ"], {}) : T;
    return (0, i.jsxs)("div", {
        className: a()(y.IW, {
            "stop-animation": !n,
            [y.Il]: h
        }, r),
        children: [(0, i.jsxs)("div", {
            className: y.y5,
            ref: g,
            children: [s.length > 0 && !1 !== d && (0, i.jsx)(u.nvX, {
                className: y.gO,
                dotRadius: 3.5,
                themed: !0
            }), (0, i.jsx)("span", {
                className: y.Qq,
                "aria-live": "polite",
                "aria-atomic": !0,
                children: N
            }), (0, i.jsx)("span", {
                className: y.Qq,
                style: {
                    position: "absolute",
                    visibility: "hidden"
                },
                "aria-hidden": !0,
                ref: f,
                children: T
            })]
        }), (0, i.jsx)(p.A, {
            channel: o,
            isThreadCreation: c
        })]
    })
}

function D(e) {
    let t = (0, c.bG)([x.A], () => x.A.getTypingUsers(e.id)),
        n = (0, c.bG)([C.default], () => C.default.getCurrentUser());
    return o()(t).keys().filter(e => e !== n?.id).reject(e => _.A.isBlockedOrIgnored(e)).map(e => C.default.getUser(e)).filter(T.Vq).map(t => N.Ay.getName(e.guild_id, e.id, t)).value()
}

function O(e) {
    let t = (0, c.bG)([E.A], () => E.A.findActivity(e => null != e.application_id));
    return (0, c.bG)([f.A, g.A, _.A], () => (0, A.A)(e, t, f.A, g.A, _.A)) ? t : null
}

function L(e) {
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
        isFocused: (0, c.bG)([S.A], () => S.A.isFocused()),
        guildId: t.guild_id,
        channel: t,
        isThreadCreation: n
    };
    return (0, i.jsx)(M, {
        ...a
    })
}