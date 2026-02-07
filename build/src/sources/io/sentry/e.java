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
    private transient Object[] f28123d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f28124e = 0;

    /* renamed from: i  reason: collision with root package name */
    private transient int f28125i = 0;

    /* renamed from: o  reason: collision with root package name */
    private transient boolean f28126o = false;

    /* renamed from: p  reason: collision with root package name */
    private final int f28127p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private int f28128d;

        /* renamed from: e  reason: collision with root package name */
        private int f28129e = -1;

        /* renamed from: i  reason: collision with root package name */
        private boolean f28130i;

        a() {
            this.f28128d = e.this.f28124e;
            this.f28130i = e.this.f28126o;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (!this.f28130i && this.f28128d == e.this.f28125i) {
                return false;
            }
            return true;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (hasNext()) {
                this.f28130i = false;
                int i10 = this.f28128d;
                this.f28129e = i10;
                this.f28128d = e.this.o(i10);
                return e.this.f28123d[this.f28129e];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            int i10 = this.f28129e;
            if (i10 != -1) {
                if (i10 == e.this.f28124e) {
                    e.this.remove();
                    this.f28129e = -1;
                    return;
                }
                int i11 = this.f28129e + 1;
                if (e.this.f28124e < this.f28129e && i11 < e.this.f28125i) {
                    System.arraycopy(e.this.f28123d, i11, e.this.f28123d, this.f28129e, e.this.f28125i - i11);
                } else {
                    while (i11 != e.this.f28125i) {
                        if (i11 >= e.this.f28127p) {
                            e.this.f28123d[i11 - 1] = e.this.f28123d[0];
                            i11 = 0;
                        } else {
                            e.this.f28123d[e.this.l(i11)] = e.this.f28123d[i11];
                            i11 = e.this.o(i11);
                        }
                    }
                }
                this.f28129e = -1;
                e eVar = e.this;
                eVar.f28125i = eVar.l(eVar.f28125i);
                e.this.f28123d[e.this.f28125i] = null;
                e.this.f28126o = false;
                this.f28128d = e.this.l(this.f28128d);
                return;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10) {
        if (i10 > 0) {
            Object[] objArr = new Object[i10];
            this.f28123d = objArr;
            this.f28127p = objArr.length;
            return;
        }
        throw new IllegalArgumentException("The size must be greater than 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int l(int i10) {
        int i11 = i10 - 1;
        if (i11 < 0) {
            return this.f28127p - 1;
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int o(int i10) {
        int i11 = i10 + 1;
        if (i11 >= this.f28127p) {
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
            Object[] objArr = this.f28123d;
            int i10 = this.f28125i;
            int i11 = i10 + 1;
            this.f28125i = i11;
            objArr[i10] = obj;
            if (i11 >= this.f28127p) {
                this.f28125i = 0;
            }
            if (this.f28125i == this.f28124e) {
                this.f28126o = true;
            }
            return true;
        }
        throw new NullPointerException("Attempted to add null object to queue");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public void clear() {
        this.f28126o = false;
        this.f28124e = 0;
        this.f28125i = 0;
        Arrays.fill(this.f28123d, (Object) null);
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
        if (size() == this.f28127p) {
            return true;
        }
        return false;
    }

    @Override // java.util.Queue
    public Object peek() {
        if (isEmpty()) {
            return null;
        }
        return this.f28123d[this.f28124e];
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
            Object[] objArr = this.f28123d;
            int i10 = this.f28124e;
            Object obj = objArr[i10];
            if (obj != null) {
                int i11 = i10 + 1;
                this.f28124e = i11;
                objArr[i10] = null;
                if (i11 >= this.f28127p) {
                    this.f28124e = 0;
                }
                this.f28126o = false;
            }
            return obj;
        }
        throw new NoSuchElementException("queue is empty");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public int size() {
        int i10 = this.f28125i;
        int i11 = this.f28124e;
        if (i10 < i11) {
            return (this.f28127p - i11) + i10;
        }
        if (i10 == i11) {
            if (this.f28126o) {
                return this.f28127p;
            }
            return 0;
        }
        return i10 - i11;
    }
}
