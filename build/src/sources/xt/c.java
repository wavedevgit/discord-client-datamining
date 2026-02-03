package xt;

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
    public static final a f53771c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Request f53772a;

    /* renamed from: b  reason: collision with root package name */
    private final Response f53773b;

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
                if (Response.E0(response, "Expires", null, 2, null) == null && response.B().c() == -1 && !response.B().b() && !response.B().a()) {
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
        private final long f53774a;

        /* renamed from: b  reason: collision with root package name */
        private final Request f53775b;

        /* renamed from: c  reason: collision with root package name */
        private final Response f53776c;

        /* renamed from: d  reason: collision with root package name */
        private Date f53777d;

        /* renamed from: e  reason: collision with root package name */
        private String f53778e;

        /* renamed from: f  reason: collision with root package name */
        private Date f53779f;

        /* renamed from: g  reason: collision with root package name */
        private String f53780g;

        /* renamed from: h  reason: collision with root package name */
        private Date f53781h;

        /* renamed from: i  reason: collision with root package name */
        private long f53782i;

        /* renamed from: j  reason: collision with root package name */
        private long f53783j;

        /* renamed from: k  reason: collision with root package name */
        private String f53784k;

        /* renamed from: l  reason: collision with root package name */
        private int f53785l;

        public b(long j10, Request request, Response response) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f53774a = j10;
            this.f53775b = request;
            this.f53776c = response;
            this.f53785l = -1;
            if (response != null) {
                this.f53782i = response.e1();
                this.f53783j = response.Y0();
                Headers F0 = response.F0();
                int size = F0.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String e10 = F0.e(i10);
                    String j11 = F0.j(i10);
                    if (StringsKt.A(e10, "Date", true)) {
                        this.f53777d = au.c.a(j11);
                        this.f53778e = j11;
                    } else if (StringsKt.A(e10, "Expires", true)) {
                        this.f53781h = au.c.a(j11);
                    } else if (StringsKt.A(e10, "Last-Modified", true)) {
                        this.f53779f = au.c.a(j11);
                        this.f53780g = j11;
                    } else if (StringsKt.A(e10, "ETag", true)) {
                        this.f53784k = j11;
                    } else if (StringsKt.A(e10, "Age", true)) {
                        this.f53785l = vt.e.Y(j11, -1);
                    }
                }
            }
        }

        private final long a() {
            Date date = this.f53777d;
            long j10 = 0;
            if (date != null) {
                j10 = Math.max(0L, this.f53783j - date.getTime());
            }
            int i10 = this.f53785l;
            if (i10 != -1) {
                j10 = Math.max(j10, TimeUnit.SECONDS.toMillis(i10));
            }
            long j11 = this.f53783j;
            return j10 + (j11 - this.f53782i) + (this.f53774a - j11);
        }

        private final c c() {
            long j10;
            String str;
            if (this.f53776c == null) {
                return new c(this.f53775b, null);
            }
            if (this.f53775b.i() && this.f53776c.V() == null) {
                return new c(this.f53775b, null);
            }
            if (!c.f53771c.a(this.f53776c, this.f53775b)) {
                return new c(this.f53775b, null);
            }
            CacheControl d10 = this.f53775b.d();
            if (!d10.g() && !e(this.f53775b)) {
                CacheControl B = this.f53776c.B();
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
                        Response.a L0 = this.f53776c.L0();
                        if (j12 >= d11) {
                            L0.a("Warning", "110 HttpURLConnection \"Response is stale\"");
                        }
                        if (a10 > 86400000 && f()) {
                            L0.a("Warning", "113 HttpURLConnection \"Heuristic expiration\"");
                        }
                        return new c(null, L0.c());
                    }
                }
                String str2 = this.f53784k;
                if (str2 != null) {
                    str = "If-None-Match";
                } else {
                    if (this.f53779f != null) {
                        str2 = this.f53780g;
                    } else if (this.f53777d != null) {
                        str2 = this.f53778e;
                    } else {
                        return new c(this.f53775b, null);
                    }
                    str = "If-Modified-Since";
                }
                Headers.a g10 = this.f53775b.h().g();
                Intrinsics.checkNotNull(str2);
                g10.d(str, str2);
                return new c(this.f53775b.k().f(g10.f()).b(), this.f53776c);
            }
            return new c(this.f53775b, null);
        }

        private final long d() {
            long j10;
            long j11;
            Response response = this.f53776c;
            Intrinsics.checkNotNull(response);
            CacheControl B = response.B();
            if (B.c() != -1) {
                return TimeUnit.SECONDS.toMillis(B.c());
            }
            Date date = this.f53781h;
            if (date != null) {
                Date date2 = this.f53777d;
                if (date2 != null) {
                    j11 = date2.getTime();
                } else {
                    j11 = this.f53783j;
                }
                long time = date.getTime() - j11;
                if (time <= 0) {
                    return 0L;
                }
                return time;
            }
            if (this.f53779f != null && this.f53776c.Z0().n().p() == null) {
                Date date3 = this.f53777d;
                if (date3 != null) {
                    j10 = date3.getTime();
                } else {
                    j10 = this.f53782i;
                }
                Date date4 = this.f53779f;
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
            Response response = this.f53776c;
            Intrinsics.checkNotNull(response);
            if (response.B().c() == -1 && this.f53781h == null) {
                return true;
            }
            return false;
        }

        public final c b() {
            c c10 = c();
            if (c10.b() != null && this.f53775b.d().i()) {
                return new c(null, null);
            }
            return c10;
        }
    }

    public c(Request request, Response response) {
        this.f53772a = request;
        this.f53773b = response;
    }

    public final Response a() {
        return this.f53773b;
    }

    public final Request b() {
        return this.f53772a;
    }
}
