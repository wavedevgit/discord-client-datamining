package sc;

import com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource;
import com.google.android.exoplayer2.upstream.h;
import le.c0;
import okhttp3.CacheControl;
import okhttp3.Call;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends h.a {

    /* renamed from: b  reason: collision with root package name */
    private final Call.Factory f49902b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49903c;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f49904d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheControl f49905e;

    public a(Call.Factory factory, String str, c0 c0Var) {
        this(factory, str, c0Var, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.upstream.h.a
    /* renamed from: c */
    public OkHttpDataSource a(h.g gVar) {
        OkHttpDataSource okHttpDataSource = new OkHttpDataSource(this.f49902b, this.f49903c, this.f49905e, gVar);
        c0 c0Var = this.f49904d;
        if (c0Var != null) {
            okHttpDataSource.j(c0Var);
        }
        return okHttpDataSource;
    }

    public a(Call.Factory factory, String str, c0 c0Var, CacheControl cacheControl) {
        this.f49902b = factory;
        this.f49903c = str;
        this.f49904d = c0Var;
        this.f49905e = cacheControl;
    }
}
