package androidx.datastore.preferences.protobuf;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.lang.reflect.Field;
import java.nio.Buffer;
import java.nio.ByteOrder;
import java.security.AccessController;
import java.security.PrivilegedExceptionAction;
import java.util.logging.Level;
import java.util.logging.Logger;
import sun.misc.Unsafe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class o1 {

    /* renamed from: a  reason: collision with root package name */
    private static final Logger f3853a = Logger.getLogger(o1.class.getName());

    /* renamed from: b  reason: collision with root package name */
    private static final Unsafe f3854b = B();

    /* renamed from: c  reason: collision with root package name */
    private static final Class f3855c = androidx.datastore.preferences.protobuf.d.b();

    /* renamed from: d  reason: collision with root package name */
    private static final boolean f3856d = m(Long.TYPE);

    /* renamed from: e  reason: collision with root package name */
    private static final boolean f3857e = m(Integer.TYPE);

    /* renamed from: f  reason: collision with root package name */
    private static final e f3858f = z();

    /* renamed from: g  reason: collision with root package name */
    private static final boolean f3859g = Q();

    /* renamed from: h  reason: collision with root package name */
    private static final boolean f3860h = P();

    /* renamed from: i  reason: collision with root package name */
    static final long f3861i;

    /* renamed from: j  reason: collision with root package name */
    private static final long f3862j;

    /* renamed from: k  reason: collision with root package name */
    private static final long f3863k;

    /* renamed from: l  reason: collision with root package name */
    private static final long f3864l;

    /* renamed from: m  reason: collision with root package name */
    private static final long f3865m;

    /* renamed from: n  reason: collision with root package name */
    private static final long f3866n;

    /* renamed from: o  reason: collision with root package name */
    private static final long f3867o;

    /* renamed from: p  reason: collision with root package name */
    private static final long f3868p;

    /* renamed from: q  reason: collision with root package name */
    private static final long f3869q;

    /* renamed from: r  reason: collision with root package name */
    private static final long f3870r;

    /* renamed from: s  reason: collision with root package name */
    private static final long f3871s;

    /* renamed from: t  reason: collision with root package name */
    private static final long f3872t;

    /* renamed from: u  reason: collision with root package name */
    private static final long f3873u;

    /* renamed from: v  reason: collision with root package name */
    private static final long f3874v;

    /* renamed from: w  reason: collision with root package name */
    private static final int f3875w;

    /* renamed from: x  reason: collision with root package name */
    static final boolean f3876x;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a implements PrivilegedExceptionAction {
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
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends e {
        b(Unsafe unsafe) {
            super(unsafe);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public boolean c(Object obj, long j10) {
            return o1.f3876x ? o1.q(obj, j10) : o1.r(obj, j10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public byte d(Object obj, long j10) {
            return o1.f3876x ? o1.t(obj, j10) : o1.u(obj, j10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public double e(Object obj, long j10) {
            return Double.longBitsToDouble(h(obj, j10));
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public float f(Object obj, long j10) {
            return Float.intBitsToFloat(g(obj, j10));
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void k(Object obj, long j10, boolean z10) {
            if (o1.f3876x) {
                o1.F(obj, j10, z10);
            } else {
                o1.G(obj, j10, z10);
            }
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void l(Object obj, long j10, byte b10) {
            if (o1.f3876x) {
                o1.I(obj, j10, b10);
            } else {
                o1.J(obj, j10, b10);
            }
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void m(Object obj, long j10, double d10) {
            p(obj, j10, Double.doubleToLongBits(d10));
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void n(Object obj, long j10, float f10) {
            o(obj, j10, Float.floatToIntBits(f10));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class c extends e {
        c(Unsafe unsafe) {
            super(unsafe);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public boolean c(Object obj, long j10) {
            return o1.f3876x ? o1.q(obj, j10) : o1.r(obj, j10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public byte d(Object obj, long j10) {
            return o1.f3876x ? o1.t(obj, j10) : o1.u(obj, j10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public double e(Object obj, long j10) {
            return Double.longBitsToDouble(h(obj, j10));
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public float f(Object obj, long j10) {
            return Float.intBitsToFloat(g(obj, j10));
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void k(Object obj, long j10, boolean z10) {
            if (o1.f3876x) {
                o1.F(obj, j10, z10);
            } else {
                o1.G(obj, j10, z10);
            }
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void l(Object obj, long j10, byte b10) {
            if (o1.f3876x) {
                o1.I(obj, j10, b10);
            } else {
                o1.J(obj, j10, b10);
            }
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void m(Object obj, long j10, double d10) {
            p(obj, j10, Double.doubleToLongBits(d10));
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void n(Object obj, long j10, float f10) {
            o(obj, j10, Float.floatToIntBits(f10));
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class d extends e {
        d(Unsafe unsafe) {
            super(unsafe);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public boolean c(Object obj, long j10) {
            return this.f3877a.getBoolean(obj, j10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public byte d(Object obj, long j10) {
            return this.f3877a.getByte(obj, j10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public double e(Object obj, long j10) {
            return this.f3877a.getDouble(obj, j10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public float f(Object obj, long j10) {
            return this.f3877a.getFloat(obj, j10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void k(Object obj, long j10, boolean z10) {
            this.f3877a.putBoolean(obj, j10, z10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void l(Object obj, long j10, byte b10) {
            this.f3877a.putByte(obj, j10, b10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void m(Object obj, long j10, double d10) {
            this.f3877a.putDouble(obj, j10, d10);
        }

        @Override // androidx.datastore.preferences.protobuf.o1.e
        public void n(Object obj, long j10, float f10) {
            this.f3877a.putFloat(obj, j10, f10);
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static abstract class e {

        /* renamed from: a  reason: collision with root package name */
        Unsafe f3877a;

        e(Unsafe unsafe) {
            this.f3877a = unsafe;
        }

        public final int a(Class cls) {
            return this.f3877a.arrayBaseOffset(cls);
        }

        public final int b(Class cls) {
            return this.f3877a.arrayIndexScale(cls);
        }

        public abstract boolean c(Object obj, long j10);

        public abstract byte d(Object obj, long j10);

        public abstract double e(Object obj, long j10);

        public abstract float f(Object obj, long j10);

        public final int g(Object obj, long j10) {
            return this.f3877a.getInt(obj, j10);
        }

        public final long h(Object obj, long j10) {
            return this.f3877a.getLong(obj, j10);
        }

        public final Object i(Object obj, long j10) {
            return this.f3877a.getObject(obj, j10);
        }

        public final long j(Field field) {
            return this.f3877a.objectFieldOffset(field);
        }

        public abstract void k(Object obj, long j10, boolean z10);

        public abstract void l(Object obj, long j10, byte b10);

        public abstract void m(Object obj, long j10, double d10);

        public abstract void n(Object obj, long j10, float f10);

        public final void o(Object obj, long j10, int i10) {
            this.f3877a.putInt(obj, j10, i10);
        }

        public final void p(Object obj, long j10, long j11) {
            this.f3877a.putLong(obj, j10, j11);
        }

        public final void q(Object obj, long j10, Object obj2) {
            this.f3877a.putObject(obj, j10, obj2);
        }
    }

    static {
        boolean z10;
        long j10 = j(byte[].class);
        f3861i = j10;
        f3862j = j(boolean[].class);
        f3863k = k(boolean[].class);
        f3864l = j(int[].class);
        f3865m = k(int[].class);
        f3866n = j(long[].class);
        f3867o = k(long[].class);
        f3868p = j(float[].class);
        f3869q = k(float[].class);
        f3870r = j(double[].class);
        f3871s = k(double[].class);
        f3872t = j(Object[].class);
        f3873u = k(Object[].class);
        f3874v = o(l());
        f3875w = (int) (j10 & 7);
        if (ByteOrder.nativeOrder() == ByteOrder.BIG_ENDIAN) {
            z10 = true;
        } else {
            z10 = false;
        }
        f3876x = z10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object A(Object obj, long j10) {
        return f3858f.i(obj, j10);
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
        return f3860h;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean D() {
        return f3859g;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void E(Object obj, long j10, boolean z10) {
        f3858f.k(obj, j10, z10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void F(Object obj, long j10, boolean z10) {
        I(obj, j10, z10 ? (byte) 1 : (byte) 0);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void G(Object obj, long j10, boolean z10) {
        J(obj, j10, z10 ? (byte) 1 : (byte) 0);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void H(byte[] bArr, long j10, byte b10) {
        f3858f.l(bArr, f3861i + j10, b10);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void I(Object obj, long j10, byte b10) {
        long j11 = (-4) & j10;
        int x10 = x(obj, j11);
        int i10 = ((~((int) j10)) & 3) << 3;
        M(obj, j11, ((255 & b10) << i10) | (x10 & (~(SetSpanOperation.SPAN_MAX_PRIORITY << i10))));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void J(Object obj, long j10, byte b10) {
        long j11 = (-4) & j10;
        int i10 = (((int) j10) & 3) << 3;
        M(obj, j11, ((255 & b10) << i10) | (x(obj, j11) & (~(SetSpanOperation.SPAN_MAX_PRIORITY << i10))));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void K(Object obj, long j10, double d10) {
        f3858f.m(obj, j10, d10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void L(Object obj, long j10, float f10) {
        f3858f.n(obj, j10, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void M(Object obj, long j10, int i10) {
        f3858f.o(obj, j10, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void N(Object obj, long j10, long j11) {
        f3858f.p(obj, j10, j11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void O(Object obj, long j10, Object obj2) {
        f3858f.q(obj, j10, obj2);
    }

    private static boolean P() {
        Unsafe unsafe = f3854b;
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
            if (androidx.datastore.preferences.protobuf.d.c()) {
                return true;
            }
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
            Logger logger = f3853a;
            Level level = Level.WARNING;
            logger.log(level, "platform method missing - proto runtime falling back to safer methods: " + th2);
            return false;
        }
    }

    private static boolean Q() {
        Unsafe unsafe = f3854b;
        if (unsafe == null) {
            return false;
        }
        try {
            Class<?> cls = unsafe.getClass();
            cls.getMethod("objectFieldOffset", Field.class);
            Class cls2 = Long.TYPE;
            cls.getMethod("getLong", Object.class, cls2);
            if (l() == null) {
                return false;
            }
            if (androidx.datastore.preferences.protobuf.d.c()) {
                return true;
            }
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
            Logger logger = f3853a;
            Level level = Level.WARNING;
            logger.log(level, "platform method missing - proto runtime falling back to safer methods: " + th2);
            return false;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object i(Class cls) {
        try {
            return f3854b.allocateInstance(cls);
        } catch (InstantiationException e10) {
            throw new IllegalStateException(e10);
        }
    }

    private static int j(Class cls) {
        if (f3860h) {
            return f3858f.a(cls);
        }
        return -1;
    }

    private static int k(Class cls) {
        if (f3860h) {
            return f3858f.b(cls);
        }
        return -1;
    }

    private static Field l() {
        Field n10;
        if (androidx.datastore.preferences.protobuf.d.c() && (n10 = n(Buffer.class, "effectiveDirectAddress")) != null) {
            return n10;
        }
        Field n11 = n(Buffer.class, "address");
        if (n11 != null && n11.getType() == Long.TYPE) {
            return n11;
        }
        return null;
    }

    private static boolean m(Class cls) {
        if (!androidx.datastore.preferences.protobuf.d.c()) {
            return false;
        }
        try {
            Class cls2 = f3855c;
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
        if (field != null && (eVar = f3858f) != null) {
            return eVar.j(field);
        }
        return -1L;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean p(Object obj, long j10) {
        return f3858f.c(obj, j10);
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
        return f3858f.d(bArr, f3861i + j10);
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
        return f3858f.e(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float w(Object obj, long j10) {
        return f3858f.f(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int x(Object obj, long j10) {
        return f3858f.g(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static long y(Object obj, long j10) {
        return f3858f.h(obj, j10);
    }

    private static e z() {
        Unsafe unsafe = f3854b;
        if (unsafe == null) {
            return null;
        }
        if (androidx.datastore.preferences.protobuf.d.c()) {
            if (f3856d) {
                return new c(unsafe);
            }
            if (!f3857e) {
                return null;
            }
            return new b(unsafe);
        }
        return new d(unsafe);
    }
}
