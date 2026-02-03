package okhttp3;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CacheControl {

    /* renamed from: n  reason: collision with root package name */
    public static final b f43932n = new b(null);

    /* renamed from: o  reason: collision with root package name */
    public static final CacheControl f43933o = new a().d().a();

    /* renamed from: p  reason: collision with root package name */
    public static final CacheControl f43934p = new a().f().c(Integer.MAX_VALUE, TimeUnit.SECONDS).a();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f43935a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f43936b;

    /* renamed from: c  reason: collision with root package name */
    private final int f43937c;

    /* renamed from: d  reason: collision with root package name */
    private final int f43938d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f43939e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f43940f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f43941g;

    /* renamed from: h  reason: collision with root package name */
    private final int f43942h;

    /* renamed from: i  reason: collision with root package name */
    private final int f43943i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f43944j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f43945k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f43946l;

    /* renamed from: m  reason: collision with root package name */
    private String f43947m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f43948a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f43949b;

        /* renamed from: c  reason: collision with root package name */
        private int f43950c = -1;

        /* renamed from: d  reason: collision with root package name */
        private int f43951d = -1;

        /* renamed from: e  reason: collision with root package name */
        private int f43952e = -1;

        /* renamed from: f  reason: collision with root package name */
        private boolean f43953f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f43954g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f43955h;

        private final int b(long j10) {
            if (j10 > 2147483647L) {
                return Integer.MAX_VALUE;
            }
            return (int) j10;
        }

        public final CacheControl a() {
            return new CacheControl(this.f43948a, this.f43949b, this.f43950c, -1, false, false, false, this.f43951d, this.f43952e, this.f43953f, this.f43954g, this.f43955h, null, null);
        }

        public final a c(int i10, TimeUnit timeUnit) {
            Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
            if (i10 >= 0) {
                this.f43951d = b(timeUnit.toSeconds(i10));
                return this;
            }
            throw new IllegalArgumentException(("maxStale < 0: " + i10).toString());
        }

        public final a d() {
            this.f43948a = true;
            return this;
        }

        public final a e() {
            this.f43949b = true;
            return this;
        }

        public final a f() {
            this.f43953f = true;
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
        return this.f43939e;
    }

    public final boolean b() {
        return this.f43940f;
    }

    public final int c() {
        return this.f43937c;
    }

    public final int d() {
        return this.f43942h;
    }

    public final int e() {
        return this.f43943i;
    }

    public final boolean f() {
        return this.f43941g;
    }

    public final boolean g() {
        return this.f43935a;
    }

    public final boolean h() {
        return this.f43936b;
    }

    public final boolean i() {
        return this.f43944j;
    }

    public String toString() {
        String str = this.f43947m;
        if (str == null) {
            StringBuilder sb2 = new StringBuilder();
            if (this.f43935a) {
                sb2.append("no-cache, ");
            }
            if (this.f43936b) {
                sb2.append("no-store, ");
            }
            if (this.f43937c != -1) {
                sb2.append("max-age=");
                sb2.append(this.f43937c);
                sb2.append(", ");
            }
            if (this.f43938d != -1) {
                sb2.append("s-maxage=");
                sb2.append(this.f43938d);
                sb2.append(", ");
            }
            if (this.f43939e) {
                sb2.append("private, ");
            }
            if (this.f43940f) {
                sb2.append("public, ");
            }
            if (this.f43941g) {
                sb2.append("must-revalidate, ");
            }
            if (this.f43942h != -1) {
                sb2.append("max-stale=");
                sb2.append(this.f43942h);
                sb2.append(", ");
            }
            if (this.f43943i != -1) {
                sb2.append("min-fresh=");
                sb2.append(this.f43943i);
                sb2.append(", ");
            }
            if (this.f43944j) {
                sb2.append("only-if-cached, ");
            }
            if (this.f43945k) {
                sb2.append("no-transform, ");
            }
            if (this.f43946l) {
                sb2.append("immutable, ");
            }
            if (sb2.length() == 0) {
                return "";
            }
            sb2.delete(sb2.length() - 2, sb2.length());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
            this.f43947m = sb3;
            return sb3;
        }
        return str;
    }

    private CacheControl(boolean z10, boolean z11, int i10, int i11, boolean z12, boolean z13, boolean z14, int i12, int i13, boolean z15, boolean z16, boolean z17, String str) {
        this.f43935a = z10;
        this.f43936b = z11;
        this.f43937c = i10;
        this.f43938d = i11;
        this.f43939e = z12;
        this.f43940f = z13;
        this.f43941g = z14;
        this.f43942h = i12;
        this.f43943i = i13;
        this.f43944j = z15;
        this.f43945k = z16;
        this.f43946l = z17;
        this.f43947m = str;
    }
}
