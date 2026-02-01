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
    g = n(587895),
    f = n(290987),
    m = n(976860),
    b = n(194871),
    A = n(966846),
    y = n(674378),
    O = n(505806),
    j = n(652215),
    x = n(985018),
    _ = n(391523);

function v(e, t, n) {
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
            v(e, t, n[t])
        })
    }
    return e
}
let C = {
    [j.WTw.INSTALLING]: {
        [f.pJ.NONE]: (e, t) => x.intl.formatToPlainString(x.t["p+2sE+"], {
            name: e
        }),
        [f.pJ.SECONDS]: (e, t) => x.intl.formatToPlainString(x.t["/0NgPI"], {
            name: e,
            timeRemaining: t
        }),
        [f.pJ.MINUTES]: (e, t) => x.intl.formatToPlainString(x.t.ZIwMzr, {
            name: e,
            timeRemaining: t
        }),
        [f.pJ.HOURS]: (e, t) => x.intl.formatToPlainString(x.t["3IQDUi"], {
            name: e,
            timeRemaining: t
        })
    },
    [j.WTw.UPDATING]: {
        [f.pJ.NONE]: (e, t) => x.intl.formatToPlainString(x.t["6F9QzC"], {
            name: e
        }),
        [f.pJ.SECONDS]: (e, t) => x.intl.formatToPlainString(x.t["2OVgVq"], {
            name: e,
            timeRemaining: t
        }),
        [f.pJ.MINUTES]: (e, t) => x.intl.formatToPlainString(x.t.mgQg1L, {
            name: e,
            timeRemaining: t
        }),
        [f.pJ.HOURS]: (e, t) => x.intl.formatToPlainString(x.t.aTdq44, {
            name: e,
            timeRemaining: t
        })
    },
    [j.WTw.REPAIRING]: {
        [f.pJ.NONE]: (e, t) => x.intl.formatToPlainString(x.t["p+2sE+"], {
            name: e
        }),
        [f.pJ.SECONDS]: (e, t) => x.intl.formatToPlainString(x.t["/0NgPI"], {
            name: e,
            timeRemaining: t
        }),
        [f.pJ.MINUTES]: (e, t) => x.intl.formatToPlainString(x.t.ZIwMzr, {
            name: e,
            timeRemaining: t
        }),
        [f.pJ.HOURS]: (e, t) => x.intl.formatToPlainString(x.t["3IQDUi"], {
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
        if (e.type === j.WTw.UPDATING || e.type === j.WTw.REPAIRING || e.type === j.WTw.INSTALLING) {
            if (t) return x.intl.string(x.t["5oxtFS"]);
            else if (e.stage === j.OQC.PATCHING || e.stage === j.OQC.REPAIRING) return (0, l.jsx)(O.A, {
                getHistoricalTotalBytes: b.A.getHistoricalTotalBytesWritten,
                updateInterval: 5e3,
                children: this.renderProgressBody
            })
        }
        return null
    }
    render() {
        let e = this.renderText();
        return null != e ? e : x.intl.string(x.t.cw57ar)
    }
    constructor(...e) {
        super(...e), v(this, "renderProgressBody", (e, t) => {
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
                } = (0, f.$l)(null != c ? c / 60 : null, d);
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
        return null == e || null == t ? x.intl.string(x.t.cw57ar) : (0, l.jsx)(S, {
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
            className: a()(n, _.L),
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
                            className: _.k
                        })
                    })
                })
            })
        })
    }
    constructor(...e) {
        super(...e), v(this, "state", {
            animationScale: new o.A.Value(0)
        }), v(this, "handleOnClick", e => {
            let {
                onClick: t
            } = this.props;
            e.preventDefault(), e.stopPropagation(), null != t && t(e), (0, m.pX)(j.BVt.APPLICATION_LIBRARY)
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
v(I, "defaultProps", {
    strokeSize: h.a3E.StrokeSizes.MEDIUM
});
let T = c.Ay.connectStores([A.A, b.A, g.A], () => {
    let e = A.A.activeItems,
        t = N(e, b.A),
        {
            total: n,
            progress: r
        } = y.zY(t);
    return {
        percent: y.uA(r, n),
        isPaused: A.A.paused,
        firstApplication: e.length > 0 ? g.A.getApplication(e[0].applicationId) : null,
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