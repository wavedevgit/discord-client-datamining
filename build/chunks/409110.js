/** chunk id: 409110 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
});
var i = n(627968),
    s = n(64700),
    a = n(311907),
    l = n(391973),
    r = n(684013),
    o = n(231679),
    d = n(685603),
    c = n(555528),
    u = n(256415),
    h = n(531685),
    p = n(5463),
    f = n(9302),
    _ = n(328913),
    A = n(131575),
    g = n(799808),
    m = n(407195),
    x = n(61714),
    E = n(652215);
let y = {
    [E.uss.TEXT](e) {
        let {
            dragging: t,
            locked: n,
            pinned: s,
            dragStart: a,
            className: l
        } = e;
        return (0, i.jsx)(m.A, {
            dragStart: a,
            locked: n,
            pinned: s,
            dragging: t,
            className: l
        })
    },
    [E.uss.GUILDS](e) {
        let {
            locked: t,
            dragStart: n,
            className: s
        } = e;
        return (0, i.jsx)(_.A, {
            dragStart: n,
            locked: t,
            className: s
        })
    },
    [E.uss.VOICE](e) {
        let {
            id: t,
            anchor: n,
            isPreviewingInGame: s,
            locked: a,
            pinned: l
        } = e;
        return (0, i.jsx)(x.A, {
            anchor: n,
            id: t,
            locked: a,
            pinned: l,
            widget: E.uss.VOICE,
            isPreviewingInGame: s
        })
    },
    [E.uss.GUILDS_TEXT](e) {
        let {
            dragging: t,
            locked: n,
            dragStart: s,
            className: a
        } = e;
        return (0, i.jsx)(A.A, {
            dragStart: s,
            dragging: t,
            locked: n,
            pinned: !1,
            className: a
        })
    }
};
class v extends s.PureComponent {
    state = {
        lastLayoutUpdate: null,
        dragging: !1
    };
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (r.A.track(E.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
            lastLayoutUpdate: null
        }))
    }
    handleUpdate = (e, t, n, i, s) => {
        let {
            props: {
                layoutSize: a
            },
            state: {
                lastLayoutUpdate: r
            }
        } = this;
        if (!(0, f.validResolution)(a)) return;
        let o = (0, p.NO)(n, a),
            u = (0, p.R9)(i, a);
        (0, l.uD)(t), (0, l.Ju)({
            widgetId: t,
            anchor: o,
            size: u
        });
        let h = e === d.P.MOVE,
            _ = (0, p.Ly)(n, a.width, a.height, s.width, s.height);
        this.setState({
            lastLayoutUpdate: {
                was_resized: null != r && r.was_resized || !h,
                was_dragged: null != r && r.was_dragged || h,
                widget_type: c.A.getWidgetType(t),
                window_width: a.width,
                window_height: a.height,
                widget_width: s.width,
                widget_height: s.height,
                widget_left: _.left,
                widget_top: _.top
            }
        })
    };
    handleFocus = e => {
        let {
            layoutSize: t
        } = this.props;
        (0, f.validResolution)(t) && (0, l.uD)(e)
    };
    handleDragStart = () => {
        let {
            widget: e
        } = this.props;
        null != e && (e.pinned && r.A.setPreviewInGameMode(!0), this.setState({
            dragging: !0
        }))
    };
    handleDragEnd = () => {
        let {
            widget: e
        } = this.props;
        null != e && (e.pinned && r.A.setPreviewInGameMode(!1), this.setState({
            dragging: !1
        }))
    };
    renderWidget(e, t, n) {
        let {
            props: {
                locked: i,
                isPreviewingInGame: s
            },
            state: {
                dragging: a
            }
        } = this, l = y[e.type];
        return null == l ? null : r => l({
            id: e.id,
            locked: i,
            pinned: e.pinned,
            dragging: a,
            isPreviewingInGame: s,
            anchor: t,
            size: n,
            dragStart: r
        })
    }
    render() {
        let {
            widget: e,
            widgetConfig: t,
            layoutSize: n,
            locked: s,
            isPreviewingInGame: a,
            isActiveRegion: l
        } = this.props;
        if (null == e || null == t) return null;
        let {
            id: r,
            pinned: o,
            zIndex: c,
            size: u,
            anchor: h,
            minSize: f
        } = e, _ = (0, p.fd)(u, n), A = (0, p.Nv)(h, n), {
            resizeX: m,
            resizeY: x,
            dragAnywhere: E
        } = t, y = (0, g.AE)({
            locked: s,
            isPreviewingInGame: a,
            pinned: o
        }), v = {
            minX: 0,
            minY: 0,
            maxX: n.width,
            maxY: n.height
        }, S = this.renderWidget(e, A, _);
        return null == S ? null : (0, i.jsx)(d.A, {
            id: r,
            size: _,
            anchor: A,
            container: v,
            minSize: f,
            hidden: !y,
            resizeX: m,
            resizeY: x,
            style: {
                zIndex: c
            },
            dragAnywhere: E,
            active: !s || l,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: S
        })
    }
}
let S = a.Ay.connectStores([c.A, u.default], e => {
    let {
        widgetId: t
    } = e, n = c.A.getWidget(t), i = u.default.getActiveRegions();
    return {
        widget: n,
        widgetConfig: null != n ? c.A.getWidgetConfig(n.type) : null,
        locked: u.default.isInstanceLocked(),
        isPreviewingInGame: u.default.isPreviewingInGame(),
        isActiveRegion: null != n && n.type === E.uss.TEXT && i.has(E.ajI.TEXT_WIDGET)
    }
})(v);

function C(e, t) {
    return (0, i.jsx)(S, {
        widgetId: e,
        layoutSize: t
    }, e)
}
let I = a.Ay.connectStores([c.A, h.A], () => ({
    layout: c.A.getLayout(f.OVERLAY_LAYOUT_ID) ?? void 0,
    layoutSize: h.A.windowSize(),
    renderWidget: C
}))(o.A)