/** Chunk was on 1113 **/
/** chunk id: 531053, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => _,
    g4: () => x,
    qv: () => j
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(284009),
    o = n.n(a),
    c = n(522437),
    u = n(686956),
    d = n(954571),
    h = n(263715),
    p = n(550591),
    g = n(652215),
    f = n(985018),
    m = n(581277);

function b(e) {
    let t = l.useRef(null),
        n = e.map(e => e[0]);
    return l.useLayoutEffect(() => {
        let n = requestAnimationFrame(() => {
            let n = t.current;
            if (null != n)
                for (let [t, r] of e) t ? n.classList.add(r) : n.classList.remove(r)
        });
        return () => cancelAnimationFrame(n)
    }, n), t
}

function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    return o()(t.type !== h.PJ.ROOT, "[GuildDropTarget] Tried using a root node as a drop target."), {
        accept: e,
        canDrop: e => e.nodeId !== t.id && (!r || e.type !== h.PJ.FOLDER || t.type !== h.PJ.FOLDER) && (e.type !== h.PJ.FOLDER || null == t.parentId),
        drop(e) {
            let {
                nodeId: l
            } = e;
            r && t.type !== h.PJ.FOLDER && d.default.track(g.HAw.GUILD_FOLDER_CREATED), u.A.moveById(l, t.id, n, r)
        },
        collect: e => ({
            canDrop: e.canDrop(),
            isOver: e.isOver()
        })
    }
}

function y(e) {
    let {
        name: t,
        targetNode: n,
        combine: i,
        below: s
    } = e, a = l.useMemo(() => A([h.PJ.GUILD, h.PJ.FOLDER], n, s, i), [n, s, i]), [{
        canDrop: o,
        isOver: u
    }, d] = (0, c.H)(a), p = b([
        [o, m.OP],
        [u, m.NQ]
    ]);
    return (0, r.jsx)("div", {
        ref: e => {
            p.current = e, d(e)
        },
        "data-dnd-name": f.intl.formatToPlainString(f.t["A5aDw+"], {
            itemName: t
        }),
        className: m.aC
    })
}

function O(e) {
    let {
        name: t,
        targetNode: n,
        onDragOverChanged: i
    } = e, [{
        canDrop: a,
        isOver: o
    }, u] = (0, c.H)(() => A([h.PJ.GUILD], n, !0, !0));
    l.useEffect(() => {
        null == i || i(o)
    }, [i, o]);
    let d = b([
        [a, m.OP],
        [o, m.NQ]
    ]);
    return (0, r.jsx)(p.A, {
        text: t,
        shouldShow: o,
        forceOpen: o,
        disableWrapper: !0,
        children: (0, r.jsx)("div", {
            ref: e => {
                d.current = e, u(e)
            },
            "data-dnd-name": f.intl.formatToPlainString(f.t.qiQ0QI, {
                itemName: t
            }),
            className: s()(m.dw, {})
        })
    })
}
let _ = l.memo(function(e) {
    let {
        name: t,
        targetNode: n,
        noCombine: l = !1,
        below: i = !1,
        onDragOverChanged: s
    } = e, a = !l && null == n.parentId;
    return (0, r.jsxs)("div", {
        className: m.iE,
        "aria-hidden": !0,
        children: [(0, r.jsx)(y, {
            name: t,
            targetNode: n,
            below: i
        }), a ? (0, r.jsx)(O, {
            name: t,
            targetNode: n,
            onDragOverChanged: s
        }) : null]
    })
});

function j(e) {
    let {
        name: t,
        targetNode: n
    } = e, [{
        canDrop: l,
        isOver: i
    }, s] = (0, c.H)(() => A([h.PJ.GUILD], n, !0, !0)), a = b([
        [i, m.a7]
    ]), o = b([
        [i, m.NQ],
        [l, m.OP]
    ]);
    return (0, r.jsx)("div", {
        ref: a,
        className: m.Ro,
        "aria-hidden": !0,
        children: (0, r.jsx)("div", {
            className: m.aO,
            children: (0, r.jsx)("div", {
                ref: e => {
                    o.current = e, s(e)
                },
                "aria-label": "At end of ".concat(t),
                className: m.aC
            })
        })
    })
}

function x(e) {
    let {
        children: t
    } = e, [, n] = (0, c.H)({
        accept: []
    });
    return (0, r.jsx)("div", {
        ref: e => {
            n(e)
        },
        children: t
    })
}