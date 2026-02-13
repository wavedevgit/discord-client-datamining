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
    private final qu.e f48329a;

    /* renamed from: b  reason: collision with root package name */
    private final List f48330b;

    /* renamed from: c  reason: collision with root package name */
    private final int f48331c;

    /* renamed from: d  reason: collision with root package name */
    private final qu.c f48332d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f48333e;

    /* renamed from: f  reason: collision with root package name */
    private final int f48334f;

    /* renamed from: g  reason: collision with root package name */
    private final int f48335g;

    /* renamed from: h  reason: collision with root package name */
    private final int f48336h;

    /* renamed from: i  reason: collision with root package name */
    private int f48337i;

    public g(qu.e call, List interceptors, int i10, qu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f48329a = call;
        this.f48330b = interceptors;
        this.f48331c = i10;
        this.f48332d = cVar;
        this.f48333e = request;
        this.f48334f = i11;
        this.f48335g = i12;
        this.f48336h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, qu.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f48331c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f48332d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f48333e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f48334f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f48335g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f48336h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f48331c < this.f48330b.size()) {
            this.f48337i++;
            qu.c cVar = this.f48332d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f48337i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f48330b.get(this.f48331c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f48330b.get(this.f48331c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f48331c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f48330b.get(this.f48331c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f48332d != null && this.f48331c + 1 < this.f48330b.size() && c10.f48337i != 1) {
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
        return new g(this.f48329a, this.f48330b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f48329a;
    }

    public final qu.e d() {
        return this.f48329a;
    }

    public final int e() {
        return this.f48334f;
    }

    public final qu.c f() {
        return this.f48332d;
    }

    public final int g() {
        return this.f48335g;
    }

    public final Request h() {
        return this.f48333e;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request i() {
        return this.f48333e;
    }

    public final int j() {
        return this.f48336h;
    }

    public int k() {
        return this.f48335g;
    }
}
