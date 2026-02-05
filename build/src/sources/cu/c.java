package cu;

import com.facebook.react.views.image.ReactImageView;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okhttp3.CacheControl;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class c {

    /* renamed from: c  reason: collision with root package name */
    public static final a f20042c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Request f20043a;

    /* renamed from: b  reason: collision with root package name */
    private final Response f20044b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean a(Response response, Request request) {
            Intrinsics.checkNotNullParameter(response, "response");
            Intrinsics.checkNotNullParameter(request, "request");
            int L = response.L();
            if (L != 200 && L != 410 && L != 414 && L != 501 && L != 203 && L != 204) {
                if (L != 307) {
                    if (L != 308 && L != 404 && L != 405) {
                        switch (L) {
                            case ReactImageView.REMOTE_IMAGE_FADE_DURATION_MS /* 300 */:
                            case 301:
                                break;
                            case 302:
                                break;
                            default:
                                return false;
                        }
                    }
                }
                if (Response.D0(response, "Expires", null, 2, null) == null && response.y().c() == -1 && !response.y().b() && !response.y().a()) {
                    return false;
                }
            }
            if (response.y().h() || request.d().h()) {
                return false;
            }
            return true;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final long f20045a;

        /* renamed from: b  reason: collision with root package name */
        private final Request f20046b;

        /* renamed from: c  reason: collision with root package name */
        private final Response f20047c;

        /* renamed from: d  reason: collision with root package name */
        private Date f20048d;

        /* renamed from: e  reason: collision with root package name */
        private String f20049e;

        /* renamed from: f  reason: collision with root package name */
        private Date f20050f;

        /* renamed from: g  reason: collision with root package name */
        private String f20051g;

        /* renamed from: h  reason: collision with root package name */
        private Date f20052h;

        /* renamed from: i  reason: collision with root package name */
        private long f20053i;

        /* renamed from: j  reason: collision with root package name */
        private long f20054j;

        /* renamed from: k  reason: collision with root package name */
        private String f20055k;

        /* renamed from: l  reason: collision with root package name */
        private int f20056l;

        public b(long j10, Request request, Response response) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f20045a = j10;
            this.f20046b = request;
            this.f20047c = response;
            this.f20056l = -1;
            if (response != null) {
                this.f20053i = response.e1();
                this.f20054j = response.Y0();
                Headers E0 = response.E0();
                int size = E0.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String e10 = E0.e(i10);
                    String j11 = E0.j(i10);
                    if (StringsKt.A(e10, "Date", true)) {
                        this.f20048d = fu.c.a(j11);
                        this.f20049e = j11;
                    } else if (StringsKt.A(e10, "Expires", true)) {
                        this.f20052h = fu.c.a(j11);
                    } else if (StringsKt.A(e10, "Last-Modified", true)) {
                        this.f20050f = fu.c.a(j11);
                        this.f20051g = j11;
                    } else if (StringsKt.A(e10, "ETag", true)) {
                        this.f20055k = j11;
                    } else if (StringsKt.A(e10, "Age", true)) {
                        this.f20056l = au.e.Y(j11, -1);
                    }
                }
            }
        }

        private final long a() {
            Date date = this.f20048d;
            long j10 = 0;
            if (date != null) {
                j10 = Math.max(0L, this.f20054j - date.getTime());
            }
            int i10 = this.f20056l;
            if (i10 != -1) {
                j10 = Math.max(j10, TimeUnit.SECONDS.toMillis(i10));
            }
            long j11 = this.f20054j;
            return j10 + (j11 - this.f20053i) + (this.f20045a - j11);
        }

        private final c c() {
            long j10;
            String str;
            if (this.f20047c == null) {
                return new c(this.f20046b, null);
            }
            if (this.f20046b.i() && this.f20047c.V() == null) {
                return new c(this.f20046b, null);
            }
            if (!c.f20042c.a(this.f20047c, this.f20046b)) {
                return new c(this.f20046b, null);
            }
            CacheControl d10 = this.f20046b.d();
            if (!d10.g() && !e(this.f20046b)) {
                CacheControl y10 = this.f20047c.y();
                long a10 = a();
                long d11 = d();
                if (d10.c() != -1) {
                    d11 = Math.min(d11, TimeUnit.SECONDS.toMillis(d10.c()));
                }
                long j11 = 0;
                if (d10.e() != -1) {
                    j10 = TimeUnit.SECONDS.toMillis(d10.e());
                } else {
                    j10 = 0;
                }
                if (!y10.f() && d10.d() != -1) {
                    j11 = TimeUnit.SECONDS.toMillis(d10.d());
                }
                if (!y10.g()) {
                    long j12 = j10 + a10;
                    if (j12 < j11 + d11) {
                        Response.a N0 = this.f20047c.N0();
                        if (j12 >= d11) {
                            N0.a("Warning", "110 HttpURLConnection \"Response is stale\"");
                        }
                        if (a10 > 86400000 && f()) {
                            N0.a("Warning", "113 HttpURLConnection \"Heuristic expiration\"");
                        }
                        return new c(null, N0.c());
                    }
                }
                String str2 = this.f20055k;
                if (str2 != null) {
                    str = "If-None-Match";
                } else {
                    if (this.f20050f != null) {
                        str2 = this.f20051g;
                    } else if (this.f20048d != null) {
                        str2 = this.f20049e;
                    } else {
                        return new c(this.f20046b, null);
                    }
                    str = "If-Modified-Since";
                }
                Headers.a g10 = this.f20046b.h().g();
                Intrinsics.checkNotNull(str2);
                g10.d(str, str2);
                return new c(this.f20046b.k().f(g10.f()).b(), this.f20047c);
            }
            return new c(this.f20046b, null);
        }

        private final long d() {
            long j10;
            long j11;
            Response response = this.f20047c;
            Intrinsics.checkNotNull(response);
            CacheControl y10 = response.y();
            if (y10.c() != -1) {
                return TimeUnit.SECONDS.toMillis(y10.c());
            }
            Date date = this.f20052h;
            if (date != null) {
                Date date2 = this.f20048d;
                if (date2 != null) {
                    j11 = date2.getTime();
                } else {
                    j11 = this.f20054j;
                }
                long time = date.getTime() - j11;
                if (time <= 0) {
                    return 0L;
                }
                return time;
            }
            if (this.f20050f != null && this.f20047c.Z0().n().p() == null) {
                Date date3 = this.f20048d;
                if (date3 != null) {
                    j10 = date3.getTime();
                } else {
                    j10 = this.f20053i;
                }
                Date date4 = this.f20050f;
                Intrinsics.checkNotNull(date4);
                long time2 = j10 - date4.getTime();
                if (time2 > 0) {
                    return time2 / 10;
                }
            }
            return 0L;
        }

        private final boolean e(Request request) {
            if (request.f("If-Modified-Since") == null && request.f("If-None-Match") == null) {
                return false;
            }
            return true;
        }

        private final boolean f() {
            Response response = this.f20047c;
            Intrinsics.checkNotNull(response);
            if (response.y().c() == -1 && this.f20052h == null) {
                return true;
            }
            return false;
        }

        public final c b() {
            c c10 = c();
            if (c10.b() != null && this.f20046b.d().i()) {
                return new c(null, null);
            }
            return c10;
        }
    }

    public c(Request request, Response response) {
        this.f20043a = request;
        this.f20044b = response;
    }

    public final Response a() {
        return this.f20044b;
    }

    public final Request b() {
        return this.f20043a;
    }
}
