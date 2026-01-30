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
    private final Request f44172d;

    /* renamed from: e  reason: collision with root package name */
    private final j f44173e;

    /* renamed from: i  reason: collision with root package name */
    private final String f44174i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44175o;

    /* renamed from: p  reason: collision with root package name */
    private final g f44176p;

    /* renamed from: q  reason: collision with root package name */
    private final Headers f44177q;

    /* renamed from: r  reason: collision with root package name */
    private final ResponseBody f44178r;

    /* renamed from: s  reason: collision with root package name */
    private final Response f44179s;

    /* renamed from: t  reason: collision with root package name */
    private final Response f44180t;

    /* renamed from: u  reason: collision with root package name */
    private final Response f44181u;

    /* renamed from: v  reason: collision with root package name */
    private final long f44182v;

    /* renamed from: w  reason: collision with root package name */
    private final long f44183w;

    /* renamed from: x  reason: collision with root package name */
    private final yt.c f44184x;

    /* renamed from: y  reason: collision with root package name */
    private CacheControl f44185y;

    public Response(Request request, j protocol, String message, int i10, g gVar, Headers headers, ResponseBody responseBody, Response response, Response response2, Response response3, long j10, long j11, yt.c cVar) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(headers, "headers");
        this.f44172d = request;
        this.f44173e = protocol;
        this.f44174i = message;
        this.f44175o = i10;
        this.f44176p = gVar;
        this.f44177q = headers;
        this.f44178r = responseBody;
        this.f44179s = response;
        this.f44180t = response2;
        this.f44181u = response3;
        this.f44182v = j10;
        this.f44183w = j11;
        this.f44184x = cVar;
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
        CacheControl cacheControl = this.f44185y;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f44004n.b(this.f44177q);
            this.f44185y = b10;
            return b10;
        }
        return cacheControl;
    }

    public final String C0(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = this.f44177q.c(name);
        if (c10 == null) {
            return str;
        }
        return c10;
    }

    public final Response E() {
        return this.f44180t;
    }

    public final Headers E0() {
        return this.f44177q;
    }

    public final List F() {
        String str;
        Headers headers = this.f44177q;
        int i10 = this.f44175o;
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
        int i10 = this.f44175o;
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
        return this.f44174i;
    }

    public final Response J0() {
        return this.f44179s;
    }

    public final int L() {
        return this.f44175o;
    }

    public final a M0() {
        return new a(this);
    }

    public final yt.c N() {
        return this.f44184x;
    }

    public final Response R0() {
        return this.f44181u;
    }

    public final j U0() {
        return this.f44173e;
    }

    public final g V() {
        return this.f44176p;
    }

    public final long X0() {
        return this.f44183w;
    }

    public final Request Y0() {
        return this.f44172d;
    }

    public final ResponseBody a() {
        return this.f44178r;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ResponseBody responseBody = this.f44178r;
        if (responseBody != null) {
            responseBody.close();
            return;
        }
        throw new IllegalStateException("response is not eligible for a body and must not be closed");
    }

    public final long d1() {
        return this.f44182v;
    }

    public final int h() {
        return this.f44175o;
    }

    public final boolean isSuccessful() {
        int i10 = this.f44175o;
        if (200 > i10 || i10 >= 300) {
            return false;
        }
        return true;
    }

    public final Headers l() {
        return this.f44177q;
    }

    public final Request n() {
        return this.f44172d;
    }

    public String toString() {
        return "Response{protocol=" + this.f44173e + ", code=" + this.f44175o + ", message=" + this.f44174i + ", url=" + this.f44172d.n() + '}';
    }

    public final ResponseBody x() {
        return this.f44178r;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private Request f44186a;

        /* renamed from: b  reason: collision with root package name */
        private j f44187b;

        /* renamed from: c  reason: collision with root package name */
        private int f44188c;

        /* renamed from: d  reason: collision with root package name */
        private String f44189d;

        /* renamed from: e  reason: collision with root package name */
        private g f44190e;

        /* renamed from: f  reason: collision with root package name */
        private Headers.a f44191f;

        /* renamed from: g  reason: collision with root package name */
        private ResponseBody f44192g;

        /* renamed from: h  reason: collision with root package name */
        private Response f44193h;

        /* renamed from: i  reason: collision with root package name */
        private Response f44194i;

        /* renamed from: j  reason: collision with root package name */
        private Response f44195j;

        /* renamed from: k  reason: collision with root package name */
        private long f44196k;

        /* renamed from: l  reason: collision with root package name */
        private long f44197l;

        /* renamed from: m  reason: collision with root package name */
        private yt.c f44198m;

        public a() {
            this.f44188c = -1;
            this.f44191f = new Headers.a();
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
            this.f44191f.a(name, value);
            return this;
        }

        public a b(ResponseBody responseBody) {
            this.f44192g = responseBody;
            return this;
        }

        public Response c() {
            int i10 = this.f44188c;
            if (i10 >= 0) {
                Request request = this.f44186a;
                if (request != null) {
                    j jVar = this.f44187b;
                    if (jVar != null) {
                        String str = this.f44189d;
                        if (str != null) {
                            return new Response(request, jVar, str, i10, this.f44190e, this.f44191f.f(), this.f44192g, this.f44193h, this.f44194i, this.f44195j, this.f44196k, this.f44197l, this.f44198m);
                        }
                        throw new IllegalStateException("message == null");
                    }
                    throw new IllegalStateException("protocol == null");
                }
                throw new IllegalStateException("request == null");
            }
            throw new IllegalStateException(("code < 0: " + this.f44188c).toString());
        }

        public a d(Response response) {
            f("cacheResponse", response);
            this.f44194i = response;
            return this;
        }

        public a g(int i10) {
            this.f44188c = i10;
            return this;
        }

        public final int h() {
            return this.f44188c;
        }

        public a i(g gVar) {
            this.f44190e = gVar;
            return this;
        }

        public a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f44191f.j(name, value);
            return this;
        }

        public a k(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f44191f = headers.g();
            return this;
        }

        public final void l(yt.c deferredTrailers) {
            Intrinsics.checkNotNullParameter(deferredTrailers, "deferredTrailers");
            this.f44198m = deferredTrailers;
        }

        public a m(String message) {
            Intrinsics.checkNotNullParameter(message, "message");
            this.f44189d = message;
            return this;
        }

        public a n(Response response) {
            f("networkResponse", response);
            this.f44193h = response;
            return this;
        }

        public a o(Response response) {
            e(response);
            this.f44195j = response;
            return this;
        }

        public a p(j protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            this.f44187b = protocol;
            return this;
        }

        public a q(long j10) {
            this.f44197l = j10;
            return this;
        }

        public a r(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f44186a = request;
            return this;
        }

        public a s(long j10) {
            this.f44196k = j10;
            return this;
        }

        public a(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f44188c = -1;
            this.f44186a = response.Y0();
            this.f44187b = response.U0();
            this.f44188c = response.L();
            this.f44189d = response.I0();
            this.f44190e = response.V();
            this.f44191f = response.E0().g();
            this.f44192g = response.x();
            this.f44193h = response.J0();
            this.f44194i = response.E();
            this.f44195j = response.R0();
            this.f44196k = response.d1();
            this.f44197l = response.X0();
            this.f44198m = response.N();
        }
    }
}
