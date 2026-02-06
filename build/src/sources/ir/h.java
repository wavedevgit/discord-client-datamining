package ir;

import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.TextUtils;
import android.widget.TextView;
import ir.e;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class h extends e {

    /* renamed from: a  reason: collision with root package name */
    private final TextView.BufferType f29308a;

    /* renamed from: b  reason: collision with root package name */
    private final rv.d f29309b;

    /* renamed from: c  reason: collision with root package name */
    private final m f29310c;

    /* renamed from: d  reason: collision with root package name */
    private final g f29311d;

    /* renamed from: e  reason: collision with root package name */
    private final List f29312e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f29313f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(TextView.BufferType bufferType, e.b bVar, rv.d dVar, m mVar, g gVar, List list, boolean z10) {
        this.f29308a = bufferType;
        this.f29309b = dVar;
        this.f29310c = mVar;
        this.f29311d = gVar;
        this.f29312e = list;
        this.f29313f = z10;
    }

    @Override // ir.e
    public void c(TextView textView, String str) {
        d(textView, e(str));
    }

    @Override // ir.e
    public void d(TextView textView, Spanned spanned) {
        for (i iVar : this.f29312e) {
            iVar.j(textView, spanned);
        }
        textView.setText(spanned, this.f29308a);
        for (i iVar2 : this.f29312e) {
            iVar2.e(textView);
        }
    }

    @Override // ir.e
    public Spanned e(String str) {
        Spanned g10 = g(f(str));
        if (TextUtils.isEmpty(g10) && this.f29313f && !TextUtils.isEmpty(str)) {
            return new SpannableStringBuilder(str);
        }
        return g10;
    }

    public qv.r f(String str) {
        for (i iVar : this.f29312e) {
            str = iVar.f(str);
        }
        return this.f29309b.b(str);
    }

    public Spanned g(qv.r rVar) {
        for (i iVar : this.f29312e) {
            iVar.i(rVar);
        }
        l a10 = this.f29310c.a();
        rVar.a(a10);
        for (i iVar2 : this.f29312e) {
            iVar2.d(rVar, a10);
        }
        return a10.builder().l();
    }
}
