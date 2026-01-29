package ar;

import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.TextUtils;
import android.widget.TextView;
import ar.e;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class h extends e {

    /* renamed from: a  reason: collision with root package name */
    private final TextView.BufferType f6727a;

    /* renamed from: b  reason: collision with root package name */
    private final ev.d f6728b;

    /* renamed from: c  reason: collision with root package name */
    private final m f6729c;

    /* renamed from: d  reason: collision with root package name */
    private final g f6730d;

    /* renamed from: e  reason: collision with root package name */
    private final List f6731e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f6732f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(TextView.BufferType bufferType, e.b bVar, ev.d dVar, m mVar, g gVar, List list, boolean z10) {
        this.f6727a = bufferType;
        this.f6728b = dVar;
        this.f6729c = mVar;
        this.f6730d = gVar;
        this.f6731e = list;
        this.f6732f = z10;
    }

    @Override // ar.e
    public void c(TextView textView, String str) {
        d(textView, e(str));
    }

    @Override // ar.e
    public void d(TextView textView, Spanned spanned) {
        for (i iVar : this.f6731e) {
            iVar.k(textView, spanned);
        }
        textView.setText(spanned, this.f6727a);
        for (i iVar2 : this.f6731e) {
            iVar2.c(textView);
        }
    }

    @Override // ar.e
    public Spanned e(String str) {
        Spanned g10 = g(f(str));
        if (TextUtils.isEmpty(g10) && this.f6732f && !TextUtils.isEmpty(str)) {
            return new SpannableStringBuilder(str);
        }
        return g10;
    }

    public dv.r f(String str) {
        for (i iVar : this.f6731e) {
            str = iVar.g(str);
        }
        return this.f6728b.b(str);
    }

    public Spanned g(dv.r rVar) {
        for (i iVar : this.f6731e) {
            iVar.e(rVar);
        }
        l a10 = this.f6729c.a();
        rVar.a(a10);
        for (i iVar2 : this.f6731e) {
            iVar2.i(rVar, a10);
        }
        return a10.builder().l();
    }
}
