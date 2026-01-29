package f5;

import java.util.Date;
import java.util.concurrent.TimeUnit;
import k5.k;
import k5.w;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
import okhttp3.CacheControl;
import okhttp3.Headers;
import okhttp3.Request;
import okhttp3.Response;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class d {

    /* renamed from: c  reason: collision with root package name */
    public static final a f24374c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Request f24375a;

    /* renamed from: b  reason: collision with root package name */
    private final c f24376b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a {
        public /* synthetic */ a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final boolean d(String str) {
            if (StringsKt.A("Content-Length", str, true) || StringsKt.A("Content-Encoding", str, true) || StringsKt.A("Content-Type", str, true)) {
                return true;
            }
            return false;
        }

        private final boolean e(String str) {
            if (!StringsKt.A("Connection", str, true) && !StringsKt.A("Keep-Alive", str, true) && !StringsKt.A("Proxy-Authenticate", str, true) && !StringsKt.A("Proxy-Authorization", str, true) && !StringsKt.A("TE", str, true) && !StringsKt.A("Trailers", str, true) && !StringsKt.A("Transfer-Encoding", str, true) && !StringsKt.A("Upgrade", str, true)) {
                return true;
            }
            return false;
        }

        public final Headers a(Headers headers, Headers headers2) {
            Headers.a aVar = new Headers.a();
            int size = headers.size();
            for (int i10 = 0; i10 < size; i10++) {
                String e10 = headers.e(i10);
                String j10 = headers.j(i10);
                if ((!StringsKt.A("Warning", e10, true) || !StringsKt.P(j10, "1", false, 2, null)) && (d(e10) || !e(e10) || headers2.c(e10) == null)) {
                    aVar.e(e10, j10);
                }
            }
            int size2 = headers2.size();
            for (int i11 = 0; i11 < size2; i11++) {
                String e11 = headers2.e(i11);
                if (!d(e11) && e(e11)) {
                    aVar.e(e11, headers2.j(i11));
                }
            }
            return aVar.f();
        }

        public final boolean b(Request request, c cVar) {
            if (!request.d().h() && !cVar.e().h() && !Intrinsics.areEqual(cVar.h().c("Vary"), "*")) {
                return true;
            }
            return false;
        }

        public final boolean c(Request request, Response response) {
            if (!request.d().h() && !response.B().h() && !Intrinsics.areEqual(response.E0().c("Vary"), "*")) {
                return true;
            }
            return false;
        }

        private a() {
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final Request f24377a;

        /* renamed from: b  reason: collision with root package name */
        private final c f24378b;

        /* renamed from: c  reason: collision with root package name */
        private Date f24379c;

        /* renamed from: d  reason: collision with root package name */
        private String f24380d;

        /* renamed from: e  reason: collision with root package name */
        private Date f24381e;

        /* renamed from: f  reason: collision with root package name */
        private String f24382f;

        /* renamed from: g  reason: collision with root package name */
        private Date f24383g;

        /* renamed from: h  reason: collision with root package name */
        private long f24384h;

        /* renamed from: i  reason: collision with root package name */
        private long f24385i;

        /* renamed from: j  reason: collision with root package name */
        private String f24386j;

        /* renamed from: k  reason: collision with root package name */
        private int f24387k;

        public b(Request request, c cVar) {
            this.f24377a = request;
            this.f24378b = cVar;
            this.f24387k = -1;
            if (cVar != null) {
                this.f24384h = cVar.i();
                this.f24385i = cVar.g();
                Headers h10 = cVar.h();
                int size = h10.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String e10 = h10.e(i10);
                    if (StringsKt.A(e10, "Date", true)) {
                        this.f24379c = h10.d("Date");
                        this.f24380d = h10.j(i10);
                    } else if (StringsKt.A(e10, "Expires", true)) {
                        this.f24383g = h10.d("Expires");
                    } else if (StringsKt.A(e10, "Last-Modified", true)) {
                        this.f24381e = h10.d("Last-Modified");
                        this.f24382f = h10.j(i10);
                    } else if (StringsKt.A(e10, "ETag", true)) {
                        this.f24386j = h10.j(i10);
                    } else if (StringsKt.A(e10, "Age", true)) {
                        this.f24387k = k.z(h10.j(i10), -1);
                    }
                }
            }
        }

        private final long a() {
            Date date = this.f24379c;
            long j10 = 0;
            if (date != null) {
                j10 = Math.max(0L, this.f24385i - date.getTime());
            }
            int i10 = this.f24387k;
            if (i10 != -1) {
                j10 = Math.max(j10, TimeUnit.SECONDS.toMillis(i10));
            }
            return j10 + (this.f24385i - this.f24384h) + (w.f33047a.a() - this.f24385i);
        }

        private final long c() {
            long j10;
            long j11;
            c cVar = this.f24378b;
            Intrinsics.checkNotNull(cVar);
            CacheControl e10 = cVar.e();
            if (e10.c() != -1) {
                return TimeUnit.SECONDS.toMillis(e10.c());
            }
            Date date = this.f24383g;
            if (date != null) {
                Date date2 = this.f24379c;
                if (date2 != null) {
                    j11 = date2.getTime();
                } else {
                    j11 = this.f24385i;
                }
                long time = date.getTime() - j11;
                if (time <= 0) {
                    return 0L;
                }
                return time;
            }
            if (this.f24381e != null && this.f24377a.n().p() == null) {
                Date date3 = this.f24379c;
                if (date3 != null) {
                    j10 = date3.getTime();
                } else {
                    j10 = this.f24384h;
                }
                Date date4 = this.f24381e;
                Intrinsics.checkNotNull(date4);
                long time2 = j10 - date4.getTime();
                if (time2 > 0) {
                    return time2 / 10;
                }
            }
            return 0L;
        }

        private final boolean d(Request request) {
            if (request.f("If-Modified-Since") == null && request.f("If-None-Match") == null) {
                return false;
            }
            return true;
        }

        public final d b() {
            long j10;
            String str;
            if (this.f24378b == null) {
                return new d(this.f24377a, null, null);
            }
            if (this.f24377a.i() && !this.f24378b.j()) {
                return new d(this.f24377a, null, null);
            }
            CacheControl e10 = this.f24378b.e();
            if (!d.f24374c.b(this.f24377a, this.f24378b)) {
                return new d(this.f24377a, null, null);
            }
            CacheControl d10 = this.f24377a.d();
            if (!d10.g() && !d(this.f24377a)) {
                long a10 = a();
                long c10 = c();
                if (d10.c() != -1) {
                    c10 = Math.min(c10, TimeUnit.SECONDS.toMillis(d10.c()));
                }
                long j11 = 0;
                if (d10.e() != -1) {
                    j10 = TimeUnit.SECONDS.toMillis(d10.e());
                } else {
                    j10 = 0;
                }
                if (!e10.f() && d10.d() != -1) {
                    j11 = TimeUnit.SECONDS.toMillis(d10.d());
                }
                if (!e10.g() && a10 + j10 < c10 + j11) {
                    return new d(null, this.f24378b, null);
                }
                String str2 = this.f24386j;
                if (str2 != null) {
                    Intrinsics.checkNotNull(str2);
                    str = "If-None-Match";
                } else {
                    str = "If-Modified-Since";
                    if (this.f24381e != null) {
                        str2 = this.f24382f;
                        Intrinsics.checkNotNull(str2);
                    } else if (this.f24379c != null) {
                        str2 = this.f24380d;
                        Intrinsics.checkNotNull(str2);
                    } else {
                        return new d(this.f24377a, null, null);
                    }
                }
                return new d(this.f24377a.k().a(str, str2).b(), this.f24378b, null);
            }
            return new d(this.f24377a, null, null);
        }
    }

    public /* synthetic */ d(Request request, c cVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(request, cVar);
    }

    public final c a() {
        return this.f24376b;
    }

    public final Request b() {
        return this.f24375a;
    }

    private d(Request request, c cVar) {
        this.f24375a = request;
        this.f24376b = cVar;
    }
}
