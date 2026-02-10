package okhttp3;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CacheControl {

    /* renamed from: n  reason: collision with root package name */
    public static final b f41966n = new b(null);

    /* renamed from: o  reason: collision with root package name */
    public static final CacheControl f41967o = new a().d().a();

    /* renamed from: p  reason: collision with root package name */
    public static final CacheControl f41968p = new a().f().c(Integer.MAX_VALUE, TimeUnit.SECONDS).a();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f41969a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f41970b;

    /* renamed from: c  reason: collision with root package name */
    private final int f41971c;

    /* renamed from: d  reason: collision with root package name */
    private final int f41972d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f41973e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f41974f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f41975g;

    /* renamed from: h  reason: collision with root package name */
    private final int f41976h;

    /* renamed from: i  reason: collision with root package name */
    private final int f41977i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f41978j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f41979k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f41980l;

    /* renamed from: m  reason: collision with root package name */
    private String f41981m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f41982a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f41983b;

        /* renamed from: c  reason: collision with root package name */
        private int f41984c = -1;

        /* renamed from: d  reason: collision with root package name */
        private int f41985d = -1;

        /* renamed from: e  reason: collision with root package name */
        private int f41986e = -1;

        /* renamed from: f  reason: collision with root package name */
        private boolean f41987f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f41988g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f41989h;

        private final int b(long j10) {
            if (j10 > 2147483647L) {
                return Integer.MAX_VALUE;
            }
            return (int) j10;
        }

        public final CacheControl a() {
            return new CacheControl(this.f41982a, this.f41983b, this.f41984c, -1, false, false, false, this.f41985d, this.f41986e, this.f41987f, this.f41988g, this.f41989h, null, null);
        }

        public final a c(int i10, TimeUnit timeUnit) {
            Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
            if (i10 >= 0) {
                this.f41985d = b(timeUnit.toSeconds(i10));
                return this;
            }
            throw new IllegalArgumentException(("maxStale < 0: " + i10).toString());
        }

        public final a d() {
            this.f41982a = true;
            return this;
        }

        public final a e() {
            this.f41983b = true;
            return this;
        }

        public final a f() {
            this.f41987f = true;
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
        return this.f41973e;
    }

    public final boolean b() {
        return this.f41974f;
    }

    public final int c() {
        return this.f41971c;
    }

    public final int d() {
        return this.f41976h;
    }

    public final int e() {
        return this.f41977i;
    }

    public final boolean f() {
        return this.f41975g;
    }

    public final boolean g() {
        return this.f41969a;
    }

    public final boolean h() {
        return this.f41970b;
    }

    public final boolean i() {
        return this.f41978j;
    }

    public String toString() {
        String str = this.f41981m;
        if (str == null) {
            StringBuilder sb2 = new StringBuilder();
            if (this.f41969a) {
                sb2.append("no-cache, ");
            }
            if (this.f41970b) {
                sb2.append("no-store, ");
            }
            if (this.f41971c != -1) {
                sb2.append("max-age=");
                sb2.append(this.f41971c);
                sb2.append(", ");
            }
            if (this.f41972d != -1) {
                sb2.append("s-maxage=");
                sb2.append(this.f41972d);
                sb2.append(", ");
            }
            if (this.f41973e) {
                sb2.append("private, ");
            }
            if (this.f41974f) {
                sb2.append("public, ");
            }
            if (this.f41975g) {
                sb2.append("must-revalidate, ");
            }
            if (this.f41976h != -1) {
                sb2.append("max-stale=");
                sb2.append(this.f41976h);
                sb2.append(", ");
            }
            if (this.f41977i != -1) {
                sb2.append("min-fresh=");
                sb2.append(this.f41977i);
                sb2.append(", ");
            }
            if (this.f41978j) {
                sb2.append("only-if-cached, ");
            }
            if (this.f41979k) {
                sb2.append("no-transform, ");
            }
            if (this.f41980l) {
                sb2.append("immutable, ");
            }
            if (sb2.length() == 0) {
                return "";
            }
            sb2.delete(sb2.length() - 2, sb2.length());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
            this.f41981m = sb3;
            return sb3;
        }
        return str;
    }

    private CacheControl(boolean z10, boolean z11, int i10, int i11, boolean z12, boolean z13, boolean z14, int i12, int i13, boolean z15, boolean z16, boolean z17, String str) {
        this.f41969a = z10;
        this.f41970b = z11;
        this.f41971c = i10;
        this.f41972d = i11;
        this.f41973e = z12;
        this.f41974f = z13;
        this.f41975g = z14;
        this.f41976h = i12;
        this.f41977i = i13;
        this.f41978j = z15;
        this.f41979k = z16;
        this.f41980l = z17;
        this.f41981m = str;
    }
}
