package okhttp3;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CacheControl {

    /* renamed from: n  reason: collision with root package name */
    public static final b f40217n = new b(null);

    /* renamed from: o  reason: collision with root package name */
    public static final CacheControl f40218o = new a().d().a();

    /* renamed from: p  reason: collision with root package name */
    public static final CacheControl f40219p = new a().f().c(Integer.MAX_VALUE, TimeUnit.SECONDS).a();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f40220a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f40221b;

    /* renamed from: c  reason: collision with root package name */
    private final int f40222c;

    /* renamed from: d  reason: collision with root package name */
    private final int f40223d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f40224e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f40225f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f40226g;

    /* renamed from: h  reason: collision with root package name */
    private final int f40227h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40228i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f40229j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f40230k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f40231l;

    /* renamed from: m  reason: collision with root package name */
    private String f40232m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f40233a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f40234b;

        /* renamed from: c  reason: collision with root package name */
        private int f40235c = -1;

        /* renamed from: d  reason: collision with root package name */
        private int f40236d = -1;

        /* renamed from: e  reason: collision with root package name */
        private int f40237e = -1;

        /* renamed from: f  reason: collision with root package name */
        private boolean f40238f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f40239g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f40240h;

        private final int b(long j10) {
            if (j10 > 2147483647L) {
                return Integer.MAX_VALUE;
            }
            return (int) j10;
        }

        public final CacheControl a() {
            return new CacheControl(this.f40233a, this.f40234b, this.f40235c, -1, false, false, false, this.f40236d, this.f40237e, this.f40238f, this.f40239g, this.f40240h, null, null);
        }

        public final a c(int i10, TimeUnit timeUnit) {
            Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
            if (i10 >= 0) {
                this.f40236d = b(timeUnit.toSeconds(i10));
                return this;
            }
            throw new IllegalArgumentException(("maxStale < 0: " + i10).toString());
        }

        public final a d() {
            this.f40233a = true;
            return this;
        }

        public final a e() {
            this.f40234b = true;
            return this;
        }

        public final a f() {
            this.f40238f = true;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class b {
        public /* synthetic */ b(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final int a(String str, String str2, int i10) {
            int length = str.length();
            while (i10 < length) {
                if (StringsKt.U(str2, str.charAt(i10), false, 2, null)) {
                    return i10;
                }
                i10++;
            }
            return str.length();
        }

        /* JADX WARN: Removed duplicated region for block: B:15:0x004b  */
        /* JADX WARN: Removed duplicated region for block: B:32:0x00dc  */
        /* JADX WARN: Removed duplicated region for block: B:34:0x00e6  */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        public final okhttp3.CacheControl b(okhttp3.Headers r33) {
            /*
                Method dump skipped, instructions count: 426
                To view this dump add '--comments-level debug' option
            */
            throw new UnsupportedOperationException("Method not decompiled: okhttp3.CacheControl.b.b(okhttp3.Headers):okhttp3.CacheControl");
        }

        private b() {
        }
    }

    public /* synthetic */ CacheControl(boolean z10, boolean z11, int i10, int i11, boolean z12, boolean z13, boolean z14, int i12, int i13, boolean z15, boolean z16, boolean z17, String str, DefaultConstructorMarker defaultConstructorMarker) {
        this(z10, z11, i10, i11, z12, z13, z14, i12, i13, z15, z16, z17, str);
    }

    public final boolean a() {
        return this.f40224e;
    }

    public final boolean b() {
        return this.f40225f;
    }

    public final int c() {
        return this.f40222c;
    }

    public final int d() {
        return this.f40227h;
    }

    public final int e() {
        return this.f40228i;
    }

    public final boolean f() {
        return this.f40226g;
    }

    public final boolean g() {
        return this.f40220a;
    }

    public final boolean h() {
        return this.f40221b;
    }

    public final boolean i() {
        return this.f40229j;
    }

    public String toString() {
        String str = this.f40232m;
        if (str == null) {
            StringBuilder sb2 = new StringBuilder();
            if (this.f40220a) {
                sb2.append("no-cache, ");
            }
            if (this.f40221b) {
                sb2.append("no-store, ");
            }
            if (this.f40222c != -1) {
                sb2.append("max-age=");
                sb2.append(this.f40222c);
                sb2.append(", ");
            }
            if (this.f40223d != -1) {
                sb2.append("s-maxage=");
                sb2.append(this.f40223d);
                sb2.append(", ");
            }
            if (this.f40224e) {
                sb2.append("private, ");
            }
            if (this.f40225f) {
                sb2.append("public, ");
            }
            if (this.f40226g) {
                sb2.append("must-revalidate, ");
            }
            if (this.f40227h != -1) {
                sb2.append("max-stale=");
                sb2.append(this.f40227h);
                sb2.append(", ");
            }
            if (this.f40228i != -1) {
                sb2.append("min-fresh=");
                sb2.append(this.f40228i);
                sb2.append(", ");
            }
            if (this.f40229j) {
                sb2.append("only-if-cached, ");
            }
            if (this.f40230k) {
                sb2.append("no-transform, ");
            }
            if (this.f40231l) {
                sb2.append("immutable, ");
            }
            if (sb2.length() == 0) {
                return "";
            }
            sb2.delete(sb2.length() - 2, sb2.length());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
            this.f40232m = sb3;
            return sb3;
        }
        return str;
    }

    private CacheControl(boolean z10, boolean z11, int i10, int i11, boolean z12, boolean z13, boolean z14, int i12, int i13, boolean z15, boolean z16, boolean z17, String str) {
        this.f40220a = z10;
        this.f40221b = z11;
        this.f40222c = i10;
        this.f40223d = i11;
        this.f40224e = z12;
        this.f40225f = z13;
        this.f40226g = z14;
        this.f40227h = i12;
        this.f40228i = i13;
        this.f40229j = z15;
        this.f40230k = z16;
        this.f40231l = z17;
        this.f40232m = str;
    }
}
