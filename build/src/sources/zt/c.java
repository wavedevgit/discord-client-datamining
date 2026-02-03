package zt;

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
    public static final a f56159c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Request f56160a;

    /* renamed from: b  reason: collision with root package name */
    private final Response f56161b;

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
                if (Response.D0(response, "Expires", null, 2, null) == null && response.B().c() == -1 && !response.B().b() && !response.B().a()) {
                    return false;
                }
            }
            if (response.B().h() || request.d().h()) {
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
        private final long f56162a;

        /* renamed from: b  reason: collision with root package name */
        private final Request f56163b;

        /* renamed from: c  reason: collision with root package name */
        private final Response f56164c;

        /* renamed from: d  reason: collision with root package name */
        private Date f56165d;

        /* renamed from: e  reason: collision with root package name */
        private String f56166e;

        /* renamed from: f  reason: collision with root package name */
        private Date f56167f;

        /* renamed from: g  reason: collision with root package name */
        private String f56168g;

        /* renamed from: h  reason: collision with root package name */
        private Date f56169h;

        /* renamed from: i  reason: collision with root package name */
        private long f56170i;

        /* renamed from: j  reason: collision with root package name */
        private long f56171j;

        /* renamed from: k  reason: collision with root package name */
        private String f56172k;

        /* renamed from: l  reason: collision with root package name */
        private int f56173l;

        public b(long j10, Request request, Response response) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f56162a = j10;
            this.f56163b = request;
            this.f56164c = response;
            this.f56173l = -1;
            if (response != null) {
                this.f56170i = response.e1();
                this.f56171j = response.Y0();
                Headers E0 = response.E0();
                int size = E0.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String e10 = E0.e(i10);
                    String j11 = E0.j(i10);
                    if (StringsKt.A(e10, "Date", true)) {
                        this.f56165d = cu.c.a(j11);
                        this.f56166e = j11;
                    } else if (StringsKt.A(e10, "Expires", true)) {
                        this.f56169h = cu.c.a(j11);
                    } else if (StringsKt.A(e10, "Last-Modified", true)) {
                        this.f56167f = cu.c.a(j11);
                        this.f56168g = j11;
                    } else if (StringsKt.A(e10, "ETag", true)) {
                        this.f56172k = j11;
                    } else if (StringsKt.A(e10, "Age", true)) {
                        this.f56173l = xt.e.Y(j11, -1);
                    }
                }
            }
        }

        private final long a() {
            Date date = this.f56165d;
            long j10 = 0;
            if (date != null) {
                j10 = Math.max(0L, this.f56171j - date.getTime());
            }
            int i10 = this.f56173l;
            if (i10 != -1) {
                j10 = Math.max(j10, TimeUnit.SECONDS.toMillis(i10));
            }
            long j11 = this.f56171j;
            return j10 + (j11 - this.f56170i) + (this.f56162a - j11);
        }

        private final c c() {
            long j10;
            String str;
            if (this.f56164c == null) {
                return new c(this.f56163b, null);
            }
            if (this.f56163b.i() && this.f56164c.V() == null) {
                return new c(this.f56163b, null);
            }
            if (!c.f56159c.a(this.f56164c, this.f56163b)) {
                return new c(this.f56163b, null);
            }
            CacheControl d10 = this.f56163b.d();
            if (!d10.g() && !e(this.f56163b)) {
                CacheControl B = this.f56164c.B();
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
                if (!B.f() && d10.d() != -1) {
                    j11 = TimeUnit.SECONDS.toMillis(d10.d());
                }
                if (!B.g()) {
                    long j12 = j10 + a10;
                    if (j12 < j11 + d11) {
                        Response.a M0 = this.f56164c.M0();
                        if (j12 >= d11) {
                            M0.a("Warning", "110 HttpURLConnection \"Response is stale\"");
                        }
                        if (a10 > 86400000 && f()) {
                            M0.a("Warning", "113 HttpURLConnection \"Heuristic expiration\"");
                        }
                        return new c(null, M0.c());
                    }
                }
                String str2 = this.f56172k;
                if (str2 != null) {
                    str = "If-None-Match";
                } else {
                    if (this.f56167f != null) {
                        str2 = this.f56168g;
                    } else if (this.f56165d != null) {
                        str2 = this.f56166e;
                    } else {
                        return new c(this.f56163b, null);
                    }
                    str = "If-Modified-Since";
                }
                Headers.a g10 = this.f56163b.h().g();
                Intrinsics.checkNotNull(str2);
                g10.d(str, str2);
                return new c(this.f56163b.k().f(g10.f()).b(), this.f56164c);
            }
            return new c(this.f56163b, null);
        }

        private final long d() {
            long j10;
            long j11;
            Response response = this.f56164c;
            Intrinsics.checkNotNull(response);
            CacheControl B = response.B();
            if (B.c() != -1) {
                return TimeUnit.SECONDS.toMillis(B.c());
            }
            Date date = this.f56169h;
            if (date != null) {
                Date date2 = this.f56165d;
                if (date2 != null) {
                    j11 = date2.getTime();
                } else {
                    j11 = this.f56171j;
                }
                long time = date.getTime() - j11;
                if (time <= 0) {
                    return 0L;
                }
                return time;
            }
            if (this.f56167f != null && this.f56164c.Z0().n().p() == null) {
                Date date3 = this.f56165d;
                if (date3 != null) {
                    j10 = date3.getTime();
                } else {
                    j10 = this.f56170i;
                }
                Date date4 = this.f56167f;
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
            Response response = this.f56164c;
            Intrinsics.checkNotNull(response);
            if (response.B().c() == -1 && this.f56169h == null) {
                return true;
            }
            return false;
        }

        public final c b() {
            c c10 = c();
            if (c10.b() != null && this.f56163b.d().i()) {
                return new c(null, null);
            }
            return c10;
        }
    }

    public c(Request request, Response response) {
        this.f56160a = request;
        this.f56161b = response;
    }

    public final Response a() {
        return this.f56161b;
    }

    public final Request b() {
        return this.f56160a;
    }
}
