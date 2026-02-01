/** chunk id: 897550, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(733351), n(896048);
var r = n(627968),
    i = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(421380),
    o = n(481859),
    c = n(235986),
    u = n(255438),
    d = n(403362),
    p = n(723702),
    h = n(590858),
    g = n(652215),
    m = n(985018),
    f = n(918704);
let A = {
    [g.uje.WINDOWS]: p.PlatformTypes.WINDOWS,
    [g.uje.MACOS]: p.PlatformTypes.OSX,
    [g.uje.LINUX]: p.PlatformTypes.LINUX
};
class _ extends i.PureComponent {
    render() {
        let {
            active: e,
            children: t,
            pageSize: n,
            onClick: i
        } = this.props, l = n === h.q.LARGE;
        return (0, r.jsx)(s.$n, {
            size: l ? s.$n.Sizes.MIN : s.$n.Sizes.LARGE,
            fullWidth: !l,
            color: e ? f.gl : f.Hu,
            className: a()({
                [f.AA]: l,
                [f.Wt]: !l,
                [f.jP]: e,
                [f.I7]: !e
            }),
            onClick: i,
            children: t
        })
    }
}
class b extends i.PureComponent {
    static getDerivedStateFromProps(e, t) {
        let {
            systemRequirements: n
        } = e, {
            selectedOperatingSystem: r
        } = t, i = Object.keys(n);
        return i.includes(r) ? null : {
            selectedOperatingSystem: i[0]
        }
    }
    renderTabs() {
        let {
            pageSize: e,
            systemRequirements: t
        } = this.props, {
            selectedOperatingSystem: n
        } = this.state, i = Object.keys(t);
        return 1 === i.length ? null : (0, r.jsxs)(c.A, {
            className: f.vR,
            children: [(0, r.jsx)("div", {
                className: f.me
            }), i.map(t => (0, r.jsx)(_, {
                active: t === n,
                onClick: () => this.handleSelectOperatingSystem(t),
                pageSize: e,
                children: function(e) {
                    switch (e) {
                        case g.uje.WINDOWS:
                            return m.intl.string(m.t["0/xHFO"]);
                        case g.uje.MACOS:
                            return m.intl.string(m.t.E4u4n5);
                        case g.uje.LINUX:
                            return m.intl.string(m.t.tcawo3)
                    }
                }(t)
            }, t))]
        })
    }
    renderRequirementsSection(e, t) {
        if (null == e) return null;
        let n = [{
            key: m.intl.string(m.t["0TcHzv"]),
            value: e.operating_system_version
        }, {
            key: m.intl.string(m.t.eOX6Hq),
            value: e.cpu
        }, {
            key: m.intl.string(m.t["+WJ5XQ"]),
            value: null != e.ram ? m.intl.formatToPlainString(m.t.RNRSl6, {
                size: (0, u.Xq)(1e3 * e.ram, {
                    showDecimalForGB: !1
                })
            }) : null
        }, {
            key: m.intl.string(m.t["+3s/V/"]),
            value: e.gpu
        }, {
            key: m.intl.string(m.t["L+x5wB"]),
            value: null != e.disk ? (0, u.Xq)(1e3 * e.disk, {
                showDecimalForGB: !1
            }) : null
        }, {
            key: m.intl.string(m.t["Ghp2/B"]),
            value: e.sound_card
        }, {
            key: m.intl.string(m.t["+w6nJg"]),
            value: e.network
        }, {
            key: m.intl.string(m.t.Au3Vbp),
            value: e.notes
        }].map((e, t) => {
            let n = null != e.value ? e.value.trim() : null;
            return null == n || 0 === n.length ? null : (0, r.jsxs)("div", {
                className: f.aS,
                children: [(0, r.jsxs)("span", {
                    className: f.D8,
                    children: [e.key, ":"]
                }), n]
            }, t)
        }).filter(d.Vq);
        return (0, r.jsxs)("div", {
            className: f.Ln,
            children: [(0, r.jsx)(o.A, {
                tag: "h4",
                children: t
            }), n]
        })
    }
    renderBody() {
        let {
            minimum: e,
            recommended: t
        } = this.props.systemRequirements[this.state.selectedOperatingSystem];
        return (0, r.jsxs)("div", {
            className: f.GQ,
            children: [this.renderRequirementsSection(e, m.intl.string(m.t.QCCMXE)), this.renderRequirementsSection(t, m.intl.string(m.t.He39wq))]
        })
    }
    render() {
        return (0, r.jsxs)("div", {
            className: this.props.className,
            children: [(0, r.jsx)(o.A, {
                children: m.intl.string(m.t.IkOAol)
            }), this.renderTabs(), this.renderBody()]
        })
    }
    constructor(e) {
        super(e),
            function(e, t, n) {
                t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n
            }(this, "handleSelectOperatingSystem", e => {
                this.setState({
                    selectedOperatingSystem: e
                })
            });
        const t = (0, p.getPlatform)(),
            n = Object.keys(e.systemRequirements);
        let r = n[0];
        for (const e of n) A[e] === t && (r = e);
        this.state = {
            selectedOperatingSystem: r
        }
    }
}
let E = b