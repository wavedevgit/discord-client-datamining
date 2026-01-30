/** chunk id: 900686, original params: t,e,n (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => s
}), n(896048);
var r = n(64700),
    o = n(522579),
    i = n(77729),
    a = n(723702);
class s extends r.Component {
    getFileContents() {
        let {
            fileContents: t
        } = this.props;
        return "function" == typeof t && (t = t()), t
    }
    downloadNative(t, e) {
        i.A.fileManager.saveWithDialog(t, e)
    }
    downloadHtml5(t, e) {
        let n = new Blob([t], {
            type: this.props.contentType
        });
        (0, o.saveAs)(n, e)
    }
    render() {
        let {
            children: t
        } = this.props, e = r.Children.only(t);
        return r.cloneElement(e, {
            onClick: this.handleFileDownload
        })
    }
    constructor(...t) {
        super(...t),
            function(t, e, n) {
                e in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n
            }(this, "handleFileDownload", t => {
                t.preventDefault();
                let e = this.getFileContents(),
                    {
                        fileName: n,
                        onDownload: r
                    } = this.props;
                a.isPlatformEmbedded ? this.downloadNative(e, n) : this.downloadHtml5(e, n), null == r || r()
            })
    }
}