package okhttp3;

import com.facebook.react.views.image.ReactImageView;
import java.io.Closeable;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import tt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Response implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Request f44156d;

    /* renamed from: e  reason: collision with root package name */
    private final j f44157e;

    /* renamed from: i  reason: collision with root package name */
    private final String f44158i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44159o;

    /* renamed from: p  reason: collision with root package name */
    private final g f44160p;

    /* renamed from: q  reason: collision with root package name */
    private final Headers f44161q;

    /* renamed from: r  reason: collision with root package name */
    private final ResponseBody f44162r;

    /* renamed from: s  reason: collision with root package name */
    private final Response f44163s;

    /* renamed from: t  reason: collision with root package name */
    private final Response f44164t;

    /* renamed from: u  reason: collision with root package name */
    private final Response f44165u;

    /* renamed from: v  reason: collision with root package name */
    private final long f44166v;

    /* renamed from: w  reason: collision with root package name */
    private final long f44167w;

    /* renamed from: x  reason: collision with root package name */
    private final yt.c f44168x;

    /* renamed from: y  reason: collision with root package name */
    private CacheControl f44169y;

    public Response(Request request, j protocol, String message, int i10, g gVar, Headers headers, ResponseBody responseBody, Response response, Response response2, Response response3, long j10, long j11, yt.c cVar) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(headers, "headers");
        this.f44156d = request;
        this.f44157e = protocol;
        this.f44158i = message;
        this.f44159o = i10;
        this.f44160p = gVar;
        this.f44161q = headers;
        this.f44162r = responseBody;
        this.f44163s = response;
        this.f44164t = response2;
        this.f44165u = response3;
        this.f44166v = j10;
        this.f44167w = j11;
        this.f44168x = cVar;
    }

    public static /* synthetic */ String D0(Response response, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = null;
        }
        return response.C0(str, str2);
    }

    public final String A0(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return D0(this, name, null, 2, null);
    }

    public final CacheControl B() {
        CacheControl cacheControl = this.f44169y;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f43988n.b(this.f44161q);
            this.f44169y = b10;
            return b10;
        }
        return cacheControl;
    }

    public final String C0(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = this.f44161q.c(name);
        if (c10 == null) {
            return str;
        }
        return c10;
    }

    public final Response E() {
        return this.f44164t;
    }

    public final Headers E0() {
        return this.f44161q;
    }

    public final List F() {
        String str;
        Headers headers = this.f44161q;
        int i10 = this.f44159o;
        if (i10 != 401) {
            if (i10 != 407) {
                return CollectionsKt.l();
            }
            str = "Proxy-Authenticate";
        } else {
            str = "WWW-Authenticate";
        }
        return zt.e.a(headers, str);
    }

    public final boolean F0() {
        int i10 = this.f44159o;
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

    public final String I0() {
        return this.f44158i;
    }

    public final Response J0() {
        return this.f44163s;
    }

    public final int L() {
        return this.f44159o;
    }

    public final a M0() {
        return new a(this);
    }

    public final yt.c N() {
        return this.f44168x;
    }

    public final Response R0() {
        return this.f44165u;
    }

    public final j U0() {
        return this.f44157e;
    }

    public final g V() {
        return this.f44160p;
    }

    public final long X0() {
        return this.f44167w;
    }

    public final Request Y0() {
        return this.f44156d;
    }

    public final ResponseBody a() {
        return this.f44162r;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ResponseBody responseBody = this.f44162r;
        if (responseBody != null) {
            responseBody.close();
            return;
        }
        throw new IllegalStateException("response is not eligible for a body and must not be closed");
    }

    public final long d1() {
        return this.f44166v;
    }

    public final int h() {
        return this.f44159o;
    }

    public final boolean isSuccessful() {
        int i10 = this.f44159o;
        if (200 > i10 || i10 >= 300) {
            return false;
        }
        return true;
    }

    public final Headers l() {
        return this.f44161q;
    }

    public final Request n() {
        return this.f44156d;
    }

    public String toString() {
        return "Response{protocol=" + this.f44157e + ", code=" + this.f44159o + ", message=" + this.f44158i + ", url=" + this.f44156d.n() + '}';
    }

    public final ResponseBody x() {
        return this.f44162r;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private Request f44170a;

        /* renamed from: b  reason: collision with root package name */
        private j f44171b;

        /* renamed from: c  reason: collision with root package name */
        private int f44172c;

        /* renamed from: d  reason: collision with root package name */
        private String f44173d;

        /* renamed from: e  reason: collision with root package name */
        private g f44174e;

        /* renamed from: f  reason: collision with root package name */
        private Headers.a f44175f;

        /* renamed from: g  reason: collision with root package name */
        private ResponseBody f44176g;

        /* renamed from: h  reason: collision with root package name */
        private Response f44177h;

        /* renamed from: i  reason: collision with root package name */
        private Response f44178i;

        /* renamed from: j  reason: collision with root package name */
        private Response f44179j;

        /* renamed from: k  reason: collision with root package name */
        private long f44180k;

        /* renamed from: l  reason: collision with root package name */
        private long f44181l;

        /* renamed from: m  reason: collision with root package name */
        private yt.c f44182m;

        public a() {
            this.f44172c = -1;
            this.f44175f = new Headers.a();
        }

        private final void e(Response response) {
            if (response == null || response.x() == null) {
                return;
            }
            throw new IllegalArgumentException("priorResponse.body != null");
        }

        private final void f(String str, Response response) {
            if (response != null) {
                if (response.x() == null) {
                    if (response.J0() == null) {
                        if (response.E() == null) {
                            if (response.R0() == null) {
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
            this.f44175f.a(name, value);
            return this;
        }

        public a b(ResponseBody responseBody) {
            this.f44176g = responseBody;
            return this;
        }

        public Response c() {
            int i10 = this.f44172c;
            if (i10 >= 0) {
                Request request = this.f44170a;
                if (request != null) {
                    j jVar = this.f44171b;
                    if (jVar != null) {
                        String str = this.f44173d;
                        if (str != null) {
                            return new Response(request, jVar, str, i10, this.f44174e, this.f44175f.f(), this.f44176g, this.f44177h, this.f44178i, this.f44179j, this.f44180k, this.f44181l, this.f44182m);
                        }
                        throw new IllegalStateException("message == null");
                    }
                    throw new IllegalStateException("protocol == null");
                }
                throw new IllegalStateException("request == null");
            }
            throw new IllegalStateException(("code < 0: " + this.f44172c).toString());
        }

        public a d(Response response) {
            f("cacheResponse", response);
            this.f44178i = response;
            return this;
        }

        public a g(int i10) {
            this.f44172c = i10;
            return this;
        }

        public final int h() {
            return this.f44172c;
        }

        public a i(g gVar) {
            this.f44174e = gVar;
            return this;
        }

        public a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f44175f.j(name, value);
            return this;
        }

        public a k(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f44175f = headers.g();
            return this;
        }

        public final void l(yt.c deferredTrailers) {
            Intrinsics.checkNotNullParameter(deferredTrailers, "deferredTrailers");
            this.f44182m = deferredTrailers;
        }

        public a m(String message) {
            Intrinsics.checkNotNullParameter(message, "message");
            this.f44173d = message;
            return this;
        }

        public a n(Response response) {
            f("networkResponse", response);
            this.f44177h = response;
            return this;
        }

        public a o(Response response) {
            e(response);
            this.f44179j = response;
            return this;
        }

        public a p(j protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            this.f44171b = protocol;
            return this;
        }

        public a q(long j10) {
            this.f44181l = j10;
            return this;
        }

        public a r(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f44170a = request;
            return this;
        }

        public a s(long j10) {
            this.f44180k = j10;
            return this;
        }

        public a(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f44172c = -1;
            this.f44170a = response.Y0();
            this.f44171b = response.U0();
            this.f44172c = response.L();
            this.f44173d = response.I0();
            this.f44174e = response.V();
            this.f44175f = response.E0().g();
            this.f44176g = response.x();
            this.f44177h = response.J0();
            this.f44178i = response.E();
            this.f44179j = response.R0();
            this.f44180k = response.d1();
            this.f44181l = response.X0();
            this.f44182m = response.N();
        }
    }
}
