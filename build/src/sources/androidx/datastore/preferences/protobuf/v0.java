package androidx.datastore.preferences.protobuf;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
abstract class v0 {

    /* renamed from: a  reason: collision with root package name */
    private static final t0 f3953a = c();

    /* renamed from: b  reason: collision with root package name */
    private static final t0 f3954b = new u0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t0 a() {
        return f3953a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static t0 b() {
        return f3954b;
    }

    private static t0 c() {
        try {
            return (t0) Class.forName("androidx.datastore.preferences.protobuf.NewInstanceSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
