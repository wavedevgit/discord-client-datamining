package gk;

import gk.u;
import java.util.Iterator;
import java.util.List;
import java.util.RandomAccess;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class z0 {

    /* renamed from: a  reason: collision with root package name */
    private static final Class f25432a = b();

    /* renamed from: b  reason: collision with root package name */
    private static final d1 f25433b = c(false);

    /* renamed from: c  reason: collision with root package name */
    private static final d1 f25434c = c(true);

    /* renamed from: d  reason: collision with root package name */
    private static final d1 f25435d = new f1();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Object a(Object obj, int i10, List list, u.a aVar, Object obj2, d1 d1Var) {
        if (aVar == null) {
            return obj2;
        }
        if (list instanceof RandomAccess) {
            int size = list.size();
            int i11 = 0;
            for (int i12 = 0; i12 < size; i12++) {
                Integer num = (Integer) list.get(i12);
                int intValue = num.intValue();
                if (aVar.a(intValue)) {
                    if (i12 != i11) {
                        list.set(i11, num);
                    }
                    i11++;
                } else {
                    obj2 = l(obj, i10, intValue, obj2, d1Var);
                }
            }
            if (i11 != size) {
                list.subList(i11, size).clear();
            }
            return obj2;
        }
        Iterator it = list.iterator();
        while (it.hasNext()) {
            int intValue2 = ((Integer) it.next()).intValue();
            if (!aVar.a(intValue2)) {
                obj2 = l(obj, i10, intValue2, obj2, d1Var);
                it.remove();
            }
        }
        return obj2;
    }

    private static Class b() {
        try {
            return Class.forName("com.google.protobuf.GeneratedMessageV3");
        } catch (Throwable unused) {
            return null;
        }
    }

    private static d1 c(boolean z10) {
        try {
            Class d10 = d();
            if (d10 == null) {
                return null;
            }
            return (d1) d10.getConstructor(Boolean.TYPE).newInstance(Boolean.valueOf(z10));
        } catch (Throwable unused) {
            return null;
        }
    }

    private static Class d() {
        try {
            return Class.forName("com.google.protobuf.UnknownFieldSetSchema");
        } catch (Throwable unused) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void e(m mVar, Object obj, Object obj2) {
        p b10 = mVar.b(obj2);
        if (!b10.a()) {
            mVar.c(obj).d(b10);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void f(d0 d0Var, Object obj, Object obj2, long j10) {
        h1.O(obj, j10, d0Var.a(h1.A(obj, j10), h1.A(obj2, j10)));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static void g(d1 d1Var, Object obj, Object obj2) {
        d1Var.n(obj, d1Var.i(d1Var.g(obj), d1Var.g(obj2)));
    }

    public static d1 h() {
        return f25433b;
    }

    public static d1 i() {
        return f25434c;
    }

    public static void j(Class cls) {
        Class cls2;
        if (!s.class.isAssignableFrom(cls) && (cls2 = f25432a) != null && !cls2.isAssignableFrom(cls)) {
            throw new IllegalArgumentException("Message classes must extend GeneratedMessageV3 or GeneratedMessageLite");
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean k(Object obj, Object obj2) {
        if (obj != obj2) {
            if (obj == null || !obj.equals(obj2)) {
                return false;
            }
            return true;
        }
        return true;
    }

    static Object l(Object obj, int i10, int i11, Object obj2, d1 d1Var) {
        if (obj2 == null) {
            obj2 = d1Var.f(obj);
        }
        d1Var.e(obj2, i10, i11);
        return obj2;
    }

    public static d1 m() {
        return f25435d;
    }
}
