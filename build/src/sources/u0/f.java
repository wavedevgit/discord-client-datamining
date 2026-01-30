package u0;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.markers.KMutableIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f implements Iterator, KMutableIterator {

    /* renamed from: d  reason: collision with root package name */
    private int f50012d;

    /* renamed from: e  reason: collision with root package name */
    private int f50013e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f50014i;

    public f(int i10) {
        this.f50012d = i10;
    }

    protected abstract Object a(int i10);

    protected abstract void b(int i10);

    @Override // java.util.Iterator
    public boolean hasNext() {
        if (this.f50013e < this.f50012d) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public Object next() {
        if (hasNext()) {
            Object a10 = a(this.f50013e);
            this.f50013e++;
            this.f50014i = true;
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public void remove() {
        if (!this.f50014i) {
            v0.d.b("Call next() before removing an element.");
        }
        int i10 = this.f50013e - 1;
        this.f50013e = i10;
        b(i10);
        this.f50012d--;
        this.f50014i = false;
    }
}
