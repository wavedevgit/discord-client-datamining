package x0;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f54560a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f54561b;

    /* renamed from: c  reason: collision with root package name */
    private Object f54562c;

    public b() {
        d dVar;
        dVar = c.f54563a;
        this.f54560a = new AtomicReference(dVar);
        this.f54561b = new Object();
    }

    public final Object a() {
        long a10 = f.a();
        if (a10 == e.a()) {
            return this.f54562c;
        }
        return ((d) this.f54560a.get()).b(a10);
    }
}
