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
    private transient Object[] f28931d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f28932e = 0;

    /* renamed from: i  reason: collision with root package name */
    private transient int f28933i = 0;

    /* renamed from: o  reason: collision with root package name */
    private transient boolean f28934o = false;

    /* renamed from: p  reason: collision with root package name */
    private final int f28935p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private int f28936d;

        /* renamed from: e  reason: collision with root package name */
        private int f28937e = -1;

        /* renamed from: i  reason: collision with root package name */
        private boolean f28938i;

        a() {
            this.f28936d = e.this.f28932e;
            this.f28938i = e.this.f28934o;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (!this.f28938i && this.f28936d == e.this.f28933i) {
                return false;
            }
            return true;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (hasNext()) {
                this.f28938i = false;
                int i10 = this.f28936d;
                this.f28937e = i10;
                this.f28936d = e.this.n(i10);
                return e.this.f28931d[this.f28937e];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            int i10 = this.f28937e;
            if (i10 != -1) {
                if (i10 == e.this.f28932e) {
                    e.this.remove();
                    this.f28937e = -1;
                    return;
                }
                int i11 = this.f28937e + 1;
                if (e.this.f28932e < this.f28937e && i11 < e.this.f28933i) {
                    System.arraycopy(e.this.f28931d, i11, e.this.f28931d, this.f28937e, e.this.f28933i - i11);
                } else {
                    while (i11 != e.this.f28933i) {
                        if (i11 >= e.this.f28935p) {
                            e.this.f28931d[i11 - 1] = e.this.f28931d[0];
                            i11 = 0;
                        } else {
                            e.this.f28931d[e.this.l(i11)] = e.this.f28931d[i11];
                            i11 = e.this.n(i11);
                        }
                    }
                }
                this.f28937e = -1;
                e eVar = e.this;
                eVar.f28933i = eVar.l(eVar.f28933i);
                e.this.f28931d[e.this.f28933i] = null;
                e.this.f28934o = false;
                this.f28936d = e.this.l(this.f28936d);
                return;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10) {
        if (i10 > 0) {
            Object[] objArr = new Object[i10];
            this.f28931d = objArr;
            this.f28935p = objArr.length;
            return;
        }
        throw new IllegalArgumentException("The size must be greater than 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int l(int i10) {
        int i11 = i10 - 1;
        if (i11 < 0) {
            return this.f28935p - 1;
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int n(int i10) {
        int i11 = i10 + 1;
        if (i11 >= this.f28935p) {
            return 0;
        }
        return i11;
    }

    @Override // java.util.AbstractCollection, java.util.Collection, java.util.Queue
    public boolean add(Object obj) {
        if (obj != null) {
            if (o()) {
                remove();
            }
            Object[] objArr = this.f28931d;
            int i10 = this.f28933i;
            int i11 = i10 + 1;
            this.f28933i = i11;
            objArr[i10] = obj;
            if (i11 >= this.f28935p) {
                this.f28933i = 0;
            }
            if (this.f28933i == this.f28932e) {
                this.f28934o = true;
            }
            return true;
        }
        throw new NullPointerException("Attempted to add null object to queue");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public void clear() {
        this.f28934o = false;
        this.f28932e = 0;
        this.f28933i = 0;
        Arrays.fill(this.f28931d, (Object) null);
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

    public boolean o() {
        if (size() == this.f28935p) {
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
        return this.f28931d[this.f28932e];
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
            Object[] objArr = this.f28931d;
            int i10 = this.f28932e;
            Object obj = objArr[i10];
            if (obj != null) {
                int i11 = i10 + 1;
                this.f28932e = i11;
                objArr[i10] = null;
                if (i11 >= this.f28935p) {
                    this.f28932e = 0;
                }
                this.f28934o = false;
            }
            return obj;
        }
        throw new NoSuchElementException("queue is empty");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public int size() {
        int i10 = this.f28933i;
        int i11 = this.f28932e;
        if (i10 < i11) {
            return (this.f28935p - i11) + i10;
        }
        if (i10 == i11) {
            if (this.f28934o) {
                return this.f28935p;
            }
            return 0;
        }
        return i10 - i11;
    }
}
