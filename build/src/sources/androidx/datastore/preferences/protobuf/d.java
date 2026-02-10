package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final Class f3733a = a("libcore.io.Memory");

    /* renamed from: b  reason: collision with root package name */
    private static final boolean f3734b;

    static {
        boolean z10;
        if (a("org.robolectric.Robolectric") != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        f3734b = z10;
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
        return f3733a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if (f3733a != null && !f3734b) {
            return true;
        }
        return false;
    }
}
