package sc;

import com.google.android.exoplayer2.upstream.g;
import le.c0;
import okhttp3.CacheControl;
import okhttp3.Call;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b extends g.a {

    /* renamed from: b  reason: collision with root package name */
    private final Call.Factory f48907b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48908c;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f48909d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheControl f48910e;

    public b(Call.Factory factory, String str, c0 c0Var) {
        this(factory, str, c0Var, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.upstream.g.a
    /* renamed from: d */
    public a b(g.C0174g c0174g) {
        a aVar = new a(this.f48907b, this.f48908c, this.f48910e, c0174g);
        c0 c0Var = this.f48909d;
        if (c0Var != null) {
            aVar.j(c0Var);
        }
        return aVar;
    }

    public b(Call.Factory factory, String str, c0 c0Var, CacheControl cacheControl) {
        this.f48907b = factory;
        this.f48908c = str;
        this.f48909d = c0Var;
        this.f48910e = cacheControl;
    }
}
