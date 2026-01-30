/** chunk id: 599119, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => a
}), n(896048);
var i = n(64700),
    r = n(131346),
    l = n(522437);

function a(e) {
    let {
        type: t,
        index: n,
        optionId: a,
        onDragStart: s,
        onDragComplete: o,
        onDragReset: c
    } = e, [d, u] = i.useState(!1), [, p] = (0, r.i)({
        type: t,
        item: () => (s(a), {
            id: a,
            position: n
        }),
        canDrag: () => d,
        collect: e => ({
            isDragging: e.isDragging()
        }),
        end: (e, t) => {
            let n = t.getDropResult();
            null == n ? c() : o(n.optionId)
        }
    }), [{
        dragSourcePosition: m
    }, g] = (0, l.H)({
        accept: t,
        canDrop: () => !0,
        collect: e => {
            let t = e.getItem();
            return null != t && e.isOver() && e.canDrop() ? {
                dragSourcePosition: t.position
            } : {
                dragSourcePosition: null
            }
        },
        drop: () => ({
            optionId: a
        })
    });
    return {
        drag: p,
        dragSourcePosition: m,
        drop: g,
        setIsDraggable: u
    }
}