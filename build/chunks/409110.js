/** chunk id: 409110, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => j
}), n(896048);
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(391973),
    o = n(684013),
    a = n(231679),
    c = n(685603),
    d = n(555528),
    u = n(256415),
    h = n(531685),
    p = n(5463),
    f = n(9302),
    g = n(328913),
    y = n(131575),
    A = n(799808),
    m = n(407195),
    b = n(61714),
    O = n(652215);

function _(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let v = {
    [O.uss.TEXT](e) {
        let {
            dragging: t,
            locked: n,
            pinned: r,
            dragStart: s,
            className: l
        } = e;
        return (0, i.jsx)(m.A, {
            dragStart: s,
            locked: n,
            pinned: r,
            dragging: t,
            className: l
        })
    },
    [O.uss.GUILDS](e) {
        let {
            locked: t,
            dragStart: n,
            className: r
        } = e;
        return (0, i.jsx)(g.A, {
            dragStart: n,
            locked: t,
            className: r
        })
    },
    [O.uss.VOICE](e) {
        let {
            id: t,
            anchor: n,
            isPreviewingInGame: r,
            locked: s,
            pinned: l
        } = e;
        return (0, i.jsx)(b.A, {
            anchor: n,
            id: t,
            locked: s,
            pinned: l,
            widget: O.uss.VOICE,
            isPreviewingInGame: r
        })
    },
    [O.uss.GUILDS_TEXT](e) {
        let {
            dragging: t,
            locked: n,
            dragStart: r,
            className: s
        } = e;
        return (0, i.jsx)(y.A, {
            dragStart: r,
            dragging: t,
            locked: n,
            pinned: !1,
            className: s
        })
    }
};
class E extends r.PureComponent {
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (o.A.track(O.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
            lastLayoutUpdate: null
        }))
    }
    renderWidget(e, t, n) {
        let {
            props: {
                locked: i,
                isPreviewingInGame: r
            },
            state: {
                dragging: s
            }
        } = this, l = v[e.type];
        return null == l ? null : o => l({
            id: e.id,
            locked: i,
            pinned: e.pinned,
            dragging: s,
            isPreviewingInGame: r,
            anchor: t,
            size: n,
            dragStart: o
        })
    }
    render() {
        let {
            widget: e,
            widgetConfig: t,
            layoutSize: n,
            locked: r,
            isPreviewingInGame: s,
            isActiveRegion: l
        } = this.props;
        if (null == e || null == t) return null;
        let {
            id: o,
            pinned: a,
            zIndex: d,
            size: u,
            anchor: h,
            minSize: f
        } = e, g = (0, p.fd)(u, n), y = (0, p.Nv)(h, n), {
            resizeX: m,
            resizeY: b,
            dragAnywhere: O
        } = t, _ = (0, A.AE)({
            locked: r,
            isPreviewingInGame: s,
            pinned: a
        }), v = {
            minX: 0,
            minY: 0,
            maxX: n.width,
            maxY: n.height
        }, E = this.renderWidget(e, y, g);
        return null == E ? null : (0, i.jsx)(c.A, {
            id: o,
            size: g,
            anchor: y,
            container: v,
            minSize: f,
            hidden: !_,
            resizeX: m,
            resizeY: b,
            style: {
                zIndex: d
            },
            dragAnywhere: O,
            active: !r || l,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: E
        })
    }
    constructor(...e) {
        super(...e), _(this, "state", {
            lastLayoutUpdate: null,
            dragging: !1
        }), _(this, "handleUpdate", (e, t, n, i, r) => {
            let {
                props: {
                    layoutSize: s
                },
                state: {
                    lastLayoutUpdate: o
                }
            } = this;
            if (!(0, f.validResolution)(s)) return;
            let a = (0, p.NO)(n, s),
                u = (0, p.R9)(i, s);
            (0, l.uD)(t), (0, l.Ju)({
                widgetId: t,
                anchor: a,
                size: u
            });
            let h = e === c.P.MOVE,
                g = (0, p.Ly)(n, s.width, s.height, r.width, r.height);
            this.setState({
                lastLayoutUpdate: {
                    was_resized: null != o && o.was_resized || !h,
                    was_dragged: null != o && o.was_dragged || h,
                    widget_type: d.A.getWidgetType(t),
                    window_width: s.width,
                    window_height: s.height,
                    widget_width: r.width,
                    widget_height: r.height,
                    widget_left: g.left,
                    widget_top: g.top
                }
            })
        }), _(this, "handleFocus", e => {
            let {
                layoutSize: t
            } = this.props;
            (0, f.validResolution)(t) && (0, l.uD)(e)
        }), _(this, "handleDragStart", () => {
            let {
                widget: e
            } = this.props;
            null != e && (e.pinned && o.A.setPreviewInGameMode(!0), this.setState({
                dragging: !0
            }))
        }), _(this, "handleDragEnd", () => {
            let {
                widget: e
            } = this.props;
            null != e && (e.pinned && o.A.setPreviewInGameMode(!1), this.setState({
                dragging: !1
            }))
        })
    }
}
let x = s.Ay.connectStores([d.A, u.default], e => {
    let {
        widgetId: t
    } = e, n = d.A.getWidget(t), i = u.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? d.A.getWidgetConfig(n.type) : null,
        locked: u.default.isInstanceLocked(),
        isPreviewingInGame: u.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === O.uss.TEXT && i.has(O.ajI.TEXT_WIDGET)
    }
})(E);

function S(e, t) {
    return (0, i.jsx)(x, {
        widgetId: e,
        layoutSize: t
    }, e)
}
let j = s.Ay.connectStores([d.A, h.A], () => {
    var e;
    return {
        layout: null != (e = d.A.getLayout(f.OVERLAY_LAYOUT_ID)) ? e : void 0,
        layoutSize: h.A.windowSize(),
        renderWidget: S
    }
})(a.A)