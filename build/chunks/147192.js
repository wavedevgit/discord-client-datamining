/** chunk id: 147192, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => k,
    aW: () => U,
    rj: () => R
}), n(321073), n(896048);
var i = n(627968),
    r = n(64700),
    l = n(503698),
    o = n.n(l),
    s = n(735438),
    a = n.n(s),
    c = n(311907),
    u = n(827734),
    d = n(397927),
    p = n(657299),
    f = n(770178),
    b = n(84),
    O = n(587895),
    h = n(144945),
    m = n(912996),
    g = n(994500),
    y = n(461213),
    A = n(741961),
    j = n(287809),
    v = n(531685),
    I = n(954571),
    S = n(403362),
    E = n(562153),
    w = n(652215),
    x = n(985018),
    T = n(612986);

function P(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            P(e, t, n[t])
        })
    }
    return e
}
let C = [];
class N extends r.PureComponent {
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
        null != e && -1 === C.indexOf(e) && (I.default.track(w.HAw.SHOW_TUTORIAL, {
            tutorial: "activity-invite-nux-inline",
            application_id: e
        }), C.push(e))
    }
    componentWillUnmount() {
        null !== this.timeout && clearTimeout(this.timeout)
    }
    render() {
        let {
            activity: e
        } = this.props;
        return (0, i.jsxs)("div", {
            className: o()(T.F4, {
                [T.gV]: this.state.fadeIn
            }),
            children: [(0, i.jsx)("div", {
                className: T.GZ
            }), (0, i.jsx)("span", {
                children: x.intl.format(x.t["i/MoCt"], {
                    game: e.name,
                    dismissOnClick: this.handleDismissInviteEducation
                })
            })]
        })
    }
    constructor(...e) {
        super(...e), P(this, "state", {
            fadeIn: !1
        }), P(this, "timeout", null), P(this, "handleDismissInviteEducation", () => {
            let {
                activity: e
            } = this.props;
            null != e && null != e.application_id && p.A.dismissForApplicationId(e.application_id)
        })
    }
}

function D(e) {
    let {
        activityInviteEducationActivity: t,
        isFocused: n,
        typingUsers: l,
        className: s,
        channel: a,
        isThreadCreation: c,
        renderDots: u,
        isInTextChannel: p = !1
    } = e, {
        rateLimitPerUser: b
    } = a, O = r.useRef(null), m = r.useRef(null), [g, y] = r.useState(!1), A = r.useCallback(() => {
        if (null == O.current || null == m.current) return;
        let e = O.current.getBoundingClientRect();
        m.current.scrollWidth + 48 > e.width ? y(!0) : y(!1)
    }, []);
    if ((0, f.g)(O, A, [], {
            enabled: p
        }), (0, f.g)(m, A, [], {
            enabled: p
        }), 0 === l.length && !(b > 0)) return null != t ? (0, i.jsx)(N, {
        activity: t,
        isFocused: n
    }) : null;
    let [j, v, I] = l, S = "";
    1 === l.length ? S = x.intl.format(x.t.lJ9sZX, {
        a: j
    }) : 2 === l.length ? S = x.intl.format(x.t.rB0CUa, {
        a: j,
        b: v
    }) : 3 === l.length ? S = x.intl.format(x.t.StKThj, {
        a: j,
        b: v,
        c: I
    }) : l.length > 3 && (S = x.intl.format(x.t.Q8lUnE, {}));
    let E = g && l.length > 0 && l.length <= 3 ? x.intl.format(x.t["qD/0qZ"], {}) : S;
    return (0, i.jsxs)("div", {
        className: o()(T.IW, {
            "stop-animation": !n,
            [T.Il]: p
        }, s),
        children: [(0, i.jsxs)("div", {
            className: T.y5,
            ref: O,
            children: [l.length > 0 && !1 !== u && (0, i.jsx)(d.nvX, {
                className: T.gO,
                dotRadius: 3.5,
                themed: !0
            }), (0, i.jsx)("span", {
                className: T.Qq,
                "aria-live": "polite",
                "aria-atomic": !0,
                children: E
            }), (0, i.jsx)("span", {
                className: T.Qq,
                style: {
                    position: "absolute",
                    visibility: "hidden"
                },
                "aria-hidden": !0,
                ref: m,
                children: S
            })]
        }), (0, i.jsx)(h.A, {
            channel: a,
            isThreadCreation: c
        })]
    })
}

function R(e) {
    let t = (0, c.bG)([A.A], () => A.A.getTypingUsers(e.id)),
        n = (0, c.bG)([j.default], () => j.default.getCurrentUser());
    return a()(t).keys().filter(e => e !== (null == n ? void 0 : n.id)).reject(e => g.A.isBlockedOrIgnored(e)).map(e => j.default.getUser(e)).filter(S.Vq).map(t => E.Ay.getName(e.guild_id, e.id, t)).value()
}

function U(e) {
    let t = (0, c.bG)([y.A], () => y.A.findActivity(e => null != e.application_id));
    return (0, c.bG)([m.A, O.A, g.A], () => (0, b.A)(e, t, m.A, O.A, g.A)) ? t : null
}

function k(e) {
    var t, n;
    let {
        channel: r,
        isThreadCreation: l = !1
    } = e, o = function(e, t) {
        if (null == e) return {};
        var n, i, r, l = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (r = 0, n = Reflect.ownKeys(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
            return l
        }
        if (l = function(e, t) {
                if (null == e) return {};
                var n, i, r = {},
                    l = Object.getOwnPropertyNames(e);
                for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                return r
            }(e, t), Object.getOwnPropertySymbols)
            for (r = 0, n = Object.getOwnPropertySymbols(e); r < n.length; r++) i = n[r], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (l[i] = e[i]);
        return l
    }(e, ["channel", "isThreadCreation"]), s = R(r), a = (t = _({}, o), n = n = {
        baseTextColor: (0, d.rdh)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activeTextColor: (0, d.rdh)(u.A.colors.INTERACTIVE_TEXT_DEFAULT).hex(),
        activityInviteEducationActivity: U(r),
        typingUsers: l ? [] : s,
        isFocused: (0, c.bG)([v.A], () => v.A.isFocused()),
        guildId: r.guild_id,
        channel: r,
        isThreadCreation: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
    }), t);
    return (0, i.jsx)(D, _({}, a))
}