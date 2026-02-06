package mg;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class g {

    /* renamed from: a  reason: collision with root package name */
    private final Object f37106a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f37107b;

    /* renamed from: c  reason: collision with root package name */
    private final Object f37108c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(Object obj, Object obj2, Object obj3) {
        this.f37106a = obj;
        this.f37107b = obj2;
        this.f37108c = obj3;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final IllegalArgumentException a() {
        Object obj = this.f37108c;
        Object obj2 = this.f37107b;
        Object obj3 = this.f37106a;
        String valueOf = String.valueOf(obj3);
        String valueOf2 = String.valueOf(obj2);
        String valueOf3 = String.valueOf(obj3);
        String valueOf4 = String.valueOf(obj);
        return new IllegalArgumentException("Multiple entries with same key: " + valueOf + "=" + valueOf2 + " and " + valueOf3 + "=" + valueOf4);
    }
}
