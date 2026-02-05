package cu;

import cu.c;
import fu.f;
import fu.h;
import java.io.IOException;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
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
import ou.x;
import zt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Interceptor {

    /* renamed from: b  reason: collision with root package name */
    public static final C0277a f20036b = new C0277a(null);

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.b f20037a;

    /* renamed from: cu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0277a {
        public /* synthetic */ C0277a(DefaultConstructorMarker defaultConstructorMarker) {
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
                responseBody = response.o();
            } else {
                responseBody = null;
            }
            if (responseBody != null) {
                return response.N0().b(null).c();
            }
            return response;
        }

        private C0277a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Source {

        /* renamed from: d  reason: collision with root package name */
        private boolean f20038d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ BufferedSource f20039e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ cu.b f20040i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ BufferedSink f20041o;

        b(BufferedSource bufferedSource, cu.b bVar, BufferedSink bufferedSink) {
            this.f20039e = bufferedSource;
            this.f20040i = bVar;
            this.f20041o = bufferedSink;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f20038d && !au.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f20038d = true;
                this.f20040i.a();
            }
            this.f20039e.close();
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                long read = this.f20039e.read(sink, j10);
                if (read == -1) {
                    if (!this.f20038d) {
                        this.f20038d = true;
                        this.f20041o.close();
                    }
                    return -1L;
                }
                sink.N(this.f20041o.f(), sink.size() - read, read);
                this.f20041o.e0();
                return read;
            } catch (IOException e10) {
                if (!this.f20038d) {
                    this.f20038d = true;
                    this.f20040i.a();
                }
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f20039e.timeout();
        }
    }

    public a(okhttp3.b bVar) {
        this.f20037a = bVar;
    }

    private final Response a(cu.b bVar, Response response) {
        if (bVar == null) {
            return response;
        }
        Sink b10 = bVar.b();
        ResponseBody o10 = response.o();
        Intrinsics.checkNotNull(o10);
        b bVar2 = new b(o10.source(), bVar, x.c(b10));
        return response.N0().b(new h(Response.D0(response, "Content-Type", null, 2, null), response.o().contentLength(), x.d(bVar2))).c();
    }

    @Override // okhttp3.Interceptor
    public Response intercept(Interceptor.Chain chain) {
        Response response;
        okhttp3.e eVar;
        ResponseBody o10;
        ResponseBody o11;
        Intrinsics.checkNotNullParameter(chain, "chain");
        Call call = chain.call();
        okhttp3.b bVar = this.f20037a;
        eu.e eVar2 = null;
        if (bVar != null) {
            response = bVar.h(chain.h());
        } else {
            response = null;
        }
        c b10 = new c.b(System.currentTimeMillis(), chain.h(), response).b();
        Request b11 = b10.b();
        Response a10 = b10.a();
        okhttp3.b bVar2 = this.f20037a;
        if (bVar2 != null) {
            bVar2.N(b10);
        }
        if (call instanceof eu.e) {
            eVar2 = (eu.e) call;
        }
        if (eVar2 == null || (eVar = eVar2.m()) == null) {
            eVar = okhttp3.e.f44017b;
        }
        if (response != null && a10 == null && (o11 = response.o()) != null) {
            au.e.m(o11);
        }
        if (b11 == null && a10 == null) {
            Response c10 = new Response.a().r(chain.h()).p(j.HTTP_1_1).g(504).m("Unsatisfiable Request (only-if-cached)").b(au.e.f5995c).s(-1L).q(System.currentTimeMillis()).c();
            eVar.A(call, c10);
            return c10;
        } else if (b11 == null) {
            Intrinsics.checkNotNull(a10);
            Response c11 = a10.N0().d(f20036b.f(a10)).c();
            eVar.b(call, c11);
            return c11;
        } else {
            if (a10 != null) {
                eVar.a(call, a10);
            } else if (this.f20037a != null) {
                eVar.c(call);
            }
            try {
                Response a11 = chain.a(b11);
                if (a11 == null && response != null && o10 != null) {
                }
                if (a10 != null) {
                    if (a11 != null && a11.L() == 304) {
                        Response.a N0 = a10.N0();
                        C0277a c0277a = f20036b;
                        Response c12 = N0.k(c0277a.c(a10.E0(), a11.E0())).s(a11.e1()).q(a11.Y0()).d(c0277a.f(a10)).n(c0277a.f(a11)).c();
                        ResponseBody o12 = a11.o();
                        Intrinsics.checkNotNull(o12);
                        o12.close();
                        okhttp3.b bVar3 = this.f20037a;
                        Intrinsics.checkNotNull(bVar3);
                        bVar3.L();
                        this.f20037a.V(a10, c12);
                        eVar.b(call, c12);
                        return c12;
                    }
                    ResponseBody o13 = a10.o();
                    if (o13 != null) {
                        au.e.m(o13);
                    }
                }
                Intrinsics.checkNotNull(a11);
                Response.a N02 = a11.N0();
                C0277a c0277a2 = f20036b;
                Response c13 = N02.d(c0277a2.f(a10)).n(c0277a2.f(a11)).c();
                if (this.f20037a != null) {
                    if (fu.e.b(c13) && c.f20042c.a(c13, b11)) {
                        Response a12 = a(this.f20037a.o(c13), c13);
                        if (a10 != null) {
                            eVar.c(call);
                        }
                        return a12;
                    } else if (f.f23505a.a(b11.j())) {
                        try {
                            this.f20037a.y(b11);
                        } catch (IOException unused) {
                        }
                    }
                }
                return c13;
            } finally {
                if (response != null && (o10 = response.o()) != null) {
                    au.e.m(o10);
                }
            }
        }
    }
}
