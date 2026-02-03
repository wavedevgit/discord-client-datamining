package dr;

import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.TextUtils;
import android.widget.TextView;
import dr.e;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class h extends e {

    /* renamed from: a  reason: collision with root package name */
    private final TextView.BufferType f20857a;

    /* renamed from: b  reason: collision with root package name */
    private final hv.d f20858b;

    /* renamed from: c  reason: collision with root package name */
    private final m f20859c;

    /* renamed from: d  reason: collision with root package name */
    private final g f20860d;

    /* renamed from: e  reason: collision with root package name */
    private final List f20861e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f20862f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(TextView.BufferType bufferType, e.b bVar, hv.d dVar, m mVar, g gVar, List list, boolean z10) {
        this.f20857a = bufferType;
        this.f20858b = dVar;
        this.f20859c = mVar;
        this.f20860d = gVar;
        this.f20861e = list;
        this.f20862f = z10;
    }

    @Override // dr.e
    public void c(TextView textView, String str) {
        d(textView, e(str));
    }

    @Override // dr.e
    public void d(TextView textView, Spanned spanned) {
        for (i iVar : this.f20861e) {
            iVar.k(textView, spanned);
        }
        textView.setText(spanned, this.f20857a);
        for (i iVar2 : this.f20861e) {
            iVar2.d(textView);
        }
    }

    @Override // dr.e
    public Spanned e(String str) {
        Spanned g10 = g(f(str));
        if (TextUtils.isEmpty(g10) && this.f20862f && !TextUtils.isEmpty(str)) {
            return new SpannableStringBuilder(str);
        }
        return g10;
    }

    public gv.r f(String str) {
        for (i iVar : this.f20861e) {
            str = iVar.h(str);
        }
        return this.f20858b.b(str);
    }

    public Spanned g(gv.r rVar) {
        for (i iVar : this.f20861e) {
            iVar.e(rVar);
        }
        l a10 = this.f20859c.a();
        rVar.a(a10);
        for (i iVar2 : this.f20861e) {
            iVar2.i(rVar, a10);
        }
        return a10.builder().l();
    }
}
