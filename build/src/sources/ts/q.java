package ts;

import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class q {

    /* renamed from: a  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f50904a = AtomicReferenceFieldUpdater.newUpdater(q.class, Object.class, "_cur$volatile");
    private volatile /* synthetic */ Object _cur$volatile;

    public q(boolean z10) {
        this._cur$volatile = new r(8, z10);
    }

    public final boolean a(Object obj) {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f50904a;
        while (true) {
            r rVar = (r) atomicReferenceFieldUpdater.get(this);
            int a10 = rVar.a(obj);
            if (a10 == 0) {
                return true;
            }
            if (a10 != 1) {
                if (a10 == 2) {
                    return false;
                }
            } else {
                androidx.concurrent.futures.b.a(f50904a, this, rVar, rVar.l());
            }
        }
    }

    public final void b() {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f50904a;
        while (true) {
            r rVar = (r) atomicReferenceFieldUpdater.get(this);
            if (rVar.d()) {
                return;
            }
            androidx.concurrent.futures.b.a(f50904a, this, rVar, rVar.l());
        }
    }

    public final int c() {
        return ((r) f50904a.get(this)).g();
    }

    public final Object e() {
        AtomicReferenceFieldUpdater atomicReferenceFieldUpdater = f50904a;
        while (true) {
            r rVar = (r) atomicReferenceFieldUpdater.get(this);
            Object m10 = rVar.m();
            if (m10 != r.f50908h) {
                return m10;
            }
            androidx.concurrent.futures.b.a(f50904a, this, rVar, rVar.l());
        }
    }
}
