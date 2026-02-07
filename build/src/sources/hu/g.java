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
    private final gu.e f26549a;

    /* renamed from: b  reason: collision with root package name */
    private final List f26550b;

    /* renamed from: c  reason: collision with root package name */
    private final int f26551c;

    /* renamed from: d  reason: collision with root package name */
    private final gu.c f26552d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f26553e;

    /* renamed from: f  reason: collision with root package name */
    private final int f26554f;

    /* renamed from: g  reason: collision with root package name */
    private final int f26555g;

    /* renamed from: h  reason: collision with root package name */
    private final int f26556h;

    /* renamed from: i  reason: collision with root package name */
    private int f26557i;

    public g(gu.e call, List interceptors, int i10, gu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f26549a = call;
        this.f26550b = interceptors;
        this.f26551c = i10;
        this.f26552d = cVar;
        this.f26553e = request;
        this.f26554f = i11;
        this.f26555g = i12;
        this.f26556h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, gu.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f26551c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f26552d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f26553e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f26554f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f26555g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f26556h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f26551c < this.f26550b.size()) {
            this.f26557i++;
            gu.c cVar = this.f26552d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f26557i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f26550b.get(this.f26551c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f26550b.get(this.f26551c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f26551c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f26550b.get(this.f26551c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f26552d != null && this.f26551c + 1 < this.f26550b.size() && c10.f26557i != 1) {
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
        return new g(this.f26549a, this.f26550b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f26549a;
    }

    public final gu.e d() {
        return this.f26549a;
    }

    public final int e() {
        return this.f26554f;
    }

    public final gu.c f() {
        return this.f26552d;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request g() {
        return this.f26553e;
    }

    public final int h() {
        return this.f26555g;
    }

    public final Request i() {
        return this.f26553e;
    }

    public final int j() {
        return this.f26556h;
    }

    public int k() {
        return this.f26555g;
    }
}
