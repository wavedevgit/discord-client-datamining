package x0;

import java.util.concurrent.atomic.AtomicReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReference f54468a;

    /* renamed from: b  reason: collision with root package name */
    private final Object f54469b;

    /* renamed from: c  reason: collision with root package name */
    private Object f54470c;

    public b() {
        d dVar;
        dVar = c.f54471a;
        this.f54468a = new AtomicReference(dVar);
        this.f54469b = new Object();
    }

    public final Object a() {
        long a10 = f.a();
        if (a10 == e.a()) {
            return this.f54470c;
        }
        return ((d) this.f54468a.get()).b(a10);
    }
}
