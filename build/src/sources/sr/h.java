package sr;

import android.text.SpannableStringBuilder;
import android.text.Spanned;
import android.text.TextUtils;
import android.widget.TextView;
import java.util.List;
import sr.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class h extends e {

    /* renamed from: a  reason: collision with root package name */
    private final TextView.BufferType f48888a;

    /* renamed from: b  reason: collision with root package name */
    private final bw.d f48889b;

    /* renamed from: c  reason: collision with root package name */
    private final m f48890c;

    /* renamed from: d  reason: collision with root package name */
    private final g f48891d;

    /* renamed from: e  reason: collision with root package name */
    private final List f48892e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f48893f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h(TextView.BufferType bufferType, e.b bVar, bw.d dVar, m mVar, g gVar, List list, boolean z10) {
        this.f48888a = bufferType;
        this.f48889b = dVar;
        this.f48890c = mVar;
        this.f48891d = gVar;
        this.f48892e = list;
        this.f48893f = z10;
    }

    @Override // sr.e
    public void c(TextView textView, String str) {
        d(textView, e(str));
    }

    @Override // sr.e
    public void d(TextView textView, Spanned spanned) {
        for (i iVar : this.f48892e) {
            iVar.j(textView, spanned);
        }
        textView.setText(spanned, this.f48888a);
        for (i iVar2 : this.f48892e) {
            iVar2.d(textView);
        }
    }

    @Override // sr.e
    public Spanned e(String str) {
        Spanned g10 = g(f(str));
        if (TextUtils.isEmpty(g10) && this.f48893f && !TextUtils.isEmpty(str)) {
            return new SpannableStringBuilder(str);
        }
        return g10;
    }

    public aw.r f(String str) {
        for (i iVar : this.f48892e) {
            str = iVar.f(str);
        }
        return this.f48889b.b(str);
    }

    public Spanned g(aw.r rVar) {
        for (i iVar : this.f48892e) {
            iVar.b(rVar);
        }
        l a10 = this.f48890c.a();
        rVar.a(a10);
        for (i iVar2 : this.f48892e) {
            iVar2.e(rVar, a10);
        }
        return a10.builder().l();
    }
}
