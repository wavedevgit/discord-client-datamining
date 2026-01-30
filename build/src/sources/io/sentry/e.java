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
    private transient Object[] f29946d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f29947e = 0;

    /* renamed from: i  reason: collision with root package name */
    private transient int f29948i = 0;

    /* renamed from: o  reason: collision with root package name */
    private transient boolean f29949o = false;

    /* renamed from: p  reason: collision with root package name */
    private final int f29950p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private int f29951d;

        /* renamed from: e  reason: collision with root package name */
        private int f29952e = -1;

        /* renamed from: i  reason: collision with root package name */
        private boolean f29953i;

        a() {
            this.f29951d = e.this.f29947e;
            this.f29953i = e.this.f29949o;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (!this.f29953i && this.f29951d == e.this.f29948i) {
                return false;
            }
            return true;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (hasNext()) {
                this.f29953i = false;
                int i10 = this.f29951d;
                this.f29952e = i10;
                this.f29951d = e.this.m(i10);
                return e.this.f29946d[this.f29952e];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            int i10 = this.f29952e;
            if (i10 != -1) {
                if (i10 == e.this.f29947e) {
                    e.this.remove();
                    this.f29952e = -1;
                    return;
                }
                int i11 = this.f29952e + 1;
                if (e.this.f29947e < this.f29952e && i11 < e.this.f29948i) {
                    System.arraycopy(e.this.f29946d, i11, e.this.f29946d, this.f29952e, e.this.f29948i - i11);
                } else {
                    while (i11 != e.this.f29948i) {
                        if (i11 >= e.this.f29950p) {
                            e.this.f29946d[i11 - 1] = e.this.f29946d[0];
                            i11 = 0;
                        } else {
                            e.this.f29946d[e.this.k(i11)] = e.this.f29946d[i11];
                            i11 = e.this.m(i11);
                        }
                    }
                }
                this.f29952e = -1;
                e eVar = e.this;
                eVar.f29948i = eVar.k(eVar.f29948i);
                e.this.f29946d[e.this.f29948i] = null;
                e.this.f29949o = false;
                this.f29951d = e.this.k(this.f29951d);
                return;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10) {
        if (i10 > 0) {
            Object[] objArr = new Object[i10];
            this.f29946d = objArr;
            this.f29950p = objArr.length;
            return;
        }
        throw new IllegalArgumentException("The size must be greater than 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int k(int i10) {
        int i11 = i10 - 1;
        if (i11 < 0) {
            return this.f29950p - 1;
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int m(int i10) {
        int i11 = i10 + 1;
        if (i11 >= this.f29950p) {
            return 0;
        }
        return i11;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Queue
    public boolean add(Object obj) {
        if (obj != null) {
            if (n()) {
                remove();
            }
            Object[] objArr = this.f29946d;
            int i10 = this.f29948i;
            int i11 = i10 + 1;
            this.f29948i = i11;
            objArr[i10] = obj;
            if (i11 >= this.f29950p) {
                this.f29948i = 0;
            }
            if (this.f29948i == this.f29947e) {
                this.f29949o = true;
            }
            return true;
        }
        throw new NullPointerException("Attempted to add null object to queue");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public void clear() {
        this.f29949o = false;
        this.f29947e = 0;
        this.f29948i = 0;
        Arrays.fill(this.f29946d, (Object) null);
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

    public boolean n() {
        if (size() == this.f29950p) {
            return true;
        }
        return false;
    }

    @Override // java.util.Queue
    public boolean offer(Object obj) {
        return add(obj);
    }

    @Override // java.util.Queue
    public Object peek() {
        if (isEmpty()) {
            return null;
        }
        return this.f29946d[this.f29947e];
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
            Object[] objArr = this.f29946d;
            int i10 = this.f29947e;
            Object obj = objArr[i10];
            if (obj != null) {
                int i11 = i10 + 1;
                this.f29947e = i11;
                objArr[i10] = null;
                if (i11 >= this.f29950p) {
                    this.f29947e = 0;
                }
                this.f29949o = false;
            }
            return obj;
        }
        throw new NoSuchElementException("queue is empty");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public int size() {
        int i10 = this.f29948i;
        int i11 = this.f29947e;
        if (i10 < i11) {
            return (this.f29950p - i11) + i10;
        }
        if (i10 == i11) {
            if (this.f29949o) {
                return this.f29950p;
            }
            return 0;
        }
        return i10 - i11;
    }
}
