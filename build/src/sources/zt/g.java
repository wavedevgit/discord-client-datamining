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
    private final yt.e f56130a;

    /* renamed from: b  reason: collision with root package name */
    private final List f56131b;

    /* renamed from: c  reason: collision with root package name */
    private final int f56132c;

    /* renamed from: d  reason: collision with root package name */
    private final yt.c f56133d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f56134e;

    /* renamed from: f  reason: collision with root package name */
    private final int f56135f;

    /* renamed from: g  reason: collision with root package name */
    private final int f56136g;

    /* renamed from: h  reason: collision with root package name */
    private final int f56137h;

    /* renamed from: i  reason: collision with root package name */
    private int f56138i;

    public g(yt.e call, List interceptors, int i10, yt.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f56130a = call;
        this.f56131b = interceptors;
        this.f56132c = i10;
        this.f56133d = cVar;
        this.f56134e = request;
        this.f56135f = i11;
        this.f56136g = i12;
        this.f56137h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, yt.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f56132c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f56133d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f56134e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f56135f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f56136g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f56137h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f56132c < this.f56131b.size()) {
            this.f56138i++;
            yt.c cVar = this.f56133d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f56138i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f56131b.get(this.f56132c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f56131b.get(this.f56132c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f56132c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f56131b.get(this.f56132c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f56133d != null && this.f56132c + 1 < this.f56131b.size() && c10.f56138i != 1) {
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
        return new g(this.f56130a, this.f56131b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f56130a;
    }

    public final yt.e d() {
        return this.f56130a;
    }

    public final int e() {
        return this.f56135f;
    }

    public final yt.c f() {
        return this.f56133d;
    }

    public final int g() {
        return this.f56136g;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request h() {
        return this.f56134e;
    }

    public final Request i() {
        return this.f56134e;
    }

    public final int j() {
        return this.f56137h;
    }

    public int k() {
        return this.f56136g;
    }
}
