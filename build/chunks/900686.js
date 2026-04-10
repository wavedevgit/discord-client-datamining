/** chunk id: 900686 params = (module,exports,require) **/
"use strict";
n.d(e, {
    A: () => s
});
var r = n(64700),
    i = n(522579),
    o = n(77729),
    a = n(723702);
class s extends r.Component {
    getFileContents() {
        let {
            fileContents: t
        } = this.props;
        return "function" == typeof t && (t = t()), t
    }
    handleFileDownload = t => {
        t.preventDefault();
        let e = this.getFileContents(),
            {
                fileName: n,
                onDownload: r
            } = this.props;
        a.isPlatformEmbedded ? this.downloadNative(e, n) : this.downloadHtml5(e, n), r?.()
    };
    downloadNative(t, e) {
        o.A.fileManager.saveWithDialog(t, e)
    }
    downloadHtml5(t, e) {
        let n = new Blob([t], {
            type: this.props.contentType
        });
        (0, i.saveAs)(n, e)
    }
    render() {
        let {
            children: t
        } = this.props, e = r.Children.only(t);
        return r.cloneElement(e, {
            onClick: this.handleFileDownload
        })
    }
}