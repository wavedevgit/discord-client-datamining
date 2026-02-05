package io.sentry;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g3 {

    /* renamed from: a  reason: collision with root package name */
    private final Class f29002a;

    private g3(Class cls) {
        this.f29002a = cls;
    }

    public static g3 a(Class cls) {
        return new g3(cls);
    }

    public Object b() {
        return this.f29002a.getDeclaredConstructor(null).newInstance(null);
    }
}
