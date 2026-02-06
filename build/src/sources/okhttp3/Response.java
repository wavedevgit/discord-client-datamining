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
    private final Request f42959d;

    /* renamed from: e  reason: collision with root package name */
    private final j f42960e;

    /* renamed from: i  reason: collision with root package name */
    private final String f42961i;

    /* renamed from: o  reason: collision with root package name */
    private final int f42962o;

    /* renamed from: p  reason: collision with root package name */
    private final g f42963p;

    /* renamed from: q  reason: collision with root package name */
    private final Headers f42964q;

    /* renamed from: r  reason: collision with root package name */
    private final ResponseBody f42965r;

    /* renamed from: s  reason: collision with root package name */
    private final Response f42966s;

    /* renamed from: t  reason: collision with root package name */
    private final Response f42967t;

    /* renamed from: u  reason: collision with root package name */
    private final Response f42968u;

    /* renamed from: v  reason: collision with root package name */
    private final long f42969v;

    /* renamed from: w  reason: collision with root package name */
    private final long f42970w;

    /* renamed from: x  reason: collision with root package name */
    private final gu.c f42971x;

    /* renamed from: y  reason: collision with root package name */
    private CacheControl f42972y;

    public Response(Request request, j protocol, String message, int i10, g gVar, Headers headers, ResponseBody responseBody, Response response, Response response2, Response response3, long j10, long j11, gu.c cVar) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(headers, "headers");
        this.f42959d = request;
        this.f42960e = protocol;
        this.f42961i = message;
        this.f42962o = i10;
        this.f42963p = gVar;
        this.f42964q = headers;
        this.f42965r = responseBody;
        this.f42966s = response;
        this.f42967t = response2;
        this.f42968u = response3;
        this.f42969v = j10;
        this.f42970w = j11;
        this.f42971x = cVar;
    }

    public static /* synthetic */ String Y(Response response, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = null;
        }
        return response.P(str, str2);
    }

    public final gu.c C() {
        return this.f42971x;
    }

    public final Headers E0() {
        return this.f42964q;
    }

    public final boolean F0() {
        int i10 = this.f42962o;
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
        return this.f42963p;
    }

    public final String I0() {
        return this.f42961i;
    }

    public final String J(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return Y(this, name, null, 2, null);
    }

    public final Response J0() {
        return this.f42966s;
    }

    public final a K0() {
        return new a(this);
    }

    public final Response L0() {
        return this.f42968u;
    }

    public final j O0() {
        return this.f42960e;
    }

    public final String P(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = this.f42964q.c(name);
        if (c10 == null) {
            return str;
        }
        return c10;
    }

    public final long V0() {
        return this.f42970w;
    }

    public final Request Y0() {
        return this.f42959d;
    }

    public final ResponseBody a() {
        return this.f42965r;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ResponseBody responseBody = this.f42965r;
        if (responseBody != null) {
            responseBody.close();
            return;
        }
        throw new IllegalStateException("response is not eligible for a body and must not be closed");
    }

    public final long d1() {
        return this.f42969v;
    }

    public final int g() {
        return this.f42962o;
    }

    public final boolean isSuccessful() {
        int i10 = this.f42962o;
        if (200 > i10 || i10 >= 300) {
            return false;
        }
        return true;
    }

    public final Headers k() {
        return this.f42964q;
    }

    public final Request m() {
        return this.f42959d;
    }

    public final ResponseBody n() {
        return this.f42965r;
    }

    public final CacheControl p() {
        CacheControl cacheControl = this.f42972y;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f42791n.b(this.f42964q);
            this.f42972y = b10;
            return b10;
        }
        return cacheControl;
    }

    public final Response s() {
        return this.f42967t;
    }

    public String toString() {
        return "Response{protocol=" + this.f42960e + ", code=" + this.f42962o + ", message=" + this.f42961i + ", url=" + this.f42959d.n() + '}';
    }

    public final List y() {
        String str;
        Headers headers = this.f42964q;
        int i10 = this.f42962o;
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
        return this.f42962o;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private Request f42973a;

        /* renamed from: b  reason: collision with root package name */
        private j f42974b;

        /* renamed from: c  reason: collision with root package name */
        private int f42975c;

        /* renamed from: d  reason: collision with root package name */
        private String f42976d;

        /* renamed from: e  reason: collision with root package name */
        private g f42977e;

        /* renamed from: f  reason: collision with root package name */
        private Headers.a f42978f;

        /* renamed from: g  reason: collision with root package name */
        private ResponseBody f42979g;

        /* renamed from: h  reason: collision with root package name */
        private Response f42980h;

        /* renamed from: i  reason: collision with root package name */
        private Response f42981i;

        /* renamed from: j  reason: collision with root package name */
        private Response f42982j;

        /* renamed from: k  reason: collision with root package name */
        private long f42983k;

        /* renamed from: l  reason: collision with root package name */
        private long f42984l;

        /* renamed from: m  reason: collision with root package name */
        private gu.c f42985m;

        public a() {
            this.f42975c = -1;
            this.f42978f = new Headers.a();
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
            this.f42978f.a(name, value);
            return this;
        }

        public a b(ResponseBody responseBody) {
            this.f42979g = responseBody;
            return this;
        }

        public Response c() {
            int i10 = this.f42975c;
            if (i10 >= 0) {
                Request request = this.f42973a;
                if (request != null) {
                    j jVar = this.f42974b;
                    if (jVar != null) {
                        String str = this.f42976d;
                        if (str != null) {
                            return new Response(request, jVar, str, i10, this.f42977e, this.f42978f.f(), this.f42979g, this.f42980h, this.f42981i, this.f42982j, this.f42983k, this.f42984l, this.f42985m);
                        }
                        throw new IllegalStateException("message == null");
                    }
                    throw new IllegalStateException("protocol == null");
                }
                throw new IllegalStateException("request == null");
            }
            throw new IllegalStateException(("code < 0: " + this.f42975c).toString());
        }

        public a d(Response response) {
            f("cacheResponse", response);
            this.f42981i = response;
            return this;
        }

        public a g(int i10) {
            this.f42975c = i10;
            return this;
        }

        public final int h() {
            return this.f42975c;
        }

        public a i(g gVar) {
            this.f42977e = gVar;
            return this;
        }

        public a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f42978f.j(name, value);
            return this;
        }

        public a k(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f42978f = headers.g();
            return this;
        }

        public final void l(gu.c deferredTrailers) {
            Intrinsics.checkNotNullParameter(deferredTrailers, "deferredTrailers");
            this.f42985m = deferredTrailers;
        }

        public a m(String message) {
            Intrinsics.checkNotNullParameter(message, "message");
            this.f42976d = message;
            return this;
        }

        public a n(Response response) {
            f("networkResponse", response);
            this.f42980h = response;
            return this;
        }

        public a o(Response response) {
            e(response);
            this.f42982j = response;
            return this;
        }

        public a p(j protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            this.f42974b = protocol;
            return this;
        }

        public a q(long j10) {
            this.f42984l = j10;
            return this;
        }

        public a r(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f42973a = request;
            return this;
        }

        public a s(long j10) {
            this.f42983k = j10;
            return this;
        }

        public a(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f42975c = -1;
            this.f42973a = response.Y0();
            this.f42974b = response.O0();
            this.f42975c = response.z();
            this.f42976d = response.I0();
            this.f42977e = response.I();
            this.f42978f = response.E0().g();
            this.f42979g = response.n();
            this.f42980h = response.J0();
            this.f42981i = response.s();
            this.f42982j = response.L0();
            this.f42983k = response.d1();
            this.f42984l = response.V0();
            this.f42985m = response.C();
        }
    }
}
