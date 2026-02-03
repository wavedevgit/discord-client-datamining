package au;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Interceptor.Chain {

    /* renamed from: a  reason: collision with root package name */
    private final zt.e f6101a;

    /* renamed from: b  reason: collision with root package name */
    private final List f6102b;

    /* renamed from: c  reason: collision with root package name */
    private final int f6103c;

    /* renamed from: d  reason: collision with root package name */
    private final zt.c f6104d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f6105e;

    /* renamed from: f  reason: collision with root package name */
    private final int f6106f;

    /* renamed from: g  reason: collision with root package name */
    private final int f6107g;

    /* renamed from: h  reason: collision with root package name */
    private final int f6108h;

    /* renamed from: i  reason: collision with root package name */
    private int f6109i;

    public g(zt.e call, List interceptors, int i10, zt.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f6101a = call;
        this.f6102b = interceptors;
        this.f6103c = i10;
        this.f6104d = cVar;
        this.f6105e = request;
        this.f6106f = i11;
        this.f6107g = i12;
        this.f6108h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, zt.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f6103c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f6104d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f6105e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f6106f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f6107g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f6108h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f6103c < this.f6102b.size()) {
            this.f6109i++;
            zt.c cVar = this.f6104d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f6109i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f6102b.get(this.f6103c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f6102b.get(this.f6103c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f6103c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f6102b.get(this.f6103c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f6104d != null && this.f6103c + 1 < this.f6102b.size() && c10.f6109i != 1) {
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

    public final g b(int i10, zt.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new g(this.f6101a, this.f6102b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f6101a;
    }

    public final zt.e d() {
        return this.f6101a;
    }

    public final int e() {
        return this.f6106f;
    }

    public final zt.c f() {
        return this.f6104d;
    }

    public final int g() {
        return this.f6107g;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request h() {
        return this.f6105e;
    }

    public final Request i() {
        return this.f6105e;
    }

    public final int j() {
        return this.f6108h;
    }

    public int k() {
        return this.f6107g;
    }
}
