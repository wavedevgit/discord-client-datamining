package okhttp3;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CacheControl {

    /* renamed from: n  reason: collision with root package name */
    public static final b f42791n = new b(null);

    /* renamed from: o  reason: collision with root package name */
    public static final CacheControl f42792o = new a().d().a();

    /* renamed from: p  reason: collision with root package name */
    public static final CacheControl f42793p = new a().f().c(Integer.MAX_VALUE, TimeUnit.SECONDS).a();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f42794a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f42795b;

    /* renamed from: c  reason: collision with root package name */
    private final int f42796c;

    /* renamed from: d  reason: collision with root package name */
    private final int f42797d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f42798e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f42799f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f42800g;

    /* renamed from: h  reason: collision with root package name */
    private final int f42801h;

    /* renamed from: i  reason: collision with root package name */
    private final int f42802i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f42803j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f42804k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f42805l;

    /* renamed from: m  reason: collision with root package name */
    private String f42806m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f42807a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f42808b;

        /* renamed from: c  reason: collision with root package name */
        private int f42809c = -1;

        /* renamed from: d  reason: collision with root package name */
        private int f42810d = -1;

        /* renamed from: e  reason: collision with root package name */
        private int f42811e = -1;

        /* renamed from: f  reason: collision with root package name */
        private boolean f42812f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f42813g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f42814h;

        private final int b(long j10) {
            if (j10 > 2147483647L) {
                return Integer.MAX_VALUE;
            }
            return (int) j10;
        }

        public final CacheControl a() {
            return new CacheControl(this.f42807a, this.f42808b, this.f42809c, -1, false, false, false, this.f42810d, this.f42811e, this.f42812f, this.f42813g, this.f42814h, null, null);
        }

        public final a c(int i10, TimeUnit timeUnit) {
            Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
            if (i10 >= 0) {
                this.f42810d = b(timeUnit.toSeconds(i10));
                return this;
            }
            throw new IllegalArgumentException(("maxStale < 0: " + i10).toString());
        }

        public final a d() {
            this.f42807a = true;
            return this;
        }

        public final a e() {
            this.f42808b = true;
            return this;
        }

        public final a f() {
            this.f42812f = true;
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
        return this.f42798e;
    }

    public final boolean b() {
        return this.f42799f;
    }

    public final int c() {
        return this.f42796c;
    }

    public final int d() {
        return this.f42801h;
    }

    public final int e() {
        return this.f42802i;
    }

    public final boolean f() {
        return this.f42800g;
    }

    public final boolean g() {
        return this.f42794a;
    }

    public final boolean h() {
        return this.f42795b;
    }

    public final boolean i() {
        return this.f42803j;
    }

    public String toString() {
        String str = this.f42806m;
        if (str == null) {
            StringBuilder sb2 = new StringBuilder();
            if (this.f42794a) {
                sb2.append("no-cache, ");
            }
            if (this.f42795b) {
                sb2.append("no-store, ");
            }
            if (this.f42796c != -1) {
                sb2.append("max-age=");
                sb2.append(this.f42796c);
                sb2.append(", ");
            }
            if (this.f42797d != -1) {
                sb2.append("s-maxage=");
                sb2.append(this.f42797d);
                sb2.append(", ");
            }
            if (this.f42798e) {
                sb2.append("private, ");
            }
            if (this.f42799f) {
                sb2.append("public, ");
            }
            if (this.f42800g) {
                sb2.append("must-revalidate, ");
            }
            if (this.f42801h != -1) {
                sb2.append("max-stale=");
                sb2.append(this.f42801h);
                sb2.append(", ");
            }
            if (this.f42802i != -1) {
                sb2.append("min-fresh=");
                sb2.append(this.f42802i);
                sb2.append(", ");
            }
            if (this.f42803j) {
                sb2.append("only-if-cached, ");
            }
            if (this.f42804k) {
                sb2.append("no-transform, ");
            }
            if (this.f42805l) {
                sb2.append("immutable, ");
            }
            if (sb2.length() == 0) {
                return "";
            }
            sb2.delete(sb2.length() - 2, sb2.length());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
            this.f42806m = sb3;
            return sb3;
        }
        return str;
    }

    private CacheControl(boolean z10, boolean z11, int i10, int i11, boolean z12, boolean z13, boolean z14, int i12, int i13, boolean z15, boolean z16, boolean z17, String str) {
        this.f42794a = z10;
        this.f42795b = z11;
        this.f42796c = i10;
        this.f42797d = i11;
        this.f42798e = z12;
        this.f42799f = z13;
        this.f42800g = z14;
        this.f42801h = i12;
        this.f42802i = i13;
        this.f42803j = z15;
        this.f42804k = z16;
        this.f42805l = z17;
        this.f42806m = str;
    }
}
