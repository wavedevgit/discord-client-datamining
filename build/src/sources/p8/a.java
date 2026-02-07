package p8;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {

    /* renamed from: a  reason: collision with root package name */
    private static c f43805a = b.a();

    public static void A(Class cls, String str, Object obj, Object obj2) {
        if (f43805a.isLoggable(2)) {
            f43805a.v(r(cls), q(str, obj, obj2));
        }
    }

    public static void B(Class cls, String str, Object obj, Object obj2, Object obj3) {
        if (w(2)) {
            y(cls, q(str, obj, obj2, obj3));
        }
    }

    public static void C(Class cls, String str, Object obj, Object obj2, Object obj3, Object obj4) {
        if (f43805a.isLoggable(2)) {
            f43805a.v(r(cls), q(str, obj, obj2, obj3, obj4));
        }
    }

    public static void D(Class cls, String str, Object... objArr) {
        if (f43805a.isLoggable(2)) {
            f43805a.v(r(cls), q(str, objArr));
        }
    }

    public static void E(String str, String str2, Object... objArr) {
        if (f43805a.isLoggable(2)) {
            f43805a.v(str, q(str2, objArr));
        }
    }

    public static void F(Class cls, String str) {
        if (f43805a.isLoggable(5)) {
            f43805a.w(r(cls), str);
        }
    }

    public static void G(Class cls, String str, Throwable th2) {
        if (f43805a.isLoggable(5)) {
            f43805a.w(r(cls), str, th2);
        }
    }

    public static void H(Class cls, String str, Object... objArr) {
        if (f43805a.isLoggable(5)) {
            f43805a.w(r(cls), q(str, objArr));
        }
    }

    public static void I(Class cls, Throwable th2, String str, Object... objArr) {
        if (w(5)) {
            G(cls, q(str, objArr), th2);
        }
    }

    public static void J(String str, String str2) {
        if (f43805a.isLoggable(5)) {
            f43805a.w(str, str2);
        }
    }

    public static void K(String str, String str2, Throwable th2) {
        if (f43805a.isLoggable(5)) {
            f43805a.w(str, str2, th2);
        }
    }

    public static void L(String str, String str2, Object... objArr) {
        if (f43805a.isLoggable(5)) {
            f43805a.w(str, q(str2, objArr));
        }
    }

    public static void M(String str, Throwable th2, String str2, Object... objArr) {
        if (f43805a.isLoggable(5)) {
            f43805a.w(str, q(str2, objArr), th2);
        }
    }

    public static void N(Class cls, String str, Throwable th2) {
        if (f43805a.isLoggable(6)) {
            f43805a.wtf(r(cls), str, th2);
        }
    }

    public static void O(String str, String str2, Object... objArr) {
        if (f43805a.isLoggable(6)) {
            f43805a.wtf(str, q(str2, objArr));
        }
    }

    public static void a(Class cls, String str, Object obj) {
        if (f43805a.isLoggable(3)) {
            f43805a.d(r(cls), q(str, obj));
        }
    }

    public static void b(String str, String str2) {
        if (f43805a.isLoggable(3)) {
            f43805a.d(str, str2);
        }
    }

    public static void c(String str, String str2, Object obj) {
        if (f43805a.isLoggable(3)) {
            f43805a.d(str, q(str2, obj));
        }
    }

    public static void d(String str, String str2, Object obj, Object obj2) {
        if (f43805a.isLoggable(3)) {
            f43805a.d(str, q(str2, obj, obj2));
        }
    }

    public static void e(String str, String str2, Object obj, Object obj2, Object obj3) {
        if (f43805a.isLoggable(3)) {
            f43805a.d(str, q(str2, obj, obj2, obj3));
        }
    }

    public static void f(String str, String str2, Object obj, Object obj2, Object obj3, Object obj4) {
        if (f43805a.isLoggable(3)) {
            f43805a.d(str, q(str2, obj, obj2, obj3, obj4));
        }
    }

    public static void g(String str, String str2, Throwable th2) {
        if (f43805a.isLoggable(3)) {
            f43805a.d(str, str2, th2);
        }
    }

    public static void h(String str, String str2, Object... objArr) {
        if (f43805a.isLoggable(3)) {
            b(str, q(str2, objArr));
        }
    }

    public static void i(Class cls, String str) {
        if (f43805a.isLoggable(6)) {
            f43805a.e(r(cls), str);
        }
    }

    public static void j(Class cls, String str, Throwable th2) {
        if (f43805a.isLoggable(6)) {
            f43805a.e(r(cls), str, th2);
        }
    }

    public static void k(Class cls, String str, Object... objArr) {
        if (f43805a.isLoggable(6)) {
            f43805a.e(r(cls), q(str, objArr));
        }
    }

    public static void l(Class cls, Throwable th2, String str, Object... objArr) {
        if (f43805a.isLoggable(6)) {
            f43805a.e(r(cls), q(str, objArr), th2);
        }
    }

    public static void m(String str, String str2) {
        if (f43805a.isLoggable(6)) {
            f43805a.e(str, str2);
        }
    }

    public static void n(String str, String str2, Throwable th2) {
        if (f43805a.isLoggable(6)) {
            f43805a.e(str, str2, th2);
        }
    }

    public static void o(String str, String str2, Object... objArr) {
        if (f43805a.isLoggable(6)) {
            f43805a.e(str, q(str2, objArr));
        }
    }

    public static void p(String str, Throwable th2, String str2, Object... objArr) {
        if (f43805a.isLoggable(6)) {
            f43805a.e(str, q(str2, objArr), th2);
        }
    }

    private static String q(String str, Object... objArr) {
        return String.format(null, str, objArr);
    }

    private static String r(Class cls) {
        return cls.getSimpleName();
    }

    public static void s(String str, String str2) {
        if (f43805a.isLoggable(4)) {
            f43805a.i(str, str2);
        }
    }

    public static void t(String str, String str2, Object obj, Object obj2) {
        if (f43805a.isLoggable(4)) {
            f43805a.i(str, q(str2, obj, obj2));
        }
    }

    public static void u(String str, String str2, Object obj, Object obj2, Object obj3) {
        if (f43805a.isLoggable(4)) {
            f43805a.i(str, q(str2, obj, obj2, obj3));
        }
    }

    public static void v(String str, String str2, Object... objArr) {
        if (f43805a.isLoggable(4)) {
            f43805a.i(str, q(str2, objArr));
        }
    }

    public static boolean w(int i10) {
        return f43805a.isLoggable(i10);
    }

    public static void x(c cVar) {
        if (cVar != null) {
            f43805a = cVar;
            return;
        }
        throw new IllegalArgumentException();
    }

    public static void y(Class cls, String str) {
        if (f43805a.isLoggable(2)) {
            f43805a.v(r(cls), str);
        }
    }

    public static void z(Class cls, String str, Object obj) {
        if (f43805a.isLoggable(2)) {
            f43805a.v(r(cls), q(str, obj));
        }
    }
}
