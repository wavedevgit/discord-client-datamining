package ou;

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
    public static final a f41827c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Request f41828a;

    /* renamed from: b  reason: collision with root package name */
    private final Response f41829b;

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
        private final long f41830a;

        /* renamed from: b  reason: collision with root package name */
        private final Request f41831b;

        /* renamed from: c  reason: collision with root package name */
        private final Response f41832c;

        /* renamed from: d  reason: collision with root package name */
        private Date f41833d;

        /* renamed from: e  reason: collision with root package name */
        private String f41834e;

        /* renamed from: f  reason: collision with root package name */
        private Date f41835f;

        /* renamed from: g  reason: collision with root package name */
        private String f41836g;

        /* renamed from: h  reason: collision with root package name */
        private Date f41837h;

        /* renamed from: i  reason: collision with root package name */
        private long f41838i;

        /* renamed from: j  reason: collision with root package name */
        private long f41839j;

        /* renamed from: k  reason: collision with root package name */
        private String f41840k;

        /* renamed from: l  reason: collision with root package name */
        private int f41841l;

        public b(long j10, Request request, Response response) {
            Intrinsics.checkNotNullParameter(request, "request");
            this.f41830a = j10;
            this.f41831b = request;
            this.f41832c = response;
            this.f41841l = -1;
            if (response != null) {
                this.f41838i = response.S0();
                this.f41839j = response.N0();
                Headers z02 = response.z0();
                int size = z02.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String e10 = z02.e(i10);
                    String k10 = z02.k(i10);
                    if (StringsKt.A(e10, "Date", true)) {
                        this.f41833d = ru.c.a(k10);
                        this.f41834e = k10;
                    } else if (StringsKt.A(e10, "Expires", true)) {
                        this.f41837h = ru.c.a(k10);
                    } else if (StringsKt.A(e10, "Last-Modified", true)) {
                        this.f41835f = ru.c.a(k10);
                        this.f41836g = k10;
                    } else if (StringsKt.A(e10, "ETag", true)) {
                        this.f41840k = k10;
                    } else if (StringsKt.A(e10, "Age", true)) {
                        this.f41841l = mu.e.Y(k10, -1);
                    }
                }
            }
        }

        private final long a() {
            Date date = this.f41833d;
            long j10 = 0;
            if (date != null) {
                j10 = Math.max(0L, this.f41839j - date.getTime());
            }
            int i10 = this.f41841l;
            if (i10 != -1) {
                j10 = Math.max(j10, TimeUnit.SECONDS.toMillis(i10));
            }
            long j11 = this.f41839j;
            return j10 + (j11 - this.f41838i) + (this.f41830a - j11);
        }

        private final c c() {
            long j10;
            String str;
            if (this.f41832c == null) {
                return new c(this.f41831b, null);
            }
            if (this.f41831b.i() && this.f41832c.I() == null) {
                return new c(this.f41831b, null);
            }
            if (!c.f41827c.a(this.f41832c, this.f41831b)) {
                return new c(this.f41831b, null);
            }
            CacheControl d10 = this.f41831b.d();
            if (!d10.g() && !e(this.f41831b)) {
                CacheControl p10 = this.f41832c.p();
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
                        Response.a G0 = this.f41832c.G0();
                        if (j12 >= d11) {
                            G0.a("Warning", "110 HttpURLConnection \"Response is stale\"");
                        }
                        if (a10 > 86400000 && f()) {
                            G0.a("Warning", "113 HttpURLConnection \"Heuristic expiration\"");
                        }
                        return new c(null, G0.c());
                    }
                }
                String str2 = this.f41840k;
                if (str2 != null) {
                    str = "If-None-Match";
                } else {
                    if (this.f41835f != null) {
                        str2 = this.f41836g;
                    } else if (this.f41833d != null) {
                        str2 = this.f41834e;
                    } else {
                        return new c(this.f41831b, null);
                    }
                    str = "If-Modified-Since";
                }
                Headers.a g10 = this.f41831b.h().g();
                Intrinsics.checkNotNull(str2);
                g10.d(str, str2);
                return new c(this.f41831b.k().f(g10.f()).b(), this.f41832c);
            }
            return new c(this.f41831b, null);
        }

        private final long d() {
            long j10;
            long j11;
            Response response = this.f41832c;
            Intrinsics.checkNotNull(response);
            CacheControl p10 = response.p();
            if (p10.c() != -1) {
                return TimeUnit.SECONDS.toMillis(p10.c());
            }
            Date date = this.f41837h;
            if (date != null) {
                Date date2 = this.f41833d;
                if (date2 != null) {
                    j11 = date2.getTime();
                } else {
                    j11 = this.f41839j;
                }
                long time = date.getTime() - j11;
                if (time <= 0) {
                    return 0L;
                }
                return time;
            }
            if (this.f41835f != null && this.f41832c.O0().n().p() == null) {
                Date date3 = this.f41833d;
                if (date3 != null) {
                    j10 = date3.getTime();
                } else {
                    j10 = this.f41838i;
                }
                Date date4 = this.f41835f;
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
            Response response = this.f41832c;
            Intrinsics.checkNotNull(response);
            if (response.p().c() == -1 && this.f41837h == null) {
                return true;
            }
            return false;
        }

        public final c b() {
            c c10 = c();
            if (c10.b() != null && this.f41831b.d().i()) {
                return new c(null, null);
            }
            return c10;
        }
    }

    public c(Request request, Response response) {
        this.f41828a = request;
        this.f41829b = response;
    }

    public final Response a() {
        return this.f41829b;
    }

    public final Request b() {
        return this.f41828a;
    }
}
