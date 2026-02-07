package okhttp3;

import bu.j;
import com.facebook.react.views.image.ReactImageView;
import java.io.Closeable;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Response implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Request f43007d;

    /* renamed from: e  reason: collision with root package name */
    private final j f43008e;

    /* renamed from: i  reason: collision with root package name */
    private final String f43009i;

    /* renamed from: o  reason: collision with root package name */
    private final int f43010o;

    /* renamed from: p  reason: collision with root package name */
    private final g f43011p;

    /* renamed from: q  reason: collision with root package name */
    private final Headers f43012q;

    /* renamed from: r  reason: collision with root package name */
    private final ResponseBody f43013r;

    /* renamed from: s  reason: collision with root package name */
    private final Response f43014s;

    /* renamed from: t  reason: collision with root package name */
    private final Response f43015t;

    /* renamed from: u  reason: collision with root package name */
    private final Response f43016u;

    /* renamed from: v  reason: collision with root package name */
    private final long f43017v;

    /* renamed from: w  reason: collision with root package name */
    private final long f43018w;

    /* renamed from: x  reason: collision with root package name */
    private final gu.c f43019x;

    /* renamed from: y  reason: collision with root package name */
    private CacheControl f43020y;

    public Response(Request request, j protocol, String message, int i10, g gVar, Headers headers, ResponseBody responseBody, Response response, Response response2, Response response3, long j10, long j11, gu.c cVar) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(headers, "headers");
        this.f43007d = request;
        this.f43008e = protocol;
        this.f43009i = message;
        this.f43010o = i10;
        this.f43011p = gVar;
        this.f43012q = headers;
        this.f43013r = responseBody;
        this.f43014s = response;
        this.f43015t = response2;
        this.f43016u = response3;
        this.f43017v = j10;
        this.f43018w = j11;
        this.f43019x = cVar;
    }

    public static /* synthetic */ String Y(Response response, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = null;
        }
        return response.P(str, str2);
    }

    public final gu.c C() {
        return this.f43019x;
    }

    public final Headers E0() {
        return this.f43012q;
    }

    public final boolean F0() {
        int i10 = this.f43010o;
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

    public final g I() {
        return this.f43011p;
    }

    public final String I0() {
        return this.f43009i;
    }

    public final String J(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return Y(this, name, null, 2, null);
    }

    public final Response J0() {
        return this.f43014s;
    }

    public final a K0() {
        return new a(this);
    }

    public final Response L0() {
        return this.f43016u;
    }

    public final j O0() {
        return this.f43008e;
    }

    public final String P(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = this.f43012q.c(name);
        if (c10 == null) {
            return str;
        }
        return c10;
    }

    public final long V0() {
        return this.f43018w;
    }

    public final Request Y0() {
        return this.f43007d;
    }

    public final ResponseBody a() {
        return this.f43013r;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ResponseBody responseBody = this.f43013r;
        if (responseBody != null) {
            responseBody.close();
            return;
        }
        throw new IllegalStateException("response is not eligible for a body and must not be closed");
    }

    public final long d1() {
        return this.f43017v;
    }

    public final int g() {
        return this.f43010o;
    }

    public final boolean isSuccessful() {
        int i10 = this.f43010o;
        if (200 > i10 || i10 >= 300) {
            return false;
        }
        return true;
    }

    public final Headers k() {
        return this.f43012q;
    }

    public final Request m() {
        return this.f43007d;
    }

    public final ResponseBody n() {
        return this.f43013r;
    }

    public final CacheControl p() {
        CacheControl cacheControl = this.f43020y;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f42839n.b(this.f43012q);
            this.f43020y = b10;
            return b10;
        }
        return cacheControl;
    }

    public final Response s() {
        return this.f43015t;
    }

    public String toString() {
        return "Response{protocol=" + this.f43008e + ", code=" + this.f43010o + ", message=" + this.f43009i + ", url=" + this.f43007d.n() + '}';
    }

    public final List y() {
        String str;
        Headers headers = this.f43012q;
        int i10 = this.f43010o;
        if (i10 != 401) {
            if (i10 != 407) {
                return CollectionsKt.l();
            }
            str = "Proxy-Authenticate";
        } else {
            str = "WWW-Authenticate";
        }
        return hu.e.a(headers, str);
    }

    public final int z() {
        return this.f43010o;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private Request f43021a;

        /* renamed from: b  reason: collision with root package name */
        private j f43022b;

        /* renamed from: c  reason: collision with root package name */
        private int f43023c;

        /* renamed from: d  reason: collision with root package name */
        private String f43024d;

        /* renamed from: e  reason: collision with root package name */
        private g f43025e;

        /* renamed from: f  reason: collision with root package name */
        private Headers.a f43026f;

        /* renamed from: g  reason: collision with root package name */
        private ResponseBody f43027g;

        /* renamed from: h  reason: collision with root package name */
        private Response f43028h;

        /* renamed from: i  reason: collision with root package name */
        private Response f43029i;

        /* renamed from: j  reason: collision with root package name */
        private Response f43030j;

        /* renamed from: k  reason: collision with root package name */
        private long f43031k;

        /* renamed from: l  reason: collision with root package name */
        private long f43032l;

        /* renamed from: m  reason: collision with root package name */
        private gu.c f43033m;

        public a() {
            this.f43023c = -1;
            this.f43026f = new Headers.a();
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
                    if (response.J0() == null) {
                        if (response.s() == null) {
                            if (response.L0() == null) {
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
            this.f43026f.a(name, value);
            return this;
        }

        public a b(ResponseBody responseBody) {
            this.f43027g = responseBody;
            return this;
        }

        public Response c() {
            int i10 = this.f43023c;
            if (i10 >= 0) {
                Request request = this.f43021a;
                if (request != null) {
                    j jVar = this.f43022b;
                    if (jVar != null) {
                        String str = this.f43024d;
                        if (str != null) {
                            return new Response(request, jVar, str, i10, this.f43025e, this.f43026f.f(), this.f43027g, this.f43028h, this.f43029i, this.f43030j, this.f43031k, this.f43032l, this.f43033m);
                        }
                        throw new IllegalStateException("message == null");
                    }
                    throw new IllegalStateException("protocol == null");
                }
                throw new IllegalStateException("request == null");
            }
            throw new IllegalStateException(("code < 0: " + this.f43023c).toString());
        }

        public a d(Response response) {
            f("cacheResponse", response);
            this.f43029i = response;
            return this;
        }

        public a g(int i10) {
            this.f43023c = i10;
            return this;
        }

        public final int h() {
            return this.f43023c;
        }

        public a i(g gVar) {
            this.f43025e = gVar;
            return this;
        }

        public a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f43026f.j(name, value);
            return this;
        }

        public a k(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f43026f = headers.g();
            return this;
        }

        public final void l(gu.c deferredTrailers) {
            Intrinsics.checkNotNullParameter(deferredTrailers, "deferredTrailers");
            this.f43033m = deferredTrailers;
        }

        public a m(String message) {
            Intrinsics.checkNotNullParameter(message, "message");
            this.f43024d = message;
            return this;
        }

        public a n(Response response) {
            f("networkResponse", response);
            this.f43028h = response;
            return this;
        }

        public a o(Response response) {
            e(response);
            this.f43030j = response;
            return this;
        }

        public a p(j protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            this.f43022b = protocol;
            return this;
        }

        public a q(long j10) {
            this.f43032l = j10;
            return this;
        }

        public a r(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f43021a = request;
            return this;
        }

        public a s(long j10) {
            this.f43031k = j10;
            return this;
        }

        public a(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f43023c = -1;
            this.f43021a = response.Y0();
            this.f43022b = response.O0();
            this.f43023c = response.z();
            this.f43024d = response.I0();
            this.f43025e = response.I();
            this.f43026f = response.E0().g();
            this.f43027g = response.n();
            this.f43028h = response.J0();
            this.f43029i = response.s();
            this.f43030j = response.L0();
            this.f43031k = response.d1();
            this.f43032l = response.V0();
            this.f43033m = response.C();
        }
    }
}
