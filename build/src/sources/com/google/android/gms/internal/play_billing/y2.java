package com.google.android.gms.internal.play_billing;

import com.discord.misc.utilities.chat_view_types.ChatViewRecyclerTypes;
import com.discord.notifications.api.NotificationData;
import com.facebook.react.views.text.internal.span.SetSpanOperation;
import java.lang.reflect.Field;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import sun.misc.Unsafe;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y2 implements g3 {

    /* renamed from: o  reason: collision with root package name */
    private static final int[] f15416o = new int[0];

    /* renamed from: p  reason: collision with root package name */
    private static final Unsafe f15417p = g4.l();

    /* renamed from: a  reason: collision with root package name */
    private final int[] f15418a;

    /* renamed from: b  reason: collision with root package name */
    private final Object[] f15419b;

    /* renamed from: c  reason: collision with root package name */
    private final int f15420c;

    /* renamed from: d  reason: collision with root package name */
    private final int f15421d;

    /* renamed from: e  reason: collision with root package name */
    private final v2 f15422e;

    /* renamed from: f  reason: collision with root package name */
    private final boolean f15423f;

    /* renamed from: g  reason: collision with root package name */
    private final int[] f15424g;

    /* renamed from: h  reason: collision with root package name */
    private final int f15425h;

    /* renamed from: i  reason: collision with root package name */
    private final int f15426i;

    /* renamed from: j  reason: collision with root package name */
    private final k2 f15427j;

    /* renamed from: k  reason: collision with root package name */
    private final w3 f15428k;

    /* renamed from: l  reason: collision with root package name */
    private final f1 f15429l;

    /* renamed from: m  reason: collision with root package name */
    private final a3 f15430m;

    /* renamed from: n  reason: collision with root package name */
    private final q2 f15431n;

    private y2(int[] iArr, Object[] objArr, int i10, int i11, v2 v2Var, int i12, boolean z10, int[] iArr2, int i13, int i14, a3 a3Var, k2 k2Var, w3 w3Var, f1 f1Var, q2 q2Var) {
        this.f15418a = iArr;
        this.f15419b = objArr;
        this.f15420c = i10;
        this.f15421d = i11;
        boolean z11 = false;
        if (f1Var != null && f1Var.f(v2Var)) {
            z11 = true;
        }
        this.f15423f = z11;
        this.f15424g = iArr2;
        this.f15425h = i13;
        this.f15426i = i14;
        this.f15430m = a3Var;
        this.f15427j = k2Var;
        this.f15428k = w3Var;
        this.f15429l = f1Var;
        this.f15422e = v2Var;
        this.f15431n = q2Var;
    }

    private static double A(Object obj, long j10) {
        return ((Double) g4.k(obj, j10)).doubleValue();
    }

    private static float C(Object obj, long j10) {
        return ((Float) g4.k(obj, j10)).floatValue();
    }

    private static int D(Object obj, long j10) {
        return ((Integer) g4.k(obj, j10)).intValue();
    }

    private final int E(int i10) {
        return this.f15418a[i10 + 2];
    }

    private final int F(int i10, int i11) {
        int length = (this.f15418a.length / 3) - 1;
        while (i11 <= length) {
            int i12 = (length + i11) >>> 1;
            int i13 = i12 * 3;
            int i14 = this.f15418a[i13];
            if (i10 == i14) {
                return i13;
            }
            if (i10 < i14) {
                length = i12 - 1;
            } else {
                i11 = i12 + 1;
            }
        }
        return -1;
    }

    private static int G(int i10) {
        return (i10 >>> 20) & SetSpanOperation.SPAN_MAX_PRIORITY;
    }

    private final int H(int i10) {
        return this.f15418a[i10 + 1];
    }

    private static long I(Object obj, long j10) {
        return ((Long) g4.k(obj, j10)).longValue();
    }

    private final u1 J(int i10) {
        int i11 = i10 / 3;
        return (u1) this.f15419b[i11 + i11 + 1];
    }

    private final g3 K(int i10) {
        Object[] objArr = this.f15419b;
        int i11 = i10 / 3;
        int i12 = i11 + i11;
        g3 g3Var = (g3) objArr[i12];
        if (g3Var != null) {
            return g3Var;
        }
        g3 b10 = d3.a().b((Class) objArr[i12 + 1]);
        this.f15419b[i12] = b10;
        return b10;
    }

    private final Object L(int i10) {
        int i11 = i10 / 3;
        return this.f15419b[i11 + i11];
    }

    private final Object M(Object obj, int i10) {
        g3 K = K(i10);
        int H = H(i10) & 1048575;
        if (!q(obj, i10)) {
            return K.B();
        }
        Object object = f15417p.getObject(obj, H);
        if (t(object)) {
            return object;
        }
        Object B = K.B();
        if (object != null) {
            K.e(B, object);
        }
        return B;
    }

    private final Object N(Object obj, int i10, int i11) {
        g3 K = K(i11);
        if (!u(obj, i10, i11)) {
            return K.B();
        }
        Object object = f15417p.getObject(obj, H(i11) & 1048575);
        if (t(object)) {
            return object;
        }
        Object B = K.B();
        if (object != null) {
            K.e(B, object);
        }
        return B;
    }

    private static Field O(Class cls, String str) {
        try {
            return cls.getDeclaredField(str);
        } catch (NoSuchFieldException unused) {
            Field[] declaredFields = cls.getDeclaredFields();
            for (Field field : declaredFields) {
                if (str.equals(field.getName())) {
                    return field;
                }
            }
            throw new RuntimeException("Field " + str + " for " + cls.getName() + " not found. Known fields are " + Arrays.toString(declaredFields));
        }
    }

    private static void i(Object obj) {
        if (t(obj)) {
            return;
        }
        throw new IllegalArgumentException("Mutating immutable message: ".concat(String.valueOf(obj)));
    }

    private final void j(Object obj, Object obj2, int i10) {
        if (!q(obj2, i10)) {
            return;
        }
        Unsafe unsafe = f15417p;
        long H = H(i10) & 1048575;
        Object object = unsafe.getObject(obj2, H);
        if (object != null) {
            g3 K = K(i10);
            if (!q(obj, i10)) {
                if (!t(object)) {
                    unsafe.putObject(obj, H, object);
                } else {
                    Object B = K.B();
                    K.e(B, object);
                    unsafe.putObject(obj, H, B);
                }
                l(obj, i10);
                return;
            }
            Object object2 = unsafe.getObject(obj, H);
            if (!t(object2)) {
                Object B2 = K.B();
                K.e(B2, object2);
                unsafe.putObject(obj, H, B2);
                object2 = B2;
            }
            K.e(object2, object);
            return;
        }
        throw new IllegalStateException("Source subfield " + this.f15418a[i10] + " is present but null: " + obj2.toString());
    }

    private final void k(Object obj, Object obj2, int i10) {
        int i11 = this.f15418a[i10];
        if (!u(obj2, i11, i10)) {
            return;
        }
        Unsafe unsafe = f15417p;
        long H = H(i10) & 1048575;
        Object object = unsafe.getObject(obj2, H);
        if (object != null) {
            g3 K = K(i10);
            if (!u(obj, i11, i10)) {
                if (!t(object)) {
                    unsafe.putObject(obj, H, object);
                } else {
                    Object B = K.B();
                    K.e(B, object);
                    unsafe.putObject(obj, H, B);
                }
                m(obj, i11, i10);
                return;
            }
            Object object2 = unsafe.getObject(obj, H);
            if (!t(object2)) {
                Object B2 = K.B();
                K.e(B2, object2);
                unsafe.putObject(obj, H, B2);
                object2 = B2;
            }
            K.e(object2, object);
            return;
        }
        throw new IllegalStateException("Source subfield " + this.f15418a[i10] + " is present but null: " + obj2.toString());
    }

    private final void l(Object obj, int i10) {
        int E = E(i10);
        long j10 = 1048575 & E;
        if (j10 == 1048575) {
            return;
        }
        g4.v(obj, j10, (1 << (E >>> 20)) | g4.h(obj, j10));
    }

    private final void m(Object obj, int i10, int i11) {
        g4.v(obj, E(i11) & 1048575, i10);
    }

    private final void n(Object obj, int i10, Object obj2) {
        f15417p.putObject(obj, H(i10) & 1048575, obj2);
        l(obj, i10);
    }

    private final void o(Object obj, int i10, int i11, Object obj2) {
        f15417p.putObject(obj, H(i11) & 1048575, obj2);
        m(obj, i10, i11);
    }

    private final boolean p(Object obj, Object obj2, int i10) {
        if (q(obj, i10) == q(obj2, i10)) {
            return true;
        }
        return false;
    }

    private final boolean q(Object obj, int i10) {
        int E = E(i10);
        long j10 = E & 1048575;
        if (j10 == 1048575) {
            int H = H(i10);
            long j11 = H & 1048575;
            switch (G(H)) {
                case 0:
                    if (Double.doubleToRawLongBits(g4.f(obj, j11)) == 0) {
                        return false;
                    }
                    return true;
                case 1:
                    if (Float.floatToRawIntBits(g4.g(obj, j11)) == 0) {
                        return false;
                    }
                    return true;
                case 2:
                    if (g4.i(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 3:
                    if (g4.i(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 4:
                    if (g4.h(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 5:
                    if (g4.i(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 6:
                    if (g4.h(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 7:
                    return g4.B(obj, j11);
                case 8:
                    Object k10 = g4.k(obj, j11);
                    if (k10 instanceof String) {
                        if (((String) k10).isEmpty()) {
                            return false;
                        }
                        return true;
                    } else if (k10 instanceof r0) {
                        if (r0.f15368e.equals(k10)) {
                            return false;
                        }
                        return true;
                    } else {
                        throw new IllegalArgumentException();
                    }
                case 9:
                    if (g4.k(obj, j11) == null) {
                        return false;
                    }
                    return true;
                case 10:
                    if (r0.f15368e.equals(g4.k(obj, j11))) {
                        return false;
                    }
                    return true;
                case 11:
                    if (g4.h(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 12:
                    if (g4.h(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 13:
                    if (g4.h(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 14:
                    if (g4.i(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 15:
                    if (g4.h(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 16:
                    if (g4.i(obj, j11) == 0) {
                        return false;
                    }
                    return true;
                case 17:
                    if (g4.k(obj, j11) == null) {
                        return false;
                    }
                    return true;
                default:
                    throw new IllegalArgumentException();
            }
        }
        if ((g4.h(obj, j10) & (1 << (E >>> 20))) == 0) {
            return false;
        }
        return true;
    }

    private final boolean r(Object obj, int i10, int i11, int i12, int i13) {
        if (i11 == 1048575) {
            return q(obj, i10);
        }
        if ((i12 & i13) != 0) {
            return true;
        }
        return false;
    }

    private static boolean s(Object obj, int i10, g3 g3Var) {
        return g3Var.h(g4.k(obj, i10 & 1048575));
    }

    private static boolean t(Object obj) {
        if (obj == null) {
            return false;
        }
        if (obj instanceof q1) {
            return ((q1) obj).x();
        }
        return true;
    }

    private final boolean u(Object obj, int i10, int i11) {
        if (g4.h(obj, E(i11) & 1048575) == i10) {
            return true;
        }
        return false;
    }

    private static boolean v(Object obj, long j10) {
        return ((Boolean) g4.k(obj, j10)).booleanValue();
    }

    private static final void w(int i10, Object obj, o4 o4Var) {
        if (obj instanceof String) {
            o4Var.b(i10, (String) obj);
        } else {
            o4Var.e(i10, (r0) obj);
        }
    }

    static x3 y(Object obj) {
        q1 q1Var = (q1) obj;
        x3 x3Var = q1Var.zzc;
        if (x3Var == x3.c()) {
            x3 f10 = x3.f();
            q1Var.zzc = f10;
            return f10;
        }
        return x3Var;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Removed duplicated region for block: B:125:0x0268  */
    /* JADX WARN: Removed duplicated region for block: B:127:0x026e  */
    /* JADX WARN: Removed duplicated region for block: B:130:0x0284  */
    /* JADX WARN: Removed duplicated region for block: B:131:0x0287  */
    /* JADX WARN: Removed duplicated region for block: B:171:0x0351  */
    /* JADX WARN: Removed duplicated region for block: B:189:0x03ad  */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public static com.google.android.gms.internal.play_billing.y2 z(java.lang.Class r32, com.google.android.gms.internal.play_billing.s2 r33, com.google.android.gms.internal.play_billing.a3 r34, com.google.android.gms.internal.play_billing.k2 r35, com.google.android.gms.internal.play_billing.w3 r36, com.google.android.gms.internal.play_billing.f1 r37, com.google.android.gms.internal.play_billing.q2 r38) {
        /*
            Method dump skipped, instructions count: 1050
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.play_billing.y2.z(java.lang.Class, com.google.android.gms.internal.play_billing.s2, com.google.android.gms.internal.play_billing.a3, com.google.android.gms.internal.play_billing.k2, com.google.android.gms.internal.play_billing.w3, com.google.android.gms.internal.play_billing.f1, com.google.android.gms.internal.play_billing.q2):com.google.android.gms.internal.play_billing.y2");
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final Object B() {
        return ((q1) this.f15422e).k();
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    @Override // com.google.android.gms.internal.play_billing.g3
    public final int a(Object obj) {
        int i10;
        int w10;
        int w11;
        int w12;
        int x10;
        int w13;
        int w14;
        int w15;
        int d10;
        int w16;
        int o10;
        int i11;
        int n10;
        int size;
        int s10;
        int w17;
        int w18;
        int w19;
        int i12;
        int l10;
        int w20;
        int w21;
        int i13;
        int w22;
        int w23;
        int d11;
        int w24;
        y2 y2Var = this;
        Object obj2 = obj;
        Unsafe unsafe = f15417p;
        int i14 = 1048575;
        int i15 = 0;
        int i16 = 0;
        int i17 = 0;
        int i18 = 1048575;
        while (i15 < y2Var.f15418a.length) {
            int H = y2Var.H(i15);
            int G = G(H);
            int[] iArr = y2Var.f15418a;
            int i19 = iArr[i15];
            int i20 = iArr[i15 + 2];
            int i21 = i20 & i14;
            if (G <= 17) {
                if (i21 != i18) {
                    if (i21 == i14) {
                        i16 = 0;
                    } else {
                        i16 = unsafe.getInt(obj2, i21);
                    }
                    i18 = i21;
                }
                i10 = 1 << (i20 >>> 20);
            } else {
                i10 = 0;
            }
            int i22 = H & i14;
            if (G >= k1.X.zza()) {
                k1.f15283k0.zza();
            }
            int i23 = i17;
            long j10 = i22;
            switch (G) {
                case 0:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w10 = z0.w(i19 << 3);
                        o10 = w10 + 8;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 1:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w11 = z0.w(i19 << 3);
                        w14 = w11 + 4;
                        i17 = i23 + w14;
                        y2Var = this;
                        obj2 = obj;
                        break;
                    }
                    y2Var = this;
                    obj2 = obj;
                    i17 = i23;
                    break;
                case 2:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        long j11 = unsafe.getLong(obj2, j10);
                        w12 = z0.w(i19 << 3);
                        x10 = z0.x(j11);
                        i11 = w12 + x10;
                        i17 = i23 + i11;
                        y2Var = this;
                        break;
                    }
                    y2Var = this;
                    i17 = i23;
                    break;
                case 3:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        long j12 = unsafe.getLong(obj2, j10);
                        w12 = z0.w(i19 << 3);
                        x10 = z0.x(j12);
                        i11 = w12 + x10;
                        i17 = i23 + i11;
                        y2Var = this;
                        break;
                    }
                    y2Var = this;
                    i17 = i23;
                    break;
                case 4:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w12 = z0.w(i19 << 3);
                        x10 = z0.x(unsafe.getInt(obj2, j10));
                        i11 = w12 + x10;
                        i17 = i23 + i11;
                        y2Var = this;
                        break;
                    }
                    y2Var = this;
                    i17 = i23;
                    break;
                case 5:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w13 = z0.w(i19 << 3);
                        w14 = w13 + 8;
                        i17 = i23 + w14;
                        y2Var = this;
                        obj2 = obj;
                        break;
                    }
                    y2Var = this;
                    obj2 = obj;
                    i17 = i23;
                    break;
                case 6:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w11 = z0.w(i19 << 3);
                        w14 = w11 + 4;
                        i17 = i23 + w14;
                        y2Var = this;
                        obj2 = obj;
                        break;
                    }
                    y2Var = this;
                    obj2 = obj;
                    i17 = i23;
                    break;
                case 7:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w14 = z0.w(i19 << 3) + 1;
                        i17 = i23 + w14;
                        y2Var = this;
                        obj2 = obj;
                        break;
                    }
                    y2Var = this;
                    obj2 = obj;
                    i17 = i23;
                    break;
                case 8:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        int i24 = i19 << 3;
                        Object object = unsafe.getObject(obj2, j10);
                        if (object instanceof r0) {
                            w15 = z0.w(i24);
                            d10 = ((r0) object).d();
                            w16 = z0.w(d10);
                            i11 = w15 + w16 + d10;
                            i17 = i23 + i11;
                            y2Var = this;
                            break;
                        } else {
                            w12 = z0.w(i24);
                            x10 = z0.v((String) object);
                            i11 = w12 + x10;
                            i17 = i23 + i11;
                            y2Var = this;
                        }
                    }
                    y2Var = this;
                    i17 = i23;
                    break;
                case 9:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        o10 = i3.o(i19, unsafe.getObject(obj2, j10), y2Var.K(i15));
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 10:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w15 = z0.w(i19 << 3);
                        d10 = ((r0) unsafe.getObject(obj2, j10)).d();
                        w16 = z0.w(d10);
                        i11 = w15 + w16 + d10;
                        i17 = i23 + i11;
                        y2Var = this;
                        break;
                    }
                    y2Var = this;
                    i17 = i23;
                    break;
                case 11:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        int i25 = unsafe.getInt(obj2, j10);
                        w12 = z0.w(i19 << 3);
                        x10 = z0.w(i25);
                        i11 = w12 + x10;
                        i17 = i23 + i11;
                        y2Var = this;
                        break;
                    }
                    y2Var = this;
                    i17 = i23;
                    break;
                case 12:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w12 = z0.w(i19 << 3);
                        x10 = z0.x(unsafe.getInt(obj2, j10));
                        i11 = w12 + x10;
                        i17 = i23 + i11;
                        y2Var = this;
                        break;
                    }
                    y2Var = this;
                    i17 = i23;
                    break;
                case 13:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w11 = z0.w(i19 << 3);
                        w14 = w11 + 4;
                        i17 = i23 + w14;
                        y2Var = this;
                        obj2 = obj;
                        break;
                    }
                    y2Var = this;
                    obj2 = obj;
                    i17 = i23;
                    break;
                case 14:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        w13 = z0.w(i19 << 3);
                        w14 = w13 + 8;
                        i17 = i23 + w14;
                        y2Var = this;
                        obj2 = obj;
                        break;
                    }
                    y2Var = this;
                    obj2 = obj;
                    i17 = i23;
                    break;
                case 15:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        int i26 = unsafe.getInt(obj2, j10);
                        w12 = z0.w(i19 << 3);
                        x10 = z0.w((i26 >> 31) ^ (i26 + i26));
                        i11 = w12 + x10;
                        i17 = i23 + i11;
                        y2Var = this;
                        break;
                    }
                    y2Var = this;
                    i17 = i23;
                    break;
                case 16:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        long j13 = unsafe.getLong(obj2, j10);
                        w12 = z0.w(i19 << 3);
                        x10 = z0.x((j13 >> 63) ^ (j13 + j13));
                        i11 = w12 + x10;
                        i17 = i23 + i11;
                        y2Var = this;
                        break;
                    }
                    y2Var = this;
                    i17 = i23;
                    break;
                case 17:
                    if (y2Var.r(obj2, i15, i18, i16, i10)) {
                        o10 = z0.t(i19, (v2) unsafe.getObject(obj2, j10), y2Var.K(i15));
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                    o10 = i3.k(i19, (List) unsafe.getObject(obj2, j10), false);
                    i17 = i23 + o10;
                    break;
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                    o10 = i3.i(i19, (List) unsafe.getObject(obj2, j10), false);
                    i17 = i23 + o10;
                    break;
                case 20:
                    List list = (List) unsafe.getObject(obj2, j10);
                    int i27 = i3.f15262d;
                    if (list.size() != 0) {
                        n10 = i3.n(list) + (list.size() * z0.w(i19 << 3));
                        i17 = n10 + i23;
                        break;
                    }
                    n10 = 0;
                    i17 = n10 + i23;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                    List list2 = (List) unsafe.getObject(obj2, j10);
                    int i28 = i3.f15262d;
                    size = list2.size();
                    if (size != 0) {
                        s10 = i3.s(list2);
                        w17 = z0.w(i19 << 3);
                        i12 = size * w17;
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    o10 = 0;
                    i17 = i23 + o10;
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                    List list3 = (List) unsafe.getObject(obj2, j10);
                    int i29 = i3.f15262d;
                    size = list3.size();
                    if (size != 0) {
                        s10 = i3.m(list3);
                        w17 = z0.w(i19 << 3);
                        i12 = size * w17;
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    o10 = 0;
                    i17 = i23 + o10;
                case 23:
                    o10 = i3.k(i19, (List) unsafe.getObject(obj2, j10), false);
                    i17 = i23 + o10;
                    break;
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                    o10 = i3.i(i19, (List) unsafe.getObject(obj2, j10), false);
                    i17 = i23 + o10;
                    break;
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                    int i30 = i3.f15262d;
                    int size2 = ((List) unsafe.getObject(obj2, j10)).size();
                    if (size2 != 0) {
                        o10 = size2 * (z0.w(i19 << 3) + 1);
                        i17 = i23 + o10;
                        break;
                    }
                    o10 = 0;
                    i17 = i23 + o10;
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                    List list4 = (List) unsafe.getObject(obj2, j10);
                    int i31 = i3.f15262d;
                    int size3 = list4.size();
                    if (size3 != 0) {
                        n10 = z0.w(i19 << 3) * size3;
                        if (list4 instanceof e2) {
                            e2 e2Var = (e2) list4;
                            for (int i32 = 0; i32 < size3; i32++) {
                                Object V = e2Var.V(i32);
                                if (V instanceof r0) {
                                    int d12 = ((r0) V).d();
                                    n10 += z0.w(d12) + d12;
                                } else {
                                    n10 += z0.v((String) V);
                                }
                            }
                        } else {
                            for (int i33 = 0; i33 < size3; i33++) {
                                Object obj3 = list4.get(i33);
                                if (obj3 instanceof r0) {
                                    int d13 = ((r0) obj3).d();
                                    n10 += z0.w(d13) + d13;
                                } else {
                                    n10 += z0.v((String) obj3);
                                }
                            }
                        }
                        i17 = n10 + i23;
                        break;
                    }
                    n10 = 0;
                    i17 = n10 + i23;
                case 27:
                    List list5 = (List) unsafe.getObject(obj2, j10);
                    g3 K = y2Var.K(i15);
                    int i34 = i3.f15262d;
                    int size4 = list5.size();
                    if (size4 == 0) {
                        w18 = 0;
                    } else {
                        w18 = z0.w(i19 << 3) * size4;
                        for (int i35 = 0; i35 < size4; i35++) {
                            w18 += z0.u((v2) list5.get(i35), K);
                        }
                    }
                    i17 = i23 + w18;
                    break;
                case 28:
                    List list6 = (List) unsafe.getObject(obj2, j10);
                    int i36 = i3.f15262d;
                    int size5 = list6.size();
                    if (size5 == 0) {
                        w19 = 0;
                    } else {
                        w19 = size5 * z0.w(i19 << 3);
                        for (int i37 = 0; i37 < list6.size(); i37++) {
                            int d14 = ((r0) list6.get(i37)).d();
                            w19 += z0.w(d14) + d14;
                        }
                    }
                    i17 = i23 + w19;
                    break;
                case 29:
                    List list7 = (List) unsafe.getObject(obj2, j10);
                    int i38 = i3.f15262d;
                    size = list7.size();
                    if (size != 0) {
                        s10 = i3.r(list7);
                        w17 = z0.w(i19 << 3);
                        i12 = size * w17;
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    o10 = 0;
                    i17 = i23 + o10;
                case 30:
                    List list8 = (List) unsafe.getObject(obj2, j10);
                    int i39 = i3.f15262d;
                    size = list8.size();
                    if (size != 0) {
                        s10 = i3.h(list8);
                        w17 = z0.w(i19 << 3);
                        i12 = size * w17;
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    o10 = 0;
                    i17 = i23 + o10;
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                    o10 = i3.i(i19, (List) unsafe.getObject(obj2, j10), false);
                    i17 = i23 + o10;
                    break;
                case 32:
                    o10 = i3.k(i19, (List) unsafe.getObject(obj2, j10), false);
                    i17 = i23 + o10;
                    break;
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                    List list9 = (List) unsafe.getObject(obj2, j10);
                    int i40 = i3.f15262d;
                    size = list9.size();
                    if (size != 0) {
                        s10 = i3.p(list9);
                        w17 = z0.w(i19 << 3);
                        i12 = size * w17;
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    o10 = 0;
                    i17 = i23 + o10;
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                    List list10 = (List) unsafe.getObject(obj2, j10);
                    int i41 = i3.f15262d;
                    size = list10.size();
                    if (size != 0) {
                        s10 = i3.q(list10);
                        w17 = z0.w(i19 << 3);
                        i12 = size * w17;
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    o10 = 0;
                    i17 = i23 + o10;
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                    l10 = i3.l((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                    l10 = i3.j((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                    l10 = i3.n((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                    l10 = i3.s((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                    l10 = i3.m((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case 40:
                    l10 = i3.l((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case 41:
                    l10 = i3.j((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case 42:
                    int i42 = i3.f15262d;
                    l10 = ((List) unsafe.getObject(obj2, j10)).size();
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                    l10 = i3.r((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                    l10 = i3.h((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                    l10 = i3.j((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case 46:
                    l10 = i3.l((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                    l10 = i3.p((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case 48:
                    l10 = i3.q((List) unsafe.getObject(obj2, j10));
                    if (l10 > 0) {
                        w20 = z0.w(i19 << 3);
                        w21 = z0.w(l10);
                        w19 = w20 + w21 + l10;
                        i17 = i23 + w19;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    List list11 = (List) unsafe.getObject(obj2, j10);
                    g3 K2 = y2Var.K(i15);
                    int i43 = i3.f15262d;
                    int size6 = list11.size();
                    if (size6 == 0) {
                        i13 = 0;
                    } else {
                        i13 = 0;
                        for (int i44 = 0; i44 < size6; i44++) {
                            i13 += z0.t(i19, (v2) list11.get(i44), K2);
                        }
                    }
                    i17 = i23 + i13;
                    break;
                case 50:
                    p2 p2Var = (p2) unsafe.getObject(obj2, j10);
                    android.support.v4.media.session.b.a(y2Var.L(i15));
                    if (!p2Var.isEmpty()) {
                        Iterator it = p2Var.entrySet().iterator();
                        if (it.hasNext()) {
                            Map.Entry entry = (Map.Entry) it.next();
                            entry.getKey();
                            entry.getValue();
                            throw null;
                        }
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    if (y2Var.u(obj2, i19, i15)) {
                        w10 = z0.w(i19 << 3);
                        o10 = w10 + 8;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    if (y2Var.u(obj2, i19, i15)) {
                        w22 = z0.w(i19 << 3);
                        o10 = w22 + 4;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    if (y2Var.u(obj2, i19, i15)) {
                        long I = I(obj2, j10);
                        s10 = z0.w(i19 << 3);
                        i12 = z0.x(I);
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    if (y2Var.u(obj2, i19, i15)) {
                        long I2 = I(obj2, j10);
                        s10 = z0.w(i19 << 3);
                        i12 = z0.x(I2);
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    if (y2Var.u(obj2, i19, i15)) {
                        s10 = z0.w(i19 << 3);
                        i12 = z0.x(D(obj2, j10));
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    if (y2Var.u(obj2, i19, i15)) {
                        w10 = z0.w(i19 << 3);
                        o10 = w10 + 8;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    if (y2Var.u(obj2, i19, i15)) {
                        w22 = z0.w(i19 << 3);
                        o10 = w22 + 4;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 58:
                    if (y2Var.u(obj2, i19, i15)) {
                        o10 = z0.w(i19 << 3) + 1;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 59:
                    if (y2Var.u(obj2, i19, i15)) {
                        int i45 = i19 << 3;
                        Object object2 = unsafe.getObject(obj2, j10);
                        if (object2 instanceof r0) {
                            w23 = z0.w(i45);
                            d11 = ((r0) object2).d();
                            w24 = z0.w(d11);
                            o10 = w23 + w24 + d11;
                            i17 = i23 + o10;
                            break;
                        } else {
                            s10 = z0.w(i45);
                            i12 = z0.v((String) object2);
                            o10 = s10 + i12;
                            i17 = i23 + o10;
                        }
                    }
                    i17 = i23;
                    break;
                case 60:
                    if (y2Var.u(obj2, i19, i15)) {
                        o10 = i3.o(i19, unsafe.getObject(obj2, j10), y2Var.K(i15));
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 61:
                    if (y2Var.u(obj2, i19, i15)) {
                        w23 = z0.w(i19 << 3);
                        d11 = ((r0) unsafe.getObject(obj2, j10)).d();
                        w24 = z0.w(d11);
                        o10 = w23 + w24 + d11;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 62:
                    if (y2Var.u(obj2, i19, i15)) {
                        int D = D(obj2, j10);
                        s10 = z0.w(i19 << 3);
                        i12 = z0.w(D);
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    if (y2Var.u(obj2, i19, i15)) {
                        s10 = z0.w(i19 << 3);
                        i12 = z0.x(D(obj2, j10));
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 64:
                    if (y2Var.u(obj2, i19, i15)) {
                        w22 = z0.w(i19 << 3);
                        o10 = w22 + 4;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 65:
                    if (y2Var.u(obj2, i19, i15)) {
                        w10 = z0.w(i19 << 3);
                        o10 = w10 + 8;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 66:
                    if (y2Var.u(obj2, i19, i15)) {
                        int D2 = D(obj2, j10);
                        s10 = z0.w(i19 << 3);
                        i12 = z0.w((D2 >> 31) ^ (D2 + D2));
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 67:
                    if (y2Var.u(obj2, i19, i15)) {
                        long I3 = I(obj2, j10);
                        s10 = z0.w(i19 << 3);
                        i12 = z0.x((I3 >> 63) ^ (I3 + I3));
                        o10 = s10 + i12;
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                case 68:
                    if (y2Var.u(obj2, i19, i15)) {
                        o10 = z0.t(i19, (v2) unsafe.getObject(obj2, j10), y2Var.K(i15));
                        i17 = i23 + o10;
                        break;
                    }
                    i17 = i23;
                    break;
                default:
                    i17 = i23;
                    break;
            }
            i15 += 3;
            i14 = 1048575;
        }
        w3 w3Var = y2Var.f15428k;
        int a10 = i17 + w3Var.a(w3Var.d(obj2));
        if (y2Var.f15423f) {
            j1 b10 = y2Var.f15429l.b(obj2);
            int i46 = 0;
            for (int i47 = 0; i47 < b10.f15266a.b(); i47++) {
                Map.Entry g10 = b10.f15266a.g(i47);
                android.support.v4.media.session.b.a(g10.getKey());
                i46 += j1.b(null, g10.getValue());
            }
            for (Map.Entry entry2 : b10.f15266a.c()) {
                android.support.v4.media.session.b.a(entry2.getKey());
                i46 += j1.b(null, entry2.getValue());
            }
            return a10 + i46;
        }
        return a10;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void b(Object obj) {
        if (t(obj)) {
            if (obj instanceof q1) {
                q1 q1Var = (q1) obj;
                q1Var.v(Integer.MAX_VALUE);
                q1Var.zza = 0;
                q1Var.t();
            }
            int[] iArr = this.f15418a;
            for (int i10 = 0; i10 < iArr.length; i10 += 3) {
                int H = H(i10);
                int i11 = 1048575 & H;
                int G = G(H);
                long j10 = i11;
                if (G != 9) {
                    if (G != 60 && G != 68) {
                        switch (G) {
                            case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                            case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                            case 20:
                            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                            case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                            case 23:
                            case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                            case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                            case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                            case 27:
                            case 28:
                            case 29:
                            case 30:
                            case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                            case 32:
                            case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                            case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                            case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                            case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                            case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                            case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                            case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                            case 40:
                            case 41:
                            case 42:
                            case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                            case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                            case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                            case 46:
                            case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                            case 48:
                            case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                                this.f15427j.a(obj, j10);
                                break;
                            case 50:
                                Unsafe unsafe = f15417p;
                                Object object = unsafe.getObject(obj, j10);
                                if (object != null) {
                                    ((p2) object).c();
                                    unsafe.putObject(obj, j10, object);
                                    break;
                                } else {
                                    break;
                                }
                        }
                    } else if (u(obj, this.f15418a[i10], i10)) {
                        K(i10).b(f15417p.getObject(obj, j10));
                    }
                }
                if (q(obj, i10)) {
                    K(i10).b(f15417p.getObject(obj, j10));
                }
            }
            this.f15428k.g(obj);
            if (this.f15423f) {
                this.f15429l.d(obj);
            }
        }
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void c(Object obj, byte[] bArr, int i10, int i11, d0 d0Var) {
        x(obj, bArr, i10, i11, 0, d0Var);
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final int d(Object obj) {
        int i10;
        long doubleToLongBits;
        int floatToIntBits;
        int i11;
        int i12 = 0;
        for (int i13 = 0; i13 < this.f15418a.length; i13 += 3) {
            int H = H(i13);
            int[] iArr = this.f15418a;
            int i14 = 1048575 & H;
            int G = G(H);
            int i15 = iArr[i13];
            long j10 = i14;
            int i16 = 37;
            switch (G) {
                case 0:
                    i10 = i12 * 53;
                    doubleToLongBits = Double.doubleToLongBits(g4.f(obj, j10));
                    byte[] bArr = y1.f15413d;
                    floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                    i12 = i10 + floatToIntBits;
                    break;
                case 1:
                    i10 = i12 * 53;
                    floatToIntBits = Float.floatToIntBits(g4.g(obj, j10));
                    i12 = i10 + floatToIntBits;
                    break;
                case 2:
                    i10 = i12 * 53;
                    doubleToLongBits = g4.i(obj, j10);
                    byte[] bArr2 = y1.f15413d;
                    floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                    i12 = i10 + floatToIntBits;
                    break;
                case 3:
                    i10 = i12 * 53;
                    doubleToLongBits = g4.i(obj, j10);
                    byte[] bArr3 = y1.f15413d;
                    floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                    i12 = i10 + floatToIntBits;
                    break;
                case 4:
                    i10 = i12 * 53;
                    floatToIntBits = g4.h(obj, j10);
                    i12 = i10 + floatToIntBits;
                    break;
                case 5:
                    i10 = i12 * 53;
                    doubleToLongBits = g4.i(obj, j10);
                    byte[] bArr4 = y1.f15413d;
                    floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                    i12 = i10 + floatToIntBits;
                    break;
                case 6:
                    i10 = i12 * 53;
                    floatToIntBits = g4.h(obj, j10);
                    i12 = i10 + floatToIntBits;
                    break;
                case 7:
                    i10 = i12 * 53;
                    floatToIntBits = y1.a(g4.B(obj, j10));
                    i12 = i10 + floatToIntBits;
                    break;
                case 8:
                    i10 = i12 * 53;
                    floatToIntBits = ((String) g4.k(obj, j10)).hashCode();
                    i12 = i10 + floatToIntBits;
                    break;
                case 9:
                    i11 = i12 * 53;
                    Object k10 = g4.k(obj, j10);
                    if (k10 != null) {
                        i16 = k10.hashCode();
                    }
                    i12 = i11 + i16;
                    break;
                case 10:
                    i10 = i12 * 53;
                    floatToIntBits = g4.k(obj, j10).hashCode();
                    i12 = i10 + floatToIntBits;
                    break;
                case 11:
                    i10 = i12 * 53;
                    floatToIntBits = g4.h(obj, j10);
                    i12 = i10 + floatToIntBits;
                    break;
                case 12:
                    i10 = i12 * 53;
                    floatToIntBits = g4.h(obj, j10);
                    i12 = i10 + floatToIntBits;
                    break;
                case 13:
                    i10 = i12 * 53;
                    floatToIntBits = g4.h(obj, j10);
                    i12 = i10 + floatToIntBits;
                    break;
                case 14:
                    i10 = i12 * 53;
                    doubleToLongBits = g4.i(obj, j10);
                    byte[] bArr5 = y1.f15413d;
                    floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                    i12 = i10 + floatToIntBits;
                    break;
                case 15:
                    i10 = i12 * 53;
                    floatToIntBits = g4.h(obj, j10);
                    i12 = i10 + floatToIntBits;
                    break;
                case 16:
                    i10 = i12 * 53;
                    doubleToLongBits = g4.i(obj, j10);
                    byte[] bArr6 = y1.f15413d;
                    floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                    i12 = i10 + floatToIntBits;
                    break;
                case 17:
                    i11 = i12 * 53;
                    Object k11 = g4.k(obj, j10);
                    if (k11 != null) {
                        i16 = k11.hashCode();
                    }
                    i12 = i11 + i16;
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                case 20:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case 23:
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 27:
                case 28:
                case 29:
                case 30:
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                case 40:
                case 41:
                case 42:
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                case 46:
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                case 48:
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    i10 = i12 * 53;
                    floatToIntBits = g4.k(obj, j10).hashCode();
                    i12 = i10 + floatToIntBits;
                    break;
                case 50:
                    i10 = i12 * 53;
                    floatToIntBits = g4.k(obj, j10).hashCode();
                    i12 = i10 + floatToIntBits;
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        doubleToLongBits = Double.doubleToLongBits(A(obj, j10));
                        byte[] bArr7 = y1.f15413d;
                        floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = Float.floatToIntBits(C(obj, j10));
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        doubleToLongBits = I(obj, j10);
                        byte[] bArr8 = y1.f15413d;
                        floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        doubleToLongBits = I(obj, j10);
                        byte[] bArr9 = y1.f15413d;
                        floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = D(obj, j10);
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        doubleToLongBits = I(obj, j10);
                        byte[] bArr10 = y1.f15413d;
                        floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = D(obj, j10);
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 58:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = y1.a(v(obj, j10));
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 59:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = ((String) g4.k(obj, j10)).hashCode();
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 60:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = g4.k(obj, j10).hashCode();
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 61:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = g4.k(obj, j10).hashCode();
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 62:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = D(obj, j10);
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = D(obj, j10);
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 64:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = D(obj, j10);
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 65:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        doubleToLongBits = I(obj, j10);
                        byte[] bArr11 = y1.f15413d;
                        floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 66:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = D(obj, j10);
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 67:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        doubleToLongBits = I(obj, j10);
                        byte[] bArr12 = y1.f15413d;
                        floatToIntBits = (int) (doubleToLongBits ^ (doubleToLongBits >>> 32));
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
                case 68:
                    if (u(obj, i15, i13)) {
                        i10 = i12 * 53;
                        floatToIntBits = g4.k(obj, j10).hashCode();
                        i12 = i10 + floatToIntBits;
                        break;
                    } else {
                        break;
                    }
            }
        }
        int hashCode = (i12 * 53) + this.f15428k.d(obj).hashCode();
        if (this.f15423f) {
            return (hashCode * 53) + this.f15429l.b(obj).f15266a.hashCode();
        }
        return hashCode;
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final void e(Object obj, Object obj2) {
        i(obj);
        obj2.getClass();
        for (int i10 = 0; i10 < this.f15418a.length; i10 += 3) {
            int H = H(i10);
            int i11 = 1048575 & H;
            int[] iArr = this.f15418a;
            int G = G(H);
            int i12 = iArr[i10];
            long j10 = i11;
            switch (G) {
                case 0:
                    if (q(obj2, i10)) {
                        g4.t(obj, j10, g4.f(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 1:
                    if (q(obj2, i10)) {
                        g4.u(obj, j10, g4.g(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 2:
                    if (q(obj2, i10)) {
                        g4.w(obj, j10, g4.i(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 3:
                    if (q(obj2, i10)) {
                        g4.w(obj, j10, g4.i(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 4:
                    if (q(obj2, i10)) {
                        g4.v(obj, j10, g4.h(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 5:
                    if (q(obj2, i10)) {
                        g4.w(obj, j10, g4.i(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 6:
                    if (q(obj2, i10)) {
                        g4.v(obj, j10, g4.h(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 7:
                    if (q(obj2, i10)) {
                        g4.r(obj, j10, g4.B(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 8:
                    if (q(obj2, i10)) {
                        g4.x(obj, j10, g4.k(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 9:
                    j(obj, obj2, i10);
                    break;
                case 10:
                    if (q(obj2, i10)) {
                        g4.x(obj, j10, g4.k(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 11:
                    if (q(obj2, i10)) {
                        g4.v(obj, j10, g4.h(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 12:
                    if (q(obj2, i10)) {
                        g4.v(obj, j10, g4.h(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 13:
                    if (q(obj2, i10)) {
                        g4.v(obj, j10, g4.h(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 14:
                    if (q(obj2, i10)) {
                        g4.w(obj, j10, g4.i(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 15:
                    if (q(obj2, i10)) {
                        g4.v(obj, j10, g4.h(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 16:
                    if (q(obj2, i10)) {
                        g4.w(obj, j10, g4.i(obj2, j10));
                        l(obj, i10);
                        break;
                    } else {
                        break;
                    }
                case 17:
                    j(obj, obj2, i10);
                    break;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                case 20:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case 23:
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 27:
                case 28:
                case 29:
                case 30:
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                case 40:
                case 41:
                case 42:
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                case 46:
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                case 48:
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    this.f15427j.b(obj, obj2, j10);
                    break;
                case 50:
                    int i13 = i3.f15262d;
                    g4.x(obj, j10, q2.a(g4.k(obj, j10), g4.k(obj2, j10)));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                case 58:
                case 59:
                    if (u(obj2, i12, i10)) {
                        g4.x(obj, j10, g4.k(obj2, j10));
                        m(obj, i12, i10);
                        break;
                    } else {
                        break;
                    }
                case 60:
                    k(obj, obj2, i10);
                    break;
                case 61:
                case 62:
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                case 64:
                case 65:
                case 66:
                case 67:
                    if (u(obj2, i12, i10)) {
                        g4.x(obj, j10, g4.k(obj2, j10));
                        m(obj, i12, i10);
                        break;
                    } else {
                        break;
                    }
                case 68:
                    k(obj, obj2, i10);
                    break;
            }
        }
        i3.x(this.f15428k, obj, obj2);
        if (this.f15423f) {
            i3.w(this.f15429l, obj, obj2);
        }
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final boolean f(Object obj, Object obj2) {
        boolean g10;
        for (int i10 = 0; i10 < this.f15418a.length; i10 += 3) {
            int H = H(i10);
            long j10 = H & 1048575;
            switch (G(H)) {
                case 0:
                    if (p(obj, obj2, i10) && Double.doubleToLongBits(g4.f(obj, j10)) == Double.doubleToLongBits(g4.f(obj2, j10))) {
                        continue;
                    }
                    return false;
                case 1:
                    if (p(obj, obj2, i10) && Float.floatToIntBits(g4.g(obj, j10)) == Float.floatToIntBits(g4.g(obj2, j10))) {
                        continue;
                    }
                    return false;
                case 2:
                    if (p(obj, obj2, i10) && g4.i(obj, j10) == g4.i(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 3:
                    if (p(obj, obj2, i10) && g4.i(obj, j10) == g4.i(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 4:
                    if (p(obj, obj2, i10) && g4.h(obj, j10) == g4.h(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 5:
                    if (p(obj, obj2, i10) && g4.i(obj, j10) == g4.i(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 6:
                    if (p(obj, obj2, i10) && g4.h(obj, j10) == g4.h(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 7:
                    if (p(obj, obj2, i10) && g4.B(obj, j10) == g4.B(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 8:
                    if (p(obj, obj2, i10) && i3.g(g4.k(obj, j10), g4.k(obj2, j10))) {
                        continue;
                    }
                    return false;
                case 9:
                    if (p(obj, obj2, i10) && i3.g(g4.k(obj, j10), g4.k(obj2, j10))) {
                        continue;
                    }
                    return false;
                case 10:
                    if (p(obj, obj2, i10) && i3.g(g4.k(obj, j10), g4.k(obj2, j10))) {
                        continue;
                    }
                    return false;
                case 11:
                    if (p(obj, obj2, i10) && g4.h(obj, j10) == g4.h(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 12:
                    if (p(obj, obj2, i10) && g4.h(obj, j10) == g4.h(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 13:
                    if (p(obj, obj2, i10) && g4.h(obj, j10) == g4.h(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 14:
                    if (p(obj, obj2, i10) && g4.i(obj, j10) == g4.i(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 15:
                    if (p(obj, obj2, i10) && g4.h(obj, j10) == g4.h(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 16:
                    if (p(obj, obj2, i10) && g4.i(obj, j10) == g4.i(obj2, j10)) {
                        continue;
                    }
                    return false;
                case 17:
                    if (p(obj, obj2, i10) && i3.g(g4.k(obj, j10), g4.k(obj2, j10))) {
                        continue;
                    }
                    return false;
                case ChatViewRecyclerTypes.EPHEMERAL_INDICATION /* 18 */:
                case ChatViewRecyclerTypes.INTERACTION_STATUS /* 19 */:
                case 20:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_EMBED /* 21 */:
                case ChatViewRecyclerTypes.FLAGGED_MESSAGE_ACTION_BAR /* 22 */:
                case 23:
                case ChatViewRecyclerTypes.SURVEY_INDICATION /* 24 */:
                case ChatViewRecyclerTypes.GUILD_INVITE_DISABLED /* 25 */:
                case ChatViewRecyclerTypes.MEDIA_MOSAIC_ATTACHMENT /* 26 */:
                case 27:
                case 28:
                case 29:
                case 30:
                case ChatViewRecyclerTypes.EMBEDDED_ACTIVITY_INVITE /* 31 */:
                case 32:
                case ChatViewRecyclerTypes.AUTO_MODERATION_NOTIFICATION_EMBED /* 33 */:
                case ChatViewRecyclerTypes.CHANNEL_DEADCHAT_PROMPT_ACTIONS /* 34 */:
                case ChatViewRecyclerTypes.INFO_LINK /* 35 */:
                case ChatViewRecyclerTypes.SAFETY_POLICY_NOTICE /* 36 */:
                case ChatViewRecyclerTypes.POLL_TEXT_AND_IMAGE /* 37 */:
                case ChatViewRecyclerTypes.POLL_IMAGE_ONLY /* 38 */:
                case ChatViewRecyclerTypes.SAFETY_SYSTEM_NOTIFICATION /* 39 */:
                case 40:
                case 41:
                case 42:
                case ChatViewRecyclerTypes.FORWARD_HEADER /* 43 */:
                case ChatViewRecyclerTypes.FORWARD_BREADCRUMB /* 44 */:
                case ChatViewRecyclerTypes.REACTION_BURST_REACTION /* 45 */:
                case 46:
                case ChatViewRecyclerTypes.REACTION_ADD_REACTION /* 47 */:
                case 48:
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_IMAGE /* 49 */:
                    g10 = i3.g(g4.k(obj, j10), g4.k(obj2, j10));
                    break;
                case 50:
                    g10 = i3.g(g4.k(obj, j10), g4.k(obj2, j10));
                    break;
                case ChatViewRecyclerTypes.MEDIA_ATTACHMENT_MOSAIC_VISUAL_PLACEHOLDER /* 51 */:
                case ChatViewRecyclerTypes.REFERRAL /* 52 */:
                case ChatViewRecyclerTypes.GUILD_PROFILE_INVITE /* 53 */:
                case ChatViewRecyclerTypes.APP_MESSAGE_EMBED /* 54 */:
                case ChatViewRecyclerTypes.ACTIVITY_RICH_PRESENCE_INVITE_EMBED /* 55 */:
                case ChatViewRecyclerTypes.SHARED_CUSTOM_THEME_EMBED /* 56 */:
                case ChatViewRecyclerTypes.PREMIUM_GROUP_INVITE /* 57 */:
                case 58:
                case 59:
                case 60:
                case 61:
                case 62:
                case NotificationData.MESSAGE_TYPE_EMOJI_ADDED /* 63 */:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                    long E = E(i10) & 1048575;
                    if (g4.h(obj, E) == g4.h(obj2, E) && i3.g(g4.k(obj, j10), g4.k(obj2, j10))) {
                        continue;
                    }
                    return false;
                default:
            }
            if (!g10) {
                return false;
            }
        }
        if (!this.f15428k.d(obj).equals(this.f15428k.d(obj2))) {
            return false;
        }
        if (this.f15423f) {
            return this.f15429l.b(obj).equals(this.f15429l.b(obj2));
        }
        return true;
    }

    /* JADX WARN: Can't fix incorrect switch cases order, some code will duplicate */
    /* JADX WARN: Multi-variable type inference failed */
    /* JADX WARN: Removed duplicated region for block: B:11:0x0032  */
    /* JADX WARN: Removed duplicated region for block: B:204:0x0545  */
    @Override // com.google.android.gms.internal.play_billing.g3
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final void g(java.lang.Object r21, com.google.android.gms.internal.play_billing.o4 r22) {
        /*
            Method dump skipped, instructions count: 1524
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.play_billing.y2.g(java.lang.Object, com.google.android.gms.internal.play_billing.o4):void");
    }

    @Override // com.google.android.gms.internal.play_billing.g3
    public final boolean h(Object obj) {
        int i10;
        int i11;
        int i12 = 0;
        int i13 = 0;
        int i14 = 1048575;
        while (i12 < this.f15425h) {
            int[] iArr = this.f15424g;
            int[] iArr2 = this.f15418a;
            int i15 = iArr[i12];
            int i16 = iArr2[i15];
            int H = H(i15);
            int i17 = this.f15418a[i15 + 2];
            int i18 = i17 & 1048575;
            int i19 = 1 << (i17 >>> 20);
            if (i18 != i14) {
                if (i18 != 1048575) {
                    i13 = f15417p.getInt(obj, i18);
                }
                i11 = i13;
                i10 = i18;
            } else {
                i10 = i14;
                i11 = i13;
            }
            Object obj2 = obj;
            if ((268435456 & H) != 0 && !r(obj2, i15, i10, i11, i19)) {
                return false;
            }
            int G = G(H);
            if (G != 9 && G != 17) {
                if (G != 27) {
                    if (G != 60 && G != 68) {
                        if (G != 49) {
                            if (G == 50 && !((p2) g4.k(obj2, H & 1048575)).isEmpty()) {
                                android.support.v4.media.session.b.a(L(i15));
                                throw null;
                            }
                        }
                    } else if (u(obj2, i16, i15) && !s(obj2, H, K(i15))) {
                        return false;
                    }
                }
                List list = (List) g4.k(obj2, H & 1048575);
                if (list.isEmpty()) {
                    continue;
                } else {
                    g3 K = K(i15);
                    for (int i20 = 0; i20 < list.size(); i20++) {
                        if (!K.h(list.get(i20))) {
                            return false;
                        }
                    }
                    continue;
                }
            } else if (r(obj2, i15, i10, i11, i19) && !s(obj2, H, K(i15))) {
                return false;
            }
            i12++;
            obj = obj2;
            i14 = i10;
            i13 = i11;
        }
        Object obj3 = obj;
        if (this.f15423f && !this.f15429l.b(obj3).h()) {
            return false;
        }
        return true;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: Code restructure failed: missing block: B:547:0x0ce6, code lost:
        if (r9 == r0) goto L58;
     */
    /* JADX WARN: Code restructure failed: missing block: B:548:0x0ce8, code lost:
        r27.putInt(r2, r9, r14);
     */
    /* JADX WARN: Code restructure failed: missing block: B:549:0x0cee, code lost:
        r0 = r11.f15425h;
     */
    /* JADX WARN: Code restructure failed: missing block: B:551:0x0cf2, code lost:
        if (r0 >= r11.f15426i) goto L72;
     */
    /* JADX WARN: Code restructure failed: missing block: B:552:0x0cf4, code lost:
        r1 = r11.f15424g;
        r3 = r11.f15418a;
        r1 = r1[r0];
        r3 = r3[r1];
        r3 = com.google.android.gms.internal.play_billing.g4.k(r2, r11.H(r1) & 1048575);
     */
    /* JADX WARN: Code restructure failed: missing block: B:553:0x0d0a, code lost:
        if (r3 != null) goto L63;
     */
    /* JADX WARN: Code restructure failed: missing block: B:556:0x0d11, code lost:
        if (r11.J(r1) != null) goto L65;
     */
    /* JADX WARN: Code restructure failed: missing block: B:557:0x0d13, code lost:
        r0 = r0 + 1;
     */
    /* JADX WARN: Code restructure failed: missing block: B:558:0x0d16, code lost:
        r3 = (com.google.android.gms.internal.play_billing.p2) r3;
        android.support.v4.media.session.b.a(r11.L(r1));
     */
    /* JADX WARN: Code restructure failed: missing block: B:559:0x0d1f, code lost:
        throw null;
     */
    /* JADX WARN: Code restructure failed: missing block: B:560:0x0d20, code lost:
        if (r10 != 0) goto L78;
     */
    /* JADX WARN: Code restructure failed: missing block: B:561:0x0d22, code lost:
        if (r5 != r4) goto L75;
     */
    /* JADX WARN: Code restructure failed: missing block: B:564:0x0d29, code lost:
        throw com.google.android.gms.internal.play_billing.a2.e();
     */
    /* JADX WARN: Code restructure failed: missing block: B:565:0x0d2a, code lost:
        if (r5 > r4) goto L80;
     */
    /* JADX WARN: Code restructure failed: missing block: B:566:0x0d2c, code lost:
        if (r15 != r10) goto L80;
     */
    /* JADX WARN: Code restructure failed: missing block: B:567:0x0d2e, code lost:
        return r5;
     */
    /* JADX WARN: Code restructure failed: missing block: B:569:0x0d33, code lost:
        throw com.google.android.gms.internal.play_billing.a2.e();
     */
    /* JADX WARN: Removed duplicated region for block: B:23:0x0066  */
    /* JADX WARN: Removed duplicated region for block: B:274:0x0736  */
    /* JADX WARN: Removed duplicated region for block: B:309:0x07e0  */
    /* JADX WARN: Removed duplicated region for block: B:330:0x0832  */
    /* JADX WARN: Removed duplicated region for block: B:536:0x0c86 A[ADDED_TO_REGION] */
    /* JADX WARN: Removed duplicated region for block: B:540:0x0c9d  */
    /* JADX WARN: Removed duplicated region for block: B:622:0x0052 A[SYNTHETIC] */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:272:0x0733 -> B:273:0x0734). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:307:0x07dd -> B:308:0x07de). Please submit an issue!!! */
    /* JADX WARN: Unsupported multi-entry loop pattern (BACK_EDGE: B:328:0x082f -> B:329:0x0830). Please submit an issue!!! */
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    public final int x(java.lang.Object r33, byte[] r34, int r35, int r36, int r37, com.google.android.gms.internal.play_billing.d0 r38) {
        /*
            Method dump skipped, instructions count: 3524
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.google.android.gms.internal.play_billing.y2.x(java.lang.Object, byte[], int, int, int, com.google.android.gms.internal.play_billing.d0):int");
    }
}
