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
    public static final a f22503c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Request f22504a;

    /* renamed from: b  reason: collision with root package name */
    private final c f22505b;

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
            if (!request.d().h() && !response.p().h() && !Intrinsics.areEqual(response.E0().c("Vary"), "*")) {
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
        private final Request f22506a;

        /* renamed from: b  reason: collision with root package name */
        private final c f22507b;

        /* renamed from: c  reason: collision with root package name */
        private Date f22508c;

        /* renamed from: d  reason: collision with root package name */
        private String f22509d;

        /* renamed from: e  reason: collision with root package name */
        private Date f22510e;

        /* renamed from: f  reason: collision with root package name */
        private String f22511f;

        /* renamed from: g  reason: collision with root package name */
        private Date f22512g;

        /* renamed from: h  reason: collision with root package name */
        private long f22513h;

        /* renamed from: i  reason: collision with root package name */
        private long f22514i;

        /* renamed from: j  reason: collision with root package name */
        private String f22515j;

        /* renamed from: k  reason: collision with root package name */
        private int f22516k;

        public b(Request request, c cVar) {
            this.f22506a = request;
            this.f22507b = cVar;
            this.f22516k = -1;
            if (cVar != null) {
                this.f22513h = cVar.i();
                this.f22514i = cVar.g();
                Headers h10 = cVar.h();
                int size = h10.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String e10 = h10.e(i10);
                    if (StringsKt.A(e10, "Date", true)) {
                        this.f22508c = h10.d("Date");
                        this.f22509d = h10.j(i10);
                    } else if (StringsKt.A(e10, "Expires", true)) {
                        this.f22512g = h10.d("Expires");
                    } else if (StringsKt.A(e10, "Last-Modified", true)) {
                        this.f22510e = h10.d("Last-Modified");
                        this.f22511f = h10.j(i10);
                    } else if (StringsKt.A(e10, "ETag", true)) {
                        this.f22515j = h10.j(i10);
                    } else if (StringsKt.A(e10, "Age", true)) {
                        this.f22516k = k.z(h10.j(i10), -1);
                    }
                }
            }
        }

        private final long a() {
            Date date = this.f22508c;
            long j10 = 0;
            if (date != null) {
                j10 = Math.max(0L, this.f22514i - date.getTime());
            }
            int i10 = this.f22516k;
            if (i10 != -1) {
                j10 = Math.max(j10, TimeUnit.SECONDS.toMillis(i10));
            }
            return j10 + (this.f22514i - this.f22513h) + (w.f31514a.a() - this.f22514i);
        }

        private final long c() {
            long j10;
            long j11;
            c cVar = this.f22507b;
            Intrinsics.checkNotNull(cVar);
            CacheControl e10 = cVar.e();
            if (e10.c() != -1) {
                return TimeUnit.SECONDS.toMillis(e10.c());
            }
            Date date = this.f22512g;
            if (date != null) {
                Date date2 = this.f22508c;
                if (date2 != null) {
                    j11 = date2.getTime();
                } else {
                    j11 = this.f22514i;
                }
                long time = date.getTime() - j11;
                if (time <= 0) {
                    return 0L;
                }
                return time;
            }
            if (this.f22510e != null && this.f22506a.n().p() == null) {
                Date date3 = this.f22508c;
                if (date3 != null) {
                    j10 = date3.getTime();
                } else {
                    j10 = this.f22513h;
                }
                Date date4 = this.f22510e;
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
            if (this.f22507b == null) {
                return new d(this.f22506a, null, null);
            }
            if (this.f22506a.i() && !this.f22507b.j()) {
                return new d(this.f22506a, null, null);
            }
            CacheControl e10 = this.f22507b.e();
            if (!d.f22503c.b(this.f22506a, this.f22507b)) {
                return new d(this.f22506a, null, null);
            }
            CacheControl d10 = this.f22506a.d();
            if (!d10.g() && !d(this.f22506a)) {
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
                    return new d(null, this.f22507b, null);
                }
                String str2 = this.f22515j;
                if (str2 != null) {
                    Intrinsics.checkNotNull(str2);
                    str = "If-None-Match";
                } else {
                    str = "If-Modified-Since";
                    if (this.f22510e != null) {
                        str2 = this.f22511f;
                        Intrinsics.checkNotNull(str2);
                    } else if (this.f22508c != null) {
                        str2 = this.f22509d;
                        Intrinsics.checkNotNull(str2);
                    } else {
                        return new d(this.f22506a, null, null);
                    }
                }
                return new d(this.f22506a.k().a(str, str2).b(), this.f22507b, null);
            }
            return new d(this.f22506a, null, null);
        }
    }

    public /* synthetic */ d(Request request, c cVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(request, cVar);
    }

    public final c a() {
        return this.f22505b;
    }

    public final Request b() {
        return this.f22504a;
    }

    private d(Request request, c cVar) {
        this.f22504a = request;
        this.f22505b = cVar;
    }
}
