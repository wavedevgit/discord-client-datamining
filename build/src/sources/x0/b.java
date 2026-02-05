package x0;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f53601a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53602b;

    /* renamed from: c  reason: collision with root package name */
    private Object f53603c;

    public b() {
        d dVar;
        dVar = c.f53604a;
        this.f53601a = new AtomicReference(dVar);
        this.f53602b = new Object();
    }

    public final Object a() {
        long a10 = f.a();
        if (a10 == e.a()) {
            return this.f53603c;
        }
        return ((d) this.f53601a.get()).b(a10);
    }
}
