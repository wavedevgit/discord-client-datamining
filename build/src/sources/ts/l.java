package ts;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceArray;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l {

    /* renamed from: b  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f51053b = AtomicReferenceFieldUpdater.newUpdater(l.class, Object.class, "lastScheduledTask$volatile");

    /* renamed from: c  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f51054c = AtomicIntegerFieldUpdater.newUpdater(l.class, "producerIndex$volatile");

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f51055d = AtomicIntegerFieldUpdater.newUpdater(l.class, "consumerIndex$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f51056e = AtomicIntegerFieldUpdater.newUpdater(l.class, "blockingTasksInBuffer$volatile");

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReferenceArray f51057a = new AtomicReferenceArray((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
    private volatile /* synthetic */ int blockingTasksInBuffer$volatile;
    private volatile /* synthetic */ int consumerIndex$volatile;
    private volatile /* synthetic */ Object lastScheduledTask$volatile;
    private volatile /* synthetic */ int producerIndex$volatile;

    private final h b(h hVar) {
        if (e() == 127) {
            return hVar;
        }
        if (hVar.f51044e) {
            f51056e.incrementAndGet(this);
        }
        int i10 = f51054c.get(this) & 127;
        while (this.f51057a.get(i10) != null) {
            Thread.yield();
        }
        this.f51057a.lazySet(i10, hVar);
        f51054c.incrementAndGet(this);
        return null;
    }

    private final void c(h hVar) {
        if (hVar != null && hVar.f51044e) {
            f51056e.decrementAndGet(this);
        }
    }

    private final int e() {
        return f51054c.get(this) - f51055d.get(this);
    }

    private final h m() {
        h hVar;
        while (true) {
            int i10 = f51055d.get(this);
            if (i10 - f51054c.get(this) == 0) {
                return null;
            }
            int i11 = i10 & 127;
            if (f51055d.compareAndSet(this, i10, i10 + 1) && (hVar = (h) this.f51057a.getAndSet(i11, null)) != null) {
                c(hVar);
                return hVar;
            }
        }
    }

    private final boolean n(d dVar) {
        h m10 = m();
        if (m10 == null) {
            return false;
        }
        dVar.a(m10);
        return true;
    }

    private final h o(boolean z10) {
        h hVar;
        do {
            hVar = (h) f51053b.get(this);
            if (hVar == null || hVar.f51044e != z10) {
                int i10 = f51055d.get(this);
                int i11 = f51054c.get(this);
                while (i10 != i11) {
                    if (z10 && f51056e.get(this) == 0) {
                        return null;
                    }
                    i11--;
                    h q10 = q(i11, z10);
                    if (q10 != null) {
                        return q10;
                    }
                }
                return null;
            }
        } while (!androidx.concurrent.futures.b.a(f51053b, this, hVar, null));
        return hVar;
    }

    private final h p(int i10) {
        int i11 = f51055d.get(this);
        int i12 = f51054c.get(this);
        boolean z10 = true;
        if (i10 != 1) {
            z10 = false;
        }
        while (i11 != i12) {
            if (z10 && f51056e.get(this) == 0) {
                return null;
            }
            int i13 = i11 + 1;
            h q10 = q(i11, z10);
            if (q10 == null) {
                i11 = i13;
            } else {
                return q10;
            }
        }
        return null;
    }

    private final h q(int i10, boolean z10) {
        int i11 = i10 & 127;
        h hVar = (h) this.f51057a.get(i11);
        if (hVar == null || hVar.f51044e != z10 || !os.l.a(this.f51057a, i11, hVar, null)) {
            return null;
        }
        if (z10) {
            f51056e.decrementAndGet(this);
        }
        return hVar;
    }

    /* JADX WARN: Type inference failed for: r0v2, types: [T, java.lang.Object, ts.h] */
    private final long s(int i10, Ref.ObjectRef objectRef) {
        ?? r02;
        int i11;
        do {
            r02 = (h) f51053b.get(this);
            if (r02 == 0) {
                return -2L;
            }
            if (r02.f51044e) {
                i11 = 1;
            } else {
                i11 = 2;
            }
            if ((i11 & i10) == 0) {
                return -2L;
            }
            long a10 = j.f51051f.a() - r02.f51043d;
            long j10 = j.f51047b;
            if (a10 < j10) {
                return j10 - a10;
            }
        } while (!androidx.concurrent.futures.b.a(f51053b, this, r02, null));
        objectRef.element = r02;
        return -1L;
    }

    public final h a(h hVar, boolean z10) {
        if (z10) {
            return b(hVar);
        }
        h hVar2 = (h) f51053b.getAndSet(this, hVar);
        if (hVar2 == null) {
            return null;
        }
        return b(hVar2);
    }

    public final int i() {
        if (f51053b.get(this) != null) {
            return e() + 1;
        }
        return e();
    }

    public final void j(d dVar) {
        h hVar = (h) f51053b.getAndSet(this, null);
        if (hVar != null) {
            dVar.a(hVar);
        }
        do {
        } while (n(dVar));
    }

    public final h k() {
        h hVar = (h) f51053b.getAndSet(this, null);
        if (hVar == null) {
            return m();
        }
        return hVar;
    }

    public final h l() {
        return o(true);
    }

    /* JADX WARN: Multi-variable type inference failed */
    public final long r(int i10, Ref.ObjectRef objectRef) {
        T t10;
        if (i10 == 3) {
            t10 = m();
        } else {
            t10 = p(i10);
        }
        if (t10 != 0) {
            objectRef.element = t10;
            return -1L;
        }
        return s(i10, objectRef);
    }
}
