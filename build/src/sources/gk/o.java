package gk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o {

    /* renamed from: a  reason: collision with root package name */
    private static final m f25386a = new n();

    /* renamed from: b  reason: collision with root package name */
    private static final m f25387b = c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m a() {
        m mVar = f25387b;
        if (mVar != null) {
            return mVar;
        }
        throw new IllegalStateException("Protobuf runtime is not correctly loaded.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m b() {
        return f25386a;
    }

    private static m c() {
        try {
            return (m) Class.forName("com.google.protobuf.ExtensionSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
