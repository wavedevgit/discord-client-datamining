/** chunk id: 122924, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(284009),
    i = n.n(r),
    a = n(735438),
    o = n.n(a),
    s = n(762555);
let l = {
    getUploadPayload: function(e) {
        var t, n;
        let r = e.item.file;
        return i()(null != r, "file data must not be empty"), {
            filename: r.name,
            file_size: r.size,
            id: o().uniqueId(),
            is_clip: null != e.clip,
            title: null == (t = e.clip) ? void 0 : t.name,
            application_id: null == (n = e.clip) ? void 0 : n.applicationId,
            clip_created_at: null != e.clip ? (0, s.U)(e.clip.id) : void 0,
            clip_participant_ids: null != e.clip ? (0, s.g)(e.clip.users) : void 0,
            original_content_type: e.mimeType
        }
    }
}