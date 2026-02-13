package jk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f31563a;

    /* renamed from: b  reason: collision with root package name */
    private static final Class f31564b = a("libcore.io.Memory");

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f31565c;

    static {
        boolean z10;
        if (!f31563a && a("org.robolectric.Robolectric") != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        f31565c = z10;
    }

    private static Class a(String str) {
        try {
            return Class.forName(str);
        } catch (Throwable unused) {
            return null;
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static Class b() {
        return f31564b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if (!f31563a) {
            if (f31564b == null || f31565c) {
                return false;
            }
            return true;
        }
        return true;
    }
}
