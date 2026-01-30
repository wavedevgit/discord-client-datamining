package okhttp3;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CacheControl {

    /* renamed from: n  reason: collision with root package name */
    public static final b f44004n = new b(null);

    /* renamed from: o  reason: collision with root package name */
    public static final CacheControl f44005o = new a().d().a();

    /* renamed from: p  reason: collision with root package name */
    public static final CacheControl f44006p = new a().f().c(Integer.MAX_VALUE, TimeUnit.SECONDS).a();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f44007a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44008b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44009c;

    /* renamed from: d  reason: collision with root package name */
    private final int f44010d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f44011e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f44012f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f44013g;

    /* renamed from: h  reason: collision with root package name */
    private final int f44014h;

    /* renamed from: i  reason: collision with root package name */
    private final int f44015i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f44016j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f44017k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f44018l;

    /* renamed from: m  reason: collision with root package name */
    private String f44019m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f44020a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f44021b;

        /* renamed from: c  reason: collision with root package name */
        private int f44022c = -1;

        /* renamed from: d  reason: collision with root package name */
        private int f44023d = -1;

        /* renamed from: e  reason: collision with root package name */
        private int f44024e = -1;

        /* renamed from: f  reason: collision with root package name */
        private boolean f44025f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f44026g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f44027h;

        private final int b(long j10) {
            if (j10 > 2147483647L) {
                return Integer.MAX_VALUE;
            }
            return (int) j10;
        }

        public final CacheControl a() {
            return new CacheControl(this.f44020a, this.f44021b, this.f44022c, -1, false, false, false, this.f44023d, this.f44024e, this.f44025f, this.f44026g, this.f44027h, null, null);
        }

        public final a c(int i10, TimeUnit timeUnit) {
            Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
            if (i10 >= 0) {
                this.f44023d = b(timeUnit.toSeconds(i10));
                return this;
            }
            throw new IllegalArgumentException(("maxStale < 0: " + i10).toString());
        }

        public final a d() {
            this.f44020a = true;
            return this;
        }

        public final a e() {
            this.f44021b = true;
            return this;
        }

        public final a f() {
            this.f44025f = true;
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
        return this.f44011e;
    }

    public final boolean b() {
        return this.f44012f;
    }

    public final int c() {
        return this.f44009c;
    }

    public final int d() {
        return this.f44014h;
    }

    public final int e() {
        return this.f44015i;
    }

    public final boolean f() {
        return this.f44013g;
    }

    public final boolean g() {
        return this.f44007a;
    }

    public final boolean h() {
        return this.f44008b;
    }

    public final boolean i() {
        return this.f44016j;
    }

    public String toString() {
        String str = this.f44019m;
        if (str == null) {
            StringBuilder sb2 = new StringBuilder();
            if (this.f44007a) {
                sb2.append("no-cache, ");
            }
            if (this.f44008b) {
                sb2.append("no-store, ");
            }
            if (this.f44009c != -1) {
                sb2.append("max-age=");
                sb2.append(this.f44009c);
                sb2.append(", ");
            }
            if (this.f44010d != -1) {
                sb2.append("s-maxage=");
                sb2.append(this.f44010d);
                sb2.append(", ");
            }
            if (this.f44011e) {
                sb2.append("private, ");
            }
            if (this.f44012f) {
                sb2.append("public, ");
            }
            if (this.f44013g) {
                sb2.append("must-revalidate, ");
            }
            if (this.f44014h != -1) {
                sb2.append("max-stale=");
                sb2.append(this.f44014h);
                sb2.append(", ");
            }
            if (this.f44015i != -1) {
                sb2.append("min-fresh=");
                sb2.append(this.f44015i);
                sb2.append(", ");
            }
            if (this.f44016j) {
                sb2.append("only-if-cached, ");
            }
            if (this.f44017k) {
                sb2.append("no-transform, ");
            }
            if (this.f44018l) {
                sb2.append("immutable, ");
            }
            if (sb2.length() == 0) {
                return "";
            }
            sb2.delete(sb2.length() - 2, sb2.length());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
            this.f44019m = sb3;
            return sb3;
        }
        return str;
    }

    private CacheControl(boolean z10, boolean z11, int i10, int i11, boolean z12, boolean z13, boolean z14, int i12, int i13, boolean z15, boolean z16, boolean z17, String str) {
        this.f44007a = z10;
        this.f44008b = z11;
        this.f44009c = i10;
        this.f44010d = i11;
        this.f44011e = z12;
        this.f44012f = z13;
        this.f44013g = z14;
        this.f44014h = i12;
        this.f44015i = i13;
        this.f44016j = z15;
        this.f44017k = z16;
        this.f44018l = z17;
        this.f44019m = str;
    }
}
