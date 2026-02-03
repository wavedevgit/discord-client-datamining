package sc;

import com.google.android.exoplayer2.upstream.g;
import le.c0;
import okhttp3.CacheControl;
import okhttp3.Call;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends g.a {

    /* renamed from: b  reason: collision with root package name */
    private final Call.Factory f49387b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49388c;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f49389d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheControl f49390e;

    public b(Call.Factory factory, String str, c0 c0Var) {
        this(factory, str, c0Var, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.upstream.g.a
    /* renamed from: d */
    public a b(g.C0160g c0160g) {
        a aVar = new a(this.f49387b, this.f49388c, this.f49390e, c0160g);
        c0 c0Var = this.f49389d;
        if (c0Var != null) {
            aVar.j(c0Var);
        }
        return aVar;
    }

    public b(Call.Factory factory, String str, c0 c0Var, CacheControl cacheControl) {
        this.f49387b = factory;
        this.f49388c = str;
        this.f49389d = c0Var;
        this.f49390e = cacheControl;
    }
}
