package hk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static boolean f26156a;

    /* renamed from: b  reason: collision with root package name */
    private static final Class f26157b = a("libcore.io.Memory");

    /* renamed from: c  reason: collision with root package name */
    private static final boolean f26158c;

    static {
        boolean z10;
        if (!f26156a && a("org.robolectric.Robolectric") != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        f26158c = z10;
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
        return f26157b;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if (!f26156a) {
            if (f26157b == null || f26158c) {
                return false;
            }
            return true;
        }
        return true;
    }
}
