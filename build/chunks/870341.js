/** chunk id: 870341 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(627968);
n(64700);
var i = n(278466),
    l = n(62153);
let s = e => {
    let {
        onSubmit: t,
        disabled: n
    } = e, {
        task: s
    } = (0, i.Z)(), r = l.a[s.ui_component.component.type];
    return null == r ? null : (0, a.jsx)(r, {
        configData: s.ui_component.component.data,
        onSubmit: t,
        taskId: s.task_id,
        flowId: s.flow_context?.flow_id,
        assignmentId: s.assignment_id,
        disabled: n
    })
}