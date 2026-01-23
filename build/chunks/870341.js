/** Chunk was on 36054 **/
/** chunk id: 870341, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var a = n(627968);
n(64700);
var l = n(278466),
    r = n(62153);
let i = e => {
    var t;
    let {
        onSubmit: n,
        disabled: i
    } = e, {
        task: s
    } = (0, l.Z)(), o = r.a[s.ui_component.component.type];
    return null == o ? null : (0, a.jsx)(o, {
        configData: s.ui_component.component.data,
        onSubmit: n,
        taskId: s.task_id,
        flowId: null == (t = s.flow_context) ? void 0 : t.flow_id,
        assignmentId: s.assignment_id,
        disabled: i
    })
}