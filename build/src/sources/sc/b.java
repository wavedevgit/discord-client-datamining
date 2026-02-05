package sc;

import com.google.android.exoplayer2.upstream.g;
import le.c0;
import okhttp3.CacheControl;
import okhttp3.Call;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends g.a {

    /* renamed from: b  reason: collision with root package name */
    private final Call.Factory f49533b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49534c;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f49535d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheControl f49536e;

    public b(Call.Factory factory, String str, c0 c0Var) {
        this(factory, str, c0Var, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.upstream.g.a
    /* renamed from: d */
    public a b(g.C0176g c0176g) {
        a aVar = new a(this.f49533b, this.f49534c, this.f49536e, c0176g);
        c0 c0Var = this.f49535d;
        if (c0Var != null) {
            aVar.j(c0Var);
        }
        return aVar;
    }

    public b(Call.Factory factory, String str, c0 c0Var, CacheControl cacheControl) {
        this.f49533b = factory;
        this.f49534c = str;
        this.f49535d = c0Var;
        this.f49536e = cacheControl;
    }
}
