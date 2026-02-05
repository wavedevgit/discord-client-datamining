package androidx.datastore.preferences.protobuf;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class n {

    /* renamed from: a  reason: collision with root package name */
    static final Class f3807a = c();

    public static o a() {
        if (f3807a != null) {
            try {
                return b("getEmptyRegistry");
            } catch (Exception unused) {
            }
        }
        return o.f3817e;
    }

    private static final o b(String str) {
        return (o) f3807a.getDeclaredMethod(str, null).invoke(null, null);
    }

    static Class c() {
        try {
            return Class.forName("androidx.datastore.preferences.protobuf.ExtensionRegistry");
        } catch (ClassNotFoundException unused) {
            return null;
        }
    }
}
