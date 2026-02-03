package okhttp3;

import com.facebook.react.views.image.ReactImageView;
import java.io.Closeable;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import ut.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Response implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Request f44300d;

    /* renamed from: e  reason: collision with root package name */
    private final j f44301e;

    /* renamed from: i  reason: collision with root package name */
    private final String f44302i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44303o;

    /* renamed from: p  reason: collision with root package name */
    private final g f44304p;

    /* renamed from: q  reason: collision with root package name */
    private final Headers f44305q;

    /* renamed from: r  reason: collision with root package name */
    private final ResponseBody f44306r;

    /* renamed from: s  reason: collision with root package name */
    private final Response f44307s;

    /* renamed from: t  reason: collision with root package name */
    private final Response f44308t;

    /* renamed from: u  reason: collision with root package name */
    private final Response f44309u;

    /* renamed from: v  reason: collision with root package name */
    private final long f44310v;

    /* renamed from: w  reason: collision with root package name */
    private final long f44311w;

    /* renamed from: x  reason: collision with root package name */
    private final zt.c f44312x;

    /* renamed from: y  reason: collision with root package name */
    private CacheControl f44313y;

    public Response(Request request, j protocol, String message, int i10, g gVar, Headers headers, ResponseBody responseBody, Response response, Response response2, Response response3, long j10, long j11, zt.c cVar) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(headers, "headers");
        this.f44300d = request;
        this.f44301e = protocol;
        this.f44302i = message;
        this.f44303o = i10;
        this.f44304p = gVar;
        this.f44305q = headers;
        this.f44306r = responseBody;
        this.f44307s = response;
        this.f44308t = response2;
        this.f44309u = response3;
        this.f44310v = j10;
        this.f44311w = j11;
        this.f44312x = cVar;
    }

    public static /* synthetic */ String E0(Response response, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = null;
        }
        return response.D0(str, str2);
    }

    public final CacheControl B() {
        CacheControl cacheControl = this.f44313y;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f44132n.b(this.f44305q);
            this.f44313y = b10;
            return b10;
        }
        return cacheControl;
    }

    public final String D0(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = this.f44305q.c(name);
        if (c10 == null) {
            return str;
        }
        return c10;
    }

    public final Response E() {
        return this.f44308t;
    }

    public final List F() {
        String str;
        Headers headers = this.f44305q;
        int i10 = this.f44303o;
        if (i10 != 401) {
            if (i10 != 407) {
                return CollectionsKt.l();
            }
            str = "Proxy-Authenticate";
        } else {
            str = "WWW-Authenticate";
        }
        return au.e.a(headers, str);
    }

    public final Headers F0() {
        return this.f44305q;
    }

    public final boolean G0() {
        int i10 = this.f44303o;
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

    public final String J0() {
        return this.f44302i;
    }

    public final Response K0() {
        return this.f44307s;
    }

    public final int L() {
        return this.f44303o;
    }

    public final a L0() {
        return new a(this);
    }

    public final zt.c N() {
        return this.f44312x;
    }

    public final Response O0() {
        return this.f44309u;
    }

    public final g V() {
        return this.f44304p;
    }

    public final j V0() {
        return this.f44301e;
    }

    public final long Y0() {
        return this.f44311w;
    }

    public final Request Z0() {
        return this.f44300d;
    }

    public final ResponseBody a() {
        return this.f44306r;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ResponseBody responseBody = this.f44306r;
        if (responseBody != null) {
            responseBody.close();
            return;
        }
        throw new IllegalStateException("response is not eligible for a body and must not be closed");
    }

    public final long e1() {
        return this.f44310v;
    }

    public final int h() {
        return this.f44303o;
    }

    public final boolean isSuccessful() {
        int i10 = this.f44303o;
        if (200 > i10 || i10 >= 300) {
            return false;
        }
        return true;
    }

    public final Headers l() {
        return this.f44305q;
    }

    public final Request n() {
        return this.f44300d;
    }

    public final String t0(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return E0(this, name, null, 2, null);
    }

    public String toString() {
        return "Response{protocol=" + this.f44301e + ", code=" + this.f44303o + ", message=" + this.f44302i + ", url=" + this.f44300d.n() + '}';
    }

    public final ResponseBody x() {
        return this.f44306r;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private Request f44314a;

        /* renamed from: b  reason: collision with root package name */
        private j f44315b;

        /* renamed from: c  reason: collision with root package name */
        private int f44316c;

        /* renamed from: d  reason: collision with root package name */
        private String f44317d;

        /* renamed from: e  reason: collision with root package name */
        private g f44318e;

        /* renamed from: f  reason: collision with root package name */
        private Headers.a f44319f;

        /* renamed from: g  reason: collision with root package name */
        private ResponseBody f44320g;

        /* renamed from: h  reason: collision with root package name */
        private Response f44321h;

        /* renamed from: i  reason: collision with root package name */
        private Response f44322i;

        /* renamed from: j  reason: collision with root package name */
        private Response f44323j;

        /* renamed from: k  reason: collision with root package name */
        private long f44324k;

        /* renamed from: l  reason: collision with root package name */
        private long f44325l;

        /* renamed from: m  reason: collision with root package name */
        private zt.c f44326m;

        public a() {
            this.f44316c = -1;
            this.f44319f = new Headers.a();
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
                    if (response.K0() == null) {
                        if (response.E() == null) {
                            if (response.O0() == null) {
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
            this.f44319f.a(name, value);
            return this;
        }

        public a b(ResponseBody responseBody) {
            this.f44320g = responseBody;
            return this;
        }

        public Response c() {
            int i10 = this.f44316c;
            if (i10 >= 0) {
                Request request = this.f44314a;
                if (request != null) {
                    j jVar = this.f44315b;
                    if (jVar != null) {
                        String str = this.f44317d;
                        if (str != null) {
                            return new Response(request, jVar, str, i10, this.f44318e, this.f44319f.f(), this.f44320g, this.f44321h, this.f44322i, this.f44323j, this.f44324k, this.f44325l, this.f44326m);
                        }
                        throw new IllegalStateException("message == null");
                    }
                    throw new IllegalStateException("protocol == null");
                }
                throw new IllegalStateException("request == null");
            }
            throw new IllegalStateException(("code < 0: " + this.f44316c).toString());
        }

        public a d(Response response) {
            f("cacheResponse", response);
            this.f44322i = response;
            return this;
        }

        public a g(int i10) {
            this.f44316c = i10;
            return this;
        }

        public final int h() {
            return this.f44316c;
        }

        public a i(g gVar) {
            this.f44318e = gVar;
            return this;
        }

        public a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f44319f.j(name, value);
            return this;
        }

        public a k(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f44319f = headers.g();
            return this;
        }

        public final void l(zt.c deferredTrailers) {
            Intrinsics.checkNotNullParameter(deferredTrailers, "deferredTrailers");
            this.f44326m = deferredTrailers;
        }

        public a m(String message) {
            Intrinsics.checkNotNullParameter(message, "message");
            this.f44317d = message;
            return this;
        }

        public a n(Response response) {
            f("networkResponse", response);
            this.f44321h = response;
            return this;
        }

        public a o(Response response) {
            e(response);
            this.f44323j = response;
            return this;
        }

        public a p(j protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            this.f44315b = protocol;
            return this;
        }

        public a q(long j10) {
            this.f44325l = j10;
            return this;
        }

        public a r(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f44314a = request;
            return this;
        }

        public a s(long j10) {
            this.f44324k = j10;
            return this;
        }

        public a(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f44316c = -1;
            this.f44314a = response.Z0();
            this.f44315b = response.V0();
            this.f44316c = response.L();
            this.f44317d = response.J0();
            this.f44318e = response.V();
            this.f44319f = response.F0().g();
            this.f44320g = response.x();
            this.f44321h = response.K0();
            this.f44322i = response.E();
            this.f44323j = response.O0();
            this.f44324k = response.e1();
            this.f44325l = response.Y0();
            this.f44326m = response.N();
        }
    }
}
