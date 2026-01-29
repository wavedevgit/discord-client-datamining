package fa;

import fa.c;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements c.b {

    /* renamed from: c  reason: collision with root package name */
    private static final byte[] f24848c;

    /* renamed from: d  reason: collision with root package name */
    private static final int f24849d;

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f24850e;

    /* renamed from: f  reason: collision with root package name */
    private static final int f24851f;

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f24854i;

    /* renamed from: j  reason: collision with root package name */
    private static final int f24855j;

    /* renamed from: k  reason: collision with root package name */
    private static final byte[] f24856k;

    /* renamed from: l  reason: collision with root package name */
    private static final int f24857l;

    /* renamed from: m  reason: collision with root package name */
    private static final byte[] f24858m;

    /* renamed from: n  reason: collision with root package name */
    private static final byte[][] f24859n;

    /* renamed from: o  reason: collision with root package name */
    private static final byte[] f24860o;

    /* renamed from: p  reason: collision with root package name */
    private static final byte[] f24861p;

    /* renamed from: q  reason: collision with root package name */
    private static final int f24862q;

    /* renamed from: r  reason: collision with root package name */
    private static final byte[] f24863r;

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f24864s;

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f24865t;

    /* renamed from: a  reason: collision with root package name */
    private final int f24866a;

    /* renamed from: b  reason: collision with root package name */
    public static final C0324a f24847b = new C0324a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final byte[] f24852g = f.a("GIF87a");

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f24853h = f.a("GIF89a");

    /* renamed from: fa.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0324a {
        public /* synthetic */ C0324a(DefaultConstructorMarker defaultConstructorMarker) {
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
                    return b.f24873g;
                }
                if (x8.c.f(bArr, 0)) {
                    return b.f24874h;
                }
                if (x8.c.c(bArr, 0, i10)) {
                    if (x8.c.b(bArr, 0)) {
                        return b.f24877k;
                    }
                    if (x8.c.d(bArr, 0)) {
                        return b.f24876j;
                    }
                    return b.f24875i;
                }
                return c.f24884d;
            }
            throw new IllegalStateException("Check failed.");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean m(byte[] bArr, int i10) {
            if (i10 < 12 || k(bArr) < 8 || !f.b(bArr, a.f24864s, 4)) {
                return false;
            }
            return f.b(bArr, a.f24865t, 8);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean n(byte[] bArr, int i10) {
            if (i10 >= 4 && f.c(bArr, a.f24863r)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean o(byte[] bArr, int i10) {
            if (i10 < a.f24854i.length) {
                return false;
            }
            return f.c(bArr, a.f24854i);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean p(byte[] bArr, int i10) {
            if (i10 >= a.f24862q) {
                if (f.c(bArr, a.f24860o) || f.c(bArr, a.f24861p)) {
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
            if (!f.c(bArr, a.f24852g) && !f.c(bArr, a.f24853h)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean r(byte[] bArr, int i10) {
            if (i10 >= 12 && bArr[3] >= 8 && f.b(bArr, a.f24858m, 4)) {
                for (byte[] bArr2 : a.f24859n) {
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
            if (i10 < a.f24856k.length) {
                return false;
            }
            return f.c(bArr, a.f24856k);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean t(byte[] bArr, int i10) {
            if (i10 >= a.f24848c.length && f.c(bArr, a.f24848c)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean u(byte[] bArr, int i10) {
            if (i10 >= a.f24850e.length && f.c(bArr, a.f24850e)) {
                return true;
            }
            return false;
        }

        private C0324a() {
        }
    }

    static {
        byte[] bArr = {-1, -40, -1};
        f24848c = bArr;
        f24849d = bArr.length;
        byte[] bArr2 = {-119, 80, 78, 71, 13, 10, 26, 10};
        f24850e = bArr2;
        f24851f = bArr2.length;
        byte[] a10 = f.a("BM");
        f24854i = a10;
        f24855j = a10.length;
        byte[] bArr3 = {0, 0, 1, 0};
        f24856k = bArr3;
        f24857l = bArr3.length;
        f24858m = f.a("ftyp");
        f24859n = new byte[][]{f.a("heic"), f.a("heix"), f.a("hevc"), f.a("hevx"), f.a("mif1"), f.a("msf1")};
        byte[] bArr4 = {73, 73, 42, 0};
        f24860o = bArr4;
        f24861p = new byte[]{77, 77, 0, 42};
        f24862q = bArr4.length;
        f24863r = new byte[]{3, 0, 8, 0};
        f24864s = f.a("ftyp");
        f24865t = f.a("avif");
    }

    public a() {
        Comparable y02 = i.y0(new Integer[]{21, 20, Integer.valueOf(f24849d), Integer.valueOf(f24851f), 6, Integer.valueOf(f24855j), Integer.valueOf(f24857l), 12, 4, 12});
        if (y02 != null) {
            this.f24866a = ((Number) y02).intValue();
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // fa.c.b
    public c a(byte[] headerBytes, int i10) {
        Intrinsics.checkNotNullParameter(headerBytes, "headerBytes");
        if (x8.c.h(headerBytes, 0, i10)) {
            return f24847b.l(headerBytes, i10);
        }
        C0324a c0324a = f24847b;
        if (c0324a.t(headerBytes, i10)) {
            return b.f24868b;
        }
        if (c0324a.u(headerBytes, i10)) {
            return b.f24869c;
        }
        if (c0324a.q(headerBytes, i10)) {
            return b.f24870d;
        }
        if (c0324a.o(headerBytes, i10)) {
            return b.f24871e;
        }
        if (c0324a.s(headerBytes, i10)) {
            return b.f24872f;
        }
        if (c0324a.m(headerBytes, i10)) {
            return b.f24881o;
        }
        if (c0324a.r(headerBytes, i10)) {
            return b.f24878l;
        }
        if (c0324a.n(headerBytes, i10)) {
            return b.f24880n;
        }
        if (c0324a.p(headerBytes, i10)) {
            return b.f24879m;
        }
        return c.f24884d;
    }

    @Override // fa.c.b
    public int b() {
        return this.f24866a;
    }
}
