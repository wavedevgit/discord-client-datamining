package cu;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Call;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class g implements Interceptor.Chain {

    /* renamed from: a  reason: collision with root package name */
    private final bu.e f19865a;

    /* renamed from: b  reason: collision with root package name */
    private final List f19866b;

    /* renamed from: c  reason: collision with root package name */
    private final int f19867c;

    /* renamed from: d  reason: collision with root package name */
    private final bu.c f19868d;

    /* renamed from: e  reason: collision with root package name */
    private final Request f19869e;

    /* renamed from: f  reason: collision with root package name */
    private final int f19870f;

    /* renamed from: g  reason: collision with root package name */
    private final int f19871g;

    /* renamed from: h  reason: collision with root package name */
    private final int f19872h;

    /* renamed from: i  reason: collision with root package name */
    private int f19873i;

    public g(bu.e call, List interceptors, int i10, bu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(call, "call");
        Intrinsics.checkNotNullParameter(interceptors, "interceptors");
        Intrinsics.checkNotNullParameter(request, "request");
        this.f19865a = call;
        this.f19866b = interceptors;
        this.f19867c = i10;
        this.f19868d = cVar;
        this.f19869e = request;
        this.f19870f = i11;
        this.f19871g = i12;
        this.f19872h = i13;
    }

    public static /* synthetic */ g c(g gVar, int i10, bu.c cVar, Request request, int i11, int i12, int i13, int i14, Object obj) {
        if ((i14 & 1) != 0) {
            i10 = gVar.f19867c;
        }
        if ((i14 & 2) != 0) {
            cVar = gVar.f19868d;
        }
        if ((i14 & 4) != 0) {
            request = gVar.f19869e;
        }
        if ((i14 & 8) != 0) {
            i11 = gVar.f19870f;
        }
        if ((i14 & 16) != 0) {
            i12 = gVar.f19871g;
        }
        if ((i14 & 32) != 0) {
            i13 = gVar.f19872h;
        }
        int i15 = i12;
        int i16 = i13;
        return gVar.b(i10, cVar, request, i11, i15, i16);
    }

    @Override // okhttp3.Interceptor.Chain
    public Response a(Request request) {
        Intrinsics.checkNotNullParameter(request, "request");
        if (this.f19867c < this.f19866b.size()) {
            this.f19873i++;
            bu.c cVar = this.f19868d;
            if (cVar != null) {
                if (cVar.j().g(request.n())) {
                    if (this.f19873i != 1) {
                        throw new IllegalStateException(("network interceptor " + this.f19866b.get(this.f19867c - 1) + " must call proceed() exactly once").toString());
                    }
                } else {
                    throw new IllegalStateException(("network interceptor " + this.f19866b.get(this.f19867c - 1) + " must retain the same host and port").toString());
                }
            }
            g c10 = c(this, this.f19867c + 1, null, request, 0, 0, 0, 58, null);
            Interceptor interceptor = (Interceptor) this.f19866b.get(this.f19867c);
            Response intercept = interceptor.intercept(c10);
            if (intercept != null) {
                if (this.f19868d != null && this.f19867c + 1 < this.f19866b.size() && c10.f19873i != 1) {
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

    public final g b(int i10, bu.c cVar, Request request, int i11, int i12, int i13) {
        Intrinsics.checkNotNullParameter(request, "request");
        return new g(this.f19865a, this.f19866b, i10, cVar, request, i11, i12, i13);
    }

    @Override // okhttp3.Interceptor.Chain
    public Call call() {
        return this.f19865a;
    }

    public final bu.e d() {
        return this.f19865a;
    }

    public final int e() {
        return this.f19870f;
    }

    public final bu.c f() {
        return this.f19868d;
    }

    public final int g() {
        return this.f19871g;
    }

    @Override // okhttp3.Interceptor.Chain
    public Request h() {
        return this.f19869e;
    }

    public final Request i() {
        return this.f19869e;
    }

    public final int j() {
        return this.f19872h;
    }

    public int k() {
        return this.f19871g;
    }
}
