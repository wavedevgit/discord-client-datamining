package jk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o {

    /* renamed from: a  reason: collision with root package name */
    private static final m f31704a = new n();

    /* renamed from: b  reason: collision with root package name */
    private static final m f31705b = c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m a() {
        m mVar = f31705b;
        if (mVar != null) {
            return mVar;
        }
        throw new IllegalStateException("Protobuf runtime is not correctly loaded.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m b() {
        return f31704a;
    }

    private static m c() {
        try {
            return (m) Class.forName("com.google.protobuf.ExtensionSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
