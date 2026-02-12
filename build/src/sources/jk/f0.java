package jk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class f0 {

    /* renamed from: a  reason: collision with root package name */
    private static final d0 f31014a = c();

    /* renamed from: b  reason: collision with root package name */
    private static final d0 f31015b = new e0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static d0 a() {
        return f31014a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static d0 b() {
        return f31015b;
    }

    private static d0 c() {
        try {
            return (d0) Class.forName("com.google.protobuf.MapFieldSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
