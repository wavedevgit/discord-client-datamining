package fa;

import fa.c;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements c.b {

    /* renamed from: c  reason: collision with root package name */
    private static final byte[] f22977c;

    /* renamed from: d  reason: collision with root package name */
    private static final int f22978d;

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f22979e;

    /* renamed from: f  reason: collision with root package name */
    private static final int f22980f;

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f22983i;

    /* renamed from: j  reason: collision with root package name */
    private static final int f22984j;

    /* renamed from: k  reason: collision with root package name */
    private static final byte[] f22985k;

    /* renamed from: l  reason: collision with root package name */
    private static final int f22986l;

    /* renamed from: m  reason: collision with root package name */
    private static final byte[] f22987m;

    /* renamed from: n  reason: collision with root package name */
    private static final byte[][] f22988n;

    /* renamed from: o  reason: collision with root package name */
    private static final byte[] f22989o;

    /* renamed from: p  reason: collision with root package name */
    private static final byte[] f22990p;

    /* renamed from: q  reason: collision with root package name */
    private static final int f22991q;

    /* renamed from: r  reason: collision with root package name */
    private static final byte[] f22992r;

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f22993s;

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f22994t;

    /* renamed from: a  reason: collision with root package name */
    private final int f22995a;

    /* renamed from: b  reason: collision with root package name */
    public static final C0322a f22976b = new C0322a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final byte[] f22981g = f.a("GIF87a");

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f22982h = f.a("GIF89a");

    /* renamed from: fa.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0322a {
        public /* synthetic */ C0322a(DefaultConstructorMarker defaultConstructorMarker) {
            this();
        }

        private final int k(byte[] bArr) {
            if (bArr.length < 4) {
                return -1;
            }
            return (bArr[3] & 255) | ((bArr[0] & 255) << 24) | ((bArr[1] & 255) << 16) | ((bArr[2] & 255) << 8);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final c l(byte[] bArr, int i10) {
            if (x8.c.h(bArr, 0, i10)) {
                if (x8.c.g(bArr, 0)) {
                    return b.f23002g;
                }
                if (x8.c.f(bArr, 0)) {
                    return b.f23003h;
                }
                if (x8.c.c(bArr, 0, i10)) {
                    if (x8.c.b(bArr, 0)) {
                        return b.f23006k;
                    }
                    if (x8.c.d(bArr, 0)) {
                        return b.f23005j;
                    }
                    return b.f23004i;
                }
                return c.f23013d;
            }
            throw new IllegalStateException("Check failed.");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean m(byte[] bArr, int i10) {
            if (i10 < 12 || k(bArr) < 8 || !f.b(bArr, a.f22993s, 4)) {
                return false;
            }
            return f.b(bArr, a.f22994t, 8);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean n(byte[] bArr, int i10) {
            if (i10 >= 4 && f.c(bArr, a.f22992r)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean o(byte[] bArr, int i10) {
            if (i10 < a.f22983i.length) {
                return false;
            }
            return f.c(bArr, a.f22983i);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean p(byte[] bArr, int i10) {
            if (i10 >= a.f22991q) {
                if (f.c(bArr, a.f22989o) || f.c(bArr, a.f22990p)) {
                    return true;
                }
                return false;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean q(byte[] bArr, int i10) {
            if (i10 < 6) {
                return false;
            }
            if (!f.c(bArr, a.f22981g) && !f.c(bArr, a.f22982h)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean r(byte[] bArr, int i10) {
            if (i10 >= 12 && bArr[3] >= 8 && f.b(bArr, a.f22987m, 4)) {
                for (byte[] bArr2 : a.f22988n) {
                    if (f.b(bArr, bArr2, 8)) {
                        return true;
                    }
                }
                return false;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean s(byte[] bArr, int i10) {
            if (i10 < a.f22985k.length) {
                return false;
            }
            return f.c(bArr, a.f22985k);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean t(byte[] bArr, int i10) {
            if (i10 >= a.f22977c.length && f.c(bArr, a.f22977c)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean u(byte[] bArr, int i10) {
            if (i10 >= a.f22979e.length && f.c(bArr, a.f22979e)) {
                return true;
            }
            return false;
        }

        private C0322a() {
        }
    }

    static {
        byte[] bArr = {-1, -40, -1};
        f22977c = bArr;
        f22978d = bArr.length;
        byte[] bArr2 = {-119, 80, 78, 71, 13, 10, 26, 10};
        f22979e = bArr2;
        f22980f = bArr2.length;
        byte[] a10 = f.a("BM");
        f22983i = a10;
        f22984j = a10.length;
        byte[] bArr3 = {0, 0, 1, 0};
        f22985k = bArr3;
        f22986l = bArr3.length;
        f22987m = f.a("ftyp");
        f22988n = new byte[][]{f.a("heic"), f.a("heix"), f.a("hevc"), f.a("hevx"), f.a("mif1"), f.a("msf1")};
        byte[] bArr4 = {73, 73, 42, 0};
        f22989o = bArr4;
        f22990p = new byte[]{77, 77, 0, 42};
        f22991q = bArr4.length;
        f22992r = new byte[]{3, 0, 8, 0};
        f22993s = f.a("ftyp");
        f22994t = f.a("avif");
    }

    public a() {
        Comparable y02 = i.y0(new Integer[]{21, 20, Integer.valueOf(f22978d), Integer.valueOf(f22980f), 6, Integer.valueOf(f22984j), Integer.valueOf(f22986l), 12, 4, 12});
        if (y02 != null) {
            this.f22995a = ((Number) y02).intValue();
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // fa.c.b
    public c a(byte[] headerBytes, int i10) {
        Intrinsics.checkNotNullParameter(headerBytes, "headerBytes");
        if (x8.c.h(headerBytes, 0, i10)) {
            return f22976b.l(headerBytes, i10);
        }
        C0322a c0322a = f22976b;
        if (c0322a.t(headerBytes, i10)) {
            return b.f22997b;
        }
        if (c0322a.u(headerBytes, i10)) {
            return b.f22998c;
        }
        if (c0322a.q(headerBytes, i10)) {
            return b.f22999d;
        }
        if (c0322a.o(headerBytes, i10)) {
            return b.f23000e;
        }
        if (c0322a.s(headerBytes, i10)) {
            return b.f23001f;
        }
        if (c0322a.m(headerBytes, i10)) {
            return b.f23010o;
        }
        if (c0322a.r(headerBytes, i10)) {
            return b.f23007l;
        }
        if (c0322a.n(headerBytes, i10)) {
            return b.f23009n;
        }
        if (c0322a.p(headerBytes, i10)) {
            return b.f23008m;
        }
        return c.f23013d;
    }

    @Override // fa.c.b
    public int b() {
        return this.f22995a;
    }
}
