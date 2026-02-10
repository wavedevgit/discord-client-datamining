package kotlin.collections;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c implements Iterator, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private int f31781d;

    /* renamed from: e  reason: collision with root package name */
    private Object f31782e;

    private final boolean d() {
        this.f31781d = 3;
        a();
        if (this.f31781d == 1) {
            return true;
        }
        return false;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final void b() {
        this.f31781d = 2;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c(Object obj) {
        this.f31782e = obj;
        this.f31781d = 1;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        int i10 = this.f31781d;
        if (i10 != 0) {
            if (i10 == 1) {
                return true;
            }
            if (i10 == 2) {
                return false;
            }
            throw new IllegalArgumentException("hasNext called when the iterator is in the FAILED state.");
        }
        return d();
    }

    @Override // java.util.Iterator
    public Object next() {
        int i10 = this.f31781d;
        if (i10 == 1) {
            this.f31781d = 0;
            return this.f31782e;
        } else if (i10 != 2 && d()) {
            this.f31781d = 0;
            return this.f31782e;
        } else {
            throw new NoSuchElementException();
        }
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }
}
