package gr;

import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.TextUtils;
import android.widget.TextView;
import gr.e;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class h extends e {

    /* renamed from: a  reason: collision with root package name */
    private final TextView.BufferType f25181a;

    /* renamed from: b  reason: collision with root package name */
    private final kv.d f25182b;

    /* renamed from: c  reason: collision with root package name */
    private final m f25183c;

    /* renamed from: d  reason: collision with root package name */
    private final g f25184d;

    /* renamed from: e  reason: collision with root package name */
    private final List f25185e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f25186f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(TextView.BufferType bufferType, e.b bVar, kv.d dVar, m mVar, g gVar, List list, boolean z10) {
        this.f25181a = bufferType;
        this.f25182b = dVar;
        this.f25183c = mVar;
        this.f25184d = gVar;
        this.f25185e = list;
        this.f25186f = z10;
    }

    @Override // gr.e
    public void c(TextView textView, String str) {
        d(textView, e(str));
    }

    @Override // gr.e
    public void d(TextView textView, Spanned spanned) {
        for (i iVar : this.f25185e) {
            iVar.j(textView, spanned);
        }
        textView.setText(spanned, this.f25181a);
        for (i iVar2 : this.f25185e) {
            iVar2.e(textView);
        }
    }

    @Override // gr.e
    public Spanned e(String str) {
        Spanned g10 = g(f(str));
        if (TextUtils.isEmpty(g10) && this.f25186f && !TextUtils.isEmpty(str)) {
            return new SpannableStringBuilder(str);
        }
        return g10;
    }

    public jv.r f(String str) {
        for (i iVar : this.f25185e) {
            str = iVar.f(str);
        }
        return this.f25182b.b(str);
    }

    public Spanned g(jv.r rVar) {
        for (i iVar : this.f25185e) {
            iVar.c(rVar);
        }
        l a10 = this.f25183c.a();
        rVar.a(a10);
        for (i iVar2 : this.f25185e) {
            iVar2.a(rVar, a10);
        }
        return a10.builder().l();
    }
}
