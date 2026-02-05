package fa;

import fa.c;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements c.b {

    /* renamed from: c  reason: collision with root package name */
    private static final byte[] f22676c;

    /* renamed from: d  reason: collision with root package name */
    private static final int f22677d;

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f22678e;

    /* renamed from: f  reason: collision with root package name */
    private static final int f22679f;

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f22682i;

    /* renamed from: j  reason: collision with root package name */
    private static final int f22683j;

    /* renamed from: k  reason: collision with root package name */
    private static final byte[] f22684k;

    /* renamed from: l  reason: collision with root package name */
    private static final int f22685l;

    /* renamed from: m  reason: collision with root package name */
    private static final byte[] f22686m;

    /* renamed from: n  reason: collision with root package name */
    private static final byte[][] f22687n;

    /* renamed from: o  reason: collision with root package name */
    private static final byte[] f22688o;

    /* renamed from: p  reason: collision with root package name */
    private static final byte[] f22689p;

    /* renamed from: q  reason: collision with root package name */
    private static final int f22690q;

    /* renamed from: r  reason: collision with root package name */
    private static final byte[] f22691r;

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f22692s;

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f22693t;

    /* renamed from: a  reason: collision with root package name */
    private final int f22694a;

    /* renamed from: b  reason: collision with root package name */
    public static final C0311a f22675b = new C0311a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final byte[] f22680g = f.a("GIF87a");

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f22681h = f.a("GIF89a");

    /* renamed from: fa.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0311a {
        public /* synthetic */ C0311a(DefaultConstructorMarker defaultConstructorMarker) {
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
                    return b.f22701g;
                }
                if (x8.c.f(bArr, 0)) {
                    return b.f22702h;
                }
                if (x8.c.c(bArr, 0, i10)) {
                    if (x8.c.b(bArr, 0)) {
                        return b.f22705k;
                    }
                    if (x8.c.d(bArr, 0)) {
                        return b.f22704j;
                    }
                    return b.f22703i;
                }
                return c.f22712d;
            }
            throw new IllegalStateException("Check failed.");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean m(byte[] bArr, int i10) {
            if (i10 < 12 || k(bArr) < 8 || !f.b(bArr, a.f22692s, 4)) {
                return false;
            }
            return f.b(bArr, a.f22693t, 8);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean n(byte[] bArr, int i10) {
            if (i10 >= 4 && f.c(bArr, a.f22691r)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean o(byte[] bArr, int i10) {
            if (i10 < a.f22682i.length) {
                return false;
            }
            return f.c(bArr, a.f22682i);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean p(byte[] bArr, int i10) {
            if (i10 >= a.f22690q) {
                if (f.c(bArr, a.f22688o) || f.c(bArr, a.f22689p)) {
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
            if (!f.c(bArr, a.f22680g) && !f.c(bArr, a.f22681h)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean r(byte[] bArr, int i10) {
            if (i10 >= 12 && bArr[3] >= 8 && f.b(bArr, a.f22686m, 4)) {
                for (byte[] bArr2 : a.f22687n) {
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
            if (i10 < a.f22684k.length) {
                return false;
            }
            return f.c(bArr, a.f22684k);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean t(byte[] bArr, int i10) {
            if (i10 >= a.f22676c.length && f.c(bArr, a.f22676c)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean u(byte[] bArr, int i10) {
            if (i10 >= a.f22678e.length && f.c(bArr, a.f22678e)) {
                return true;
            }
            return false;
        }

        private C0311a() {
        }
    }

    static {
        byte[] bArr = {-1, -40, -1};
        f22676c = bArr;
        f22677d = bArr.length;
        byte[] bArr2 = {-119, 80, 78, 71, 13, 10, 26, 10};
        f22678e = bArr2;
        f22679f = bArr2.length;
        byte[] a10 = f.a("BM");
        f22682i = a10;
        f22683j = a10.length;
        byte[] bArr3 = {0, 0, 1, 0};
        f22684k = bArr3;
        f22685l = bArr3.length;
        f22686m = f.a("ftyp");
        f22687n = new byte[][]{f.a("heic"), f.a("heix"), f.a("hevc"), f.a("hevx"), f.a("mif1"), f.a("msf1")};
        byte[] bArr4 = {73, 73, 42, 0};
        f22688o = bArr4;
        f22689p = new byte[]{77, 77, 0, 42};
        f22690q = bArr4.length;
        f22691r = new byte[]{3, 0, 8, 0};
        f22692s = f.a("ftyp");
        f22693t = f.a("avif");
    }

    public a() {
        Comparable y02 = i.y0(new Integer[]{21, 20, Integer.valueOf(f22677d), Integer.valueOf(f22679f), 6, Integer.valueOf(f22683j), Integer.valueOf(f22685l), 12, 4, 12});
        if (y02 != null) {
            this.f22694a = ((Number) y02).intValue();
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // fa.c.b
    public c a(byte[] headerBytes, int i10) {
        Intrinsics.checkNotNullParameter(headerBytes, "headerBytes");
        if (x8.c.h(headerBytes, 0, i10)) {
            return f22675b.l(headerBytes, i10);
        }
        C0311a c0311a = f22675b;
        if (c0311a.t(headerBytes, i10)) {
            return b.f22696b;
        }
        if (c0311a.u(headerBytes, i10)) {
            return b.f22697c;
        }
        if (c0311a.q(headerBytes, i10)) {
            return b.f22698d;
        }
        if (c0311a.o(headerBytes, i10)) {
            return b.f22699e;
        }
        if (c0311a.s(headerBytes, i10)) {
            return b.f22700f;
        }
        if (c0311a.m(headerBytes, i10)) {
            return b.f22709o;
        }
        if (c0311a.r(headerBytes, i10)) {
            return b.f22706l;
        }
        if (c0311a.n(headerBytes, i10)) {
            return b.f22708n;
        }
        if (c0311a.p(headerBytes, i10)) {
            return b.f22707m;
        }
        return c.f22712d;
    }

    @Override // fa.c.b
    public int b() {
        return this.f22694a;
    }
}
