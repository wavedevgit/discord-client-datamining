package fu;

import cu.j;
import fu.c;
import iu.f;
import iu.h;
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
import ru.x;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class a implements Interceptor {

    /* renamed from: b  reason: collision with root package name */
    public static final C0360a f23239b = new C0360a(null);

    /* renamed from: a  reason: collision with root package name */
    private final okhttp3.b f23240a;

    /* renamed from: fu.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class C0360a {
        public /* synthetic */ C0360a(DefaultConstructorMarker defaultConstructorMarker) {
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
                responseBody = response.n();
            } else {
                responseBody = null;
            }
            if (responseBody != null) {
                return response.J0().b(null).c();
            }
            return response;
        }

        private C0360a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b implements Source {

        /* renamed from: d  reason: collision with root package name */
        private boolean f23241d;

        /* renamed from: e  reason: collision with root package name */
        final /* synthetic */ BufferedSource f23242e;

        /* renamed from: i  reason: collision with root package name */
        final /* synthetic */ fu.b f23243i;

        /* renamed from: o  reason: collision with root package name */
        final /* synthetic */ BufferedSink f23244o;

        b(BufferedSource bufferedSource, fu.b bVar, BufferedSink bufferedSink) {
            this.f23242e = bufferedSource;
            this.f23243i = bVar;
            this.f23244o = bufferedSink;
        }

        @Override // okio.Source, java.io.Closeable, java.lang.AutoCloseable
        public void close() {
            if (!this.f23241d && !du.e.s(this, 100, TimeUnit.MILLISECONDS)) {
                this.f23241d = true;
                this.f23243i.a();
            }
            this.f23242e.close();
        }

        @Override // okio.Source
        public long read(Buffer sink, long j10) {
            Intrinsics.checkNotNullParameter(sink, "sink");
            try {
                long read = this.f23242e.read(sink, j10);
                if (read == -1) {
                    if (!this.f23241d) {
                        this.f23241d = true;
                        this.f23244o.close();
                    }
                    return -1L;
                }
                sink.z(this.f23244o.e(), sink.size() - read, read);
                this.f23244o.h0();
                return read;
            } catch (IOException e10) {
                if (!this.f23241d) {
                    this.f23241d = true;
                    this.f23243i.a();
                }
                throw e10;
            }
        }

        @Override // okio.Source
        public Timeout timeout() {
            return this.f23242e.timeout();
        }
    }

    public a(okhttp3.b bVar) {
        this.f23240a = bVar;
    }

    private final Response a(fu.b bVar, Response response) {
        if (bVar == null) {
            return response;
        }
        Sink b10 = bVar.b();
        ResponseBody n10 = response.n();
        Intrinsics.checkNotNull(n10);
        b bVar2 = new b(n10.source(), bVar, x.c(b10));
        return response.J0().b(new h(Response.Z(response, "Content-Type", null, 2, null), response.n().contentLength(), x.d(bVar2))).c();
    }

    @Override // okhttp3.Interceptor
    public Response intercept(Interceptor.Chain chain) {
        Response response;
        okhttp3.e eVar;
        ResponseBody n10;
        ResponseBody n11;
        Intrinsics.checkNotNullParameter(chain, "chain");
        Call call = chain.call();
        okhttp3.b bVar = this.f23240a;
        hu.e eVar2 = null;
        if (bVar != null) {
            response = bVar.g(chain.g());
        } else {
            response = null;
        }
        c b10 = new c.b(System.currentTimeMillis(), chain.g(), response).b();
        Request b11 = b10.b();
        Response a10 = b10.a();
        okhttp3.b bVar2 = this.f23240a;
        if (bVar2 != null) {
            bVar2.C(b10);
        }
        if (call instanceof hu.e) {
            eVar2 = (hu.e) call;
        }
        if (eVar2 == null || (eVar = eVar2.m()) == null) {
            eVar = okhttp3.e.f42298b;
        }
        if (response != null && a10 == null && (n11 = response.n()) != null) {
            du.e.m(n11);
        }
        if (b11 == null && a10 == null) {
            Response c10 = new Response.a().r(chain.g()).p(j.HTTP_1_1).g(504).m("Unsatisfiable Request (only-if-cached)").b(du.e.f20981c).s(-1L).q(System.currentTimeMillis()).c();
            eVar.A(call, c10);
            return c10;
        } else if (b11 == null) {
            Intrinsics.checkNotNull(a10);
            Response c11 = a10.J0().d(f23239b.f(a10)).c();
            eVar.b(call, c11);
            return c11;
        } else {
            if (a10 != null) {
                eVar.a(call, a10);
            } else if (this.f23240a != null) {
                eVar.c(call);
            }
            try {
                Response a11 = chain.a(b11);
                if (a11 == null && response != null && n10 != null) {
                }
                if (a10 != null) {
                    if (a11 != null && a11.z() == 304) {
                        Response.a J0 = a10.J0();
                        C0360a c0360a = f23239b;
                        Response c12 = J0.k(c0360a.c(a10.C0(), a11.C0())).s(a11.a1()).q(a11.V0()).d(c0360a.f(a10)).n(c0360a.f(a11)).c();
                        ResponseBody n12 = a11.n();
                        Intrinsics.checkNotNull(n12);
                        n12.close();
                        okhttp3.b bVar3 = this.f23240a;
                        Intrinsics.checkNotNull(bVar3);
                        bVar3.z();
                        this.f23240a.I(a10, c12);
                        eVar.b(call, c12);
                        return c12;
                    }
                    ResponseBody n13 = a10.n();
                    if (n13 != null) {
                        du.e.m(n13);
                    }
                }
                Intrinsics.checkNotNull(a11);
                Response.a J02 = a11.J0();
                C0360a c0360a2 = f23239b;
                Response c13 = J02.d(c0360a2.f(a10)).n(c0360a2.f(a11)).c();
                if (this.f23240a != null) {
                    if (iu.e.b(c13) && c.f23245c.a(c13, b11)) {
                        Response a12 = a(this.f23240a.n(c13), c13);
                        if (a10 != null) {
                            eVar.c(call);
                        }
                        return a12;
                    } else if (f.f29653a.a(b11.j())) {
                        try {
                            this.f23240a.p(b11);
                        } catch (IOException unused) {
                        }
                    }
                }
                return c13;
            } finally {
                if (response != null && (n10 = response.n()) != null) {
                    du.e.m(n10);
                }
            }
        }
    }
}
