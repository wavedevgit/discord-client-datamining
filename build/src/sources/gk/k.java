package gk;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class k {

    /* renamed from: a  reason: collision with root package name */
    static final Class f25355a = c();

    public static l a() {
        l b10 = b("getEmptyRegistry");
        if (b10 != null) {
            return b10;
        }
        return l.f25359d;
    }

    private static final l b(String str) {
        Class cls = f25355a;
        if (cls == null) {
            return null;
        }
        try {
            return (l) cls.getDeclaredMethod(str, null).invoke(null, null);
        } catch (Exception unused) {
            return null;
        }
    }

    static Class c() {
        try {
            return Class.forName("com.google.protobuf.ExtensionRegistry");
        } catch (ClassNotFoundException unused) {
            return null;
        }
    }
}
