package li;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class m {
    private static String a(int i10, int i11, String str) {
        if (i10 < 0) {
            return q.b("%s (%s) must not be negative", str, Integer.valueOf(i10));
        }
        if (i11 >= 0) {
            return q.b("%s (%s) must be less than size (%s)", str, Integer.valueOf(i10), Integer.valueOf(i11));
        }
        StringBuilder sb2 = new StringBuilder(26);
        sb2.append("negative size: ");
        sb2.append(i11);
        throw new IllegalArgumentException(sb2.toString());
    }

    private static String b(int i10, int i11, String str) {
        if (i10 < 0) {
            return q.b("%s (%s) must not be negative", str, Integer.valueOf(i10));
        }
        if (i11 >= 0) {
            return q.b("%s (%s) must not be greater than size (%s)", str, Integer.valueOf(i10), Integer.valueOf(i11));
        }
        StringBuilder sb2 = new StringBuilder(26);
        sb2.append("negative size: ");
        sb2.append(i11);
        throw new IllegalArgumentException(sb2.toString());
    }

    private static String c(int i10, int i11, int i12) {
        if (i10 >= 0 && i10 <= i12) {
            if (i11 >= 0 && i11 <= i12) {
                return q.b("end index (%s) must not be less than start index (%s)", Integer.valueOf(i11), Integer.valueOf(i10));
            }
            return b(i11, i12, "end index");
        }
        return b(i10, i12, "start index");
    }

    public static void d(boolean z10) {
        if (z10) {
            return;
        }
        throw new IllegalArgumentException();
    }

    public static void e(boolean z10, Object obj) {
        if (z10) {
            return;
        }
        throw new IllegalArgumentException(String.valueOf(obj));
    }

    public static void f(boolean z10, String str, int i10, int i11) {
        if (z10) {
            return;
        }
        throw new IllegalArgumentException(q.b(str, Integer.valueOf(i10), Integer.valueOf(i11)));
    }

    public static void g(boolean z10, String str, long j10) {
        if (z10) {
            return;
        }
        throw new IllegalArgumentException(q.b(str, Long.valueOf(j10)));
    }

    public static int h(int i10, int i11) {
        return i(i10, i11, "index");
    }

    public static int i(int i10, int i11, String str) {
        if (i10 >= 0 && i10 < i11) {
            return i10;
        }
        throw new IndexOutOfBoundsException(a(i10, i11, str));
    }

    public static Object j(Object obj) {
        obj.getClass();
        return obj;
    }

    public static Object k(Object obj, Object obj2) {
        if (obj != null) {
            return obj;
        }
        throw new NullPointerException(String.valueOf(obj2));
    }

    public static int l(int i10, int i11) {
        return m(i10, i11, "index");
    }

    public static int m(int i10, int i11, String str) {
        if (i10 >= 0 && i10 <= i11) {
            return i10;
        }
        throw new IndexOutOfBoundsException(b(i10, i11, str));
    }

    public static void n(int i10, int i11, int i12) {
        if (i10 >= 0 && i11 >= i10 && i11 <= i12) {
            return;
        }
        throw new IndexOutOfBoundsException(c(i10, i11, i12));
    }

    public static void o(boolean z10) {
        if (z10) {
            return;
        }
        throw new IllegalStateException();
    }

    public static void p(boolean z10, Object obj) {
        if (z10) {
            return;
        }
        throw new IllegalStateException(String.valueOf(obj));
    }

    public static void q(boolean z10, String str, Object obj) {
        if (z10) {
            return;
        }
        throw new IllegalStateException(q.b(str, obj));
    }
}
