package iu;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Interceptor.Chain {

    /* renamed from: a  reason: collision with root package name */
    private final hu.e f29654a;

    /* renamed from: b  reason: collision with root package name */
    private final List f29655b;

    /* renamed from: c  reason: collision with root package name */
    private final int f29656c;

    /* renamed from: d  reason: collision with root package name */
    private final hu.c f29657d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f29658e;

    /* renamed from: f  reason: collision with root package name */
    private final int f29659f;

    /* renamed from: g  reason: collision with root package name */
    private final int f29660g;

    /* renamed from: h  reason: collision with root package name */
    private final int f29661h;

    /* renamed from: i  reason: collision with root package name */
    private int f29662i;

    public g(hu.e call, List interceptors, int i10, hu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f29654a = call;
        this.f29655b = interceptors;
        this.f29656c = i10;
        this.f29657d = cVar;
        this.f29658e = request;
        this.f29659f = i11;
        this.f29660g = i12;
        this.f29661h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, hu.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f29656c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f29657d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f29658e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f29659f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f29660g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f29661h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f29656c < this.f29655b.size()) {
            this.f29662i++;
            hu.c cVar = this.f29657d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f29662i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f29655b.get(this.f29656c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f29655b.get(this.f29656c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f29656c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f29655b.get(this.f29656c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f29657d != null && this.f29656c + 1 < this.f29655b.size() && c10.f29662i != 1) {
                    throw new IllegalStateException(("network interceptor " + interceptor + " must call proceed() exactly once").toString());
                } else if (intercept.n() != null) {
                    return intercept;
                } else {
                    throw new IllegalStateException(("interceptor " + interceptor + " returned a response with no body").toString());
                }
            }
            throw new NullPointerException("interceptor " + interceptor + " returned null");
        }
        throw new IllegalStateException("Check failed.");
    }

    public final g b(int i10, hu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new g(this.f29654a, this.f29655b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f29654a;
    }

    public final hu.e d() {
        return this.f29654a;
    }

    public final int e() {
        return this.f29659f;
    }

    public final hu.c f() {
        return this.f29657d;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request g() {
        return this.f29658e;
    }

    public final int h() {
        return this.f29660g;
    }

    public final Request i() {
        return this.f29658e;
    }

    public final int j() {
        return this.f29661h;
    }

    public int k() {
        return this.f29660g;
    }
}
