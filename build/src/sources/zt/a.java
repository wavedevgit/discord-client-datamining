package zt;

import cu.f;
import cu.h;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import lu.x;
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
import wt.j;
import zt.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Interceptor {

    /* renamed from: b  reason: collision with root package name */
    public static final C0794a f56153b = new C0794a(null);

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.b f56154a;

    /* renamed from: zt.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0794a {
        public /* synthetic */ C0794a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final Headers c(Headers headers, Headers headers2) {
            Headers.a aVar = new Headers.a();
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headers.e(i10);
                String j10 = headers.j(i10);
                if ((!StringsKt.A("Warning", e10, true) || !StringsKt.P(j10, "1", false, 2, null)) && (d(e10) || !e(e10) || headers2.c(e10) == null)) {
                    aVar.d(e10, j10);
                }
            }
            int size2 = headers2.size();
            for (int i11 = 0; i11 < size2; i11++) {
                String e11 = headers2.e(i11);
                if (!d(e11) && e(e11)) {
                    aVar.d(e11, headers2.j(i11));
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
                responseBody = response.x();
            } else {
                responseBody = null;
            }
            if (responseBody != null) {
                return response.M0().b(null).c();
            }
            return response;
        }

        private C0794a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Source {

        /* renamed from: d  reason: collision with root package name */
        private boolean f56155d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ BufferedSource f56156e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ zt.b f56157i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ BufferedSink f56158o;

        b(BufferedSource bufferedSource, zt.b bVar, BufferedSink bufferedSink) {
            this.f56156e = bufferedSource;
            this.f56157i = bVar;
            this.f56158o = bufferedSink;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f56155d && !xt.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f56155d = true;
                this.f56157i.a();
            }
            this.f56156e.close();
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                long read = this.f56156e.read(sink, j10);
                if (read == -1) {
                    if (!this.f56155d) {
                        this.f56155d = true;
                        this.f56158o.close();
                    }
                    return -1L;
                }
                sink.N(this.f56158o.e(), sink.size() - read, read);
                this.f56158o.d0();
                return read;
            } catch (IOException e10) {
                if (!this.f56155d) {
                    this.f56155d = true;
                    this.f56157i.a();
                }
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f56156e.timeout();
        }
    }

    public a(okhttp3.b bVar) {
        this.f56154a = bVar;
    }

    private final Response a(zt.b bVar, Response response) {
        if (bVar == null) {
            return response;
        }
        Sink b10 = bVar.b();
        ResponseBody x10 = response.x();
        Intrinsics.checkNotNull(x10);
        b bVar2 = new b(x10.source(), bVar, x.c(b10));
        return response.M0().b(new h(Response.D0(response, "Content-Type", null, 2, null), response.x().contentLength(), x.d(bVar2))).c();
    }

    @Override // okhttp3.Interceptor
    public Response intercept(Interceptor.Chain chain) {
        Response response;
        okhttp3.e eVar;
        ResponseBody x10;
        ResponseBody x11;
        Intrinsics.checkNotNullParameter(chain, "chain");
        Call call = chain.call();
        okhttp3.b bVar = this.f56154a;
        bu.e eVar2 = null;
        if (bVar != null) {
            response = bVar.h(chain.h());
        } else {
            response = null;
        }
        c b10 = new c.b(System.currentTimeMillis(), chain.h(), response).b();
        Request b11 = b10.b();
        Response a10 = b10.a();
        okhttp3.b bVar2 = this.f56154a;
        if (bVar2 != null) {
            bVar2.N(b10);
        }
        if (call instanceof bu.e) {
            eVar2 = (bu.e) call;
        }
        if (eVar2 == null || (eVar = eVar2.m()) == null) {
            eVar = okhttp3.e.f44264b;
        }
        if (response != null && a10 == null && (x11 = response.x()) != null) {
            xt.e.m(x11);
        }
        if (b11 == null && a10 == null) {
            Response c10 = new Response.a().r(chain.h()).p(j.HTTP_1_1).g(504).m("Unsatisfiable Request (only-if-cached)").b(xt.e.f53569c).s(-1L).q(System.currentTimeMillis()).c();
            eVar.A(call, c10);
            return c10;
        } else if (b11 == null) {
            Intrinsics.checkNotNull(a10);
            Response c11 = a10.M0().d(f56153b.f(a10)).c();
            eVar.b(call, c11);
            return c11;
        } else {
            if (a10 != null) {
                eVar.a(call, a10);
            } else if (this.f56154a != null) {
                eVar.c(call);
            }
            try {
                Response a11 = chain.a(b11);
                if (a11 == null && response != null && x10 != null) {
                }
                if (a10 != null) {
                    if (a11 != null && a11.L() == 304) {
                        Response.a M0 = a10.M0();
                        C0794a c0794a = f56153b;
                        Response c12 = M0.k(c0794a.c(a10.E0(), a11.E0())).s(a11.e1()).q(a11.Y0()).d(c0794a.f(a10)).n(c0794a.f(a11)).c();
                        ResponseBody x12 = a11.x();
                        Intrinsics.checkNotNull(x12);
                        x12.close();
                        okhttp3.b bVar3 = this.f56154a;
                        Intrinsics.checkNotNull(bVar3);
                        bVar3.L();
                        this.f56154a.V(a10, c12);
                        eVar.b(call, c12);
                        return c12;
                    }
                    ResponseBody x13 = a10.x();
                    if (x13 != null) {
                        xt.e.m(x13);
                    }
                }
                Intrinsics.checkNotNull(a11);
                Response.a M02 = a11.M0();
                C0794a c0794a2 = f56153b;
                Response c13 = M02.d(c0794a2.f(a10)).n(c0794a2.f(a11)).c();
                if (this.f56154a != null) {
                    if (cu.e.b(c13) && c.f56159c.a(c13, b11)) {
                        Response a12 = a(this.f56154a.x(c13), c13);
                        if (a10 != null) {
                            eVar.c(call);
                        }
                        return a12;
                    } else if (f.f19864a.a(b11.j())) {
                        try {
                            this.f56154a.B(b11);
                        } catch (IOException unused) {
                        }
                    }
                }
                return c13;
            } finally {
                if (response != null && (x10 = response.x()) != null) {
                    xt.e.m(x10);
                }
            }
        }
    }
}
