package okhttp3;

import com.facebook.react.views.image.ReactImageView;
import cu.j;
import java.io.Closeable;
import java.util.List;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.internal.Intrinsics;
import okhttp3.Headers;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class Response implements Closeable {

    /* renamed from: d  reason: collision with root package name */
    private final Request f42134d;

    /* renamed from: e  reason: collision with root package name */
    private final j f42135e;

    /* renamed from: i  reason: collision with root package name */
    private final String f42136i;

    /* renamed from: o  reason: collision with root package name */
    private final int f42137o;

    /* renamed from: p  reason: collision with root package name */
    private final g f42138p;

    /* renamed from: q  reason: collision with root package name */
    private final Headers f42139q;

    /* renamed from: r  reason: collision with root package name */
    private final ResponseBody f42140r;

    /* renamed from: s  reason: collision with root package name */
    private final Response f42141s;

    /* renamed from: t  reason: collision with root package name */
    private final Response f42142t;

    /* renamed from: u  reason: collision with root package name */
    private final Response f42143u;

    /* renamed from: v  reason: collision with root package name */
    private final long f42144v;

    /* renamed from: w  reason: collision with root package name */
    private final long f42145w;

    /* renamed from: x  reason: collision with root package name */
    private final hu.c f42146x;

    /* renamed from: y  reason: collision with root package name */
    private CacheControl f42147y;

    public Response(Request request, j protocol, String message, int i10, g gVar, Headers headers, ResponseBody responseBody, Response response, Response response2, Response response3, long j10, long j11, hu.c cVar) {
        Intrinsics.checkNotNullParameter(request, "request");
        Intrinsics.checkNotNullParameter(protocol, "protocol");
        Intrinsics.checkNotNullParameter(message, "message");
        Intrinsics.checkNotNullParameter(headers, "headers");
        this.f42134d = request;
        this.f42135e = protocol;
        this.f42136i = message;
        this.f42137o = i10;
        this.f42138p = gVar;
        this.f42139q = headers;
        this.f42140r = responseBody;
        this.f42141s = response;
        this.f42142t = response2;
        this.f42143u = response3;
        this.f42144v = j10;
        this.f42145w = j11;
        this.f42146x = cVar;
    }

    public static /* synthetic */ String Z(Response response, String str, String str2, int i10, Object obj) {
        if ((i10 & 2) != 0) {
            str2 = null;
        }
        return response.Q(str, str2);
    }

    public final hu.c C() {
        return this.f42146x;
    }

    public final Headers C0() {
        return this.f42139q;
    }

    public final boolean D0() {
        int i10 = this.f42137o;
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

    public final String G0() {
        return this.f42136i;
    }

    public final Response H0() {
        return this.f42141s;
    }

    public final g I() {
        return this.f42138p;
    }

    public final String J(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return Z(this, name, null, 2, null);
    }

    public final a J0() {
        return new a(this);
    }

    public final Response O0() {
        return this.f42143u;
    }

    public final String Q(String name, String str) {
        Intrinsics.checkNotNullParameter(name, "name");
        String c10 = this.f42139q.c(name);
        if (c10 == null) {
            return str;
        }
        return c10;
    }

    public final j R0() {
        return this.f42135e;
    }

    public final long V0() {
        return this.f42145w;
    }

    public final Request W0() {
        return this.f42134d;
    }

    public final ResponseBody a() {
        return this.f42140r;
    }

    public final long a1() {
        return this.f42144v;
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        ResponseBody responseBody = this.f42140r;
        if (responseBody != null) {
            responseBody.close();
            return;
        }
        throw new IllegalStateException("response is not eligible for a body and must not be closed");
    }

    public final int g() {
        return this.f42137o;
    }

    public final boolean isSuccessful() {
        int i10 = this.f42137o;
        if (200 > i10 || i10 >= 300) {
            return false;
        }
        return true;
    }

    public final Headers k() {
        return this.f42139q;
    }

    public final Request m() {
        return this.f42134d;
    }

    public final ResponseBody n() {
        return this.f42140r;
    }

    public final CacheControl p() {
        CacheControl cacheControl = this.f42147y;
        if (cacheControl == null) {
            CacheControl b10 = CacheControl.f41966n.b(this.f42139q);
            this.f42147y = b10;
            return b10;
        }
        return cacheControl;
    }

    public final Response s() {
        return this.f42142t;
    }

    public String toString() {
        return "Response{protocol=" + this.f42135e + ", code=" + this.f42137o + ", message=" + this.f42136i + ", url=" + this.f42134d.n() + '}';
    }

    public final List y() {
        String str;
        Headers headers = this.f42139q;
        int i10 = this.f42137o;
        if (i10 != 401) {
            if (i10 != 407) {
                return CollectionsKt.l();
            }
            str = "Proxy-Authenticate";
        } else {
            str = "WWW-Authenticate";
        }
        return iu.e.a(headers, str);
    }

    public final int z() {
        return this.f42137o;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private Request f42148a;

        /* renamed from: b  reason: collision with root package name */
        private j f42149b;

        /* renamed from: c  reason: collision with root package name */
        private int f42150c;

        /* renamed from: d  reason: collision with root package name */
        private String f42151d;

        /* renamed from: e  reason: collision with root package name */
        private g f42152e;

        /* renamed from: f  reason: collision with root package name */
        private Headers.a f42153f;

        /* renamed from: g  reason: collision with root package name */
        private ResponseBody f42154g;

        /* renamed from: h  reason: collision with root package name */
        private Response f42155h;

        /* renamed from: i  reason: collision with root package name */
        private Response f42156i;

        /* renamed from: j  reason: collision with root package name */
        private Response f42157j;

        /* renamed from: k  reason: collision with root package name */
        private long f42158k;

        /* renamed from: l  reason: collision with root package name */
        private long f42159l;

        /* renamed from: m  reason: collision with root package name */
        private hu.c f42160m;

        public a() {
            this.f42150c = -1;
            this.f42153f = new Headers.a();
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
                    if (response.H0() == null) {
                        if (response.s() == null) {
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
            this.f42153f.a(name, value);
            return this;
        }

        public a b(ResponseBody responseBody) {
            this.f42154g = responseBody;
            return this;
        }

        public Response c() {
            int i10 = this.f42150c;
            if (i10 >= 0) {
                Request request = this.f42148a;
                if (request != null) {
                    j jVar = this.f42149b;
                    if (jVar != null) {
                        String str = this.f42151d;
                        if (str != null) {
                            return new Response(request, jVar, str, i10, this.f42152e, this.f42153f.f(), this.f42154g, this.f42155h, this.f42156i, this.f42157j, this.f42158k, this.f42159l, this.f42160m);
                        }
                        throw new IllegalStateException("message == null");
                    }
                    throw new IllegalStateException("protocol == null");
                }
                throw new IllegalStateException("request == null");
            }
            throw new IllegalStateException(("code < 0: " + this.f42150c).toString());
        }

        public a d(Response response) {
            f("cacheResponse", response);
            this.f42156i = response;
            return this;
        }

        public a g(int i10) {
            this.f42150c = i10;
            return this;
        }

        public final int h() {
            return this.f42150c;
        }

        public a i(g gVar) {
            this.f42152e = gVar;
            return this;
        }

        public a j(String name, String value) {
            Intrinsics.checkNotNullParameter(name, "name");
            Intrinsics.checkNotNullParameter(value, "value");
            this.f42153f.j(name, value);
            return this;
        }

        public a k(Headers headers) {
            Intrinsics.checkNotNullParameter(headers, "headers");
            this.f42153f = headers.g();
            return this;
        }

        public final void l(hu.c deferredTrailers) {
            Intrinsics.checkNotNullParameter(deferredTrailers, "deferredTrailers");
            this.f42160m = deferredTrailers;
        }

        public a m(String message) {
            Intrinsics.checkNotNullParameter(message, "message");
            this.f42151d = message;
            return this;
        }

        public a n(Response response) {
            f("networkResponse", response);
            this.f42155h = response;
            return this;
        }

        public a o(Response response) {
            e(response);
            this.f42157j = response;
            return this;
        }

        public a p(j protocol) {
            Intrinsics.checkNotNullParameter(protocol, "protocol");
            this.f42149b = protocol;
            return this;
        }

        public a q(long j10) {
            this.f42159l = j10;
            return this;
        }

        public a r(Request request) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f42148a = request;
            return this;
        }

        public a s(long j10) {
            this.f42158k = j10;
            return this;
        }

        public a(Response response) {
            Intrinsics.checkNotNullParameter(response, "response");
            this.f42150c = -1;
            this.f42148a = response.W0();
            this.f42149b = response.R0();
            this.f42150c = response.z();
            this.f42151d = response.G0();
            this.f42152e = response.I();
            this.f42153f = response.C0().g();
            this.f42154g = response.n();
            this.f42155h = response.H0();
            this.f42156i = response.s();
            this.f42157j = response.O0();
            this.f42158k = response.a1();
            this.f42159l = response.V0();
            this.f42160m = response.C();
        }
    }
}
