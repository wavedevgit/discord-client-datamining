package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class l0 {

    /* renamed from: a  reason: collision with root package name */
    private static final j0 f3831a = c();

    /* renamed from: b  reason: collision with root package name */
    private static final j0 f3832b = new k0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static j0 a() {
        return f3831a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static j0 b() {
        return f3832b;
    }

    private static j0 c() {
        try {
            return (j0) Class.forName("androidx.datastore.preferences.protobuf.MapFieldSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
