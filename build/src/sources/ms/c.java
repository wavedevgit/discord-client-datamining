package ms;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class c {

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f39149d = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_next$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f39150e = AtomicReferenceFieldUpdater.newUpdater(c.class, Object.class, "_prev$volatile");
    private volatile /* synthetic */ Object _next$volatile;
    private volatile /* synthetic */ Object _prev$volatile;

    public c(c cVar) {
        this._prev$volatile = cVar;
    }

    private final c d() {
        c h10 = h();
        while (h10 != null && h10.k()) {
            h10 = (c) f39150e.get(h10);
        }
        return h10;
    }

    private final c e() {
        c f10;
        c f11 = f();
        Intrinsics.checkNotNull(f11);
        while (f11.k() && (f10 = f11.f()) != null) {
            f11 = f10;
        }
        return f11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final Object g() {
        return f39149d.get(this);
    }

    public final void c() {
        f39150e.set(this, null);
    }

    public final c f() {
        Object g10 = g();
        if (g10 == b.a()) {
            return null;
        }
        return (c) g10;
    }

    public final c h() {
        return (c) f39150e.get(this);
    }

    public abstract boolean k();

    public final boolean l() {
        if (f() == null) {
            return true;
        }
        return false;
    }

    public final boolean m() {
        return androidx.concurrent.futures.b.a(f39149d, this, null, b.a());
    }

    public final void n() {
        Object obj;
        c cVar;
        if (l()) {
            return;
        }
        while (true) {
            c d10 = d();
            c e10 = e();
            AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f39150e;
            do {
                obj = atomicReferenceFieldUpdater.get(e10);
                if (((c) obj) == null) {
                    cVar = null;
                } else {
                    cVar = d10;
                }
            } while (!androidx.concurrent.futures.b.a(atomicReferenceFieldUpdater, e10, obj, cVar));
            if (d10 != null) {
                f39149d.set(d10, e10);
            }
            if (!e10.k() || e10.l()) {
                if (d10 == null || !d10.k()) {
                    return;
                }
            }
        }
    }

    public final boolean o(c cVar) {
        return androidx.concurrent.futures.b.a(f39149d, this, null, cVar);
    }
}
