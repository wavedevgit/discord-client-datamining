package androidx.lifecycle;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f4473a;

    public b(Object obj) {
        this.f4473a = new AtomicReference(obj);
    }

    public final boolean a(Object obj, Object obj2) {
        return p0.d.a(this.f4473a, obj, obj2);
    }

    public final Object b() {
        return this.f4473a.get();
    }
}
