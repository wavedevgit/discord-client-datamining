package okhttp3;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CacheControl {

    /* renamed from: n  reason: collision with root package name */
    public static final b f42839n = new b(null);

    /* renamed from: o  reason: collision with root package name */
    public static final CacheControl f42840o = new a().d().a();

    /* renamed from: p  reason: collision with root package name */
    public static final CacheControl f42841p = new a().f().c(Integer.MAX_VALUE, TimeUnit.SECONDS).a();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f42842a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f42843b;

    /* renamed from: c  reason: collision with root package name */
    private final int f42844c;

    /* renamed from: d  reason: collision with root package name */
    private final int f42845d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f42846e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f42847f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f42848g;

    /* renamed from: h  reason: collision with root package name */
    private final int f42849h;

    /* renamed from: i  reason: collision with root package name */
    private final int f42850i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f42851j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f42852k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f42853l;

    /* renamed from: m  reason: collision with root package name */
    private String f42854m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f42855a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f42856b;

        /* renamed from: c  reason: collision with root package name */
        private int f42857c = -1;

        /* renamed from: d  reason: collision with root package name */
        private int f42858d = -1;

        /* renamed from: e  reason: collision with root package name */
        private int f42859e = -1;

        /* renamed from: f  reason: collision with root package name */
        private boolean f42860f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f42861g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f42862h;

        private final int b(long j10) {
            if (j10 > 2147483647L) {
                return Integer.MAX_VALUE;
            }
            return (int) j10;
        }

        public final CacheControl a() {
            return new CacheControl(this.f42855a, this.f42856b, this.f42857c, -1, false, false, false, this.f42858d, this.f42859e, this.f42860f, this.f42861g, this.f42862h, null, null);
        }

        public final a c(int i10, TimeUnit timeUnit) {
            Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
            if (i10 >= 0) {
                this.f42858d = b(timeUnit.toSeconds(i10));
                return this;
            }
            throw new IllegalArgumentException(("maxStale < 0: " + i10).toString());
        }

        public final a d() {
            this.f42855a = true;
            return this;
        }

        public final a e() {
            this.f42856b = true;
            return this;
        }

        public final a f() {
            this.f42860f = true;
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
        return this.f42846e;
    }

    public final boolean b() {
        return this.f42847f;
    }

    public final int c() {
        return this.f42844c;
    }

    public final int d() {
        return this.f42849h;
    }

    public final int e() {
        return this.f42850i;
    }

    public final boolean f() {
        return this.f42848g;
    }

    public final boolean g() {
        return this.f42842a;
    }

    public final boolean h() {
        return this.f42843b;
    }

    public final boolean i() {
        return this.f42851j;
    }

    public String toString() {
        String str = this.f42854m;
        if (str == null) {
            StringBuilder sb2 = new StringBuilder();
            if (this.f42842a) {
                sb2.append("no-cache, ");
            }
            if (this.f42843b) {
                sb2.append("no-store, ");
            }
            if (this.f42844c != -1) {
                sb2.append("max-age=");
                sb2.append(this.f42844c);
                sb2.append(", ");
            }
            if (this.f42845d != -1) {
                sb2.append("s-maxage=");
                sb2.append(this.f42845d);
                sb2.append(", ");
            }
            if (this.f42846e) {
                sb2.append("private, ");
            }
            if (this.f42847f) {
                sb2.append("public, ");
            }
            if (this.f42848g) {
                sb2.append("must-revalidate, ");
            }
            if (this.f42849h != -1) {
                sb2.append("max-stale=");
                sb2.append(this.f42849h);
                sb2.append(", ");
            }
            if (this.f42850i != -1) {
                sb2.append("min-fresh=");
                sb2.append(this.f42850i);
                sb2.append(", ");
            }
            if (this.f42851j) {
                sb2.append("only-if-cached, ");
            }
            if (this.f42852k) {
                sb2.append("no-transform, ");
            }
            if (this.f42853l) {
                sb2.append("immutable, ");
            }
            if (sb2.length() == 0) {
                return "";
            }
            sb2.delete(sb2.length() - 2, sb2.length());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
            this.f42854m = sb3;
            return sb3;
        }
        return str;
    }

    private CacheControl(boolean z10, boolean z11, int i10, int i11, boolean z12, boolean z13, boolean z14, int i12, int i13, boolean z15, boolean z16, boolean z17, String str) {
        this.f42842a = z10;
        this.f42843b = z11;
        this.f42844c = i10;
        this.f42845d = i11;
        this.f42846e = z12;
        this.f42847f = z13;
        this.f42848g = z14;
        this.f42849h = i12;
        this.f42850i = i13;
        this.f42851j = z15;
        this.f42852k = z16;
        this.f42853l = z17;
        this.f42854m = str;
    }
}
