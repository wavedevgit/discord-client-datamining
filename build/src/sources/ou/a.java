package ou;

import av.x;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import lu.j;
import okhttp3.Call;
import okhttp3.Headers;
import okhttp3.Interceptor;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okio.Buffer;
import okio.BufferedSink;
import okio.BufferedSource;
import okio.Sink;
import okio.Source;
import okio.Timeout;
import ou.c;
import ru.f;
import ru.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Interceptor {

    /* renamed from: b  reason: collision with root package name */
    public static final C0579a f41253b = new C0579a(null);

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.b f41254a;

    /* renamed from: ou.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0579a {
        public /* synthetic */ C0579a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Headers c(Headers headers, Headers headers2) {
            Headers.a aVar = new Headers.a();
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headers.e(i10);
                String k10 = headers.k(i10);
                if ((!StringsKt.A("Warning", e10, true) || !StringsKt.P(k10, "1", false, 2, null)) && (d(e10) || !e(e10) || headers2.c(e10) == null)) {
                    aVar.d(e10, k10);
                }
            }
            int size2 = headers2.size();
            for (int i11 = 0; i11 < size2; i11++) {
                String e11 = headers2.e(i11);
                if (!d(e11) && e(e11)) {
                    aVar.d(e11, headers2.k(i11));
                }
            }
            return aVar.f();
        }

        private final boolean d(String str) {
            if (StringsKt.A("Content-Length", str, true) || StringsKt.A("Content-Encoding", str, true) || StringsKt.A("Content-Type", str, true)) {
                return true;
            }
            return false;
        }

        private final boolean e(String str) {
            if (!StringsKt.A("Connection", str, true) && !StringsKt.A("Keep-Alive", str, true) && !StringsKt.A("Proxy-Authenticate", str, true) && !StringsKt.A("Proxy-Authorization", str, true) && !StringsKt.A("TE", str, true) && !StringsKt.A("Trailers", str, true) && !StringsKt.A("Transfer-Encoding", str, true) && !StringsKt.A("Upgrade", str, true)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Response f(Response response) {
            ResponseBody responseBody;
            if (response != null) {
                responseBody = response.n();
            } else {
                responseBody = null;
            }
            if (responseBody != null) {
                return response.G0().b(null).c();
            }
            return response;
        }

        private C0579a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Source {

        /* renamed from: d  reason: collision with root package name */
        private boolean f41255d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ BufferedSource f41256e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ ou.b f41257i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ BufferedSink f41258o;

        b(BufferedSource bufferedSource, ou.b bVar, BufferedSink bufferedSink) {
            this.f41256e = bufferedSource;
            this.f41257i = bVar;
            this.f41258o = bufferedSink;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f41255d && !mu.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f41255d = true;
                this.f41257i.a();
            }
            this.f41256e.close();
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                long read = this.f41256e.read(sink, j10);
                if (read == -1) {
                    if (!this.f41255d) {
                        this.f41255d = true;
                        this.f41258o.close();
                    }
                    return -1L;
                }
                sink.z(this.f41258o.f(), sink.size() - read, read);
                this.f41258o.h0();
                return read;
            } catch (IOException e10) {
                if (!this.f41255d) {
                    this.f41255d = true;
                    this.f41257i.a();
                }
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f41256e.timeout();
        }
    }

    public a(okhttp3.b bVar) {
        this.f41254a = bVar;
    }

    private final Response a(ou.b bVar, Response response) {
        if (bVar == null) {
            return response;
        }
        Sink b10 = bVar.b();
        ResponseBody n10 = response.n();
        Intrinsics.checkNotNull(n10);
        b bVar2 = new b(n10.source(), bVar, x.c(b10));
        return response.G0().b(new h(Response.Z(response, "Content-Type", null, 2, null), response.n().contentLength(), x.d(bVar2))).c();
    }

    @Override // okhttp3.Interceptor
    public Response intercept(Interceptor.Chain chain) {
        Response response;
        okhttp3.e eVar;
        ResponseBody n10;
        ResponseBody n11;
        Intrinsics.checkNotNullParameter(chain, "chain");
        Call call = chain.call();
        okhttp3.b bVar = this.f41254a;
        qu.e eVar2 = null;
        if (bVar != null) {
            response = bVar.h(chain.i());
        } else {
            response = null;
        }
        c b10 = new c.b(System.currentTimeMillis(), chain.i(), response).b();
        Request b11 = b10.b();
        Response a10 = b10.a();
        okhttp3.b bVar2 = this.f41254a;
        if (bVar2 != null) {
            bVar2.C(b10);
        }
        if (call instanceof qu.e) {
            eVar2 = (qu.e) call;
        }
        if (eVar2 == null || (eVar = eVar2.m()) == null) {
            eVar = okhttp3.e.f40549b;
        }
        if (response != null && a10 == null && (n11 = response.n()) != null) {
            mu.e.m(n11);
        }
        if (b11 == null && a10 == null) {
            Response c10 = new Response.a().r(chain.i()).p(j.HTTP_1_1).g(504).m("Unsatisfiable Request (only-if-cached)").b(mu.e.f36659c).s(-1L).q(System.currentTimeMillis()).c();
            eVar.A(call, c10);
            return c10;
        } else if (b11 == null) {
            Intrinsics.checkNotNull(a10);
            Response c11 = a10.G0().d(f41253b.f(a10)).c();
            eVar.b(call, c11);
            return c11;
        } else {
            if (a10 != null) {
                eVar.a(call, a10);
            } else if (this.f41254a != null) {
                eVar.c(call);
            }
            try {
                Response a11 = chain.a(b11);
                if (a11 == null && response != null && n10 != null) {
                }
                if (a10 != null) {
                    if (a11 != null && a11.z() == 304) {
                        Response.a G0 = a10.G0();
                        C0579a c0579a = f41253b;
                        Response c12 = G0.k(c0579a.c(a10.z0(), a11.z0())).s(a11.S0()).q(a11.N0()).d(c0579a.f(a10)).n(c0579a.f(a11)).c();
                        ResponseBody n12 = a11.n();
                        Intrinsics.checkNotNull(n12);
                        n12.close();
                        okhttp3.b bVar3 = this.f41254a;
                        Intrinsics.checkNotNull(bVar3);
                        bVar3.z();
                        this.f41254a.I(a10, c12);
                        eVar.b(call, c12);
                        return c12;
                    }
                    ResponseBody n13 = a10.n();
                    if (n13 != null) {
                        mu.e.m(n13);
                    }
                }
                Intrinsics.checkNotNull(a11);
                Response.a G02 = a11.G0();
                C0579a c0579a2 = f41253b;
                Response c13 = G02.d(c0579a2.f(a10)).n(c0579a2.f(a11)).c();
                if (this.f41254a != null) {
                    if (ru.e.b(c13) && c.f41259c.a(c13, b11)) {
                        Response a12 = a(this.f41254a.n(c13), c13);
                        if (a10 != null) {
                            eVar.c(call);
                        }
                        return a12;
                    } else if (f.f47760a.a(b11.j())) {
                        try {
                            this.f41254a.p(b11);
                        } catch (IOException unused) {
                        }
                    }
                }
                return c13;
            } finally {
                if (response != null && (n10 = response.n()) != null) {
                    mu.e.m(n10);
                }
            }
        }
    }
}
