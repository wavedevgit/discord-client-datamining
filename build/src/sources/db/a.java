package db;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class a {
    public static void a(boolean z10) {
        if (z10) {
            return;
        }
        throw new AssertionError();
    }

    public static void b(boolean z10, String str) {
        if (z10) {
            return;
        }
        throw new AssertionError(str);
    }

    public static Object c(Object obj) {
        if (obj != null) {
            return obj;
        }
        throw new AssertionError();
    }

    public static Object d(Object obj, String str) {
        if (obj != null) {
            return obj;
        }
        throw new AssertionError(str);
    }

    public static Object e(Object obj) {
        return obj;
    }
}
