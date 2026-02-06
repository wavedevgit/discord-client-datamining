package eu;

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
    public static final a f22139c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Request f22140a;

    /* renamed from: b  reason: collision with root package name */
    private final Response f22141b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        public final boolean a(Response response, Request request) {
            Intrinsics.checkNotNullParameter(response, "response");
            Intrinsics.checkNotNullParameter(request, "request");
            int z10 = response.z();
            if (z10 != 200 && z10 != 410 && z10 != 414 && z10 != 501 && z10 != 203 && z10 != 204) {
                if (z10 != 307) {
                    if (z10 != 308 && z10 != 404 && z10 != 405) {
                        switch (z10) {
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
                if (Response.Y(response, "Expires", null, 2, null) == null && response.p().c() == -1 && !response.p().b() && !response.p().a()) {
                    return false;
                }
            }
            if (response.p().h() || request.d().h()) {
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
        private final long f22142a;

        /* renamed from: b  reason: collision with root package name */
        private final Request f22143b;

        /* renamed from: c  reason: collision with root package name */
        private final Response f22144c;

        /* renamed from: d  reason: collision with root package name */
        private Date f22145d;

        /* renamed from: e  reason: collision with root package name */
        private String f22146e;

        /* renamed from: f  reason: collision with root package name */
        private Date f22147f;

        /* renamed from: g  reason: collision with root package name */
        private String f22148g;

        /* renamed from: h  reason: collision with root package name */
        private Date f22149h;

        /* renamed from: i  reason: collision with root package name */
        private long f22150i;

        /* renamed from: j  reason: collision with root package name */
        private long f22151j;

        /* renamed from: k  reason: collision with root package name */
        private String f22152k;

        /* renamed from: l  reason: collision with root package name */
        private int f22153l;

        public b(long j10, Request request, Response response) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f22142a = j10;
            this.f22143b = request;
            this.f22144c = response;
            this.f22153l = -1;
            if (response != null) {
                this.f22150i = response.d1();
                this.f22151j = response.V0();
                Headers E0 = response.E0();
                int size = E0.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String e10 = E0.e(i10);
                    String j11 = E0.j(i10);
                    if (StringsKt.A(e10, "Date", true)) {
                        this.f22145d = hu.c.a(j11);
                        this.f22146e = j11;
                    } else if (StringsKt.A(e10, "Expires", true)) {
                        this.f22149h = hu.c.a(j11);
                    } else if (StringsKt.A(e10, "Last-Modified", true)) {
                        this.f22147f = hu.c.a(j11);
                        this.f22148g = j11;
                    } else if (StringsKt.A(e10, "ETag", true)) {
                        this.f22152k = j11;
                    } else if (StringsKt.A(e10, "Age", true)) {
                        this.f22153l = cu.e.Y(j11, -1);
                    }
                }
            }
        }

        private final long a() {
            Date date = this.f22145d;
            long j10 = 0;
            if (date != null) {
                j10 = Math.max(0L, this.f22151j - date.getTime());
            }
            int i10 = this.f22153l;
            if (i10 != -1) {
                j10 = Math.max(j10, TimeUnit.SECONDS.toMillis(i10));
            }
            long j11 = this.f22151j;
            return j10 + (j11 - this.f22150i) + (this.f22142a - j11);
        }

        private final c c() {
            long j10;
            String str;
            if (this.f22144c == null) {
                return new c(this.f22143b, null);
            }
            if (this.f22143b.i() && this.f22144c.I() == null) {
                return new c(this.f22143b, null);
            }
            if (!c.f22139c.a(this.f22144c, this.f22143b)) {
                return new c(this.f22143b, null);
            }
            CacheControl d10 = this.f22143b.d();
            if (!d10.g() && !e(this.f22143b)) {
                CacheControl p10 = this.f22144c.p();
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
                if (!p10.f() && d10.d() != -1) {
                    j11 = TimeUnit.SECONDS.toMillis(d10.d());
                }
                if (!p10.g()) {
                    long j12 = j10 + a10;
                    if (j12 < j11 + d11) {
                        Response.a K0 = this.f22144c.K0();
                        if (j12 >= d11) {
                            K0.a("Warning", "110 HttpURLConnection \"Response is stale\"");
                        }
                        if (a10 > 86400000 && f()) {
                            K0.a("Warning", "113 HttpURLConnection \"Heuristic expiration\"");
                        }
                        return new c(null, K0.c());
                    }
                }
                String str2 = this.f22152k;
                if (str2 != null) {
                    str = "If-None-Match";
                } else {
                    if (this.f22147f != null) {
                        str2 = this.f22148g;
                    } else if (this.f22145d != null) {
                        str2 = this.f22146e;
                    } else {
                        return new c(this.f22143b, null);
                    }
                    str = "If-Modified-Since";
                }
                Headers.a g10 = this.f22143b.h().g();
                Intrinsics.checkNotNull(str2);
                g10.d(str, str2);
                return new c(this.f22143b.k().f(g10.f()).b(), this.f22144c);
            }
            return new c(this.f22143b, null);
        }

        private final long d() {
            long j10;
            long j11;
            Response response = this.f22144c;
            Intrinsics.checkNotNull(response);
            CacheControl p10 = response.p();
            if (p10.c() != -1) {
                return TimeUnit.SECONDS.toMillis(p10.c());
            }
            Date date = this.f22149h;
            if (date != null) {
                Date date2 = this.f22145d;
                if (date2 != null) {
                    j11 = date2.getTime();
                } else {
                    j11 = this.f22151j;
                }
                long time = date.getTime() - j11;
                if (time <= 0) {
                    return 0L;
                }
                return time;
            }
            if (this.f22147f != null && this.f22144c.Y0().n().p() == null) {
                Date date3 = this.f22145d;
                if (date3 != null) {
                    j10 = date3.getTime();
                } else {
                    j10 = this.f22150i;
                }
                Date date4 = this.f22147f;
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
            Response response = this.f22144c;
            Intrinsics.checkNotNull(response);
            if (response.p().c() == -1 && this.f22149h == null) {
                return true;
            }
            return false;
        }

        public final c b() {
            c c10 = c();
            if (c10.b() != null && this.f22143b.d().i()) {
                return new c(null, null);
            }
            return c10;
        }
    }

    public c(Request request, Response response) {
        this.f22140a = request;
        this.f22141b = response;
    }

    public final Response a() {
        return this.f22141b;
    }

    public final Request b() {
        return this.f22140a;
    }
}
