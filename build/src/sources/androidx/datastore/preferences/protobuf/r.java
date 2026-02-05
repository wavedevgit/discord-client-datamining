package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class r {

    /* renamed from: a  reason: collision with root package name */
    private static final p f3877a = new q();

    /* renamed from: b  reason: collision with root package name */
    private static final p f3878b = c();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static p a() {
        p pVar = f3878b;
        if (pVar != null) {
            return pVar;
        }
        throw new IllegalStateException("Protobuf runtime is not correctly loaded.");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static p b() {
        return f3877a;
    }

    private static p c() {
        try {
            return (p) Class.forName("androidx.datastore.preferences.protobuf.ExtensionSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
