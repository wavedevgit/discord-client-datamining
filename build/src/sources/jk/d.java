package jk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f30995a;

    /* renamed from: b  reason: collision with root package name */
    private static final Class f30996b = a("libcore.io.Memory");

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f30997c;

    static {
        boolean z10;
        if (!f30995a && a("org.robolectric.Robolectric") != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        f30997c = z10;
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
        return f30996b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if (!f30995a) {
            if (f30996b == null || f30997c) {
                return false;
            }
            return true;
        }
        return true;
    }
}
