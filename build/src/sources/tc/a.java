package tc;

import com.google.android.exoplayer2.ext.okhttp.OkHttpDataSource;
import com.google.android.exoplayer2.upstream.h;
import me.c0;
import okhttp3.CacheControl;
import okhttp3.Call;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a extends h.a {

    /* renamed from: b  reason: collision with root package name */
    private final Call.Factory f48675b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48676c;

    /* renamed from: d  reason: collision with root package name */
    private final c0 f48677d;

    /* renamed from: e  reason: collision with root package name */
    private final CacheControl f48678e;

    public a(Call.Factory factory, String str, c0 c0Var) {
        this(factory, str, c0Var, null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // com.google.android.exoplayer2.upstream.h.a
    /* renamed from: c */
    public OkHttpDataSource a(h.g gVar) {
        OkHttpDataSource okHttpDataSource = new OkHttpDataSource(this.f48675b, this.f48676c, this.f48678e, gVar);
        c0 c0Var = this.f48677d;
        if (c0Var != null) {
            okHttpDataSource.i(c0Var);
        }
        return okHttpDataSource;
    }

    public a(Call.Factory factory, String str, c0 c0Var, CacheControl cacheControl) {
        this.f48675b = factory;
        this.f48676c = str;
        this.f48677d = c0Var;
        this.f48678e = cacheControl;
    }
}
