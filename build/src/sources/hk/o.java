package hk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class o {

    /* renamed from: a  reason: collision with root package name */
    private static final m f26297a = new n();

    /* renamed from: b  reason: collision with root package name */
    private static final m f26298b = c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m a() {
        m mVar = f26298b;
        if (mVar != null) {
            return mVar;
        }
        throw new IllegalStateException("Protobuf runtime is not correctly loaded.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static m b() {
        return f26297a;
    }

    private static m c() {
        try {
            return (m) Class.forName("com.google.protobuf.ExtensionSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
