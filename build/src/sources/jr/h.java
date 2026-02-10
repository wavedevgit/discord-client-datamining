package jr;

import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.TextUtils;
import android.widget.TextView;
import java.util.List;
import jr.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class h extends e {

    /* renamed from: a  reason: collision with root package name */
    private final TextView.BufferType f30435a;

    /* renamed from: b  reason: collision with root package name */
    private final sv.d f30436b;

    /* renamed from: c  reason: collision with root package name */
    private final m f30437c;

    /* renamed from: d  reason: collision with root package name */
    private final g f30438d;

    /* renamed from: e  reason: collision with root package name */
    private final List f30439e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f30440f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(TextView.BufferType bufferType, e.b bVar, sv.d dVar, m mVar, g gVar, List list, boolean z10) {
        this.f30435a = bufferType;
        this.f30436b = dVar;
        this.f30437c = mVar;
        this.f30438d = gVar;
        this.f30439e = list;
        this.f30440f = z10;
    }

    @Override // jr.e
    public void c(TextView textView, String str) {
        d(textView, e(str));
    }

    @Override // jr.e
    public void d(TextView textView, Spanned spanned) {
        for (i iVar : this.f30439e) {
            iVar.k(textView, spanned);
        }
        textView.setText(spanned, this.f30435a);
        for (i iVar2 : this.f30439e) {
            iVar2.c(textView);
        }
    }

    @Override // jr.e
    public Spanned e(String str) {
        Spanned g10 = g(f(str));
        if (TextUtils.isEmpty(g10) && this.f30440f && !TextUtils.isEmpty(str)) {
            return new SpannableStringBuilder(str);
        }
        return g10;
    }

    public rv.r f(String str) {
        for (i iVar : this.f30439e) {
            str = iVar.e(str);
        }
        return this.f30436b.b(str);
    }

    public Spanned g(rv.r rVar) {
        for (i iVar : this.f30439e) {
            iVar.i(rVar);
        }
        l a10 = this.f30437c.a();
        rVar.a(a10);
        for (i iVar2 : this.f30439e) {
            iVar2.h(rVar, a10);
        }
        return a10.builder().l();
    }
}
