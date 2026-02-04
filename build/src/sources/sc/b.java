package sc;

import com.google.android.exoplayer2.upstream.g;
import le.c0;
import okhttp3.CacheControl;
import okhttp3.Call;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends g.a {

    /* renamed from: b  reason: collision with root package name */
    private final Call.Factory f49384b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49385c;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f49386d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheControl f49387e;

    public b(Call.Factory factory, String str, c0 c0Var) {
        this(factory, str, c0Var, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.upstream.g.a
    /* renamed from: d */
    public a b(g.C0160g c0160g) {
        a aVar = new a(this.f49384b, this.f49385c, this.f49387e, c0160g);
        c0 c0Var = this.f49386d;
        if (c0Var != null) {
            aVar.j(c0Var);
        }
        return aVar;
    }

    public b(Call.Factory factory, String str, c0 c0Var, CacheControl cacheControl) {
        this.f49384b = factory;
        this.f49385c = str;
        this.f49386d = c0Var;
        this.f49387e = cacheControl;
    }
}
