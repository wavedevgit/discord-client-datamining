package io.sentry;

import java.io.Serializable;
import java.util.AbstractCollection;
import java.util.Arrays;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.Queue;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class e extends AbstractCollection implements Queue, Serializable {

    /* renamed from: d  reason: collision with root package name */
    private transient Object[] f29258d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f29259e = 0;

    /* renamed from: i  reason: collision with root package name */
    private transient int f29260i = 0;

    /* renamed from: o  reason: collision with root package name */
    private transient boolean f29261o = false;

    /* renamed from: p  reason: collision with root package name */
    private final int f29262p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private int f29263d;

        /* renamed from: e  reason: collision with root package name */
        private int f29264e = -1;

        /* renamed from: i  reason: collision with root package name */
        private boolean f29265i;

        a() {
            this.f29263d = e.this.f29259e;
            this.f29265i = e.this.f29261o;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (!this.f29265i && this.f29263d == e.this.f29260i) {
                return false;
            }
            return true;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (hasNext()) {
                this.f29265i = false;
                int i10 = this.f29263d;
                this.f29264e = i10;
                this.f29263d = e.this.o(i10);
                return e.this.f29258d[this.f29264e];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            int i10 = this.f29264e;
            if (i10 != -1) {
                if (i10 == e.this.f29259e) {
                    e.this.remove();
                    this.f29264e = -1;
                    return;
                }
                int i11 = this.f29264e + 1;
                if (e.this.f29259e < this.f29264e && i11 < e.this.f29260i) {
                    System.arraycopy(e.this.f29258d, i11, e.this.f29258d, this.f29264e, e.this.f29260i - i11);
                } else {
                    while (i11 != e.this.f29260i) {
                        if (i11 >= e.this.f29262p) {
                            e.this.f29258d[i11 - 1] = e.this.f29258d[0];
                            i11 = 0;
                        } else {
                            e.this.f29258d[e.this.l(i11)] = e.this.f29258d[i11];
                            i11 = e.this.o(i11);
                        }
                    }
                }
                this.f29264e = -1;
                e eVar = e.this;
                eVar.f29260i = eVar.l(eVar.f29260i);
                e.this.f29258d[e.this.f29260i] = null;
                e.this.f29261o = false;
                this.f29263d = e.this.l(this.f29263d);
                return;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10) {
        if (i10 > 0) {
            Object[] objArr = new Object[i10];
            this.f29258d = objArr;
            this.f29262p = objArr.length;
            return;
        }
        throw new IllegalArgumentException("The size must be greater than 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int l(int i10) {
        int i11 = i10 - 1;
        if (i11 < 0) {
            return this.f29262p - 1;
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int o(int i10) {
        int i11 = i10 + 1;
        if (i11 >= this.f29262p) {
            return 0;
        }
        return i11;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Queue
    public boolean add(Object obj) {
        if (obj != null) {
            if (p()) {
                remove();
            }
            Object[] objArr = this.f29258d;
            int i10 = this.f29260i;
            int i11 = i10 + 1;
            this.f29260i = i11;
            objArr[i10] = obj;
            if (i11 >= this.f29262p) {
                this.f29260i = 0;
            }
            if (this.f29260i == this.f29259e) {
                this.f29261o = true;
            }
            return true;
        }
        throw new NullPointerException("Attempted to add null object to queue");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public void clear() {
        this.f29261o = false;
        this.f29259e = 0;
        this.f29260i = 0;
        Arrays.fill(this.f29258d, (Object) null);
    }

    @Override // java.util.Queue
    public Object element() {
        if (!isEmpty()) {
            return peek();
        }
        throw new NoSuchElementException("queue is empty");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public boolean isEmpty() {
        if (size() == 0) {
            return true;
        }
        return false;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.lang.Iterable
    public Iterator iterator() {
        return new a();
    }

    @Override // java.util.Queue
    public boolean offer(Object obj) {
        return add(obj);
    }

    public boolean p() {
        if (size() == this.f29262p) {
            return true;
        }
        return false;
    }

    @Override // java.util.Queue
    public Object peek() {
        if (isEmpty()) {
            return null;
        }
        return this.f29258d[this.f29259e];
    }

    @Override // java.util.Queue
    public Object poll() {
        if (isEmpty()) {
            return null;
        }
        return remove();
    }

    @Override // java.util.Queue
    public Object remove() {
        if (!isEmpty()) {
            Object[] objArr = this.f29258d;
            int i10 = this.f29259e;
            Object obj = objArr[i10];
            if (obj != null) {
                int i11 = i10 + 1;
                this.f29259e = i11;
                objArr[i10] = null;
                if (i11 >= this.f29262p) {
                    this.f29259e = 0;
                }
                this.f29261o = false;
            }
            return obj;
        }
        throw new NoSuchElementException("queue is empty");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public int size() {
        int i10 = this.f29260i;
        int i11 = this.f29259e;
        if (i10 < i11) {
            return (this.f29262p - i11) + i10;
        }
        if (i10 == i11) {
            if (this.f29261o) {
                return this.f29262p;
            }
            return 0;
        }
        return i10 - i11;
    }
}
