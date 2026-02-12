package ru;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Interceptor.Chain {

    /* renamed from: a  reason: collision with root package name */
    private final qu.e f47761a;

    /* renamed from: b  reason: collision with root package name */
    private final List f47762b;

    /* renamed from: c  reason: collision with root package name */
    private final int f47763c;

    /* renamed from: d  reason: collision with root package name */
    private final qu.c f47764d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f47765e;

    /* renamed from: f  reason: collision with root package name */
    private final int f47766f;

    /* renamed from: g  reason: collision with root package name */
    private final int f47767g;

    /* renamed from: h  reason: collision with root package name */
    private final int f47768h;

    /* renamed from: i  reason: collision with root package name */
    private int f47769i;

    public g(qu.e call, List interceptors, int i10, qu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f47761a = call;
        this.f47762b = interceptors;
        this.f47763c = i10;
        this.f47764d = cVar;
        this.f47765e = request;
        this.f47766f = i11;
        this.f47767g = i12;
        this.f47768h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, qu.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f47763c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f47764d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f47765e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f47766f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f47767g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f47768h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f47763c < this.f47762b.size()) {
            this.f47769i++;
            qu.c cVar = this.f47764d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f47769i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f47762b.get(this.f47763c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f47762b.get(this.f47763c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f47763c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f47762b.get(this.f47763c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f47764d != null && this.f47763c + 1 < this.f47762b.size() && c10.f47769i != 1) {
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

    public final g b(int i10, qu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new g(this.f47761a, this.f47762b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f47761a;
    }

    public final qu.e d() {
        return this.f47761a;
    }

    public final int e() {
        return this.f47766f;
    }

    public final qu.c f() {
        return this.f47764d;
    }

    public final int g() {
        return this.f47767g;
    }

    public final Request h() {
        return this.f47765e;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request i() {
        return this.f47765e;
    }

    public final int j() {
        return this.f47768h;
    }

    public int k() {
        return this.f47767g;
    }
}
