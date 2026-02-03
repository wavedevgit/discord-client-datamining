package br;

import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.TextUtils;
import android.widget.TextView;
import br.e;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class h extends e {

    /* renamed from: a  reason: collision with root package name */
    private final TextView.BufferType f7541a;

    /* renamed from: b  reason: collision with root package name */
    private final fv.d f7542b;

    /* renamed from: c  reason: collision with root package name */
    private final m f7543c;

    /* renamed from: d  reason: collision with root package name */
    private final g f7544d;

    /* renamed from: e  reason: collision with root package name */
    private final List f7545e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f7546f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(TextView.BufferType bufferType, e.b bVar, fv.d dVar, m mVar, g gVar, List list, boolean z10) {
        this.f7541a = bufferType;
        this.f7542b = dVar;
        this.f7543c = mVar;
        this.f7544d = gVar;
        this.f7545e = list;
        this.f7546f = z10;
    }

    @Override // br.e
    public void c(TextView textView, String str) {
        d(textView, e(str));
    }

    @Override // br.e
    public void d(TextView textView, Spanned spanned) {
        for (i iVar : this.f7545e) {
            iVar.j(textView, spanned);
        }
        textView.setText(spanned, this.f7541a);
        for (i iVar2 : this.f7545e) {
            iVar2.d(textView);
        }
    }

    @Override // br.e
    public Spanned e(String str) {
        Spanned g10 = g(f(str));
        if (TextUtils.isEmpty(g10) && this.f7546f && !TextUtils.isEmpty(str)) {
            return new SpannableStringBuilder(str);
        }
        return g10;
    }

    public ev.r f(String str) {
        for (i iVar : this.f7545e) {
            str = iVar.g(str);
        }
        return this.f7542b.b(str);
    }

    public Spanned g(ev.r rVar) {
        for (i iVar : this.f7545e) {
            iVar.f(rVar);
        }
        l a10 = this.f7543c.a();
        rVar.a(a10);
        for (i iVar2 : this.f7545e) {
            iVar2.i(rVar, a10);
        }
        return a10.builder().l();
    }
}
