package jk;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.lang.reflect.Field;
import java.nio.Buffer;
import java.nio.ByteOrder;
import java.security.AccessController;
import java.security.PrivilegedExceptionAction;
import java.util.logging.Level;
import java.util.logging.Logger;
import sun.misc.Unsafe;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class h1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Unsafe f31050a = B();

    /* renamed from: b  reason: collision with root package name */
    private static final Class f31051b = jk.d.b();

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f31052c = m(Long.TYPE);

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f31053d = m(Integer.TYPE);

    /* renamed from: e  reason: collision with root package name */
    private static final e f31054e = z();

    /* renamed from: f  reason: collision with root package name */
    private static final boolean f31055f = Q();

    /* renamed from: g  reason: collision with root package name */
    private static final boolean f31056g = P();

    /* renamed from: h  reason: collision with root package name */
    static final long f31057h;

    /* renamed from: i  reason: collision with root package name */
    private static final long f31058i;

    /* renamed from: j  reason: collision with root package name */
    private static final long f31059j;

    /* renamed from: k  reason: collision with root package name */
    private static final long f31060k;

    /* renamed from: l  reason: collision with root package name */
    private static final long f31061l;

    /* renamed from: m  reason: collision with root package name */
    private static final long f31062m;

    /* renamed from: n  reason: collision with root package name */
    private static final long f31063n;

    /* renamed from: o  reason: collision with root package name */
    private static final long f31064o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f31065p;

    /* renamed from: q  reason: collision with root package name */
    private static final long f31066q;

    /* renamed from: r  reason: collision with root package name */
    private static final long f31067r;

    /* renamed from: s  reason: collision with root package name */
    private static final long f31068s;

    /* renamed from: t  reason: collision with root package name */
    private static final long f31069t;

    /* renamed from: u  reason: collision with root package name */
    private static final long f31070u;

    /* renamed from: v  reason: collision with root package name */
    private static final int f31071v;

    /* renamed from: w  reason: collision with root package name */
    static final boolean f31072w;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public class a implements PrivilegedExceptionAction {
        a() {
        }

        @Override // java.security.PrivilegedExceptionAction
        /* renamed from: a */
        public Unsafe run() {
            Field[] declaredFields;
            for (Field field : Unsafe.class.getDeclaredFields()) {
                field.setAccessible(true);
                Object obj = field.get(null);
                if (Unsafe.class.isInstance(obj)) {
                    return (Unsafe) Unsafe.class.cast(obj);
                }
            }
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b extends e {
        b(Unsafe unsafe) {
            super(unsafe);
        }

        @Override // jk.h1.e
        public boolean c(Object obj, long j10) {
            return h1.f31072w ? h1.q(obj, j10) : h1.r(obj, j10);
        }

        @Override // jk.h1.e
        public byte d(Object obj, long j10) {
            return h1.f31072w ? h1.t(obj, j10) : h1.u(obj, j10);
        }

        @Override // jk.h1.e
        public double e(Object obj, long j10) {
            return Double.longBitsToDouble(h(obj, j10));
        }

        @Override // jk.h1.e
        public float f(Object obj, long j10) {
            return Float.intBitsToFloat(g(obj, j10));
        }

        @Override // jk.h1.e
        public void k(Object obj, long j10, boolean z10) {
            if (h1.f31072w) {
                h1.G(obj, j10, z10);
            } else {
                h1.H(obj, j10, z10);
            }
        }

        @Override // jk.h1.e
        public void l(Object obj, long j10, double d10) {
            o(obj, j10, Double.doubleToLongBits(d10));
        }

        @Override // jk.h1.e
        public void m(Object obj, long j10, float f10) {
            n(obj, j10, Float.floatToIntBits(f10));
        }

        @Override // jk.h1.e
        public boolean r() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class c extends e {
        c(Unsafe unsafe) {
            super(unsafe);
        }

        @Override // jk.h1.e
        public boolean c(Object obj, long j10) {
            return h1.f31072w ? h1.q(obj, j10) : h1.r(obj, j10);
        }

        @Override // jk.h1.e
        public byte d(Object obj, long j10) {
            return h1.f31072w ? h1.t(obj, j10) : h1.u(obj, j10);
        }

        @Override // jk.h1.e
        public double e(Object obj, long j10) {
            return Double.longBitsToDouble(h(obj, j10));
        }

        @Override // jk.h1.e
        public float f(Object obj, long j10) {
            return Float.intBitsToFloat(g(obj, j10));
        }

        @Override // jk.h1.e
        public void k(Object obj, long j10, boolean z10) {
            if (h1.f31072w) {
                h1.G(obj, j10, z10);
            } else {
                h1.H(obj, j10, z10);
            }
        }

        @Override // jk.h1.e
        public void l(Object obj, long j10, double d10) {
            o(obj, j10, Double.doubleToLongBits(d10));
        }

        @Override // jk.h1.e
        public void m(Object obj, long j10, float f10) {
            n(obj, j10, Float.floatToIntBits(f10));
        }

        @Override // jk.h1.e
        public boolean r() {
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class d extends e {
        d(Unsafe unsafe) {
            super(unsafe);
        }

        @Override // jk.h1.e
        public boolean c(Object obj, long j10) {
            return this.f31073a.getBoolean(obj, j10);
        }

        @Override // jk.h1.e
        public byte d(Object obj, long j10) {
            return this.f31073a.getByte(obj, j10);
        }

        @Override // jk.h1.e
        public double e(Object obj, long j10) {
            return this.f31073a.getDouble(obj, j10);
        }

        @Override // jk.h1.e
        public float f(Object obj, long j10) {
            return this.f31073a.getFloat(obj, j10);
        }

        @Override // jk.h1.e
        public void k(Object obj, long j10, boolean z10) {
            this.f31073a.putBoolean(obj, j10, z10);
        }

        @Override // jk.h1.e
        public void l(Object obj, long j10, double d10) {
            this.f31073a.putDouble(obj, j10, d10);
        }

        @Override // jk.h1.e
        public void m(Object obj, long j10, float f10) {
            this.f31073a.putFloat(obj, j10, f10);
        }

        @Override // jk.h1.e
        public boolean q() {
            if (!super.q()) {
                return false;
            }
            try {
                Class<?> cls = this.f31073a.getClass();
                Class cls2 = Long.TYPE;
                cls.getMethod("getByte", Object.class, cls2);
                cls.getMethod("putByte", Object.class, cls2, Byte.TYPE);
                cls.getMethod("getBoolean", Object.class, cls2);
                cls.getMethod("putBoolean", Object.class, cls2, Boolean.TYPE);
                cls.getMethod("getFloat", Object.class, cls2);
                cls.getMethod("putFloat", Object.class, cls2, Float.TYPE);
                cls.getMethod("getDouble", Object.class, cls2);
                cls.getMethod("putDouble", Object.class, cls2, Double.TYPE);
                return true;
            } catch (Throwable th2) {
                h1.E(th2);
                return false;
            }
        }

        @Override // jk.h1.e
        public boolean r() {
            if (!super.r()) {
                return false;
            }
            try {
                Class<?> cls = this.f31073a.getClass();
                Class cls2 = Long.TYPE;
                cls.getMethod("getByte", cls2);
                cls.getMethod("putByte", cls2, Byte.TYPE);
                cls.getMethod("getInt", cls2);
                cls.getMethod("putInt", cls2, Integer.TYPE);
                cls.getMethod("getLong", cls2);
                cls.getMethod("putLong", cls2, cls2);
                cls.getMethod("copyMemory", cls2, cls2, cls2);
                cls.getMethod("copyMemory", Object.class, cls2, Object.class, cls2, cls2);
                return true;
            } catch (Throwable th2) {
                h1.E(th2);
                return false;
            }
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static abstract class e {

        /* renamed from: a  reason: collision with root package name */
        Unsafe f31073a;

        e(Unsafe unsafe) {
            this.f31073a = unsafe;
        }

        public final int a(Class cls) {
            return this.f31073a.arrayBaseOffset(cls);
        }

        public final int b(Class cls) {
            return this.f31073a.arrayIndexScale(cls);
        }

        public abstract boolean c(Object obj, long j10);

        public abstract byte d(Object obj, long j10);

        public abstract double e(Object obj, long j10);

        public abstract float f(Object obj, long j10);

        public final int g(Object obj, long j10) {
            return this.f31073a.getInt(obj, j10);
        }

        public final long h(Object obj, long j10) {
            return this.f31073a.getLong(obj, j10);
        }

        public final Object i(Object obj, long j10) {
            return this.f31073a.getObject(obj, j10);
        }

        public final long j(Field field) {
            return this.f31073a.objectFieldOffset(field);
        }

        public abstract void k(Object obj, long j10, boolean z10);

        public abstract void l(Object obj, long j10, double d10);

        public abstract void m(Object obj, long j10, float f10);

        public final void n(Object obj, long j10, int i10) {
            this.f31073a.putInt(obj, j10, i10);
        }

        public final void o(Object obj, long j10, long j11) {
            this.f31073a.putLong(obj, j10, j11);
        }

        public final void p(Object obj, long j10, Object obj2) {
            this.f31073a.putObject(obj, j10, obj2);
        }

        public boolean q() {
            Unsafe unsafe = this.f31073a;
            if (unsafe == null) {
                return false;
            }
            try {
                Class<?> cls = unsafe.getClass();
                cls.getMethod("objectFieldOffset", Field.class);
                cls.getMethod("arrayBaseOffset", Class.class);
                cls.getMethod("arrayIndexScale", Class.class);
                Class cls2 = Long.TYPE;
                cls.getMethod("getInt", Object.class, cls2);
                cls.getMethod("putInt", Object.class, cls2, Integer.TYPE);
                cls.getMethod("getLong", Object.class, cls2);
                cls.getMethod("putLong", Object.class, cls2, cls2);
                cls.getMethod("getObject", Object.class, cls2);
                cls.getMethod("putObject", Object.class, cls2, Object.class);
                return true;
            } catch (Throwable th2) {
                h1.E(th2);
                return false;
            }
        }

        public boolean r() {
            Unsafe unsafe = this.f31073a;
            if (unsafe == null) {
                return false;
            }
            try {
                Class<?> cls = unsafe.getClass();
                cls.getMethod("objectFieldOffset", Field.class);
                cls.getMethod("getLong", Object.class, Long.TYPE);
                if (h1.b() == null) {
                    return false;
                }
                return true;
            } catch (Throwable th2) {
                h1.E(th2);
                return false;
            }
        }
    }

    static {
        boolean z10;
        long j10 = j(byte[].class);
        f31057h = j10;
        f31058i = j(boolean[].class);
        f31059j = k(boolean[].class);
        f31060k = j(int[].class);
        f31061l = k(int[].class);
        f31062m = j(long[].class);
        f31063n = k(long[].class);
        f31064o = j(float[].class);
        f31065p = k(float[].class);
        f31066q = j(double[].class);
        f31067r = k(double[].class);
        f31068s = j(Object[].class);
        f31069t = k(Object[].class);
        f31070u = o(l());
        f31071v = (int) (j10 & 7);
        if (ByteOrder.nativeOrder() == ByteOrder.BIG_ENDIAN) {
            z10 = true;
        } else {
            z10 = false;
        }
        f31072w = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object A(Object obj, long j10) {
        return f31054e.i(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Unsafe B() {
        try {
            return (Unsafe) AccessController.doPrivileged(new a());
        } catch (Throwable unused) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean C() {
        return f31056g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean D() {
        return f31055f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void E(Throwable th2) {
        Logger logger = Logger.getLogger(h1.class.getName());
        Level level = Level.WARNING;
        logger.log(level, "platform method missing - proto runtime falling back to safer methods: " + th2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void F(Object obj, long j10, boolean z10) {
        f31054e.k(obj, j10, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void G(Object obj, long j10, boolean z10) {
        I(obj, j10, z10 ? (byte) 1 : (byte) 0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void H(Object obj, long j10, boolean z10) {
        J(obj, j10, z10 ? (byte) 1 : (byte) 0);
    }

    private static void I(Object obj, long j10, byte b10) {
        long j11 = (-4) & j10;
        int x10 = x(obj, j11);
        int i10 = ((~((int) j10)) & 3) << 3;
        M(obj, j11, ((255 & b10) << i10) | (x10 & (~(SetSpanOperation.SPAN_MAX_PRIORITY << i10))));
    }

    private static void J(Object obj, long j10, byte b10) {
        long j11 = (-4) & j10;
        int i10 = (((int) j10) & 3) << 3;
        M(obj, j11, ((255 & b10) << i10) | (x(obj, j11) & (~(SetSpanOperation.SPAN_MAX_PRIORITY << i10))));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void K(Object obj, long j10, double d10) {
        f31054e.l(obj, j10, d10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void L(Object obj, long j10, float f10) {
        f31054e.m(obj, j10, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void M(Object obj, long j10, int i10) {
        f31054e.n(obj, j10, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void N(Object obj, long j10, long j11) {
        f31054e.o(obj, j10, j11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void O(Object obj, long j10, Object obj2) {
        f31054e.p(obj, j10, obj2);
    }

    private static boolean P() {
        e eVar = f31054e;
        if (eVar == null) {
            return false;
        }
        return eVar.q();
    }

    private static boolean Q() {
        e eVar = f31054e;
        if (eVar == null) {
            return false;
        }
        return eVar.r();
    }

    static /* synthetic */ Field b() {
        return l();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object i(Class cls) {
        try {
            return f31050a.allocateInstance(cls);
        } catch (InstantiationException e10) {
            throw new IllegalStateException(e10);
        }
    }

    private static int j(Class cls) {
        if (f31056g) {
            return f31054e.a(cls);
        }
        return -1;
    }

    private static int k(Class cls) {
        if (f31056g) {
            return f31054e.b(cls);
        }
        return -1;
    }

    private static Field l() {
        Field n10;
        if (jk.d.c() && (n10 = n(Buffer.class, "effectiveDirectAddress")) != null) {
            return n10;
        }
        Field n11 = n(Buffer.class, "address");
        if (n11 != null && n11.getType() == Long.TYPE) {
            return n11;
        }
        return null;
    }

    static boolean m(Class cls) {
        if (!jk.d.c()) {
            return false;
        }
        try {
            Class cls2 = f31051b;
            Class cls3 = Boolean.TYPE;
            cls2.getMethod("peekLong", cls, cls3);
            cls2.getMethod("pokeLong", cls, Long.TYPE, cls3);
            Class cls4 = Integer.TYPE;
            cls2.getMethod("pokeInt", cls, cls4, cls3);
            cls2.getMethod("peekInt", cls, cls3);
            cls2.getMethod("pokeByte", cls, Byte.TYPE);
            cls2.getMethod("peekByte", cls);
            cls2.getMethod("pokeByteArray", cls, byte[].class, cls4, cls4);
            cls2.getMethod("peekByteArray", cls, byte[].class, cls4, cls4);
            return true;
        } catch (Throwable unused) {
            return false;
        }
    }

    private static Field n(Class cls, String str) {
        try {
            return cls.getDeclaredField(str);
        } catch (Throwable unused) {
            return null;
        }
    }

    private static long o(Field field) {
        e eVar;
        if (field != null && (eVar = f31054e) != null) {
            return eVar.j(field);
        }
        return -1L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean p(Object obj, long j10) {
        return f31054e.c(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean q(Object obj, long j10) {
        if (t(obj, j10) != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static boolean r(Object obj, long j10) {
        if (u(obj, j10) != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static byte s(byte[] bArr, long j10) {
        return f31054e.d(bArr, f31057h + j10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static byte t(Object obj, long j10) {
        return (byte) ((x(obj, (-4) & j10) >>> ((int) (((~j10) & 3) << 3))) & SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static byte u(Object obj, long j10) {
        return (byte) ((x(obj, (-4) & j10) >>> ((int) ((j10 & 3) << 3))) & SetSpanOperation.SPAN_MAX_PRIORITY);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static double v(Object obj, long j10) {
        return f31054e.e(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float w(Object obj, long j10) {
        return f31054e.f(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int x(Object obj, long j10) {
        return f31054e.g(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static long y(Object obj, long j10) {
        return f31054e.h(obj, j10);
    }

    private static e z() {
        Unsafe unsafe = f31050a;
        if (unsafe == null) {
            return null;
        }
        if (jk.d.c()) {
            if (f31052c) {
                return new c(unsafe);
            }
            if (!f31053d) {
                return null;
            }
            return new b(unsafe);
        }
        return new d(unsafe);
    }
}
