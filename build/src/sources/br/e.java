package br;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e implements d, ar.a {

    /* renamed from: b  reason: collision with root package name */
    private static final e f7007b = new e(null);

    /* renamed from: a  reason: collision with root package name */
    private final Object f7008a;

    private e(Object obj) {
        this.f7008a = obj;
    }

    public static d a(Object obj) {
        return new e(g.c(obj, "instance cannot be null"));
    }

    @Override // javax.inject.Provider
    public Object get() {
        return this.f7008a;
    }
}
