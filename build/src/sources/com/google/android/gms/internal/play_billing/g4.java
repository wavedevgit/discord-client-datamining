package com.google.android.gms.internal.play_billing;

import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.lang.reflect.Field;
import java.nio.Buffer;
import java.security.AccessController;
import java.util.logging.Level;
import java.util.logging.Logger;
import sun.misc.Unsafe;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class g4 {

    /* renamed from: a  reason: collision with root package name */
    private static final Unsafe f14232a;

    /* renamed from: b  reason: collision with root package name */
    private static final Class f14233b;

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f14234c;

    /* renamed from: d  reason: collision with root package name */
    private static final f4 f14235d;

    /* renamed from: e  reason: collision with root package name */
    private static final boolean f14236e;

    /* renamed from: f  reason: collision with root package name */
    private static final boolean f14237f;

    /* renamed from: g  reason: collision with root package name */
    static final long f14238g;

    /* renamed from: h  reason: collision with root package name */
    static final boolean f14239h;

    /* JADX WARN: Removed duplicated region for block: B:22:0x0069  */
    /* JADX WARN: Removed duplicated region for block: B:29:0x0104  */
    /* JADX WARN: Removed duplicated region for block: B:35:0x0116  */
    static {
        /*
            Method dump skipped, instructions count: 282
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.play_billing.g4.<clinit>():void");
    }

    static boolean A(Class cls) {
        int i10 = c0.f14195a;
        try {
            Class cls2 = f14233b;
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

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean B(Object obj, long j10) {
        return f14235d.g(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean C() {
        return f14237f;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean D() {
        return f14236e;
    }

    private static int E(Class cls) {
        if (f14237f) {
            return f14235d.f14222a.arrayBaseOffset(cls);
        }
        return -1;
    }

    private static int a(Class cls) {
        if (f14237f) {
            return f14235d.f14222a.arrayIndexScale(cls);
        }
        return -1;
    }

    private static Field b() {
        int i10 = c0.f14195a;
        Field c10 = c(Buffer.class, "effectiveDirectAddress");
        if (c10 == null) {
            Field c11 = c(Buffer.class, "address");
            if (c11 != null && c11.getType() == Long.TYPE) {
                return c11;
            }
            return null;
        }
        return c10;
    }

    private static Field c(Class cls, String str) {
        try {
            return cls.getDeclaredField(str);
        } catch (Throwable unused) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void d(Object obj, long j10, byte b10) {
        f4 f4Var = f14235d;
        long j11 = (-4) & j10;
        int i10 = f4Var.f14222a.getInt(obj, j11);
        int i11 = ((~((int) j10)) & 3) << 3;
        f4Var.f14222a.putInt(obj, j11, ((255 & b10) << i11) | (i10 & (~(SetSpanOperation.SPAN_MAX_PRIORITY << i11))));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static void e(Object obj, long j10, byte b10) {
        f4 f4Var = f14235d;
        long j11 = (-4) & j10;
        int i10 = (((int) j10) & 3) << 3;
        f4Var.f14222a.putInt(obj, j11, ((255 & b10) << i10) | (f4Var.f14222a.getInt(obj, j11) & (~(SetSpanOperation.SPAN_MAX_PRIORITY << i10))));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static double f(Object obj, long j10) {
        return f14235d.a(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static float g(Object obj, long j10) {
        return f14235d.b(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int h(Object obj, long j10) {
        return f14235d.f14222a.getInt(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static long i(Object obj, long j10) {
        return f14235d.f14222a.getLong(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object j(Class cls) {
        try {
            return f14232a.allocateInstance(cls);
        } catch (InstantiationException e10) {
            throw new IllegalStateException(e10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object k(Object obj, long j10) {
        return f14235d.f14222a.getObject(obj, j10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Unsafe l() {
        try {
            return (Unsafe) AccessController.doPrivileged(new c4());
        } catch (Throwable unused) {
            return null;
        }
    }

    static /* bridge */ /* synthetic */ void m(Throwable th2) {
        Logger.getLogger(g4.class.getName()).logp(Level.WARNING, "com.google.protobuf.UnsafeUtil", "logMissingMethod", "platform method missing - proto runtime falling back to safer methods: ".concat(th2.toString()));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void r(Object obj, long j10, boolean z10) {
        f14235d.c(obj, j10, z10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void s(byte[] bArr, long j10, byte b10) {
        f14235d.d(bArr, f14238g + j10, b10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void t(Object obj, long j10, double d10) {
        f14235d.e(obj, j10, d10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void u(Object obj, long j10, float f10) {
        f14235d.f(obj, j10, f10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void v(Object obj, long j10, int i10) {
        f14235d.f14222a.putInt(obj, j10, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void w(Object obj, long j10, long j11) {
        f14235d.f14222a.putLong(obj, j10, j11);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void x(Object obj, long j10, Object obj2) {
        f14235d.f14222a.putObject(obj, j10, obj2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ boolean y(Object obj, long j10) {
        if (((byte) ((f14235d.f14222a.getInt(obj, (-4) & j10) >>> ((int) (((~j10) & 3) << 3))) & SetSpanOperation.SPAN_MAX_PRIORITY)) != 0) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ boolean z(Object obj, long j10) {
        if (((byte) ((f14235d.f14222a.getInt(obj, (-4) & j10) >>> ((int) ((j10 & 3) << 3))) & SetSpanOperation.SPAN_MAX_PRIORITY)) != 0) {
            return true;
        }
        return false;
    }
}
