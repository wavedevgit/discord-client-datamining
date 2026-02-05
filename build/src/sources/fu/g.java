package fu;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Interceptor.Chain {

    /* renamed from: a  reason: collision with root package name */
    private final eu.e f23506a;

    /* renamed from: b  reason: collision with root package name */
    private final List f23507b;

    /* renamed from: c  reason: collision with root package name */
    private final int f23508c;

    /* renamed from: d  reason: collision with root package name */
    private final eu.c f23509d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f23510e;

    /* renamed from: f  reason: collision with root package name */
    private final int f23511f;

    /* renamed from: g  reason: collision with root package name */
    private final int f23512g;

    /* renamed from: h  reason: collision with root package name */
    private final int f23513h;

    /* renamed from: i  reason: collision with root package name */
    private int f23514i;

    public g(eu.e call, List interceptors, int i10, eu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f23506a = call;
        this.f23507b = interceptors;
        this.f23508c = i10;
        this.f23509d = cVar;
        this.f23510e = request;
        this.f23511f = i11;
        this.f23512g = i12;
        this.f23513h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, eu.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f23508c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f23509d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f23510e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f23511f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f23512g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f23513h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f23508c < this.f23507b.size()) {
            this.f23514i++;
            eu.c cVar = this.f23509d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f23514i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f23507b.get(this.f23508c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f23507b.get(this.f23508c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f23508c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f23507b.get(this.f23508c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f23509d != null && this.f23508c + 1 < this.f23507b.size() && c10.f23514i != 1) {
                    throw new IllegalStateException(("network interceptor " + interceptor + " must call proceed() exactly once").toString());
                } else if (intercept.o() != null) {
                    return intercept;
                } else {
                    throw new IllegalStateException(("interceptor " + interceptor + " returned a response with no body").toString());
                }
            }
            throw new NullPointerException("interceptor " + interceptor + " returned null");
        }
        throw new IllegalStateException("Check failed.");
    }

    public final g b(int i10, eu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new g(this.f23506a, this.f23507b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f23506a;
    }

    public final eu.e d() {
        return this.f23506a;
    }

    public final int e() {
        return this.f23511f;
    }

    public final eu.c f() {
        return this.f23509d;
    }

    public final int g() {
        return this.f23512g;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request h() {
        return this.f23510e;
    }

    public final Request i() {
        return this.f23510e;
    }

    public final int j() {
        return this.f23513h;
    }

    public int k() {
        return this.f23512g;
    }
}
