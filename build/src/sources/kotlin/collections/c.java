package kotlin.collections;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.markers.KMappedMarker;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class c implements Iterator, KMappedMarker {

    /* renamed from: d  reason: collision with root package name */
    private int f32024d;

    /* renamed from: e  reason: collision with root package name */
    private Object f32025e;

    private final boolean d() {
        this.f32024d = 3;
        a();
        if (this.f32024d == 1) {
            return true;
        }
        return false;
    }

    protected abstract void a();

    /* JADX INFO: Access modifiers changed from: protected */
    public final void b() {
        this.f32024d = 2;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public final void c(Object obj) {
        this.f32025e = obj;
        this.f32024d = 1;
    }

    @Override // java.util.Iterator
    public boolean hasNext() {
        int i10 = this.f32024d;
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
        int i10 = this.f32024d;
        if (i10 == 1) {
            this.f32024d = 0;
            return this.f32025e;
        } else if (i10 != 2 && d()) {
            this.f32024d = 0;
            return this.f32025e;
        } else {
            throw new NoSuchElementException();
        }
    }

    @Override // java.util.Iterator
    public void remove() {
        throw new UnsupportedOperationException("Operation is not supported for read-only collection");
    }
}
