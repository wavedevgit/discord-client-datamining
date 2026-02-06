package sc;

import com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource;
import com.google.android.exoplayer2.upstream.h;
import le.c0;
import okhttp3.CacheControl;
import okhttp3.Call;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends h.a {

    /* renamed from: b  reason: collision with root package name */
    private final Call.Factory f49854b;

    /* renamed from: c  reason: collision with root package name */
    private final String f49855c;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f49856d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheControl f49857e;

    public a(Call.Factory factory, String str, c0 c0Var) {
        this(factory, str, c0Var, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.upstream.h.a
    /* renamed from: c */
    public OkHttpDataSource a(h.g gVar) {
        OkHttpDataSource okHttpDataSource = new OkHttpDataSource(this.f49854b, this.f49855c, this.f49857e, gVar);
        c0 c0Var = this.f49856d;
        if (c0Var != null) {
            okHttpDataSource.j(c0Var);
        }
        return okHttpDataSource;
    }

    public a(Call.Factory factory, String str, c0 c0Var, CacheControl cacheControl) {
        this.f49854b = factory;
        this.f49855c = str;
        this.f49856d = c0Var;
        this.f49857e = cacheControl;
    }
}
