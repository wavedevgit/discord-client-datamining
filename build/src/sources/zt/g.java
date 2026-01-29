package zt;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Interceptor.Chain {

    /* renamed from: a  reason: collision with root package name */
    private final yt.e f56114a;

    /* renamed from: b  reason: collision with root package name */
    private final List f56115b;

    /* renamed from: c  reason: collision with root package name */
    private final int f56116c;

    /* renamed from: d  reason: collision with root package name */
    private final yt.c f56117d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f56118e;

    /* renamed from: f  reason: collision with root package name */
    private final int f56119f;

    /* renamed from: g  reason: collision with root package name */
    private final int f56120g;

    /* renamed from: h  reason: collision with root package name */
    private final int f56121h;

    /* renamed from: i  reason: collision with root package name */
    private int f56122i;

    public g(yt.e call, List interceptors, int i10, yt.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f56114a = call;
        this.f56115b = interceptors;
        this.f56116c = i10;
        this.f56117d = cVar;
        this.f56118e = request;
        this.f56119f = i11;
        this.f56120g = i12;
        this.f56121h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, yt.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f56116c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f56117d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f56118e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f56119f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f56120g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f56121h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f56116c < this.f56115b.size()) {
            this.f56122i++;
            yt.c cVar = this.f56117d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f56122i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f56115b.get(this.f56116c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f56115b.get(this.f56116c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f56116c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f56115b.get(this.f56116c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f56117d != null && this.f56116c + 1 < this.f56115b.size() && c10.f56122i != 1) {
                    throw new IllegalStateException(("network interceptor " + interceptor + " must call proceed() exactly once").toString());
                } else if (intercept.x() != null) {
                    return intercept;
                } else {
                    throw new IllegalStateException(("interceptor " + interceptor + " returned a response with no body").toString());
                }
            }
            throw new NullPointerException("interceptor " + interceptor + " returned null");
        }
        throw new IllegalStateException("Check failed.");
    }

    public final g b(int i10, yt.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new g(this.f56114a, this.f56115b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f56114a;
    }

    public final yt.e d() {
        return this.f56114a;
    }

    public final int e() {
        return this.f56119f;
    }

    public final yt.c f() {
        return this.f56117d;
    }

    public final int g() {
        return this.f56120g;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request h() {
        return this.f56118e;
    }

    public final Request i() {
        return this.f56118e;
    }

    public final int j() {
        return this.f56121h;
    }

    public int k() {
        return this.f56120g;
    }
}
