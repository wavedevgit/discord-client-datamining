package gk;

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
    private static final Unsafe f25252a = B();

    /* renamed from: b  reason: collision with root package name */
    private static final Class f25253b = gk.d.b();

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f25254c = m(Long.TYPE);

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f25255d = m(Integer.TYPE);

    /* renamed from: e  reason: collision with root package name */
    private static final e f25256e = z();

    /* renamed from: f  reason: collision with root package name */
    private static final boolean f25257f = Q();

    /* renamed from: g  reason: collision with root package name */
    private static final boolean f25258g = P();

    /* renamed from: h  reason: collision with root package name */
    static final long f25259h;

    /* renamed from: i  reason: collision with root package name */
    private static final long f25260i;

    /* renamed from: j  reason: collision with root package name */
    private static final long f25261j;

    /* renamed from: k  reason: collision with root package name */
    private static final long f25262k;

    /* renamed from: l  reason: collision with root package name */
    private static final long f25263l;

    /* renamed from: m  reason: collision with root package name */
    private static final long f25264m;

    /* renamed from: n  reason: collision with root package name */
    private static final long f25265n;

    /* renamed from: o  reason: collision with root package name */
    private static final long f25266o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f25267p;

    /* renamed from: q  reason: collision with root package name */
    private static final long f25268q;

    /* renamed from: r  reason: collision with root package name */
    private static final long f25269r;

    /* renamed from: s  reason: collision with root package name */
    private static final long f25270s;

    /* renamed from: t  reason: collision with root package name */
    private static final long f25271t;

    /* renamed from: u  reason: collision with root package name */
    private static final long f25272u;

    /* renamed from: v  reason: collision with root package name */
    private static final int f25273v;

    /* renamed from: w  reason: collision with root package name */
    static final boolean f25274w;

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

        @Override // gk.h1.e
        public boolean c(Object obj, long j10) {
            return h1.f25274w ? h1.q(obj, j10) : h1.r(obj, j10);
        }

        @Override // gk.h1.e
        public byte d(Object obj, long j10) {
            return h1.f25274w ? h1.t(obj, j10) : h1.u(obj, j10);
        }

        @Override // gk.h1.e
        public double e(Object obj, long j10) {
            return Double.longBitsToDouble(h(obj, j10));
        }

        @Override // gk.h1.e
        public float f(Object obj, long j10) {
            return Float.intBitsToFloat(g(obj, j10));
        }

        @Override // gk.h1.e
        public void k(Object obj, long j10, boolean z10) {
            if (h1.f25274w) {
                h1.G(obj, j10, z10);
            } else {
                h1.H(obj, j10, z10);
            }
        }

        @Override // gk.h1.e
        public void l(Object obj, long j10, double d10) {
            o(obj, j10, Double.doubleToLongBits(d10));
        }

        @Override // gk.h1.e
        public void m(Object obj, long j10, float f10) {
            n(obj, j10, Float.floatToIntBits(f10));
        }

        @Override // gk.h1.e
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

        @Override // gk.h1.e
        public boolean c(Object obj, long j10) {
            return h1.f25274w ? h1.q(obj, j10) : h1.r(obj, j10);
        }

        @Override // gk.h1.e
        public byte d(Object obj, long j10) {
            return h1.f25274w ? h1.t(obj, j10) : h1.u(obj, j10);
        }

        @Override // gk.h1.e
        public double e(Object obj, long j10) {
            return Double.longBitsToDouble(h(obj, j10));
        }

        @Override // gk.h1.e
        public float f(Object obj, long j10) {
            return Float.intBitsToFloat(g(obj, j10));
        }

        @Override // gk.h1.e
        public void k(Object obj, long j10, boolean z10) {
            if (h1.f25274w) {
                h1.G(obj, j10, z10);
            } else {
                h1.H(obj, j10, z10);
            }
        }

        @Override // gk.h1.e
        public void l(Object obj, long j10, double d10) {
            o(obj, j10, Double.doubleToLongBits(d10));
        }

        @Override // gk.h1.e
        public void m(Object obj, long j10, float f10) {
            n(obj, j10, Float.floatToIntBits(f10));
        }

        @Override // gk.h1.e
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

        @Override // gk.h1.e
        public boolean c(Object obj, long j10) {
            return this.f25275a.getBoolean(obj, j10);
        }

        @Override // gk.h1.e
        public byte d(Object obj, long j10) {
            return this.f25275a.getByte(obj, j10);
        }

        @Override // gk.h1.e
        public double e(Object obj, long j10) {
            return this.f25275a.getDouble(obj, j10);
        }

        @Override // gk.h1.e
        public float f(Object obj, long j10) {
            return this.f25275a.getFloat(obj, j10);
        }

        @Override // gk.h1.e
        public void k(Object obj, long j10, boolean z10) {
            this.f25275a.putBoolean(obj, j10, z10);
        }

        @Override // gk.h1.e
        public void l(Object obj, long j10, double d10) {
            this.f25275a.putDouble(obj, j10, d10);
        }

        @Override // gk.h1.e
        public void m(Object obj, long j10, float f10) {
            this.f25275a.putFloat(obj, j10, f10);
        }

        @Override // gk.h1.e
        public boolean q() {
            if (!super.q()) {
                return false;
            }
            try {
                Class<?> cls = this.f25275a.getClass();
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

        @Override // gk.h1.e
        public boolean r() {
            if (!super.r()) {
                return false;
            }
            try {
                Class<?> cls = this.f25275a.getClass();
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
        Unsafe f25275a;

        e(Unsafe unsafe) {
            this.f25275a = unsafe;
        }

        public final int a(Class cls) {
            return this.f25275a.arrayBaseOffset(cls);
        }

        public final int b(Class cls) {
            return this.f25275a.arrayIndexScale(cls);
        }

        public abstract boolean c(Object obj, long j10);

        public abstract byte d(Object obj, long j10);

        public abstract double e(Object obj, long j10);

        public abstract float f(Object obj, long j10);

        public final int g(Object obj, long j10) {
            return this.f25275a.getInt(obj, j10);
        }

        public final long h(Object obj, long j10) {
            return this.f25275a.getLong(obj, j10);
        }

        public final Object i(Object obj, long j10) {
            return this.f25275a.getObject(obj, j10);
        }

        public final long j(Field field) {
            return this.f25275a.objectFieldOffset(field);
        }

        public abstract void k(Object obj, long j10, boolean z10);

        public abstract void l(Object obj, long j10, double d10);

        public abstract void m(Object obj, long j10, float f10);

        public final void n(Object obj, long j10, int i10) {
            this.f25275a.putInt(obj, j10, i10);
        }

        public final void o(Object obj, long j10, long j11) {
            this.f25275a.putLong(obj, j10, j11);
        }

        public final void p(Object obj, long j10, Object obj2) {
            this.f25275a.putObject(obj, j10, obj2);
        }

        public boolean q() {
            Unsafe unsafe = this.f25275a;
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
            Unsafe unsafe = this.f25275a;
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
        f25259h = j10;
        f25260i = j(boolean[].class);
        f25261j = k(boolean[].class);
        f25262k = j(int[].class);
        f25263l = k(int[].class);
        f25264m = j(long[].class);
        f25265n = k(long[].class);
        f25266o = j(float[].class);
        f25267p = k(float[].class);
        f25268q = j(double[].class);
        f25269r = k(double[].class);
        f25270s = j(Object[].class);
        f25271t = k(Object[].class);
        f25272u = o(l());
        f25273v = (int) (j10 & 7);
        if (ByteOrder.nativeOrder() == ByteOrder.BIG_ENDIAN) {
            z10 = true;
        } else {
            z10 = false;
        }
        f25274w = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object A(Object obj, long j10) {
        return f25256e.i(obj, j10);
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
        return f25258g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean D() {
        return f25257f;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void E(Throwable th2) {
        Logger logger = Logger.getLogger(h1.class.getName());
        Level level = Level.WARNING;
        logger.log(level, "platform method missing - proto runtime falling back to safer methods: " + th2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void F(Object obj, long j10, boolean z10) {
        f25256e.k(obj, j10, z10);
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
        f25256e.l(obj, j10, d10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void L(Object obj, long j10, float f10) {
        f25256e.m(obj, j10, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void M(Object obj, long j10, int i10) {
        f25256e.n(obj, j10, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void N(Object obj, long j10, long j11) {
        f25256e.o(obj, j10, j11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void O(Object obj, long j10, Object obj2) {
        f25256e.p(obj, j10, obj2);
    }

    private static boolean P() {
        e eVar = f25256e;
        if (eVar == null) {
            return false;
        }
        return eVar.q();
    }

    private static boolean Q() {
        e eVar = f25256e;
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
            return f25252a.allocateInstance(cls);
        } catch (InstantiationException e10) {
            throw new IllegalStateException(e10);
        }
    }

    private static int j(Class cls) {
        if (f25258g) {
            return f25256e.a(cls);
        }
        return -1;
    }

    private static int k(Class cls) {
        if (f25258g) {
            return f25256e.b(cls);
        }
        return -1;
    }

    private static Field l() {
        Field n10;
        if (gk.d.c() && (n10 = n(Buffer.class, "effectiveDirectAddress")) != null) {
            return n10;
        }
        Field n11 = n(Buffer.class, "address");
        if (n11 != null && n11.getType() == Long.TYPE) {
            return n11;
        }
        return null;
    }

    static boolean m(Class cls) {
        if (!gk.d.c()) {
            return false;
        }
        try {
            Class cls2 = f25253b;
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
        if (field != null && (eVar = f25256e) != null) {
            return eVar.j(field);
        }
        return -1L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean p(Object obj, long j10) {
        return f25256e.c(obj, j10);
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
        return f25256e.d(bArr, f25259h + j10);
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
        return f25256e.e(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float w(Object obj, long j10) {
        return f25256e.f(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int x(Object obj, long j10) {
        return f25256e.g(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static long y(Object obj, long j10) {
        return f25256e.h(obj, j10);
    }

    private static e z() {
        Unsafe unsafe = f25252a;
        if (unsafe == null) {
            return null;
        }
        if (gk.d.c()) {
            if (f25254c) {
                return new c(unsafe);
            }
            if (!f25255d) {
                return null;
            }
            return new b(unsafe);
        }
        return new d(unsafe);
    }
}
