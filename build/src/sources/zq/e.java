package zq;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements d, yq.a {

    /* renamed from: b  reason: collision with root package name */
    private static final e f56178b = new e(null);

    /* renamed from: a  reason: collision with root package name */
    private final Object f56179a;

    private e(Object obj) {
        this.f56179a = obj;
    }

    public static d a(Object obj) {
        return new e(g.c(obj, "instance cannot be null"));
    }

    @Override // javax.inject.Provider
    public Object get() {
        return this.f56179a;
    }
}
