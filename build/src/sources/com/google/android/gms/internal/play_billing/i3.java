package com.google.android.gms.internal.play_billing;

import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
abstract class i3 {

    /* renamed from: a  reason: collision with root package name */
    private static final Class f15259a;

    /* renamed from: b  reason: collision with root package name */
    private static final w3 f15260b;

    /* renamed from: c  reason: collision with root package name */
    private static final w3 f15261c;

    /* renamed from: d  reason: collision with root package name */
    public static final /* synthetic */ int f15262d = 0;

    static {
        Class<?> cls;
        Class<?> cls2;
        w3 w3Var = null;
        try {
            cls = Class.forName("com.google.protobuf.GeneratedMessage");
        } catch (Throwable unused) {
            cls = null;
        }
        f15259a = cls;
        try {
            cls2 = Class.forName("com.google.protobuf.UnknownFieldSetSchema");
        } catch (Throwable unused2) {
            cls2 = null;
        }
        if (cls2 != null) {
            try {
                w3Var = (w3) cls2.getConstructor(null).newInstance(null);
            } catch (Throwable unused3) {
            }
        }
        f15260b = w3Var;
        f15261c = new y3();
    }

    public static void A(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.H(i10, list, z10);
        }
    }

    public static void B(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.A(i10, list, z10);
        }
    }

    public static void C(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.x(i10, list, z10);
        }
    }

    public static void D(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.n(i10, list, z10);
        }
    }

    public static void E(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.p(i10, list, z10);
        }
    }

    public static void F(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.i(i10, list, z10);
        }
    }

    public static void G(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.D(i10, list, z10);
        }
    }

    public static void a(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.u(i10, list, z10);
        }
    }

    public static void b(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.h(i10, list, z10);
        }
    }

    public static void c(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.B(i10, list, z10);
        }
    }

    public static void d(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.G(i10, list, z10);
        }
    }

    public static void e(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.w(i10, list, z10);
        }
    }

    public static void f(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.m(i10, list, z10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean g(Object obj, Object obj2) {
        if (obj == obj2) {
            return true;
        }
        if (obj != null && obj.equals(obj2)) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int h(List list) {
        int size = list.size();
        int i10 = 0;
        if (size == 0) {
            return 0;
        }
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            int i11 = 0;
            while (i10 < size) {
                i11 += z0.x(r1Var.c(i10));
                i10++;
            }
            return i11;
        }
        int i12 = 0;
        while (i10 < size) {
            i12 += z0.x(((Integer) list.get(i10)).intValue());
            i10++;
        }
        return i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int i(int i10, List list, boolean z10) {
        int size = list.size();
        if (size == 0) {
            return 0;
        }
        return size * (z0.w(i10 << 3) + 4);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int j(List list) {
        return list.size() * 4;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int k(int i10, List list, boolean z10) {
        int size = list.size();
        if (size == 0) {
            return 0;
        }
        return size * (z0.w(i10 << 3) + 8);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int l(List list) {
        return list.size() * 8;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int m(List list) {
        int size = list.size();
        int i10 = 0;
        if (size == 0) {
            return 0;
        }
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            int i11 = 0;
            while (i10 < size) {
                i11 += z0.x(r1Var.c(i10));
                i10++;
            }
            return i11;
        }
        int i12 = 0;
        while (i10 < size) {
            i12 += z0.x(((Integer) list.get(i10)).intValue());
            i10++;
        }
        return i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int n(List list) {
        int size = list.size();
        if (size == 0) {
            return 0;
        }
        if (list instanceof l2) {
            l2 l2Var = (l2) list;
            if (size <= 0) {
                return 0;
            }
            throw null;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < size; i11++) {
            i10 += z0.x(((Long) list.get(i11)).longValue());
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int o(int i10, Object obj, g3 g3Var) {
        return z0.w(i10 << 3) + z0.u((v2) obj, g3Var);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int p(List list) {
        int size = list.size();
        int i10 = 0;
        if (size == 0) {
            return 0;
        }
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            int i11 = 0;
            while (i10 < size) {
                int c10 = r1Var.c(i10);
                i11 += z0.w((c10 >> 31) ^ (c10 + c10));
                i10++;
            }
            return i11;
        }
        int i12 = 0;
        while (i10 < size) {
            int intValue = ((Integer) list.get(i10)).intValue();
            i12 += z0.w((intValue >> 31) ^ (intValue + intValue));
            i10++;
        }
        return i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int q(List list) {
        int size = list.size();
        if (size == 0) {
            return 0;
        }
        if (list instanceof l2) {
            l2 l2Var = (l2) list;
            if (size <= 0) {
                return 0;
            }
            throw null;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < size; i11++) {
            long longValue = ((Long) list.get(i11)).longValue();
            i10 += z0.x((longValue >> 63) ^ (longValue + longValue));
        }
        return i10;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int r(List list) {
        int size = list.size();
        int i10 = 0;
        if (size == 0) {
            return 0;
        }
        if (list instanceof r1) {
            r1 r1Var = (r1) list;
            int i11 = 0;
            while (i10 < size) {
                i11 += z0.w(r1Var.c(i10));
                i10++;
            }
            return i11;
        }
        int i12 = 0;
        while (i10 < size) {
            i12 += z0.w(((Integer) list.get(i10)).intValue());
            i10++;
        }
        return i12;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static int s(List list) {
        int size = list.size();
        if (size == 0) {
            return 0;
        }
        if (list instanceof l2) {
            l2 l2Var = (l2) list;
            if (size <= 0) {
                return 0;
            }
            throw null;
        }
        int i10 = 0;
        for (int i11 = 0; i11 < size; i11++) {
            i10 += z0.x(((Long) list.get(i11)).longValue());
        }
        return i10;
    }

    public static w3 t() {
        return f15260b;
    }

    public static w3 u() {
        return f15261c;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object v(Object obj, int i10, int i11, Object obj2, w3 w3Var) {
        if (obj2 == null) {
            obj2 = w3Var.c(obj);
        }
        w3Var.f(obj2, i10, i11);
        return obj2;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void w(f1 f1Var, Object obj, Object obj2) {
        j1 b10 = f1Var.b(obj2);
        if (!b10.f15266a.isEmpty()) {
            f1Var.c(obj).f(b10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void x(w3 w3Var, Object obj, Object obj2) {
        w3Var.h(obj, w3Var.e(w3Var.d(obj), w3Var.d(obj2)));
    }

    public static void y(Class cls) {
        Class cls2;
        if (!q1.class.isAssignableFrom(cls) && (cls2 = f15259a) != null && !cls2.isAssignableFrom(cls)) {
            throw new IllegalArgumentException("Message classes must extend GeneratedMessage or GeneratedMessageLite");
        }
    }

    public static void z(int i10, List list, o4 o4Var, boolean z10) {
        if (list != null && !list.isEmpty()) {
            o4Var.g(i10, list, z10);
        }
    }
}
