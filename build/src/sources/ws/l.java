package ws;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.util.concurrent.atomic.AtomicIntegerFieldUpdater;
import java.util.concurrent.atomic.AtomicReferenceArray;
import java.util.concurrent.atomic.AtomicReferenceFieldUpdater;
import kotlin.jvm.internal.Ref;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class l {

    /* renamed from: b  reason: collision with root package name */
    private static final /* synthetic */ AtomicReferenceFieldUpdater f54056b = AtomicReferenceFieldUpdater.newUpdater(l.class, Object.class, "lastScheduledTask$volatile");

    /* renamed from: c  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f54057c = AtomicIntegerFieldUpdater.newUpdater(l.class, "producerIndex$volatile");

    /* renamed from: d  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f54058d = AtomicIntegerFieldUpdater.newUpdater(l.class, "consumerIndex$volatile");

    /* renamed from: e  reason: collision with root package name */
    private static final /* synthetic */ AtomicIntegerFieldUpdater f54059e = AtomicIntegerFieldUpdater.newUpdater(l.class, "blockingTasksInBuffer$volatile");

    /* renamed from: a  reason: collision with root package name */
    private final AtomicReferenceArray f54060a = new AtomicReferenceArray((int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_LAYOUT);
    private volatile /* synthetic */ int blockingTasksInBuffer$volatile;
    private volatile /* synthetic */ int consumerIndex$volatile;
    private volatile /* synthetic */ Object lastScheduledTask$volatile;
    private volatile /* synthetic */ int producerIndex$volatile;

    private final h b(h hVar) {
        if (e() == 127) {
            return hVar;
        }
        if (hVar.f54047e) {
            f54059e.incrementAndGet(this);
        }
        int i10 = f54057c.get(this) & 127;
        while (this.f54060a.get(i10) != null) {
            Thread.yield();
        }
        this.f54060a.lazySet(i10, hVar);
        f54057c.incrementAndGet(this);
        return null;
    }

    private final void c(h hVar) {
        if (hVar != null && hVar.f54047e) {
            f54059e.decrementAndGet(this);
        }
    }

    private final int e() {
        return f54057c.get(this) - f54058d.get(this);
    }

    private final h m() {
        h hVar;
        while (true) {
            int i10 = f54058d.get(this);
            if (i10 - f54057c.get(this) == 0) {
                return null;
            }
            int i11 = i10 & 127;
            if (f54058d.compareAndSet(this, i10, i10 + 1) && (hVar = (h) this.f54060a.getAndSet(i11, null)) != null) {
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
            hVar = (h) f54056b.get(this);
            if (hVar == null || hVar.f54047e != z10) {
                int i10 = f54058d.get(this);
                int i11 = f54057c.get(this);
                while (i10 != i11) {
                    if (z10 && f54059e.get(this) == 0) {
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
        } while (!androidx.concurrent.futures.b.a(f54056b, this, hVar, null));
        return hVar;
    }

    private final h p(int i10) {
        int i11 = f54058d.get(this);
        int i12 = f54057c.get(this);
        boolean z10 = true;
        if (i10 != 1) {
            z10 = false;
        }
        while (i11 != i12) {
            if (z10 && f54059e.get(this) == 0) {
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
        h hVar = (h) this.f54060a.get(i11);
        if (hVar == null || hVar.f54047e != z10 || !rs.l.a(this.f54060a, i11, hVar, null)) {
            return null;
        }
        if (z10) {
            f54059e.decrementAndGet(this);
        }
        return hVar;
    }

    /* JADX WARN: Type inference failed for: r0v2, types: [ws.h, T, java.lang.Object] */
    private final long s(int i10, Ref.ObjectRef objectRef) {
        ?? r02;
        int i11;
        do {
            r02 = (h) f54056b.get(this);
            if (r02 == 0) {
                return -2L;
            }
            if (r02.f54047e) {
                i11 = 1;
            } else {
                i11 = 2;
            }
            if ((i11 & i10) == 0) {
                return -2L;
            }
            long a10 = j.f54054f.a() - r02.f54046d;
            long j10 = j.f54050b;
            if (a10 < j10) {
                return j10 - a10;
            }
        } while (!androidx.concurrent.futures.b.a(f54056b, this, r02, null));
        objectRef.element = r02;
        return -1L;
    }

    public final h a(h hVar, boolean z10) {
        if (z10) {
            return b(hVar);
        }
        h hVar2 = (h) f54056b.getAndSet(this, hVar);
        if (hVar2 == null) {
            return null;
        }
        return b(hVar2);
    }

    public final int i() {
        if (f54056b.get(this) != null) {
            return e() + 1;
        }
        return e();
    }

    public final void j(d dVar) {
        h hVar = (h) f54056b.getAndSet(this, null);
        if (hVar != null) {
            dVar.a(hVar);
        }
        do {
        } while (n(dVar));
    }

    public final h k() {
        h hVar = (h) f54056b.getAndSet(this, null);
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
