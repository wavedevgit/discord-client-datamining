package gk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class p0 {

    /* renamed from: a  reason: collision with root package name */
    private static final n0 f25340a = c();

    /* renamed from: b  reason: collision with root package name */
    private static final n0 f25341b = new o0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n0 a() {
        return f25340a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n0 b() {
        return f25341b;
    }

    private static n0 c() {
        try {
            return (n0) Class.forName("com.google.protobuf.NewInstanceSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
