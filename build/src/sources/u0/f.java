package u0;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.markers.KMutableIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f implements Iterator, KMutableIterator {

    /* renamed from: d  reason: collision with root package name */
    private int f49996d;

    /* renamed from: e  reason: collision with root package name */
    private int f49997e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f49998i;

    public f(int i10) {
        this.f49996d = i10;
    }

    protected abstract Object a(int i10);

    protected abstract void b(int i10);

    @Override // java.util.Iterator
    public boolean hasNext() {
        if (this.f49997e < this.f49996d) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public Object next() {
        if (hasNext()) {
            Object a10 = a(this.f49997e);
            this.f49997e++;
            this.f49998i = true;
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public void remove() {
        if (!this.f49998i) {
            v0.d.b("Call next() before removing an element.");
        }
        int i10 = this.f49997e - 1;
        this.f49997e = i10;
        b(i10);
        this.f49996d--;
        this.f49998i = false;
    }
}
