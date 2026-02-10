package fu;

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
    public static final a f23245c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Request f23246a;

    /* renamed from: b  reason: collision with root package name */
    private final Response f23247b;

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
                if (Response.Z(response, "Expires", null, 2, null) == null && response.p().c() == -1 && !response.p().b() && !response.p().a()) {
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
        private final long f23248a;

        /* renamed from: b  reason: collision with root package name */
        private final Request f23249b;

        /* renamed from: c  reason: collision with root package name */
        private final Response f23250c;

        /* renamed from: d  reason: collision with root package name */
        private Date f23251d;

        /* renamed from: e  reason: collision with root package name */
        private String f23252e;

        /* renamed from: f  reason: collision with root package name */
        private Date f23253f;

        /* renamed from: g  reason: collision with root package name */
        private String f23254g;

        /* renamed from: h  reason: collision with root package name */
        private Date f23255h;

        /* renamed from: i  reason: collision with root package name */
        private long f23256i;

        /* renamed from: j  reason: collision with root package name */
        private long f23257j;

        /* renamed from: k  reason: collision with root package name */
        private String f23258k;

        /* renamed from: l  reason: collision with root package name */
        private int f23259l;

        public b(long j10, Request request, Response response) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f23248a = j10;
            this.f23249b = request;
            this.f23250c = response;
            this.f23259l = -1;
            if (response != null) {
                this.f23256i = response.a1();
                this.f23257j = response.V0();
                Headers C0 = response.C0();
                int size = C0.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String e10 = C0.e(i10);
                    String j11 = C0.j(i10);
                    if (StringsKt.A(e10, "Date", true)) {
                        this.f23251d = iu.c.a(j11);
                        this.f23252e = j11;
                    } else if (StringsKt.A(e10, "Expires", true)) {
                        this.f23255h = iu.c.a(j11);
                    } else if (StringsKt.A(e10, "Last-Modified", true)) {
                        this.f23253f = iu.c.a(j11);
                        this.f23254g = j11;
                    } else if (StringsKt.A(e10, "ETag", true)) {
                        this.f23258k = j11;
                    } else if (StringsKt.A(e10, "Age", true)) {
                        this.f23259l = du.e.Y(j11, -1);
                    }
                }
            }
        }

        private final long a() {
            Date date = this.f23251d;
            long j10 = 0;
            if (date != null) {
                j10 = Math.max(0L, this.f23257j - date.getTime());
            }
            int i10 = this.f23259l;
            if (i10 != -1) {
                j10 = Math.max(j10, TimeUnit.SECONDS.toMillis(i10));
            }
            long j11 = this.f23257j;
            return j10 + (j11 - this.f23256i) + (this.f23248a - j11);
        }

        private final c c() {
            long j10;
            String str;
            if (this.f23250c == null) {
                return new c(this.f23249b, null);
            }
            if (this.f23249b.i() && this.f23250c.I() == null) {
                return new c(this.f23249b, null);
            }
            if (!c.f23245c.a(this.f23250c, this.f23249b)) {
                return new c(this.f23249b, null);
            }
            CacheControl d10 = this.f23249b.d();
            if (!d10.g() && !e(this.f23249b)) {
                CacheControl p10 = this.f23250c.p();
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
                        Response.a J0 = this.f23250c.J0();
                        if (j12 >= d11) {
                            J0.a("Warning", "110 HttpURLConnection \"Response is stale\"");
                        }
                        if (a10 > 86400000 && f()) {
                            J0.a("Warning", "113 HttpURLConnection \"Heuristic expiration\"");
                        }
                        return new c(null, J0.c());
                    }
                }
                String str2 = this.f23258k;
                if (str2 != null) {
                    str = "If-None-Match";
                } else {
                    if (this.f23253f != null) {
                        str2 = this.f23254g;
                    } else if (this.f23251d != null) {
                        str2 = this.f23252e;
                    } else {
                        return new c(this.f23249b, null);
                    }
                    str = "If-Modified-Since";
                }
                Headers.a g10 = this.f23249b.h().g();
                Intrinsics.checkNotNull(str2);
                g10.d(str, str2);
                return new c(this.f23249b.k().f(g10.f()).b(), this.f23250c);
            }
            return new c(this.f23249b, null);
        }

        private final long d() {
            long j10;
            long j11;
            Response response = this.f23250c;
            Intrinsics.checkNotNull(response);
            CacheControl p10 = response.p();
            if (p10.c() != -1) {
                return TimeUnit.SECONDS.toMillis(p10.c());
            }
            Date date = this.f23255h;
            if (date != null) {
                Date date2 = this.f23251d;
                if (date2 != null) {
                    j11 = date2.getTime();
                } else {
                    j11 = this.f23257j;
                }
                long time = date.getTime() - j11;
                if (time <= 0) {
                    return 0L;
                }
                return time;
            }
            if (this.f23253f != null && this.f23250c.W0().n().p() == null) {
                Date date3 = this.f23251d;
                if (date3 != null) {
                    j10 = date3.getTime();
                } else {
                    j10 = this.f23256i;
                }
                Date date4 = this.f23253f;
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
            Response response = this.f23250c;
            Intrinsics.checkNotNull(response);
            if (response.p().c() == -1 && this.f23255h == null) {
                return true;
            }
            return false;
        }

        public final c b() {
            c c10 = c();
            if (c10.b() != null && this.f23249b.d().i()) {
                return new c(null, null);
            }
            return c10;
        }
    }

    public c(Request request, Response response) {
        this.f23246a = request;
        this.f23247b = response;
    }

    public final Response a() {
        return this.f23247b;
    }

    public final Request b() {
        return this.f23246a;
    }
}
