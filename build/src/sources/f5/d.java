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
    public static final a f23177c = new a(null);

    /* renamed from: a  reason: collision with root package name */
    private final Request f23178a;

    /* renamed from: b  reason: collision with root package name */
    private final c f23179b;

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
        private final Request f23180a;

        /* renamed from: b  reason: collision with root package name */
        private final c f23181b;

        /* renamed from: c  reason: collision with root package name */
        private Date f23182c;

        /* renamed from: d  reason: collision with root package name */
        private String f23183d;

        /* renamed from: e  reason: collision with root package name */
        private Date f23184e;

        /* renamed from: f  reason: collision with root package name */
        private String f23185f;

        /* renamed from: g  reason: collision with root package name */
        private Date f23186g;

        /* renamed from: h  reason: collision with root package name */
        private long f23187h;

        /* renamed from: i  reason: collision with root package name */
        private long f23188i;

        /* renamed from: j  reason: collision with root package name */
        private String f23189j;

        /* renamed from: k  reason: collision with root package name */
        private int f23190k;

        public b(Request request, c cVar) {
            this.f23180a = request;
            this.f23181b = cVar;
            this.f23190k = -1;
            if (cVar != null) {
                this.f23187h = cVar.i();
                this.f23188i = cVar.g();
                Headers h10 = cVar.h();
                int size = h10.size();
                for (int i10 = 0; i10 < size; i10++) {
                    String e10 = h10.e(i10);
                    if (StringsKt.A(e10, "Date", true)) {
                        this.f23182c = h10.d("Date");
                        this.f23183d = h10.j(i10);
                    } else if (StringsKt.A(e10, "Expires", true)) {
                        this.f23186g = h10.d("Expires");
                    } else if (StringsKt.A(e10, "Last-Modified", true)) {
                        this.f23184e = h10.d("Last-Modified");
                        this.f23185f = h10.j(i10);
                    } else if (StringsKt.A(e10, "ETag", true)) {
                        this.f23189j = h10.j(i10);
                    } else if (StringsKt.A(e10, "Age", true)) {
                        this.f23190k = k.z(h10.j(i10), -1);
                    }
                }
            }
        }

        private final long a() {
            Date date = this.f23182c;
            long j10 = 0;
            if (date != null) {
                j10 = Math.max(0L, this.f23188i - date.getTime());
            }
            int i10 = this.f23190k;
            if (i10 != -1) {
                j10 = Math.max(j10, TimeUnit.SECONDS.toMillis(i10));
            }
            return j10 + (this.f23188i - this.f23187h) + (w.f32207a.a() - this.f23188i);
        }

        private final long c() {
            long j10;
            long j11;
            c cVar = this.f23181b;
            Intrinsics.checkNotNull(cVar);
            CacheControl e10 = cVar.e();
            if (e10.c() != -1) {
                return TimeUnit.SECONDS.toMillis(e10.c());
            }
            Date date = this.f23186g;
            if (date != null) {
                Date date2 = this.f23182c;
                if (date2 != null) {
                    j11 = date2.getTime();
                } else {
                    j11 = this.f23188i;
                }
                long time = date.getTime() - j11;
                if (time <= 0) {
                    return 0L;
                }
                return time;
            }
            if (this.f23184e != null && this.f23180a.n().p() == null) {
                Date date3 = this.f23182c;
                if (date3 != null) {
                    j10 = date3.getTime();
                } else {
                    j10 = this.f23187h;
                }
                Date date4 = this.f23184e;
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
            if (this.f23181b == null) {
                return new d(this.f23180a, null, null);
            }
            if (this.f23180a.i() && !this.f23181b.j()) {
                return new d(this.f23180a, null, null);
            }
            CacheControl e10 = this.f23181b.e();
            if (!d.f23177c.b(this.f23180a, this.f23181b)) {
                return new d(this.f23180a, null, null);
            }
            CacheControl d10 = this.f23180a.d();
            if (!d10.g() && !d(this.f23180a)) {
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
                    return new d(null, this.f23181b, null);
                }
                String str2 = this.f23189j;
                if (str2 != null) {
                    Intrinsics.checkNotNull(str2);
                    str = "If-None-Match";
                } else {
                    str = "If-Modified-Since";
                    if (this.f23184e != null) {
                        str2 = this.f23185f;
                        Intrinsics.checkNotNull(str2);
                    } else if (this.f23182c != null) {
                        str2 = this.f23183d;
                        Intrinsics.checkNotNull(str2);
                    } else {
                        return new d(this.f23180a, null, null);
                    }
                }
                return new d(this.f23180a.k().a(str, str2).b(), this.f23181b, null);
            }
            return new d(this.f23180a, null, null);
        }
    }

    public /* synthetic */ d(Request request, c cVar, DefaultConstructorMarker defaultConstructorMarker) {
        this(request, cVar);
    }

    public final c a() {
        return this.f23179b;
    }

    public final Request b() {
        return this.f23178a;
    }

    private d(Request request, c cVar) {
        this.f23178a = request;
        this.f23179b = cVar;
    }
}
