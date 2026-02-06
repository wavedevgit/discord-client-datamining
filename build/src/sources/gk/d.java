package gk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f25197a;

    /* renamed from: b  reason: collision with root package name */
    private static final Class f25198b = a("libcore.io.Memory");

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f25199c;

    static {
        boolean z10;
        if (!f25197a && a("org.robolectric.Robolectric") != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        f25199c = z10;
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
        return f25198b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if (!f25197a) {
            if (f25198b == null || f25199c) {
                return false;
            }
            return true;
        }
        return true;
    }
}
