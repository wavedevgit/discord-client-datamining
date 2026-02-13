package x0;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f54861a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f54862b;

    /* renamed from: c  reason: collision with root package name */
    private Object f54863c;

    public b() {
        d dVar;
        dVar = c.f54864a;
        this.f54861a = new AtomicReference(dVar);
        this.f54862b = new Object();
    }

    public final Object a() {
        long a10 = f.a();
        if (a10 == e.a()) {
            return this.f54863c;
        }
        return ((d) this.f54861a.get()).b(a10);
    }
}
