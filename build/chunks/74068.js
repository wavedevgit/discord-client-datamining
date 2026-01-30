/** chunk id: 74068, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(627968),
    i = n(64700),
    a = n(453771),
    o = n(922667);
class s extends i.PureComponent {
    render() {
        let {
            src: e,
            fileSize: t,
            fileName: n,
            className: i,
            playable: s,
            volume: l,
            renderLinkComponent: c,
            onVolumeChange: u,
            onVolumeShow: d,
            onVolumeHide: f,
            autoMute: p,
            onMute: _,
            mimeType: h,
            onPlay: m
        } = this.props;
        return (0, r.jsx)(o.Ay, {
            src: e,
            fileName: n,
            fileSize: (0, a.Hb)(t),
            fileSizeBytes: t,
            type: o.Ay.Types.AUDIO,
            className: i,
            playable: s,
            volume: l,
            onMute: _,
            autoMute: p,
            onVolumeChange: u,
            onVolumeShow: d,
            onVolumeHide: f,
            renderLinkComponent: c,
            mimeType: h,
            onPlay: m
        })
    }
}