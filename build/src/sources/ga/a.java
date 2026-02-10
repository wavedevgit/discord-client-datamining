package ga;

import ga.c;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements c.b {

    /* renamed from: c  reason: collision with root package name */
    private static final byte[] f24062c;

    /* renamed from: d  reason: collision with root package name */
    private static final int f24063d;

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f24064e;

    /* renamed from: f  reason: collision with root package name */
    private static final int f24065f;

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f24068i;

    /* renamed from: j  reason: collision with root package name */
    private static final int f24069j;

    /* renamed from: k  reason: collision with root package name */
    private static final byte[] f24070k;

    /* renamed from: l  reason: collision with root package name */
    private static final int f24071l;

    /* renamed from: m  reason: collision with root package name */
    private static final byte[] f24072m;

    /* renamed from: n  reason: collision with root package name */
    private static final byte[][] f24073n;

    /* renamed from: o  reason: collision with root package name */
    private static final byte[] f24074o;

    /* renamed from: p  reason: collision with root package name */
    private static final byte[] f24075p;

    /* renamed from: q  reason: collision with root package name */
    private static final int f24076q;

    /* renamed from: r  reason: collision with root package name */
    private static final byte[] f24077r;

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f24078s;

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f24079t;

    /* renamed from: a  reason: collision with root package name */
    private final int f24080a;

    /* renamed from: b  reason: collision with root package name */
    public static final C0373a f24061b = new C0373a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final byte[] f24066g = f.a("GIF87a");

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f24067h = f.a("GIF89a");

    /* renamed from: ga.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0373a {
        public /* synthetic */ C0373a(DefaultConstructorMarker defaultConstructorMarker) {
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
            if (y8.c.h(bArr, 0, i10)) {
                if (y8.c.g(bArr, 0)) {
                    return b.f24087g;
                }
                if (y8.c.f(bArr, 0)) {
                    return b.f24088h;
                }
                if (y8.c.c(bArr, 0, i10)) {
                    if (y8.c.b(bArr, 0)) {
                        return b.f24091k;
                    }
                    if (y8.c.d(bArr, 0)) {
                        return b.f24090j;
                    }
                    return b.f24089i;
                }
                return c.f24098d;
            }
            throw new IllegalStateException("Check failed.");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean m(byte[] bArr, int i10) {
            if (i10 < 12 || k(bArr) < 8 || !f.b(bArr, a.f24078s, 4)) {
                return false;
            }
            return f.b(bArr, a.f24079t, 8);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean n(byte[] bArr, int i10) {
            if (i10 >= 4 && f.c(bArr, a.f24077r)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean o(byte[] bArr, int i10) {
            if (i10 < a.f24068i.length) {
                return false;
            }
            return f.c(bArr, a.f24068i);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean p(byte[] bArr, int i10) {
            if (i10 >= a.f24076q) {
                if (f.c(bArr, a.f24074o) || f.c(bArr, a.f24075p)) {
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
            if (!f.c(bArr, a.f24066g) && !f.c(bArr, a.f24067h)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean r(byte[] bArr, int i10) {
            if (i10 >= 12 && bArr[3] >= 8 && f.b(bArr, a.f24072m, 4)) {
                for (byte[] bArr2 : a.f24073n) {
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
            if (i10 < a.f24070k.length) {
                return false;
            }
            return f.c(bArr, a.f24070k);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean t(byte[] bArr, int i10) {
            if (i10 >= a.f24062c.length && f.c(bArr, a.f24062c)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean u(byte[] bArr, int i10) {
            if (i10 >= a.f24064e.length && f.c(bArr, a.f24064e)) {
                return true;
            }
            return false;
        }

        private C0373a() {
        }
    }

    static {
        byte[] bArr = {-1, -40, -1};
        f24062c = bArr;
        f24063d = bArr.length;
        byte[] bArr2 = {-119, 80, 78, 71, 13, 10, 26, 10};
        f24064e = bArr2;
        f24065f = bArr2.length;
        byte[] a10 = f.a("BM");
        f24068i = a10;
        f24069j = a10.length;
        byte[] bArr3 = {0, 0, 1, 0};
        f24070k = bArr3;
        f24071l = bArr3.length;
        f24072m = f.a("ftyp");
        f24073n = new byte[][]{f.a("heic"), f.a("heix"), f.a("hevc"), f.a("hevx"), f.a("mif1"), f.a("msf1")};
        byte[] bArr4 = {73, 73, 42, 0};
        f24074o = bArr4;
        f24075p = new byte[]{77, 77, 0, 42};
        f24076q = bArr4.length;
        f24077r = new byte[]{3, 0, 8, 0};
        f24078s = f.a("ftyp");
        f24079t = f.a("avif");
    }

    public a() {
        Comparable y02 = i.y0(new Integer[]{21, 20, Integer.valueOf(f24063d), Integer.valueOf(f24065f), 6, Integer.valueOf(f24069j), Integer.valueOf(f24071l), 12, 4, 12});
        if (y02 != null) {
            this.f24080a = ((Number) y02).intValue();
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // ga.c.b
    public c a(byte[] headerBytes, int i10) {
        Intrinsics.checkNotNullParameter(headerBytes, "headerBytes");
        if (y8.c.h(headerBytes, 0, i10)) {
            return f24061b.l(headerBytes, i10);
        }
        C0373a c0373a = f24061b;
        if (c0373a.t(headerBytes, i10)) {
            return b.f24082b;
        }
        if (c0373a.u(headerBytes, i10)) {
            return b.f24083c;
        }
        if (c0373a.q(headerBytes, i10)) {
            return b.f24084d;
        }
        if (c0373a.o(headerBytes, i10)) {
            return b.f24085e;
        }
        if (c0373a.s(headerBytes, i10)) {
            return b.f24086f;
        }
        if (c0373a.m(headerBytes, i10)) {
            return b.f24095o;
        }
        if (c0373a.r(headerBytes, i10)) {
            return b.f24092l;
        }
        if (c0373a.n(headerBytes, i10)) {
            return b.f24094n;
        }
        if (c0373a.p(headerBytes, i10)) {
            return b.f24093m;
        }
        return c.f24098d;
    }

    @Override // ga.c.b
    public int b() {
        return this.f24080a;
    }
}
