package gk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class p0 {

    /* renamed from: a  reason: collision with root package name */
    private static final n0 f25388a = c();

    /* renamed from: b  reason: collision with root package name */
    private static final n0 f25389b = new o0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n0 a() {
        return f25388a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n0 b() {
        return f25389b;
    }

    private static n0 c() {
        try {
            return (n0) Class.forName("com.google.protobuf.NewInstanceSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
