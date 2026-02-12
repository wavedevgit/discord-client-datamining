package u0;

import java.util.Iterator;
import java.util.NoSuchElementException;
import kotlin.jvm.internal.markers.KMutableIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class f implements Iterator, KMutableIterator {

    /* renamed from: d  reason: collision with root package name */
    private int f50363d;

    /* renamed from: e  reason: collision with root package name */
    private int f50364e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f50365i;

    public f(int i10) {
        this.f50363d = i10;
    }

    protected abstract Object a(int i10);

    protected abstract void b(int i10);

    @Override // java.util.Iterator
    public boolean hasNext() {
        if (this.f50364e < this.f50363d) {
            return true;
        }
        return false;
    }

    @Override // java.util.Iterator
    public Object next() {
        if (hasNext()) {
            Object a10 = a(this.f50364e);
            this.f50364e++;
            this.f50365i = true;
            return a10;
        }
        throw new NoSuchElementException();
    }

    @Override // java.util.Iterator
    public void remove() {
        if (!this.f50365i) {
            v0.d.b("Call next() before removing an element.");
        }
        int i10 = this.f50364e - 1;
        this.f50364e = i10;
        b(i10);
        this.f50363d--;
        this.f50365i = false;
    }
}
