package okhttp3;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CacheControl {

    /* renamed from: n  reason: collision with root package name */
    public static final b f44132n = new b(null);

    /* renamed from: o  reason: collision with root package name */
    public static final CacheControl f44133o = new a().d().a();

    /* renamed from: p  reason: collision with root package name */
    public static final CacheControl f44134p = new a().f().c(Integer.MAX_VALUE, TimeUnit.SECONDS).a();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f44135a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f44136b;

    /* renamed from: c  reason: collision with root package name */
    private final int f44137c;

    /* renamed from: d  reason: collision with root package name */
    private final int f44138d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f44139e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f44140f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f44141g;

    /* renamed from: h  reason: collision with root package name */
    private final int f44142h;

    /* renamed from: i  reason: collision with root package name */
    private final int f44143i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f44144j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f44145k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f44146l;

    /* renamed from: m  reason: collision with root package name */
    private String f44147m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f44148a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f44149b;

        /* renamed from: c  reason: collision with root package name */
        private int f44150c = -1;

        /* renamed from: d  reason: collision with root package name */
        private int f44151d = -1;

        /* renamed from: e  reason: collision with root package name */
        private int f44152e = -1;

        /* renamed from: f  reason: collision with root package name */
        private boolean f44153f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f44154g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f44155h;

        private final int b(long j10) {
            if (j10 > 2147483647L) {
                return Integer.MAX_VALUE;
            }
            return (int) j10;
        }

        public final CacheControl a() {
            return new CacheControl(this.f44148a, this.f44149b, this.f44150c, -1, false, false, false, this.f44151d, this.f44152e, this.f44153f, this.f44154g, this.f44155h, null, null);
        }

        public final a c(int i10, TimeUnit timeUnit) {
            Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
            if (i10 >= 0) {
                this.f44151d = b(timeUnit.toSeconds(i10));
                return this;
            }
            throw new IllegalArgumentException(("maxStale < 0: " + i10).toString());
        }

        public final a d() {
            this.f44148a = true;
            return this;
        }

        public final a e() {
            this.f44149b = true;
            return this;
        }

        public final a f() {
            this.f44153f = true;
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
        return this.f44139e;
    }

    public final boolean b() {
        return this.f44140f;
    }

    public final int c() {
        return this.f44137c;
    }

    public final int d() {
        return this.f44142h;
    }

    public final int e() {
        return this.f44143i;
    }

    public final boolean f() {
        return this.f44141g;
    }

    public final boolean g() {
        return this.f44135a;
    }

    public final boolean h() {
        return this.f44136b;
    }

    public final boolean i() {
        return this.f44144j;
    }

    public String toString() {
        String str = this.f44147m;
        if (str == null) {
            StringBuilder sb2 = new StringBuilder();
            if (this.f44135a) {
                sb2.append("no-cache, ");
            }
            if (this.f44136b) {
                sb2.append("no-store, ");
            }
            if (this.f44137c != -1) {
                sb2.append("max-age=");
                sb2.append(this.f44137c);
                sb2.append(", ");
            }
            if (this.f44138d != -1) {
                sb2.append("s-maxage=");
                sb2.append(this.f44138d);
                sb2.append(", ");
            }
            if (this.f44139e) {
                sb2.append("private, ");
            }
            if (this.f44140f) {
                sb2.append("public, ");
            }
            if (this.f44141g) {
                sb2.append("must-revalidate, ");
            }
            if (this.f44142h != -1) {
                sb2.append("max-stale=");
                sb2.append(this.f44142h);
                sb2.append(", ");
            }
            if (this.f44143i != -1) {
                sb2.append("min-fresh=");
                sb2.append(this.f44143i);
                sb2.append(", ");
            }
            if (this.f44144j) {
                sb2.append("only-if-cached, ");
            }
            if (this.f44145k) {
                sb2.append("no-transform, ");
            }
            if (this.f44146l) {
                sb2.append("immutable, ");
            }
            if (sb2.length() == 0) {
                return "";
            }
            sb2.delete(sb2.length() - 2, sb2.length());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
            this.f44147m = sb3;
            return sb3;
        }
        return str;
    }

    private CacheControl(boolean z10, boolean z11, int i10, int i11, boolean z12, boolean z13, boolean z14, int i12, int i13, boolean z15, boolean z16, boolean z17, String str) {
        this.f44135a = z10;
        this.f44136b = z11;
        this.f44137c = i10;
        this.f44138d = i11;
        this.f44139e = z12;
        this.f44140f = z13;
        this.f44141g = z14;
        this.f44142h = i12;
        this.f44143i = i13;
        this.f44144j = z15;
        this.f44145k = z16;
        this.f44146l = z17;
        this.f44147m = str;
    }
}
