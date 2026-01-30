package x0;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f53131a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f53132b;

    /* renamed from: c  reason: collision with root package name */
    private Object f53133c;

    public b() {
        d dVar;
        dVar = c.f53134a;
        this.f53131a = new AtomicReference(dVar);
        this.f53132b = new Object();
    }

    public final Object a() {
        long a10 = f.a();
        if (a10 == e.a()) {
            return this.f53133c;
        }
        return ((d) this.f53131a.get()).b(a10);
    }
}
