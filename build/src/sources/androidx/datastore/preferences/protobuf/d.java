package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class d {

    /* renamed from: a  reason: collision with root package name */
    private static final Class f4036a = a("libcore.io.Memory");

    /* renamed from: b  reason: collision with root package name */
    private static final boolean f4037b;

    static {
        boolean z10;
        if (a("org.robolectric.Robolectric") != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        f4037b = z10;
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
        return f4036a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean c() {
        if (f4036a != null && !f4037b) {
            return true;
        }
        return false;
    }
}
