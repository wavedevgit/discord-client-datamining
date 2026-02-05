package okhttp3;

import com.facebook.react.views.image.ReactImageView;
import java.io.Closeable;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
import zt.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Response implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Request f43853d;

    /* renamed from: e  reason: collision with root package name */
    private final j f43854e;

    /* renamed from: i  reason: collision with root package name */
    private final String f43855i;

    /* renamed from: o  reason: collision with root package name */
    private final int f43856o;

    /* renamed from: p  reason: collision with root package name */
    private final g f43857p;

    /* renamed from: q  reason: collision with root package name */
    private final Headers f43858q;

    /* renamed from: r  reason: collision with root package name */
    private final ResponseBody f43859r;

    /* renamed from: s  reason: collision with root package name */
    private final Response f43860s;

    /* renamed from: t  reason: collision with root package name */
    private final Response f43861t;

    /* renamed from: u  reason: collision with root package name */
    private final Response f43862u;

    /* renamed from: v  reason: collision with root package name */
    private final long f43863v;

    /* renamed from: w  reason: collision with root package name */
    private final long f43864w;

    /* renamed from: x  reason: collision with root package name */
    private final eu.c f43865x;

    /* renamed from: y  reason: collision with root package name */
    private CacheControl f43866y;

    public Response(Request request, j protocol, String message, int i10, g gVar, Headers headers, ResponseBody responseBody, Response response, Response response2, Response response3, long j10, long j11, eu.c cVar) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(headers, "headers");
        this.f43853d = request;
        this.f43854e = protocol;
        this.f43855i = message;
        this.f43856o = i10;
        this.f43857p = gVar;
        this.f43858q = headers;
        this.f43859r = responseBody;
        this.f43860s = response;
        this.f43861t = response2;
        this.f43862u = response3;
        this.f43863v = j10;
        this.f43864w = j11;
        this.f43865x = cVar;
    }

    public static /* synthetic */ String D0(Response response, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = null;
        }
        return response.C0(str, str2);
    }

    public final String C0(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = this.f43858q.c(name);
        if (c10 == null) {
            return str;
        }
        return c10;
    }

    public final Response E() {
        return this.f43861t;
    }

    public final Headers E0() {
        return this.f43858q;
    }

    public final List F() {
        String str;
        Headers headers = this.f43858q;
        int i10 = this.f43856o;
        if (i10 != 401) {
            if (i10 != 407) {
                return CollectionsKt.l();
            }
            str = "Proxy-Authenticate";
        } else {
            str = "WWW-Authenticate";
        }
        return fu.e.a(headers, str);
    }

    public final boolean F0() {
        int i10 = this.f43856o;
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
        return this.f43855i;
    }

    public final Response K0() {
        return this.f43860s;
    }

    public final int L() {
        return this.f43856o;
    }

    public final eu.c N() {
        return this.f43865x;
    }

    public final a N0() {
        return new a(this);
    }

    public final Response S0() {
        return this.f43862u;
    }

    public final g V() {
        return this.f43857p;
    }

    public final j V0() {
        return this.f43854e;
    }

    public final String W(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return D0(this, name, null, 2, null);
    }

    public final long Y0() {
        return this.f43864w;
    }

    public final Request Z0() {
        return this.f43853d;
    }

    public final ResponseBody a() {
        return this.f43859r;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ResponseBody responseBody = this.f43859r;
        if (responseBody != null) {
            responseBody.close();
            return;
        }
        throw new IllegalStateException("response is not eligible for a body and must not be closed");
    }

    public final long e1() {
        return this.f43863v;
    }

    public final int h() {
        return this.f43856o;
    }

    public final boolean isSuccessful() {
        int i10 = this.f43856o;
        if (200 > i10 || i10 >= 300) {
            return false;
        }
        return true;
    }

    public final Headers k() {
        return this.f43858q;
    }

    public final Request m() {
        return this.f43853d;
    }

    public final ResponseBody o() {
        return this.f43859r;
    }

    public String toString() {
        return "Response{protocol=" + this.f43854e + ", code=" + this.f43856o + ", message=" + this.f43855i + ", url=" + this.f43853d.n() + '}';
    }

    public final CacheControl y() {
        CacheControl cacheControl = this.f43866y;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f43685n.b(this.f43858q);
            this.f43866y = b10;
            return b10;
        }
        return cacheControl;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private Request f43867a;

        /* renamed from: b  reason: collision with root package name */
        private j f43868b;

        /* renamed from: c  reason: collision with root package name */
        private int f43869c;

        /* renamed from: d  reason: collision with root package name */
        private String f43870d;

        /* renamed from: e  reason: collision with root package name */
        private g f43871e;

        /* renamed from: f  reason: collision with root package name */
        private Headers.a f43872f;

        /* renamed from: g  reason: collision with root package name */
        private ResponseBody f43873g;

        /* renamed from: h  reason: collision with root package name */
        private Response f43874h;

        /* renamed from: i  reason: collision with root package name */
        private Response f43875i;

        /* renamed from: j  reason: collision with root package name */
        private Response f43876j;

        /* renamed from: k  reason: collision with root package name */
        private long f43877k;

        /* renamed from: l  reason: collision with root package name */
        private long f43878l;

        /* renamed from: m  reason: collision with root package name */
        private eu.c f43879m;

        public a() {
            this.f43869c = -1;
            this.f43872f = new Headers.a();
        }

        private final void e(Response response) {
            if (response == null || response.o() == null) {
                return;
            }
            throw new IllegalArgumentException("priorResponse.body != null");
        }

        private final void f(String str, Response response) {
            if (response != null) {
                if (response.o() == null) {
                    if (response.K0() == null) {
                        if (response.E() == null) {
                            if (response.S0() == null) {
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
            this.f43872f.a(name, value);
            return this;
        }

        public a b(ResponseBody responseBody) {
            this.f43873g = responseBody;
            return this;
        }

        public Response c() {
            int i10 = this.f43869c;
            if (i10 >= 0) {
                Request request = this.f43867a;
                if (request != null) {
                    j jVar = this.f43868b;
                    if (jVar != null) {
                        String str = this.f43870d;
                        if (str != null) {
                            return new Response(request, jVar, str, i10, this.f43871e, this.f43872f.f(), this.f43873g, this.f43874h, this.f43875i, this.f43876j, this.f43877k, this.f43878l, this.f43879m);
                        }
                        throw new IllegalStateException("message == null");
                    }
                    throw new IllegalStateException("protocol == null");
                }
                throw new IllegalStateException("request == null");
            }
            throw new IllegalStateException(("code < 0: " + this.f43869c).toString());
        }

        public a d(Response response) {
            f("cacheResponse", response);
            this.f43875i = response;
            return this;
        }

        public a g(int i10) {
            this.f43869c = i10;
            return this;
        }

        public final int h() {
            return this.f43869c;
        }

        public a i(g gVar) {
            this.f43871e = gVar;
            return this;
        }

        public a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f43872f.j(name, value);
            return this;
        }

        public a k(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f43872f = headers.g();
            return this;
        }

        public final void l(eu.c deferredTrailers) {
            Intrinsics.checkNotNullParameter(deferredTrailers, "deferredTrailers");
            this.f43879m = deferredTrailers;
        }

        public a m(String message) {
            Intrinsics.checkNotNullParameter(message, "message");
            this.f43870d = message;
            return this;
        }

        public a n(Response response) {
            f("networkResponse", response);
            this.f43874h = response;
            return this;
        }

        public a o(Response response) {
            e(response);
            this.f43876j = response;
            return this;
        }

        public a p(j protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            this.f43868b = protocol;
            return this;
        }

        public a q(long j10) {
            this.f43878l = j10;
            return this;
        }

        public a r(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f43867a = request;
            return this;
        }

        public a s(long j10) {
            this.f43877k = j10;
            return this;
        }

        public a(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f43869c = -1;
            this.f43867a = response.Z0();
            this.f43868b = response.V0();
            this.f43869c = response.L();
            this.f43870d = response.I0();
            this.f43871e = response.V();
            this.f43872f = response.E0().g();
            this.f43873g = response.o();
            this.f43874h = response.K0();
            this.f43875i = response.E();
            this.f43876j = response.S0();
            this.f43877k = response.e1();
            this.f43878l = response.Y0();
            this.f43879m = response.N();
        }
    }
}
