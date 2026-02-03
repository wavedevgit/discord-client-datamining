package fa;

import fa.c;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements c.b {

    /* renamed from: c  reason: collision with root package name */
    private static final byte[] f24059c;

    /* renamed from: d  reason: collision with root package name */
    private static final int f24060d;

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f24061e;

    /* renamed from: f  reason: collision with root package name */
    private static final int f24062f;

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f24065i;

    /* renamed from: j  reason: collision with root package name */
    private static final int f24066j;

    /* renamed from: k  reason: collision with root package name */
    private static final byte[] f24067k;

    /* renamed from: l  reason: collision with root package name */
    private static final int f24068l;

    /* renamed from: m  reason: collision with root package name */
    private static final byte[] f24069m;

    /* renamed from: n  reason: collision with root package name */
    private static final byte[][] f24070n;

    /* renamed from: o  reason: collision with root package name */
    private static final byte[] f24071o;

    /* renamed from: p  reason: collision with root package name */
    private static final byte[] f24072p;

    /* renamed from: q  reason: collision with root package name */
    private static final int f24073q;

    /* renamed from: r  reason: collision with root package name */
    private static final byte[] f24074r;

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f24075s;

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f24076t;

    /* renamed from: a  reason: collision with root package name */
    private final int f24077a;

    /* renamed from: b  reason: collision with root package name */
    public static final C0317a f24058b = new C0317a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final byte[] f24063g = f.a("GIF87a");

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f24064h = f.a("GIF89a");

    /* renamed from: fa.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0317a {
        public /* synthetic */ C0317a(DefaultConstructorMarker defaultConstructorMarker) {
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
                    return b.f24084g;
                }
                if (x8.c.f(bArr, 0)) {
                    return b.f24085h;
                }
                if (x8.c.c(bArr, 0, i10)) {
                    if (x8.c.b(bArr, 0)) {
                        return b.f24088k;
                    }
                    if (x8.c.d(bArr, 0)) {
                        return b.f24087j;
                    }
                    return b.f24086i;
                }
                return c.f24095d;
            }
            throw new IllegalStateException("Check failed.");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean m(byte[] bArr, int i10) {
            if (i10 < 12 || k(bArr) < 8 || !f.b(bArr, a.f24075s, 4)) {
                return false;
            }
            return f.b(bArr, a.f24076t, 8);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean n(byte[] bArr, int i10) {
            if (i10 >= 4 && f.c(bArr, a.f24074r)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean o(byte[] bArr, int i10) {
            if (i10 < a.f24065i.length) {
                return false;
            }
            return f.c(bArr, a.f24065i);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean p(byte[] bArr, int i10) {
            if (i10 >= a.f24073q) {
                if (f.c(bArr, a.f24071o) || f.c(bArr, a.f24072p)) {
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
            if (!f.c(bArr, a.f24063g) && !f.c(bArr, a.f24064h)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean r(byte[] bArr, int i10) {
            if (i10 >= 12 && bArr[3] >= 8 && f.b(bArr, a.f24069m, 4)) {
                for (byte[] bArr2 : a.f24070n) {
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
            if (i10 < a.f24067k.length) {
                return false;
            }
            return f.c(bArr, a.f24067k);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean t(byte[] bArr, int i10) {
            if (i10 >= a.f24059c.length && f.c(bArr, a.f24059c)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean u(byte[] bArr, int i10) {
            if (i10 >= a.f24061e.length && f.c(bArr, a.f24061e)) {
                return true;
            }
            return false;
        }

        private C0317a() {
        }
    }

    static {
        byte[] bArr = {-1, -40, -1};
        f24059c = bArr;
        f24060d = bArr.length;
        byte[] bArr2 = {-119, 80, 78, 71, 13, 10, 26, 10};
        f24061e = bArr2;
        f24062f = bArr2.length;
        byte[] a10 = f.a("BM");
        f24065i = a10;
        f24066j = a10.length;
        byte[] bArr3 = {0, 0, 1, 0};
        f24067k = bArr3;
        f24068l = bArr3.length;
        f24069m = f.a("ftyp");
        f24070n = new byte[][]{f.a("heic"), f.a("heix"), f.a("hevc"), f.a("hevx"), f.a("mif1"), f.a("msf1")};
        byte[] bArr4 = {73, 73, 42, 0};
        f24071o = bArr4;
        f24072p = new byte[]{77, 77, 0, 42};
        f24073q = bArr4.length;
        f24074r = new byte[]{3, 0, 8, 0};
        f24075s = f.a("ftyp");
        f24076t = f.a("avif");
    }

    public a() {
        Comparable y02 = i.y0(new Integer[]{21, 20, Integer.valueOf(f24060d), Integer.valueOf(f24062f), 6, Integer.valueOf(f24066j), Integer.valueOf(f24068l), 12, 4, 12});
        if (y02 != null) {
            this.f24077a = ((Number) y02).intValue();
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // fa.c.b
    public c a(byte[] headerBytes, int i10) {
        Intrinsics.checkNotNullParameter(headerBytes, "headerBytes");
        if (x8.c.h(headerBytes, 0, i10)) {
            return f24058b.l(headerBytes, i10);
        }
        C0317a c0317a = f24058b;
        if (c0317a.t(headerBytes, i10)) {
            return b.f24079b;
        }
        if (c0317a.u(headerBytes, i10)) {
            return b.f24080c;
        }
        if (c0317a.q(headerBytes, i10)) {
            return b.f24081d;
        }
        if (c0317a.o(headerBytes, i10)) {
            return b.f24082e;
        }
        if (c0317a.s(headerBytes, i10)) {
            return b.f24083f;
        }
        if (c0317a.m(headerBytes, i10)) {
            return b.f24092o;
        }
        if (c0317a.r(headerBytes, i10)) {
            return b.f24089l;
        }
        if (c0317a.n(headerBytes, i10)) {
            return b.f24091n;
        }
        if (c0317a.p(headerBytes, i10)) {
            return b.f24090m;
        }
        return c.f24095d;
    }

    @Override // fa.c.b
    public int b() {
        return this.f24077a;
    }
}
