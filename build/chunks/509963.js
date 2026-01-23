/** Chunk was on 97492 **/
/** chunk id: 509963, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => T,
    v: () => N
}), n(896048), n(321073);
var r, l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(615300),
    c = n(311907),
    u = n(827734),
    d = n(73939),
    p = n(990078),
    h = n(397927),
    f = n(587895),
    g = n(290987),
    m = n(976860),
    b = n(194871),
    A = n(966846),
    y = n(674378),
    _ = n(505806),
    O = n(652215),
    j = n(985018),
    v = n(391523);

function x(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            x(e, t, n[t])
        })
    }
    return e
}
let C = {
    [O.WTw.INSTALLING]: {
        [g.pJ.NONE]: (e, t) => j.intl.formatToPlainString(j.t["p+2sE+"], {
            name: e
        }),
        [g.pJ.SECONDS]: (e, t) => j.intl.formatToPlainString(j.t["/0NgPI"], {
            name: e,
            timeRemaining: t
        }),
        [g.pJ.MINUTES]: (e, t) => j.intl.formatToPlainString(j.t.ZIwMzr, {
            name: e,
            timeRemaining: t
        }),
        [g.pJ.HOURS]: (e, t) => j.intl.formatToPlainString(j.t["3IQDUi"], {
            name: e,
            timeRemaining: t
        })
    },
    [O.WTw.UPDATING]: {
        [g.pJ.NONE]: (e, t) => j.intl.formatToPlainString(j.t["6F9QzC"], {
            name: e
        }),
        [g.pJ.SECONDS]: (e, t) => j.intl.formatToPlainString(j.t["2OVgVq"], {
            name: e,
            timeRemaining: t
        }),
        [g.pJ.MINUTES]: (e, t) => j.intl.formatToPlainString(j.t.mgQg1L, {
            name: e,
            timeRemaining: t
        }),
        [g.pJ.HOURS]: (e, t) => j.intl.formatToPlainString(j.t.aTdq44, {
            name: e,
            timeRemaining: t
        })
    },
    [O.WTw.REPAIRING]: {
        [g.pJ.NONE]: (e, t) => j.intl.formatToPlainString(j.t["p+2sE+"], {
            name: e
        }),
        [g.pJ.SECONDS]: (e, t) => j.intl.formatToPlainString(j.t["/0NgPI"], {
            name: e,
            timeRemaining: t
        }),
        [g.pJ.MINUTES]: (e, t) => j.intl.formatToPlainString(j.t.ZIwMzr, {
            name: e,
            timeRemaining: t
        }),
        [g.pJ.HOURS]: (e, t) => j.intl.formatToPlainString(j.t["3IQDUi"], {
            name: e,
            timeRemaining: t
        })
    }
};
class S extends i.PureComponent {
    renderText() {
        let {
            state: e,
            isPaused: t
        } = this.props;
        if (e.type === O.WTw.UPDATING || e.type === O.WTw.REPAIRING || e.type === O.WTw.INSTALLING) {
            if (t) return j.intl.string(j.t["5oxtFS"]);
            else if (e.stage === O.OQC.PATCHING || e.stage === O.OQC.REPAIRING) return (0, l.jsx)(_.A, {
                getHistoricalTotalBytes: b.A.getHistoricalTotalBytesWritten,
                updateInterval: 5e3,
                children: this.renderProgressBody
            })
        }
        return null
    }
    render() {
        let e = this.renderText();
        return null != e ? e : j.intl.string(j.t.cw57ar)
    }
    constructor(...e) {
        super(...e), x(this, "renderProgressBody", (e, t) => {
            let {
                state: n,
                application: r
            } = this.props, {
                stage: l,
                progress: i,
                total: s,
                type: a
            } = n;
            if (null == i || null == s || null == l) return null;
            let o = e[e.length - 1] / t * 1e3,
                c = 0 !== o ? Math.max(1, (s - i) / o) : null,
                u = C[a],
                d = null != u ? Object.keys(u) : [],
                {
                    unit: p,
                    time: h
                } = (0, g.$l)(null != c ? c / 60 : null, d);
            if (null != u && null != p) {
                let e = u[p];
                return null != e ? e(r.name, h) : null
            }
            return null
        })
    }
}
class I extends(r = i.PureComponent) {
    componentWillAppear(e) {
        this.state.animationScale.setValue(1), e()
    }
    componentWillEnter(e) {
        o.A.spring(this.state.animationScale, {
            toValue: 1,
            duration: 200
        }).start(e)
    }
    componentWillLeave(e) {
        o.A.spring(this.state.animationScale, {
            toValue: 0,
            duration: 200
        }).start(e)
    }
    getTooltipText() {
        let {
            firstApplication: e,
            firstState: t,
            isPaused: n
        } = this.props;
        return null == e || null == t ? j.intl.string(j.t.cw57ar) : (0, l.jsx)(S, {
            application: e,
            state: t,
            isPaused: n
        })
    }
    render() {
        let {
            percent: e,
            isPaused: t,
            className: n
        } = this.props;
        return (0, l.jsx)(o.A.div, {
            style: {
                transform: [{
                    scale: this.state.animationScale
                }]
            },
            className: a()(n, v.L),
            onClick: this.handleOnClick,
            children: (0, l.jsx)(p.m, {
                __unsupportedReactNodeAsText: this.getTooltipText(),
                position: "right",
                "aria-label": !1,
                children: (0, l.jsx)("div", {
                    children: (0, l.jsx)(h.a3E, {
                        percent: e,
                        colorOverride: t ? u.A.unsafe_rawColors.PRIMARY_500.css : null,
                        children: (0, l.jsx)(h.s3U, {
                            size: "md",
                            color: "currentColor",
                            className: v.k
                        })
                    })
                })
            })
        })
    }
    constructor(...e) {
        super(...e), x(this, "state", {
            animationScale: new o.A.Value(0)
        }), x(this, "handleOnClick", e => {
            let {
                onClick: t
            } = this.props;
            e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, m.pX)(O.BVt.APPLICATION_LIBRARY)
        })
    }
}

function N(e, t) {
    return e.reduce((e, n) => {
        let {
            applicationId: r,
            branchId: l
        } = n, i = t.getState(r, l);
        return null != i && e.push(i), e
    }, [])
}
x(I, "defaultProps", {
    strokeSize: h.a3E.StrokeSizes.MEDIUM
});
let T = c.Ay.connectStores([A.A, b.A, f.A], () => {
    let e = A.A.activeItems,
        t = N(e, b.A),
        {
            total: n,
            progress: r
        } = y.zY(t);
    return {
        percent: y.uA(r, n),
        isPaused: A.A.paused,
        firstApplication: e.length > 0 ? f.A.getApplication(e[0].applicationId) : null,
        firstState: t.length > 0 ? t[0] : null
    }
})(e => {
    let {
        determineOwnVisibility: t = !0
    } = e, n = function(e, t) {
        if (null == e) return {};
        var n, r, l, i = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
            for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
            return i
        }
        if (i = function(e, t) {
                if (null == e) return {};
                var n, r, l = {},
                    i = Object.getOwnPropertyNames(e);
                for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
                return l
            }(e, t), Object.getOwnPropertySymbols)
            for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
        return i
    }(e, ["determineOwnVisibility"]);
    return t ? (0, l.jsx)(d.F, {
        component: i.Fragment,
        children: n.percent > 0 && n.percent < 100 ? (0, l.jsx)(I, E({}, n)) : null
    }) : (0, l.jsx)(I, E({}, n))
})