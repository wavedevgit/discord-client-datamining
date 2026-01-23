/** Chunk was on 97492 **/
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
    p = n(549756);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let f = () => (0, r.jsxs)("div", {
    className: p.HR,
    children: [(0, r.jsx)("div", {
        className: p.tW
    }), (0, r.jsx)("img", {
        alt: "",
        src: n(24160)
    })]
}, "symbol");
class g extends l.PureComponent {
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
            className: p.e8,
            children: [(0, r.jsx)("img", {
                alt: "",
                className: p.Lc,
                src: n(383922),
                width: 70,
                height: 69
            }), (0, r.jsx)("img", {
                alt: "",
                className: p.QP,
                src: n(815995),
                width: 96,
                height: 95
            }), (0, r.jsx)("img", {
                alt: "",
                className: p.WB,
                src: n(32315),
                width: 183,
                height: 104
            }), (0, r.jsx)("img", {
                alt: "",
                className: p.FQ,
                src: n(144298),
                width: 69,
                height: 180
            })]
        }, "primary-explosion")
    }
    renderSecondary(e, t) {
        return (0, r.jsxs)("div", {
            className: p.wv,
            style: {
                top: t,
                left: e
            },
            children: [(0, r.jsx)("img", {
                alt: "",
                className: p.Lc,
                src: n(61631),
                width: 61,
                height: 58
            }, "circle-inner"), (0, r.jsx)("img", {
                alt: "",
                className: p.QP,
                src: n(850166),
                width: 85,
                height: 85
            }, "circle-outer"), (0, r.jsx)("img", {
                alt: "",
                className: p.WB,
                src: n(822548),
                width: 162,
                height: 173
            }, "lines-secondary"), (0, r.jsx)("img", {
                alt: "",
                className: p.FQ,
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
            className: s()(p.kL, {
                [p.i0]: l
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
        super(...e), h(this, "_renderSecondaryTimeout", null), h(this, "_doneTimeout", null), h(this, "state", {
            animating: !1,
            renderSecondary: !1,
            scale: o().random(.6, 1, !0),
            offsetX: o().random(0, 140, !1) - 70,
            offsetY: o().random(0, 140, !1) - 70
        }), h(this, "done", () => {
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
            className: s()(p.QO, {
                [p.RK]: this.state.visible
            }),
            children: this.children
        })
    }
    constructor(...e) {
        super(...e), h(this, "_timeouts", []), h(this, "children", []), h(this, "state", {
            explosions: 0,
            visible: !1
        }), h(this, "setTimeout", (e, t) => {
            let n = setTimeout(e, t);
            return this._timeouts.push(n), n
        }), h(this, "removeExplosion", e => {
            let t = this.children,
                n = t.findIndex(t => {
                    if (t.type !== g) return !1;
                    let n = t.props;
                    return null != n.componentId && n.componentId === e
                });
            n >= 0 && t.splice(n, 1), this.forceUpdate()
        }), h(this, "createExplosion", () => {
            let e = this.children,
                t = window.innerWidth / 2 | 0,
                n = window.innerHeight / 2 | 0;
            if (this.state.explosions < 8) {
                let l = "expl-".concat(this.state.explosions);
                e.push((0, r.jsx)(g, {
                    componentId: l,
                    top: o().random(n - 100, n + 100, !1),
                    left: o().random(t - 200, t + 200, !1),
                    onAnimationComplete: this.removeExplosion
                }, l)), this.setTimeout(this.createExplosion, 240), this.setState({
                    explosions: this.state.explosions + 1
                })
            } else this.setTimeout(this.addSymbol, 750)
        }), h(this, "addSymbol", () => {
            this.children = [(0, r.jsx)(f, {}, "symbol")], this.forceUpdate(), this.setTimeout(this.delayedClose, 3e3)
        }), h(this, "delayedClose", () => {
            this.props.handleDemonClose()
        })
    }
}
let b = m