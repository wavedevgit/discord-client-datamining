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
    private int f34942d;

    /* renamed from: e  reason: collision with root package name */
    private Object f34943e;

    /* renamed from: i  reason: collision with root package name */
    private Iterator f34944i;

    /* renamed from: o  reason: collision with root package name */
    private Continuation f34945o;

    private final Throwable i() {
        int i10 = this.f34942d;
        if (i10 != 4) {
            if (i10 != 5) {
                return new IllegalStateException("Unexpected state of the iterator: " + this.f34942d);
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
        this.f34943e = obj;
        this.f34942d = 3;
        this.f34945o = continuation;
        Object f10 = wr.b.f();
        if (f10 == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (f10 == wr.b.f()) {
            return f10;
        }
        return Unit.f32056a;
    }

    @Override // kotlin.sequences.j
    public Object d(Iterator it, Continuation continuation) {
        if (!it.hasNext()) {
            return Unit.f32056a;
        }
        this.f34944i = it;
        this.f34942d = 2;
        this.f34945o = continuation;
        Object f10 = wr.b.f();
        if (f10 == wr.b.f()) {
            kotlin.coroutines.jvm.internal.g.c(continuation);
        }
        if (f10 == wr.b.f()) {
            return f10;
        }
        return Unit.f32056a;
    }

    @Override // kotlin.coroutines.Continuation
    public CoroutineContext getContext() {
        return kotlin.coroutines.e.f32130d;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        while (true) {
            int i10 = this.f34942d;
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
                Iterator it = this.f34944i;
                Intrinsics.checkNotNull(it);
                if (it.hasNext()) {
                    this.f34942d = 2;
                    return true;
                }
                this.f34944i = null;
            }
            this.f34942d = 5;
            Continuation continuation = this.f34945o;
            Intrinsics.checkNotNull(continuation);
            this.f34945o = null;
            Result.a aVar = Result.f32053e;
            continuation.resumeWith(Result.b(Unit.f32056a));
        }
    }

    public final void k(Continuation continuation) {
        this.f34945o = continuation;
    }

    @Override // java.util.Iterator
    public Object next() {
        int i10 = this.f34942d;
        if (i10 != 0 && i10 != 1) {
            if (i10 != 2) {
                if (i10 == 3) {
                    this.f34942d = 0;
                    Object obj = this.f34943e;
                    this.f34943e = null;
                    return obj;
                }
                throw i();
            }
            this.f34942d = 1;
            Iterator it = this.f34944i;
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
        this.f34942d = 4;
    }
}
