/** Chunk was on 1113 **/
/** chunk id: 635914, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(321073), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(735438),
    o = n.n(a),
    c = n(775121),
    u = n(203982),
    d = n(652215),
    h = n(549756);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let g = () => (0, r.jsxs)("div", {
    className: h.HR,
    children: [(0, r.jsx)("div", {
        className: h.tW
    }), (0, r.jsx)("img", {
        alt: "",
        src: n(24160)
    })]
}, "symbol");
class f extends l.PureComponent {
    componentDidMount() {
        this.setState({
            animating: !0
        }), this._renderSecondaryTimeout = setTimeout(() => {
            this.setState({
                renderSecondary: !0
            })
        }, 120), this._doneTimeout = setTimeout(this.done, 1e3)
    }
    componentDidUpdate(e, t) {
        this.state.renderSecondary && t.renderSecondary
    }
    componentWillUnmount() {
        clearTimeout(this._renderSecondaryTimeout), clearTimeout(this._doneTimeout)
    }
    renderPrimary() {
        return (0, r.jsxs)("div", {
            className: h.e8,
            children: [(0, r.jsx)("img", {
                alt: "",
                className: h.Lc,
                src: n(383922),
                width: 70,
                height: 69
            }), (0, r.jsx)("img", {
                alt: "",
                className: h.QP,
                src: n(815995),
                width: 96,
                height: 95
            }), (0, r.jsx)("img", {
                alt: "",
                className: h.WB,
                src: n(32315),
                width: 183,
                height: 104
            }), (0, r.jsx)("img", {
                alt: "",
                className: h.FQ,
                src: n(144298),
                width: 69,
                height: 180
            })]
        }, "primary-explosion")
    }
    renderSecondary(e, t) {
        return (0, r.jsxs)("div", {
            className: h.wv,
            style: {
                top: t,
                left: e
            },
            children: [(0, r.jsx)("img", {
                alt: "",
                className: h.Lc,
                src: n(61631),
                width: 61,
                height: 58
            }, "circle-inner"), (0, r.jsx)("img", {
                alt: "",
                className: h.QP,
                src: n(850166),
                width: 85,
                height: 85
            }, "circle-outer"), (0, r.jsx)("img", {
                alt: "",
                className: h.WB,
                src: n(822548),
                width: 162,
                height: 173
            }, "lines-secondary"), (0, r.jsx)("img", {
                alt: "",
                className: h.FQ,
                src: n(275242),
                width: 156,
                height: 306
            }, "lines-main")]
        }, "secondary-explosion")
    }
    render() {
        let {
            renderSecondary: e,
            offsetX: t,
            offsetY: n,
            animating: l,
            scale: i
        } = this.state, a = [this.renderPrimary()];
        return e && a.push(this.renderSecondary(t, n)), (0, r.jsx)("div", {
            className: s()(h.kL, {
                [h.i0]: l
            }),
            style: {
                top: this.props.top,
                left: this.props.left,
                transform: "scale(".concat(i, ")")
            },
            children: a
        })
    }
    constructor(...e) {
        super(...e), p(this, "_renderSecondaryTimeout", null), p(this, "_doneTimeout", null), p(this, "state", {
            animating: !1,
            renderSecondary: !1,
            scale: o().random(.6, 1, !0),
            offsetX: o().random(0, 140, !1) - 70,
            offsetY: o().random(0, 140, !1) - 70
        }), p(this, "done", () => {
            this.props.onAnimationComplete(this.props.componentId)
        })
    }
}
class m extends l.PureComponent {
    componentDidMount() {
        this.setTimeout(() => {
            this.setState({
                visible: !0
            }), u._.dispatch(d.jej.SHAKE_APP, {
                duration: 2400
            })
        }, 1800), this.setTimeout(this.createExplosion, 1800)
    }
    componentWillUnmount() {
        for (let e of (c.A.enable(), this.children.length = 0, this._timeouts)) clearTimeout(e)
    }
    render() {
        return (0, r.jsx)("div", {
            className: s()(h.QO, {
                [h.RK]: this.state.visible
            }),
            children: this.children
        })
    }
    constructor(...e) {
        super(...e), p(this, "_timeouts", []), p(this, "children", []), p(this, "state", {
            explosions: 0,
            visible: !1
        }), p(this, "setTimeout", (e, t) => {
            let n = setTimeout(e, t);
            return this._timeouts.push(n), n
        }), p(this, "removeExplosion", e => {
            let t = this.children,
                n = t.findIndex(t => {
                    if (t.type !== f) return !1;
                    let n = t.props;
                    return null != n.componentId && n.componentId === e
                });
            n >= 0 && t.splice(n, 1), this.forceUpdate()
        }), p(this, "createExplosion", () => {
            let e = this.children,
                t = window.innerWidth / 2 | 0,
                n = window.innerHeight / 2 | 0;
            if (this.state.explosions < 8) {
                let l = "expl-".concat(this.state.explosions);
                e.push((0, r.jsx)(f, {
                    componentId: l,
                    top: o().random(n - 100, n + 100, !1),
                    left: o().random(t - 200, t + 200, !1),
                    onAnimationComplete: this.removeExplosion
                }, l)), this.setTimeout(this.createExplosion, 240), this.setState({
                    explosions: this.state.explosions + 1
                })
            } else this.setTimeout(this.addSymbol, 750)
        }), p(this, "addSymbol", () => {
            this.children = [(0, r.jsx)(g, {}, "symbol")], this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3)
        }), p(this, "delayedClose", () => {
            this.props.handleDemonClose()
        })
    }
}
let b = m