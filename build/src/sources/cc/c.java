package cc;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class c implements b {

    /* renamed from: b  reason: collision with root package name */
    private static final c f7351b = new c(null);

    /* renamed from: a  reason: collision with root package name */
    private final Object f7352a;

    private c(Object obj) {
        this.f7352a = obj;
    }

    public static b a(Object obj) {
        return new c(d.c(obj, "instance cannot be null"));
    }

    @Override // javax.inject.Provider
    public Object get() {
        return this.f7352a;
    }
}
