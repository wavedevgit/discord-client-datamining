package ui;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c0 {
    public static void a(boolean z10, String str) {
        if (z10) {
            return;
        }
        throw new IllegalArgumentException(str);
    }

    public static Object b(Object obj) {
        obj.getClass();
        return obj;
    }

    public static Object c(Object obj, String str) {
        if (obj != null) {
            return obj;
        }
        throw new NullPointerException(str);
    }

    public static void d(boolean z10, String str) {
        if (z10) {
            return;
        }
        throw new IllegalStateException(str);
    }
}
