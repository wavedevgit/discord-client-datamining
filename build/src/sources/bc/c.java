package bc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements b {

    /* renamed from: b  reason: collision with root package name */
    private static final c f6217b = new c(null);

    /* renamed from: a  reason: collision with root package name */
    private final Object f6218a;

    private c(Object obj) {
        this.f6218a = obj;
    }

    public static b a(Object obj) {
        return new c(d.c(obj, "instance cannot be null"));
    }

    @Override // javax.inject.Provider
    public Object get() {
        return this.f6218a;
    }
}
