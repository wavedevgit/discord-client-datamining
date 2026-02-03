package fa;

import fa.c;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements c.b {

    /* renamed from: c  reason: collision with root package name */
    private static final byte[] f23651c;

    /* renamed from: d  reason: collision with root package name */
    private static final int f23652d;

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f23653e;

    /* renamed from: f  reason: collision with root package name */
    private static final int f23654f;

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f23657i;

    /* renamed from: j  reason: collision with root package name */
    private static final int f23658j;

    /* renamed from: k  reason: collision with root package name */
    private static final byte[] f23659k;

    /* renamed from: l  reason: collision with root package name */
    private static final int f23660l;

    /* renamed from: m  reason: collision with root package name */
    private static final byte[] f23661m;

    /* renamed from: n  reason: collision with root package name */
    private static final byte[][] f23662n;

    /* renamed from: o  reason: collision with root package name */
    private static final byte[] f23663o;

    /* renamed from: p  reason: collision with root package name */
    private static final byte[] f23664p;

    /* renamed from: q  reason: collision with root package name */
    private static final int f23665q;

    /* renamed from: r  reason: collision with root package name */
    private static final byte[] f23666r;

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f23667s;

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f23668t;

    /* renamed from: a  reason: collision with root package name */
    private final int f23669a;

    /* renamed from: b  reason: collision with root package name */
    public static final C0313a f23650b = new C0313a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final byte[] f23655g = f.a("GIF87a");

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f23656h = f.a("GIF89a");

    /* renamed from: fa.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0313a {
        public /* synthetic */ C0313a(DefaultConstructorMarker defaultConstructorMarker) {
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
                    return b.f23676g;
                }
                if (x8.c.f(bArr, 0)) {
                    return b.f23677h;
                }
                if (x8.c.c(bArr, 0, i10)) {
                    if (x8.c.b(bArr, 0)) {
                        return b.f23680k;
                    }
                    if (x8.c.d(bArr, 0)) {
                        return b.f23679j;
                    }
                    return b.f23678i;
                }
                return c.f23687d;
            }
            throw new IllegalStateException("Check failed.");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean m(byte[] bArr, int i10) {
            if (i10 < 12 || k(bArr) < 8 || !f.b(bArr, a.f23667s, 4)) {
                return false;
            }
            return f.b(bArr, a.f23668t, 8);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean n(byte[] bArr, int i10) {
            if (i10 >= 4 && f.c(bArr, a.f23666r)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean o(byte[] bArr, int i10) {
            if (i10 < a.f23657i.length) {
                return false;
            }
            return f.c(bArr, a.f23657i);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean p(byte[] bArr, int i10) {
            if (i10 >= a.f23665q) {
                if (f.c(bArr, a.f23663o) || f.c(bArr, a.f23664p)) {
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
            if (!f.c(bArr, a.f23655g) && !f.c(bArr, a.f23656h)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean r(byte[] bArr, int i10) {
            if (i10 >= 12 && bArr[3] >= 8 && f.b(bArr, a.f23661m, 4)) {
                for (byte[] bArr2 : a.f23662n) {
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
            if (i10 < a.f23659k.length) {
                return false;
            }
            return f.c(bArr, a.f23659k);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean t(byte[] bArr, int i10) {
            if (i10 >= a.f23651c.length && f.c(bArr, a.f23651c)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean u(byte[] bArr, int i10) {
            if (i10 >= a.f23653e.length && f.c(bArr, a.f23653e)) {
                return true;
            }
            return false;
        }

        private C0313a() {
        }
    }

    static {
        byte[] bArr = {-1, -40, -1};
        f23651c = bArr;
        f23652d = bArr.length;
        byte[] bArr2 = {-119, 80, 78, 71, 13, 10, 26, 10};
        f23653e = bArr2;
        f23654f = bArr2.length;
        byte[] a10 = f.a("BM");
        f23657i = a10;
        f23658j = a10.length;
        byte[] bArr3 = {0, 0, 1, 0};
        f23659k = bArr3;
        f23660l = bArr3.length;
        f23661m = f.a("ftyp");
        f23662n = new byte[][]{f.a("heic"), f.a("heix"), f.a("hevc"), f.a("hevx"), f.a("mif1"), f.a("msf1")};
        byte[] bArr4 = {73, 73, 42, 0};
        f23663o = bArr4;
        f23664p = new byte[]{77, 77, 0, 42};
        f23665q = bArr4.length;
        f23666r = new byte[]{3, 0, 8, 0};
        f23667s = f.a("ftyp");
        f23668t = f.a("avif");
    }

    public a() {
        Comparable y02 = i.y0(new Integer[]{21, 20, Integer.valueOf(f23652d), Integer.valueOf(f23654f), 6, Integer.valueOf(f23658j), Integer.valueOf(f23660l), 12, 4, 12});
        if (y02 != null) {
            this.f23669a = ((Number) y02).intValue();
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // fa.c.b
    public c a(byte[] headerBytes, int i10) {
        Intrinsics.checkNotNullParameter(headerBytes, "headerBytes");
        if (x8.c.h(headerBytes, 0, i10)) {
            return f23650b.l(headerBytes, i10);
        }
        C0313a c0313a = f23650b;
        if (c0313a.t(headerBytes, i10)) {
            return b.f23671b;
        }
        if (c0313a.u(headerBytes, i10)) {
            return b.f23672c;
        }
        if (c0313a.q(headerBytes, i10)) {
            return b.f23673d;
        }
        if (c0313a.o(headerBytes, i10)) {
            return b.f23674e;
        }
        if (c0313a.s(headerBytes, i10)) {
            return b.f23675f;
        }
        if (c0313a.m(headerBytes, i10)) {
            return b.f23684o;
        }
        if (c0313a.r(headerBytes, i10)) {
            return b.f23681l;
        }
        if (c0313a.n(headerBytes, i10)) {
            return b.f23683n;
        }
        if (c0313a.p(headerBytes, i10)) {
            return b.f23682m;
        }
        return c.f23687d;
    }

    @Override // fa.c.b
    public int b() {
        return this.f23669a;
    }
}
