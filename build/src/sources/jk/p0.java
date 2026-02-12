package jk;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class p0 {

    /* renamed from: a  reason: collision with root package name */
    private static final n0 f31138a = c();

    /* renamed from: b  reason: collision with root package name */
    private static final n0 f31139b = new o0();

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n0 a() {
        return f31138a;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static n0 b() {
        return f31139b;
    }

    private static n0 c() {
        try {
            return (n0) Class.forName("com.google.protobuf.NewInstanceSchemaFull").getDeclaredConstructor(null).newInstance(null);
        } catch (Exception unused) {
            return null;
        }
    }
}
