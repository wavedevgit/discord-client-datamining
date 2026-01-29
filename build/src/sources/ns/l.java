package ns;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceArray;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l {

    /* renamed from: b  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f42192b = AtomicReferenceFieldUpdater.newUpdater(l.class, Object.class, "lastScheduledTask$volatile");

    /* renamed from: c  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f42193c = AtomicIntegerFieldUpdater.newUpdater(l.class, "producerIndex$volatile");

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f42194d = AtomicIntegerFieldUpdater.newUpdater(l.class, "consumerIndex$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f42195e = AtomicIntegerFieldUpdater.newUpdater(l.class, "blockingTasksInBuffer$volatile");

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReferenceArray f42196a = new AtomicReferenceArray((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
    private volatile /* synthetic */ int blockingTasksInBuffer$volatile;
    private volatile /* synthetic */ int consumerIndex$volatile;
    private volatile /* synthetic */ Object lastScheduledTask$volatile;
    private volatile /* synthetic */ int producerIndex$volatile;

    private final h b(h hVar) {
        if (e() == 127) {
            return hVar;
        }
        if (hVar.f42183e) {
            f42195e.incrementAndGet(this);
        }
        int i10 = f42193c.get(this) & 127;
        while (this.f42196a.get(i10) != null) {
            Thread.yield();
        }
        this.f42196a.lazySet(i10, hVar);
        f42193c.incrementAndGet(this);
        return null;
    }

    private final void c(h hVar) {
        if (hVar != null && hVar.f42183e) {
            f42195e.decrementAndGet(this);
        }
    }

    private final int e() {
        return f42193c.get(this) - f42194d.get(this);
    }

    private final h m() {
        h hVar;
        while (true) {
            int i10 = f42194d.get(this);
            if (i10 - f42193c.get(this) == 0) {
                return null;
            }
            int i11 = i10 & 127;
            if (f42194d.compareAndSet(this, i10, i10 + 1) && (hVar = (h) this.f42196a.getAndSet(i11, null)) != null) {
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
            hVar = (h) f42192b.get(this);
            if (hVar == null || hVar.f42183e != z10) {
                int i10 = f42194d.get(this);
                int i11 = f42193c.get(this);
                while (i10 != i11) {
                    if (z10 && f42195e.get(this) == 0) {
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
        } while (!androidx.concurrent.futures.b.a(f42192b, this, hVar, null));
        return hVar;
    }

    private final h p(int i10) {
        int i11 = f42194d.get(this);
        int i12 = f42193c.get(this);
        boolean z10 = true;
        if (i10 != 1) {
            z10 = false;
        }
        while (i11 != i12) {
            if (z10 && f42195e.get(this) == 0) {
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
        h hVar = (h) this.f42196a.get(i11);
        if (hVar == null || hVar.f42183e != z10 || !is.l.a(this.f42196a, i11, hVar, null)) {
            return null;
        }
        if (z10) {
            f42195e.decrementAndGet(this);
        }
        return hVar;
    }

    /* JADX WARN: Type inference failed for: r0v2, types: [T, java.lang.Object, ns.h] */
    private final long s(int i10, Ref.ObjectRef objectRef) {
        ?? r02;
        int i11;
        do {
            r02 = (h) f42192b.get(this);
            if (r02 == 0) {
                return -2L;
            }
            if (r02.f42183e) {
                i11 = 1;
            } else {
                i11 = 2;
            }
            if ((i11 & i10) == 0) {
                return -2L;
            }
            long a10 = j.f42190f.a() - r02.f42182d;
            long j10 = j.f42186b;
            if (a10 < j10) {
                return j10 - a10;
            }
        } while (!androidx.concurrent.futures.b.a(f42192b, this, r02, null));
        objectRef.element = r02;
        return -1L;
    }

    public final h a(h hVar, boolean z10) {
        if (z10) {
            return b(hVar);
        }
        h hVar2 = (h) f42192b.getAndSet(this, hVar);
        if (hVar2 == null) {
            return null;
        }
        return b(hVar2);
    }

    public final int i() {
        if (f42192b.get(this) != null) {
            return e() + 1;
        }
        return e();
    }

    public final void j(d dVar) {
        h hVar = (h) f42192b.getAndSet(this, null);
        if (hVar != null) {
            dVar.a(hVar);
        }
        do {
        } while (n(dVar));
    }

    public final h k() {
        h hVar = (h) f42192b.getAndSet(this, null);
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
