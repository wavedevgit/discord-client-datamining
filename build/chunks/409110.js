/** chunk id: 409110 params = (module,exports,require) **/
"use strict";
i.d(t, {
    A: () => C
});
var n = i(627968),
    s = i(64700),
    a = i(311907),
    l = i(391973),
    r = i(684013),
    o = i(231679),
    d = i(685603),
    c = i(555528),
    u = i(256415),
    h = i(531685),
    _ = i(5463),
    p = i(9302),
    f = i(328913),
    m = i(131575),
    g = i(799808),
    A = i(407195),
    x = i(61714),
    v = i(652215);
let y = {
    [v.uss.TEXT](e) {
        let {
            dragging: t,
            locked: i,
            pinned: s,
            dragStart: a,
            className: l
        } = e;
        return (0, n.jsx)(A.A, {
            dragStart: a,
            locked: i,
            pinned: s,
            dragging: t,
            className: l
        })
    },
    [v.uss.GUILDS](e) {
        let {
            locked: t,
            dragStart: i,
            className: s
        } = e;
        return (0, n.jsx)(f.A, {
            dragStart: i,
            locked: t,
            className: s
        })
    },
    [v.uss.VOICE](e) {
        let {
            id: t,
            anchor: i,
            isPreviewingInGame: s,
            locked: a,
            pinned: l
        } = e;
        return (0, n.jsx)(x.A, {
            anchor: i,
            id: t,
            locked: a,
            pinned: l,
            widget: v.uss.VOICE,
            isPreviewingInGame: s
        })
    },
    [v.uss.GUILDS_TEXT](e) {
        let {
            dragging: t,
            locked: i,
            dragStart: s,
            className: a
        } = e;
        return (0, n.jsx)(m.A, {
            dragStart: s,
            dragging: t,
            locked: i,
            pinned: !1,
            className: a
        })
    }
};
class E extends s.PureComponent {
    state = {
        lastLayoutUpdate: null,
        dragging: !1
    };
    componentDidUpdate(e) {
        this.props.locked && !e.locked && null != this.state.lastLayoutUpdate && (r.A.track(v.HAw.OVERLAY_LAYOUT_UPDATED, this.state.lastLayoutUpdate), this.setState({
            lastLayoutUpdate: null
        }))
    }
    handleUpdate = (e, t, i, n, s) => {
        let {
            props: {
                layoutSize: a
            },
            state: {
                lastLayoutUpdate: r
            }
        } = this;
        if (!(0, p.validResolution)(a)) return;
        let o = (0, _.NO)(i, a),
            u = (0, _.R9)(n, a);
        (0, l.uD)(t), (0, l.Ju)({
            widgetId: t,
            anchor: o,
            size: u
        });
        let h = e === d.P.MOVE,
            f = (0, _.Ly)(i, a.width, a.height, s.width, s.height);
        this.setState({
            lastLayoutUpdate: {
                was_resized: null != r && r.was_resized || !h,
                was_dragged: null != r && r.was_dragged || h,
                widget_type: c.A.getWidgetType(t),
                window_width: a.width,
                window_height: a.height,
                widget_width: s.width,
                widget_height: s.height,
                widget_left: f.left,
                widget_top: f.top
            }
        })
    };
    handleFocus = e => {
        let {
            layoutSize: t
        } = this.props;
        (0, p.validResolution)(t) && (0, l.uD)(e)
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
    renderWidget(e, t, i) {
        let {
            props: {
                locked: n,
                isPreviewingInGame: s
            },
            state: {
                dragging: a
            }
        } = this, l = y[e.type];
        return null == l ? null : r => l({
            id: e.id,
            locked: n,
            pinned: e.pinned,
            dragging: a,
            isPreviewingInGame: s,
            anchor: t,
            size: i,
            dragStart: r
        })
    }
    render() {
        let {
            widget: e,
            widgetConfig: t,
            layoutSize: i,
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
            minSize: p
        } = e, f = (0, _.fd)(u, i), m = (0, _.Nv)(h, i), {
            resizeX: A,
            resizeY: x,
            dragAnywhere: v
        } = t, y = (0, g.AE)({
            locked: s,
            isPreviewingInGame: a,
            pinned: o
        }), E = {
            minX: 0,
            minY: 0,
            maxX: i.width,
            maxY: i.height
        }, I = this.renderWidget(e, m, f);
        return null == I ? null : (0, n.jsx)(d.A, {
            id: r,
            size: f,
            anchor: m,
            container: E,
            minSize: p,
            hidden: !y,
            resizeX: A,
            resizeY: x,
            style: {
                zIndex: c
            },
            dragAnywhere: v,
            active: !s || l,
            onUpdate: this.handleUpdate,
            onClick: this.handleFocus,
            onDragStart: this.handleDragStart,
            onDragEnd: this.handleDragEnd,
            children: I
        })
    }
}
let I = a.Ay.connectStores([c.A, u.default], e => {
    let {
        widgetId: t
    } = e, i = c.A.getWidget(t), n = u.default.getActiveRegions();
    return {
        widget: i,
        widgetConfig: null != i ? c.A.getWidgetConfig(i.type) : null,
        locked: u.default.isInstanceLocked(),
        isPreviewingInGame: u.default.isPreviewingInGame(),
        isActiveRegion: null != i && i.type === v.uss.TEXT && n.has(v.ajI.TEXT_WIDGET)
    }
})(E);

function S(e, t) {
    return (0, n.jsx)(I, {
        widgetId: e,
        layoutSize: t
    }, e)
}
let C = a.Ay.connectStores([c.A, h.A], () => ({
    layout: c.A.getLayout(p.OVERLAY_LAYOUT_ID) ?? void 0,
    layoutSize: h.A.windowSize(),
    renderWidget: S
}))(o.A)