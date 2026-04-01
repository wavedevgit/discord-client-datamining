/** chunk id: 147192 params = (module,exports,require) **/
n.d(t, {
    Ay: () => D,
    aW: () => k,
    rj: () => O
}), n(321073);
var a = n(627968),
    i = n(64700),
    r = n(503698),
    s = n.n(r),
    o = n(735438),
    l = n.n(o),
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
    x = n(461213),
    T = n(741961),
    C = n(287809),
    I = n(531685),
    S = n(954571),
    E = n(403362),
    y = n(562153),
    v = n(652215),
    j = n(985018),
    R = n(181261);
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
        null != e && -1 === M.indexOf(e) && (S.default.track(v.HAw.SHOW_TUTORIAL, {
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
            className: s()(R.F4, {
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

function w(e) {
    let {
        activityInviteEducationActivity: t,
        isFocused: n,
        typingUsers: r,
        className: o,
        channel: l,
        isThreadCreation: c,
        renderDots: d,
        isInTextChannel: _ = !1
    } = e, {
        rateLimitPerUser: p
    } = l, f = i.useRef(null), h = i.useRef(null), [g, A] = i.useState(!1), x = i.useCallback(() => {
        if (null == f.current || null == h.current) return;
        let e = f.current.getBoundingClientRect();
        h.current.scrollWidth + 48 > e.width ? A(!0) : A(!1)
    }, []);
    if ((0, m.g)(f, x, [], {
            enabled: _
        }), (0, m.g)(h, x, [], {
            enabled: _
        }), 0 === r.length && !(p > 0)) return null != t ? (0, a.jsx)(N, {
        activity: t,
        isFocused: n
    }) : null;
    let [T, C, I] = r, S = "";
    1 === r.length ? S = j.intl.format(j.t.lJ9sZX, {
        a: T
    }) : 2 === r.length ? S = j.intl.format(j.t.rB0CUa, {
        a: T,
        b: C
    }) : 3 === r.length ? S = j.intl.format(j.t.StKThj, {
        a: T,
        b: C,
        c: I
    }) : r.length > 3 && (S = j.intl.format(j.t.Q8lUnE, {}));
    let E = g && r.length > 0 && r.length <= 3 ? j.intl.format(j.t["qD/0qZ"], {}) : S;
    return (0, a.jsxs)("div", {
        className: s()(R.IW, {
            "stop-animation": !n,
            [R.Il]: _
        }, o),
        children: [(0, a.jsxs)("div", {
            className: R.y5,
            ref: f,
            children: [r.length > 0 && !1 !== d && (0, a.jsx)(u.nvX, {
                className: R.gO,
                dotRadius: 3.5,
                themed: !0
            }), (0, a.jsx)("span", {
                className: R.Qq,
                "aria-live": "polite",
                "aria-atomic": !0,
                children: E
            }), (0, a.jsx)("span", {
                className: R.Qq,
                style: {
                    position: "absolute",
                    visibility: "hidden"
                },
                "aria-hidden": !0,
                ref: h,
                children: S
            })]
        }), (0, a.jsx)(b.A, {
            channel: l,
            isThreadCreation: c
        })]
    })
}

function O(e) {
    let t = (0, c.bG)([T.A], () => T.A.getTypingUsers(e.id)),
        n = (0, c.bG)([C.default], () => C.default.getCurrentUser());
    return l()(t).keys().filter(e => e !== n?.id).reject(e => A.A.isBlockedOrIgnored(e)).map(e => C.default.getUser(e)).filter(E.Vq).map(t => y.Ay.getName(e.guild_id, e.id, t)).value()
}

function k(e) {
    let t = (0, c.bG)([x.A], () => x.A.findActivity(e => null != e.application_id));
    return (0, c.bG)([h.A, f.A, A.A, g.A], () => (0, p.A)({
        channel: e,
        activity: t,
        ActivityInviteEducationStore: h.A,
        ApplicationStore: f.A,
        RelationshipStore: A.A,
        GamePartyStore: g.A
    })) ? t : null
}

function D(e) {
    let {
        channel: t,
        isThreadCreation: n = !1,
        ...i
    } = e, r = O(t), s = {
        ...i,
        baseTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activeTextColor: (0, u.rdh)(d.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activityInviteEducationActivity: k(t),
        typingUsers: n ? [] : r,
        isFocused: (0, c.bG)([I.A], () => I.A.isFocused()),
        guildId: t.guild_id,
        channel: t,
        isThreadCreation: n
    };
    return (0, a.jsx)(w, {
        ...s
    })
}