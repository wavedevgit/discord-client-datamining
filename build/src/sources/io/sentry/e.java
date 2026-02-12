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
    private transient Object[] f29259d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f29260e = 0;

    /* renamed from: i  reason: collision with root package name */
    private transient int f29261i = 0;

    /* renamed from: o  reason: collision with root package name */
    private transient boolean f29262o = false;

    /* renamed from: p  reason: collision with root package name */
    private final int f29263p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private int f29264d;

        /* renamed from: e  reason: collision with root package name */
        private int f29265e = -1;

        /* renamed from: i  reason: collision with root package name */
        private boolean f29266i;

        a() {
            this.f29264d = e.this.f29260e;
            this.f29266i = e.this.f29262o;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (!this.f29266i && this.f29264d == e.this.f29261i) {
                return false;
            }
            return true;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (hasNext()) {
                this.f29266i = false;
                int i10 = this.f29264d;
                this.f29265e = i10;
                this.f29264d = e.this.o(i10);
                return e.this.f29259d[this.f29265e];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            int i10 = this.f29265e;
            if (i10 != -1) {
                if (i10 == e.this.f29260e) {
                    e.this.remove();
                    this.f29265e = -1;
                    return;
                }
                int i11 = this.f29265e + 1;
                if (e.this.f29260e < this.f29265e && i11 < e.this.f29261i) {
                    System.arraycopy(e.this.f29259d, i11, e.this.f29259d, this.f29265e, e.this.f29261i - i11);
                } else {
                    while (i11 != e.this.f29261i) {
                        if (i11 >= e.this.f29263p) {
                            e.this.f29259d[i11 - 1] = e.this.f29259d[0];
                            i11 = 0;
                        } else {
                            e.this.f29259d[e.this.l(i11)] = e.this.f29259d[i11];
                            i11 = e.this.o(i11);
                        }
                    }
                }
                this.f29265e = -1;
                e eVar = e.this;
                eVar.f29261i = eVar.l(eVar.f29261i);
                e.this.f29259d[e.this.f29261i] = null;
                e.this.f29262o = false;
                this.f29264d = e.this.l(this.f29264d);
                return;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10) {
        if (i10 > 0) {
            Object[] objArr = new Object[i10];
            this.f29259d = objArr;
            this.f29263p = objArr.length;
            return;
        }
        throw new IllegalArgumentException("The size must be greater than 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int l(int i10) {
        int i11 = i10 - 1;
        if (i11 < 0) {
            return this.f29263p - 1;
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int o(int i10) {
        int i11 = i10 + 1;
        if (i11 >= this.f29263p) {
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
            Object[] objArr = this.f29259d;
            int i10 = this.f29261i;
            int i11 = i10 + 1;
            this.f29261i = i11;
            objArr[i10] = obj;
            if (i11 >= this.f29263p) {
                this.f29261i = 0;
            }
            if (this.f29261i == this.f29260e) {
                this.f29262o = true;
            }
            return true;
        }
        throw new NullPointerException("Attempted to add null object to queue");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public void clear() {
        this.f29262o = false;
        this.f29260e = 0;
        this.f29261i = 0;
        Arrays.fill(this.f29259d, (Object) null);
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
        if (size() == this.f29263p) {
            return true;
        }
        return false;
    }

    @Override // java.util.Queue
    public Object peek() {
        if (isEmpty()) {
            return null;
        }
        return this.f29259d[this.f29260e];
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
            Object[] objArr = this.f29259d;
            int i10 = this.f29260e;
            Object obj = objArr[i10];
            if (obj != null) {
                int i11 = i10 + 1;
                this.f29260e = i11;
                objArr[i10] = null;
                if (i11 >= this.f29263p) {
                    this.f29260e = 0;
                }
                this.f29262o = false;
            }
            return obj;
        }
        throw new NoSuchElementException("queue is empty");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public int size() {
        int i10 = this.f29261i;
        int i11 = this.f29260e;
        if (i10 < i11) {
            return (this.f29263p - i11) + i10;
        }
        if (i10 == i11) {
            if (this.f29262o) {
                return this.f29263p;
            }
            return 0;
        }
        return i10 - i11;
    }
}
