package okhttp3;

import com.facebook.react.views.image.ReactImageView;
import java.io.Closeable;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import wt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Response implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Request f44100d;

    /* renamed from: e  reason: collision with root package name */
    private final j f44101e;

    /* renamed from: i  reason: collision with root package name */
    private final String f44102i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44103o;

    /* renamed from: p  reason: collision with root package name */
    private final g f44104p;

    /* renamed from: q  reason: collision with root package name */
    private final Headers f44105q;

    /* renamed from: r  reason: collision with root package name */
    private final ResponseBody f44106r;

    /* renamed from: s  reason: collision with root package name */
    private final Response f44107s;

    /* renamed from: t  reason: collision with root package name */
    private final Response f44108t;

    /* renamed from: u  reason: collision with root package name */
    private final Response f44109u;

    /* renamed from: v  reason: collision with root package name */
    private final long f44110v;

    /* renamed from: w  reason: collision with root package name */
    private final long f44111w;

    /* renamed from: x  reason: collision with root package name */
    private final bu.c f44112x;

    /* renamed from: y  reason: collision with root package name */
    private CacheControl f44113y;

    public Response(Request request, j protocol, String message, int i10, g gVar, Headers headers, ResponseBody responseBody, Response response, Response response2, Response response3, long j10, long j11, bu.c cVar) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(headers, "headers");
        this.f44100d = request;
        this.f44101e = protocol;
        this.f44102i = message;
        this.f44103o = i10;
        this.f44104p = gVar;
        this.f44105q = headers;
        this.f44106r = responseBody;
        this.f44107s = response;
        this.f44108t = response2;
        this.f44109u = response3;
        this.f44110v = j10;
        this.f44111w = j11;
        this.f44112x = cVar;
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
        CacheControl cacheControl = this.f44113y;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f43932n.b(this.f44105q);
            this.f44113y = b10;
            return b10;
        }
        return cacheControl;
    }

    public final String C0(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = this.f44105q.c(name);
        if (c10 == null) {
            return str;
        }
        return c10;
    }

    public final Response E() {
        return this.f44108t;
    }

    public final Headers E0() {
        return this.f44105q;
    }

    public final List F() {
        String str;
        Headers headers = this.f44105q;
        int i10 = this.f44103o;
        if (i10 != 401) {
            if (i10 != 407) {
                return CollectionsKt.l();
            }
            str = "Proxy-Authenticate";
        } else {
            str = "WWW-Authenticate";
        }
        return cu.e.a(headers, str);
    }

    public final boolean F0() {
        int i10 = this.f44103o;
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
        return this.f44102i;
    }

    public final Response J0() {
        return this.f44107s;
    }

    public final int L() {
        return this.f44103o;
    }

    public final a M0() {
        return new a(this);
    }

    public final bu.c N() {
        return this.f44112x;
    }

    public final Response R0() {
        return this.f44109u;
    }

    public final g V() {
        return this.f44104p;
    }

    public final j V0() {
        return this.f44101e;
    }

    public final long Y0() {
        return this.f44111w;
    }

    public final Request Z0() {
        return this.f44100d;
    }

    public final ResponseBody a() {
        return this.f44106r;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ResponseBody responseBody = this.f44106r;
        if (responseBody != null) {
            responseBody.close();
            return;
        }
        throw new IllegalStateException("response is not eligible for a body and must not be closed");
    }

    public final long e1() {
        return this.f44110v;
    }

    public final int h() {
        return this.f44103o;
    }

    public final boolean isSuccessful() {
        int i10 = this.f44103o;
        if (200 > i10 || i10 >= 300) {
            return false;
        }
        return true;
    }

    public final Headers l() {
        return this.f44105q;
    }

    public final Request n() {
        return this.f44100d;
    }

    public String toString() {
        return "Response{protocol=" + this.f44101e + ", code=" + this.f44103o + ", message=" + this.f44102i + ", url=" + this.f44100d.n() + '}';
    }

    public final ResponseBody x() {
        return this.f44106r;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private Request f44114a;

        /* renamed from: b  reason: collision with root package name */
        private j f44115b;

        /* renamed from: c  reason: collision with root package name */
        private int f44116c;

        /* renamed from: d  reason: collision with root package name */
        private String f44117d;

        /* renamed from: e  reason: collision with root package name */
        private g f44118e;

        /* renamed from: f  reason: collision with root package name */
        private Headers.a f44119f;

        /* renamed from: g  reason: collision with root package name */
        private ResponseBody f44120g;

        /* renamed from: h  reason: collision with root package name */
        private Response f44121h;

        /* renamed from: i  reason: collision with root package name */
        private Response f44122i;

        /* renamed from: j  reason: collision with root package name */
        private Response f44123j;

        /* renamed from: k  reason: collision with root package name */
        private long f44124k;

        /* renamed from: l  reason: collision with root package name */
        private long f44125l;

        /* renamed from: m  reason: collision with root package name */
        private bu.c f44126m;

        public a() {
            this.f44116c = -1;
            this.f44119f = new Headers.a();
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
            this.f44119f.a(name, value);
            return this;
        }

        public a b(ResponseBody responseBody) {
            this.f44120g = responseBody;
            return this;
        }

        public Response c() {
            int i10 = this.f44116c;
            if (i10 >= 0) {
                Request request = this.f44114a;
                if (request != null) {
                    j jVar = this.f44115b;
                    if (jVar != null) {
                        String str = this.f44117d;
                        if (str != null) {
                            return new Response(request, jVar, str, i10, this.f44118e, this.f44119f.f(), this.f44120g, this.f44121h, this.f44122i, this.f44123j, this.f44124k, this.f44125l, this.f44126m);
                        }
                        throw new IllegalStateException("message == null");
                    }
                    throw new IllegalStateException("protocol == null");
                }
                throw new IllegalStateException("request == null");
            }
            throw new IllegalStateException(("code < 0: " + this.f44116c).toString());
        }

        public a d(Response response) {
            f("cacheResponse", response);
            this.f44122i = response;
            return this;
        }

        public a g(int i10) {
            this.f44116c = i10;
            return this;
        }

        public final int h() {
            return this.f44116c;
        }

        public a i(g gVar) {
            this.f44118e = gVar;
            return this;
        }

        public a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f44119f.j(name, value);
            return this;
        }

        public a k(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f44119f = headers.g();
            return this;
        }

        public final void l(bu.c deferredTrailers) {
            Intrinsics.checkNotNullParameter(deferredTrailers, "deferredTrailers");
            this.f44126m = deferredTrailers;
        }

        public a m(String message) {
            Intrinsics.checkNotNullParameter(message, "message");
            this.f44117d = message;
            return this;
        }

        public a n(Response response) {
            f("networkResponse", response);
            this.f44121h = response;
            return this;
        }

        public a o(Response response) {
            e(response);
            this.f44123j = response;
            return this;
        }

        public a p(j protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            this.f44115b = protocol;
            return this;
        }

        public a q(long j10) {
            this.f44125l = j10;
            return this;
        }

        public a r(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f44114a = request;
            return this;
        }

        public a s(long j10) {
            this.f44124k = j10;
            return this;
        }

        public a(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f44116c = -1;
            this.f44114a = response.Z0();
            this.f44115b = response.V0();
            this.f44116c = response.L();
            this.f44117d = response.I0();
            this.f44118e = response.V();
            this.f44119f = response.E0().g();
            this.f44120g = response.x();
            this.f44121h = response.J0();
            this.f44122i = response.E();
            this.f44123j = response.R0();
            this.f44124k = response.e1();
            this.f44125l = response.Y0();
            this.f44126m = response.N();
        }
    }
}
