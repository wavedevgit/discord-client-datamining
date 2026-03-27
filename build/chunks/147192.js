/** chunk id: 147192 params = (module,exports,require) **/
n.d(t, {
    Ay: () => k,
    aW: () => O,
    rj: () => w
}), n(321073);
var a = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    l = n(735438),
    o = n.n(l),
    c = n(311907),
    d = n(827734),
    u = n(397927),
    _ = n(657299),
    m = n(770178),
    p = n(84),
    f = n(587895),
    b = n(144945),
    h = n(912996),
    g = n(994500),
    A = n(461213),
    x = n(741961),
    T = n(287809),
    C = n(531685),
    I = n(954571),
    S = n(403362),
    E = n(562153),
    y = n(652215),
    v = n(985018),
    j = n(152076);
let R = [];
class M extends i.PureComponent {
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
        null != e && -1 === R.indexOf(e) && (I.default.track(y.HAw.SHOW_TUTORIAL, {
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
        null != e && null != e.application_id && _.A.dismissForApplicationId(e.application_id)
    };
    render() {
        let {
            activity: e
        } = this.props;
        return (0, a.jsxs)("div", {
            className: s()(j.F4, {
                [j.gV]: this.state.fadeIn
            }),
            children: [(0, a.jsx)("div", {
                className: j.GZ
            }), (0, a.jsx)("span", {
                children: v.intl.format(v.t["i/MoCt"], {
                    game: e.name,
                    dismissOnClick: this.handleDismissInviteEducation
                })
            })]
        })
    }
}

function N(e) {
    let {
        activityInviteEducationActivity: t,
        isFocused: n,
        typingUsers: r,
        className: l,
        channel: o,
        isThreadCreation: c,
        renderDots: d,
        isInTextChannel: _ = !1
    } = e, {
        rateLimitPerUser: p
    } = o, f = i.useRef(null), h = i.useRef(null), [g, A] = i.useState(!1), x = i.useCallback(() => {
        if (null == f.current || null == h.current) return;
        let e = f.current.getBoundingClientRect();
        h.current.scrollWidth + 48 > e.width ? A(!0) : A(!1)
    }, []);
    if ((0, m.g)(f, x, [], {
            enabled: _
        }), (0, m.g)(h, x, [], {
            enabled: _
        }), 0 === r.length && !(p > 0)) return null != t ? (0, a.jsx)(M, {
        activity: t,
        isFocused: n
    }) : null;
    let [T, C, I] = r, S = "";
    1 === r.length ? S = v.intl.format(v.t.lJ9sZX, {
        a: T
    }) : 2 === r.length ? S = v.intl.format(v.t.rB0CUa, {
        a: T,
        b: C
    }) : 3 === r.length ? S = v.intl.format(v.t.StKThj, {
        a: T,
        b: C,
        c: I
    }) : r.length > 3 && (S = v.intl.format(v.t.Q8lUnE, {}));
    let E = g && r.length > 0 && r.length <= 3 ? v.intl.format(v.t["qD/0qZ"], {}) : S;
    return (0, a.jsxs)("div", {
        className: s()(j.IW, {
            "stop-animation": !n,
            [j.Il]: _
        }, l),
        children: [(0, a.jsxs)("div", {
            className: j.y5,
            ref: f,
            children: [r.length > 0 && !1 !== d && (0, a.jsx)(u.nvX, {
                className: j.gO,
                dotRadius: 3.5,
                themed: !0
            }), (0, a.jsx)("span", {
                className: j.Qq,
                "aria-live": "polite",
                "aria-atomic": !0,
                children: E
            }), (0, a.jsx)("span", {
                className: j.Qq,
                style: {
                    position: "absolute",
                    visibility: "hidden"
                },
                "aria-hidden": !0,
                ref: h,
                children: S
            })]
        }), (0, a.jsx)(b.A, {
            channel: o,
            isThreadCreation: c
        })]
    })
}

function w(e) {
    let t = (0, c.bG)([x.A], () => x.A.getTypingUsers(e.id)),
        n = (0, c.bG)([T.default], () => T.default.getCurrentUser());
    return o()(t).keys().filter(e => e !== n?.id).reject(e => g.A.isBlockedOrIgnored(e)).map(e => T.default.getUser(e)).filter(S.Vq).map(t => E.Ay.getName(e.guild_id, e.id, t)).value()
}

function O(e) {
    let t = (0, c.bG)([A.A], () => A.A.findActivity(e => null != e.application_id));
    return (0, c.bG)([h.A, f.A, g.A], () => (0, p.A)(e, t, h.A, f.A, g.A)) ? t : null
}

function k(e) {
    let {
        channel: t,
        isThreadCreation: n = !1,
        ...i
    } = e, r = w(t), s = {
        ...i,
        baseTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activeTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activityInviteEducationActivity: O(t),
        typingUsers: n ? [] : r,
        isFocused: (0, c.bG)([C.A], () => C.A.isFocused()),
        guildId: t.guild_id,
        channel: t,
        isThreadCreation: n
    };
    return (0, a.jsx)(N, {
        ...s
    })
}