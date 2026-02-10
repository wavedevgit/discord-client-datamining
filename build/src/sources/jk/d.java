package jk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f30994a;

    /* renamed from: b  reason: collision with root package name */
    private static final Class f30995b = a("libcore.io.Memory");

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f30996c;

    static {
        boolean z10;
        if (!f30994a && a("org.robolectric.Robolectric") != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        f30996c = z10;
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
        return f30995b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if (!f30994a) {
            if (f30995b == null || f30996c) {
                return false;
            }
            return true;
        }
        return true;
    }
}
