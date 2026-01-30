package lg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Object f37307a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f37308b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f37309c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Object obj, Object obj2, Object obj3) {
        this.f37307a = obj;
        this.f37308b = obj2;
        this.f37309c = obj3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final IllegalArgumentException a() {
        Object obj = this.f37309c;
        Object obj2 = this.f37308b;
        Object obj3 = this.f37307a;
        String valueOf = String.valueOf(obj3);
        String valueOf2 = String.valueOf(obj2);
        String valueOf3 = String.valueOf(obj3);
        String valueOf4 = String.valueOf(obj);
        return new IllegalArgumentException("Multiple entries with same key: " + valueOf + "=" + valueOf2 + " and " + valueOf3 + "=" + valueOf4);
    }
}
