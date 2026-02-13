package okhttp3;

import java.util.concurrent.TimeUnit;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import kotlin.text.StringsKt;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class CacheControl {

    /* renamed from: n  reason: collision with root package name */
    public static final b f40785n = new b(null);

    /* renamed from: o  reason: collision with root package name */
    public static final CacheControl f40786o = new a().d().a();

    /* renamed from: p  reason: collision with root package name */
    public static final CacheControl f40787p = new a().f().c(Integer.MAX_VALUE, TimeUnit.SECONDS).a();

    /* renamed from: a  reason: collision with root package name */
    private final boolean f40788a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f40789b;

    /* renamed from: c  reason: collision with root package name */
    private final int f40790c;

    /* renamed from: d  reason: collision with root package name */
    private final int f40791d;

    /* renamed from: e  reason: collision with root package name */
    private final boolean f40792e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f40793f;

    /* renamed from: g  reason: collision with root package name */
    private final boolean f40794g;

    /* renamed from: h  reason: collision with root package name */
    private final int f40795h;

    /* renamed from: i  reason: collision with root package name */
    private final int f40796i;

    /* renamed from: j  reason: collision with root package name */
    private final boolean f40797j;

    /* renamed from: k  reason: collision with root package name */
    private final boolean f40798k;

    /* renamed from: l  reason: collision with root package name */
    private final boolean f40799l;

    /* renamed from: m  reason: collision with root package name */
    private String f40800m;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static final class a {

        /* renamed from: a  reason: collision with root package name */
        private boolean f40801a;

        /* renamed from: b  reason: collision with root package name */
        private boolean f40802b;

        /* renamed from: c  reason: collision with root package name */
        private int f40803c = -1;

        /* renamed from: d  reason: collision with root package name */
        private int f40804d = -1;

        /* renamed from: e  reason: collision with root package name */
        private int f40805e = -1;

        /* renamed from: f  reason: collision with root package name */
        private boolean f40806f;

        /* renamed from: g  reason: collision with root package name */
        private boolean f40807g;

        /* renamed from: h  reason: collision with root package name */
        private boolean f40808h;

        private final int b(long j10) {
            if (j10 > 2147483647L) {
                return Integer.MAX_VALUE;
            }
            return (int) j10;
        }

        public final CacheControl a() {
            return new CacheControl(this.f40801a, this.f40802b, this.f40803c, -1, false, false, false, this.f40804d, this.f40805e, this.f40806f, this.f40807g, this.f40808h, null, null);
        }

        public final a c(int i10, TimeUnit timeUnit) {
            Intrinsics.checkNotNullParameter(timeUnit, "timeUnit");
            if (i10 >= 0) {
                this.f40804d = b(timeUnit.toSeconds(i10));
                return this;
            }
            throw new IllegalArgumentException(("maxStale < 0: " + i10).toString());
        }

        public final a d() {
            this.f40801a = true;
            return this;
        }

        public final a e() {
            this.f40802b = true;
            return this;
        }

        public final a f() {
            this.f40806f = true;
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
        return this.f40792e;
    }

    public final boolean b() {
        return this.f40793f;
    }

    public final int c() {
        return this.f40790c;
    }

    public final int d() {
        return this.f40795h;
    }

    public final int e() {
        return this.f40796i;
    }

    public final boolean f() {
        return this.f40794g;
    }

    public final boolean g() {
        return this.f40788a;
    }

    public final boolean h() {
        return this.f40789b;
    }

    public final boolean i() {
        return this.f40797j;
    }

    public String toString() {
        String str = this.f40800m;
        if (str == null) {
            StringBuilder sb2 = new StringBuilder();
            if (this.f40788a) {
                sb2.append("no-cache, ");
            }
            if (this.f40789b) {
                sb2.append("no-store, ");
            }
            if (this.f40790c != -1) {
                sb2.append("max-age=");
                sb2.append(this.f40790c);
                sb2.append(", ");
            }
            if (this.f40791d != -1) {
                sb2.append("s-maxage=");
                sb2.append(this.f40791d);
                sb2.append(", ");
            }
            if (this.f40792e) {
                sb2.append("private, ");
            }
            if (this.f40793f) {
                sb2.append("public, ");
            }
            if (this.f40794g) {
                sb2.append("must-revalidate, ");
            }
            if (this.f40795h != -1) {
                sb2.append("max-stale=");
                sb2.append(this.f40795h);
                sb2.append(", ");
            }
            if (this.f40796i != -1) {
                sb2.append("min-fresh=");
                sb2.append(this.f40796i);
                sb2.append(", ");
            }
            if (this.f40797j) {
                sb2.append("only-if-cached, ");
            }
            if (this.f40798k) {
                sb2.append("no-transform, ");
            }
            if (this.f40799l) {
                sb2.append("immutable, ");
            }
            if (sb2.length() == 0) {
                return "";
            }
            sb2.delete(sb2.length() - 2, sb2.length());
            String sb3 = sb2.toString();
            Intrinsics.checkNotNullExpressionValue(sb3, "StringBuilder().apply(builderAction).toString()");
            this.f40800m = sb3;
            return sb3;
        }
        return str;
    }

    private CacheControl(boolean z10, boolean z11, int i10, int i11, boolean z12, boolean z13, boolean z14, int i12, int i13, boolean z15, boolean z16, boolean z17, String str) {
        this.f40788a = z10;
        this.f40789b = z11;
        this.f40790c = i10;
        this.f40791d = i11;
        this.f40792e = z12;
        this.f40793f = z13;
        this.f40794g = z14;
        this.f40795h = i12;
        this.f40796i = i13;
        this.f40797j = z15;
        this.f40798k = z16;
        this.f40799l = z17;
        this.f40800m = str;
    }
}
