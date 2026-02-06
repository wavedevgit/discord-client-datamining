package hu;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Interceptor.Chain {

    /* renamed from: a  reason: collision with root package name */
    private final gu.e f26501a;

    /* renamed from: b  reason: collision with root package name */
    private final List f26502b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26503c;

    /* renamed from: d  reason: collision with root package name */
    private final gu.c f26504d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f26505e;

    /* renamed from: f  reason: collision with root package name */
    private final int f26506f;

    /* renamed from: g  reason: collision with root package name */
    private final int f26507g;

    /* renamed from: h  reason: collision with root package name */
    private final int f26508h;

    /* renamed from: i  reason: collision with root package name */
    private int f26509i;

    public g(gu.e call, List interceptors, int i10, gu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f26501a = call;
        this.f26502b = interceptors;
        this.f26503c = i10;
        this.f26504d = cVar;
        this.f26505e = request;
        this.f26506f = i11;
        this.f26507g = i12;
        this.f26508h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, gu.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f26503c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f26504d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f26505e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f26506f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f26507g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f26508h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f26503c < this.f26502b.size()) {
            this.f26509i++;
            gu.c cVar = this.f26504d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f26509i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f26502b.get(this.f26503c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f26502b.get(this.f26503c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f26503c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f26502b.get(this.f26503c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f26504d != null && this.f26503c + 1 < this.f26502b.size() && c10.f26509i != 1) {
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

    public final g b(int i10, gu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new g(this.f26501a, this.f26502b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f26501a;
    }

    public final gu.e d() {
        return this.f26501a;
    }

    public final int e() {
        return this.f26506f;
    }

    public final gu.c f() {
        return this.f26504d;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request g() {
        return this.f26505e;
    }

    public final int h() {
        return this.f26507g;
    }

    public final Request i() {
        return this.f26505e;
    }

    public final int j() {
        return this.f26508h;
    }

    public int k() {
        return this.f26507g;
    }
}
