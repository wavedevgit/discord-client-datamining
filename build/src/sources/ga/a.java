package ga;

import ga.c;
import kotlin.collections.i;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class a implements c.b {

    /* renamed from: c  reason: collision with root package name */
    private static final byte[] f25362c;

    /* renamed from: d  reason: collision with root package name */
    private static final int f25363d;

    /* renamed from: e  reason: collision with root package name */
    private static final byte[] f25364e;

    /* renamed from: f  reason: collision with root package name */
    private static final int f25365f;

    /* renamed from: i  reason: collision with root package name */
    private static final byte[] f25368i;

    /* renamed from: j  reason: collision with root package name */
    private static final int f25369j;

    /* renamed from: k  reason: collision with root package name */
    private static final byte[] f25370k;

    /* renamed from: l  reason: collision with root package name */
    private static final int f25371l;

    /* renamed from: m  reason: collision with root package name */
    private static final byte[] f25372m;

    /* renamed from: n  reason: collision with root package name */
    private static final byte[][] f25373n;

    /* renamed from: o  reason: collision with root package name */
    private static final byte[] f25374o;

    /* renamed from: p  reason: collision with root package name */
    private static final byte[] f25375p;

    /* renamed from: q  reason: collision with root package name */
    private static final int f25376q;

    /* renamed from: r  reason: collision with root package name */
    private static final byte[] f25377r;

    /* renamed from: s  reason: collision with root package name */
    private static final byte[] f25378s;

    /* renamed from: t  reason: collision with root package name */
    private static final byte[] f25379t;

    /* renamed from: a  reason: collision with root package name */
    private final int f25380a;

    /* renamed from: b  reason: collision with root package name */
    public static final C0344a f25361b = new C0344a(null);

    /* renamed from: g  reason: collision with root package name */
    private static final byte[] f25366g = f.a("GIF87a");

    /* renamed from: h  reason: collision with root package name */
    private static final byte[] f25367h = f.a("GIF89a");

    /* renamed from: ga.a$a  reason: collision with other inner class name */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class C0344a {
        public /* synthetic */ C0344a(DefaultConstructorMarker defaultConstructorMarker) {
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
                    return b.f25387g;
                }
                if (y8.c.f(bArr, 0)) {
                    return b.f25388h;
                }
                if (y8.c.c(bArr, 0, i10)) {
                    if (y8.c.b(bArr, 0)) {
                        return b.f25391k;
                    }
                    if (y8.c.d(bArr, 0)) {
                        return b.f25390j;
                    }
                    return b.f25389i;
                }
                return c.f25398d;
            }
            throw new IllegalStateException("Check failed.");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean m(byte[] bArr, int i10) {
            if (i10 < 12 || k(bArr) < 8 || !f.b(bArr, a.f25378s, 4)) {
                return false;
            }
            return f.b(bArr, a.f25379t, 8);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean n(byte[] bArr, int i10) {
            if (i10 >= 4 && f.c(bArr, a.f25377r)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean o(byte[] bArr, int i10) {
            if (i10 < a.f25368i.length) {
                return false;
            }
            return f.c(bArr, a.f25368i);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean p(byte[] bArr, int i10) {
            if (i10 >= a.f25376q) {
                if (f.c(bArr, a.f25374o) || f.c(bArr, a.f25375p)) {
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
            if (!f.c(bArr, a.f25366g) && !f.c(bArr, a.f25367h)) {
                return false;
            }
            return true;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean r(byte[] bArr, int i10) {
            if (i10 >= 12 && bArr[3] >= 8 && f.b(bArr, a.f25372m, 4)) {
                for (byte[] bArr2 : a.f25373n) {
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
            if (i10 < a.f25370k.length) {
                return false;
            }
            return f.c(bArr, a.f25370k);
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean t(byte[] bArr, int i10) {
            if (i10 >= a.f25362c.length && f.c(bArr, a.f25362c)) {
                return true;
            }
            return false;
        }

        /* JADX INFO: Access modifiers changed from: private */
        public final boolean u(byte[] bArr, int i10) {
            if (i10 >= a.f25364e.length && f.c(bArr, a.f25364e)) {
                return true;
            }
            return false;
        }

        private C0344a() {
        }
    }

    static {
        byte[] bArr = {-1, -40, -1};
        f25362c = bArr;
        f25363d = bArr.length;
        byte[] bArr2 = {-119, 80, 78, 71, 13, 10, 26, 10};
        f25364e = bArr2;
        f25365f = bArr2.length;
        byte[] a10 = f.a("BM");
        f25368i = a10;
        f25369j = a10.length;
        byte[] bArr3 = {0, 0, 1, 0};
        f25370k = bArr3;
        f25371l = bArr3.length;
        f25372m = f.a("ftyp");
        f25373n = new byte[][]{f.a("heic"), f.a("heix"), f.a("hevc"), f.a("hevx"), f.a("mif1"), f.a("msf1")};
        byte[] bArr4 = {73, 73, 42, 0};
        f25374o = bArr4;
        f25375p = new byte[]{77, 77, 0, 42};
        f25376q = bArr4.length;
        f25377r = new byte[]{3, 0, 8, 0};
        f25378s = f.a("ftyp");
        f25379t = f.a("avif");
    }

    public a() {
        Comparable y02 = i.y0(new Integer[]{21, 20, Integer.valueOf(f25363d), Integer.valueOf(f25365f), 6, Integer.valueOf(f25369j), Integer.valueOf(f25371l), 12, 4, 12});
        if (y02 != null) {
            this.f25380a = ((Number) y02).intValue();
            return;
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // ga.c.b
    public c a(byte[] headerBytes, int i10) {
        Intrinsics.checkNotNullParameter(headerBytes, "headerBytes");
        if (y8.c.h(headerBytes, 0, i10)) {
            return f25361b.l(headerBytes, i10);
        }
        C0344a c0344a = f25361b;
        if (c0344a.t(headerBytes, i10)) {
            return b.f25382b;
        }
        if (c0344a.u(headerBytes, i10)) {
            return b.f25383c;
        }
        if (c0344a.q(headerBytes, i10)) {
            return b.f25384d;
        }
        if (c0344a.o(headerBytes, i10)) {
            return b.f25385e;
        }
        if (c0344a.s(headerBytes, i10)) {
            return b.f25386f;
        }
        if (c0344a.m(headerBytes, i10)) {
            return b.f25395o;
        }
        if (c0344a.r(headerBytes, i10)) {
            return b.f25392l;
        }
        if (c0344a.n(headerBytes, i10)) {
            return b.f25394n;
        }
        if (c0344a.p(headerBytes, i10)) {
            return b.f25393m;
        }
        return c.f25398d;
    }

    @Override // ga.c.b
    public int b() {
        return this.f25380a;
    }
}
