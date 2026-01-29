package kotlin.sequences;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.Result;
import kotlin.Unit;
import kotlin.coroutines.Continuation;
import kotlin.coroutines.CoroutineContext;
import kotlin.jvm.internal.Intrinsics;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class i extends j implements Iterator, Continuation, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private int f36168d;

    /* renamed from: e  reason: collision with root package name */
    private Object f36169e;

    /* renamed from: i  reason: collision with root package name */
    private Iterator f36170i;

    /* renamed from: o  reason: collision with root package name */
    private Continuation f36171o;

    private final Throwable i() {
        int i10 = this.f36168d;
        if (i10 != 4) {
            if (i10 != 5) {
                return new IllegalStateException("Unexpected state of the iterator: " + this.f36168d);
            }
            return new IllegalStateException("Iterator has failed.");
        }
        return new NoSuchElementException();
    }

    private final Object j() {
        if (hasNext()) {
            return next();
        }
        throw new NoSuchElementException();
    }

    @Override // kotlin.sequences.j
    public Object b(Object obj, Continuation continuation) {
        this.f36169e = obj;
        this.f36168d = 3;
        this.f36171o = continuation;
        Object f10 = or.b.f();
        if (f10 == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (f10 == or.b.f()) {
            return f10;
        }
        return Unit.f33282a;
    }

    @Override // kotlin.sequences.j
    public Object e(Iterator it, Continuation continuation) {
        if (!it.hasNext()) {
            return Unit.f33282a;
        }
        this.f36170i = it;
        this.f36168d = 2;
        this.f36171o = continuation;
        Object f10 = or.b.f();
        if (f10 == or.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (f10 == or.b.f()) {
            return f10;
        }
        return Unit.f33282a;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return kotlin.coroutines.e.f33356d;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        while (true) {
            int i10 = this.f36168d;
            if (i10 != 0) {
                if (i10 != 1) {
                    if (i10 == 2 || i10 == 3) {
                        return true;
                    }
                    if (i10 == 4) {
                        return false;
                    }
                    throw i();
                }
                Iterator it = this.f36170i;
                Intrinsics.checkNotNull(it);
                if (it.hasNext()) {
                    this.f36168d = 2;
                    return true;
                }
                this.f36170i = null;
            }
            this.f36168d = 5;
            Continuation continuation = this.f36171o;
            Intrinsics.checkNotNull(continuation);
            this.f36171o = null;
            Result.a aVar = Result.f33279e;
            continuation.resumeWith(Result.b(Unit.f33282a));
        }
    }

    public final void k(Continuation continuation) {
        this.f36171o = continuation;
    }

    @Override // java.util.Iterator
    public Object next() {
        int i10 = this.f36168d;
        if (i10 != 0 && i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    this.f36168d = 0;
                    Object obj = this.f36169e;
                    this.f36169e = null;
                    return obj;
                }
                throw i();
            }
            this.f36168d = 1;
            Iterator it = this.f36170i;
            Intrinsics.checkNotNull(it);
            return it.next();
        }
        return j();
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }

    @Override // kotlin.coroutines.Continuation
    public void resumeWith(Object obj) {
        kotlin.c.b(obj);
        this.f36168d = 4;
    }
}
