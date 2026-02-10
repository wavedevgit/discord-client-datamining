package hk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class f0 {

    /* renamed from: a  reason: collision with root package name */
    private static final d0 f26175a = c();

    /* renamed from: b  reason: collision with root package name */
    private static final d0 f26176b = new e0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static d0 a() {
        return f26175a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static d0 b() {
        return f26176b;
    }

    private static d0 c() {
        try {
            return (d0) Class.forName("com.google.protobuf.MapFieldSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
