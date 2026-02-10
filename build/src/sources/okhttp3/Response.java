package okhttp3;

import com.facebook.react.views.image.ReactImageView;
import java.io.Closeable;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import lu.j;
import okhttp3.Headers;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Response implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Request f40384d;

    /* renamed from: e  reason: collision with root package name */
    private final j f40385e;

    /* renamed from: i  reason: collision with root package name */
    private final String f40386i;

    /* renamed from: o  reason: collision with root package name */
    private final int f40387o;

    /* renamed from: p  reason: collision with root package name */
    private final g f40388p;

    /* renamed from: q  reason: collision with root package name */
    private final Headers f40389q;

    /* renamed from: r  reason: collision with root package name */
    private final ResponseBody f40390r;

    /* renamed from: s  reason: collision with root package name */
    private final Response f40391s;

    /* renamed from: t  reason: collision with root package name */
    private final Response f40392t;

    /* renamed from: u  reason: collision with root package name */
    private final Response f40393u;

    /* renamed from: v  reason: collision with root package name */
    private final long f40394v;

    /* renamed from: w  reason: collision with root package name */
    private final long f40395w;

    /* renamed from: x  reason: collision with root package name */
    private final qu.c f40396x;

    /* renamed from: y  reason: collision with root package name */
    private CacheControl f40397y;

    public Response(Request request, j protocol, String message, int i10, g gVar, Headers headers, ResponseBody responseBody, Response response, Response response2, Response response3, long j10, long j11, qu.c cVar) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(headers, "headers");
        this.f40384d = request;
        this.f40385e = protocol;
        this.f40386i = message;
        this.f40387o = i10;
        this.f40388p = gVar;
        this.f40389q = headers;
        this.f40390r = responseBody;
        this.f40391s = response;
        this.f40392t = response2;
        this.f40393u = response3;
        this.f40394v = j10;
        this.f40395w = j11;
        this.f40396x = cVar;
    }

    public static /* synthetic */ String Z(Response response, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = null;
        }
        return response.Q(str, str2);
    }

    public final qu.c C() {
        return this.f40396x;
    }

    public final boolean C0() {
        int i10 = this.f40387o;
        if (i10 == 307 || i10 == 308) {
            return true;
        }
        switch (i10) {
            case ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS /* 300 */:
            case 301:
            case 302:
            case 303:
                return true;
            default:
                return false;
        }
    }

    public final String E0() {
        return this.f40386i;
    }

    public final Response F0() {
        return this.f40391s;
    }

    public final a G0() {
        return new a(this);
    }

    public final Response H0() {
        return this.f40393u;
    }

    public final g I() {
        return this.f40388p;
    }

    public final String J(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return Z(this, name, null, 2, null);
    }

    public final j L0() {
        return this.f40385e;
    }

    public final long N0() {
        return this.f40395w;
    }

    public final Request O0() {
        return this.f40384d;
    }

    public final String Q(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = this.f40389q.c(name);
        if (c10 == null) {
            return str;
        }
        return c10;
    }

    public final long S0() {
        return this.f40394v;
    }

    public final ResponseBody a() {
        return this.f40390r;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ResponseBody responseBody = this.f40390r;
        if (responseBody != null) {
            responseBody.close();
            return;
        }
        throw new IllegalStateException("response is not eligible for a body and must not be closed");
    }

    public final int h() {
        return this.f40387o;
    }

    public final Headers i() {
        return this.f40389q;
    }

    public final boolean isSuccessful() {
        int i10 = this.f40387o;
        if (200 > i10 || i10 >= 300) {
            return false;
        }
        return true;
    }

    public final Request m() {
        return this.f40384d;
    }

    public final ResponseBody n() {
        return this.f40390r;
    }

    public final CacheControl p() {
        CacheControl cacheControl = this.f40397y;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f40216n.b(this.f40389q);
            this.f40397y = b10;
            return b10;
        }
        return cacheControl;
    }

    public final Response s() {
        return this.f40392t;
    }

    public String toString() {
        return "Response{protocol=" + this.f40385e + ", code=" + this.f40387o + ", message=" + this.f40386i + ", url=" + this.f40384d.n() + '}';
    }

    public final List y() {
        String str;
        Headers headers = this.f40389q;
        int i10 = this.f40387o;
        if (i10 != 401) {
            if (i10 != 407) {
                return CollectionsKt.l();
            }
            str = "Proxy-Authenticate";
        } else {
            str = "WWW-Authenticate";
        }
        return ru.e.a(headers, str);
    }

    public final int z() {
        return this.f40387o;
    }

    public final Headers z0() {
        return this.f40389q;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private Request f40398a;

        /* renamed from: b  reason: collision with root package name */
        private j f40399b;

        /* renamed from: c  reason: collision with root package name */
        private int f40400c;

        /* renamed from: d  reason: collision with root package name */
        private String f40401d;

        /* renamed from: e  reason: collision with root package name */
        private g f40402e;

        /* renamed from: f  reason: collision with root package name */
        private Headers.a f40403f;

        /* renamed from: g  reason: collision with root package name */
        private ResponseBody f40404g;

        /* renamed from: h  reason: collision with root package name */
        private Response f40405h;

        /* renamed from: i  reason: collision with root package name */
        private Response f40406i;

        /* renamed from: j  reason: collision with root package name */
        private Response f40407j;

        /* renamed from: k  reason: collision with root package name */
        private long f40408k;

        /* renamed from: l  reason: collision with root package name */
        private long f40409l;

        /* renamed from: m  reason: collision with root package name */
        private qu.c f40410m;

        public a() {
            this.f40400c = -1;
            this.f40403f = new Headers.a();
        }

        private final void e(Response response) {
            if (response == null || response.n() == null) {
                return;
            }
            throw new IllegalArgumentException("priorResponse.body != null");
        }

        private final void f(String str, Response response) {
            if (response != null) {
                if (response.n() == null) {
                    if (response.F0() == null) {
                        if (response.s() == null) {
                            if (response.H0() == null) {
                                return;
                            }
                            throw new IllegalArgumentException((str + ".priorResponse != null").toString());
                        }
                        throw new IllegalArgumentException((str + ".cacheResponse != null").toString());
                    }
                    throw new IllegalArgumentException((str + ".networkResponse != null").toString());
                }
                throw new IllegalArgumentException((str + ".body != null").toString());
            }
        }

        public a a(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f40403f.a(name, value);
            return this;
        }

        public a b(ResponseBody responseBody) {
            this.f40404g = responseBody;
            return this;
        }

        public Response c() {
            int i10 = this.f40400c;
            if (i10 >= 0) {
                Request request = this.f40398a;
                if (request != null) {
                    j jVar = this.f40399b;
                    if (jVar != null) {
                        String str = this.f40401d;
                        if (str != null) {
                            return new Response(request, jVar, str, i10, this.f40402e, this.f40403f.f(), this.f40404g, this.f40405h, this.f40406i, this.f40407j, this.f40408k, this.f40409l, this.f40410m);
                        }
                        throw new IllegalStateException("message == null");
                    }
                    throw new IllegalStateException("protocol == null");
                }
                throw new IllegalStateException("request == null");
            }
            throw new IllegalStateException(("code < 0: " + this.f40400c).toString());
        }

        public a d(Response response) {
            f("cacheResponse", response);
            this.f40406i = response;
            return this;
        }

        public a g(int i10) {
            this.f40400c = i10;
            return this;
        }

        public final int h() {
            return this.f40400c;
        }

        public a i(g gVar) {
            this.f40402e = gVar;
            return this;
        }

        public a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f40403f.j(name, value);
            return this;
        }

        public a k(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f40403f = headers.g();
            return this;
        }

        public final void l(qu.c deferredTrailers) {
            Intrinsics.checkNotNullParameter(deferredTrailers, "deferredTrailers");
            this.f40410m = deferredTrailers;
        }

        public a m(String message) {
            Intrinsics.checkNotNullParameter(message, "message");
            this.f40401d = message;
            return this;
        }

        public a n(Response response) {
            f("networkResponse", response);
            this.f40405h = response;
            return this;
        }

        public a o(Response response) {
            e(response);
            this.f40407j = response;
            return this;
        }

        public a p(j protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            this.f40399b = protocol;
            return this;
        }

        public a q(long j10) {
            this.f40409l = j10;
            return this;
        }

        public a r(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f40398a = request;
            return this;
        }

        public a s(long j10) {
            this.f40408k = j10;
            return this;
        }

        public a(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f40400c = -1;
            this.f40398a = response.O0();
            this.f40399b = response.L0();
            this.f40400c = response.z();
            this.f40401d = response.E0();
            this.f40402e = response.I();
            this.f40403f = response.z0().g();
            this.f40404g = response.n();
            this.f40405h = response.F0();
            this.f40406i = response.s();
            this.f40407j = response.H0();
            this.f40408k = response.S0();
            this.f40409l = response.N0();
            this.f40410m = response.C();
        }
    }
}
