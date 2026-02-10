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
    private transient Object[] f28323d;

    /* renamed from: e  reason: collision with root package name */
    private transient int f28324e = 0;

    /* renamed from: i  reason: collision with root package name */
    private transient int f28325i = 0;

    /* renamed from: o  reason: collision with root package name */
    private transient boolean f28326o = false;

    /* renamed from: p  reason: collision with root package name */
    private final int f28327p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements Iterator {

        /* renamed from: d  reason: collision with root package name */
        private int f28328d;

        /* renamed from: e  reason: collision with root package name */
        private int f28329e = -1;

        /* renamed from: i  reason: collision with root package name */
        private boolean f28330i;

        a() {
            this.f28328d = e.this.f28324e;
            this.f28330i = e.this.f28326o;
        }

        @Override // java.util.Iterator
        public boolean hasNext() {
            if (!this.f28330i && this.f28328d == e.this.f28325i) {
                return false;
            }
            return true;
        }

        @Override // java.util.Iterator
        public Object next() {
            if (hasNext()) {
                this.f28330i = false;
                int i10 = this.f28328d;
                this.f28329e = i10;
                this.f28328d = e.this.o(i10);
                return e.this.f28323d[this.f28329e];
            }
            throw new NoSuchElementException();
        }

        @Override // java.util.Iterator
        public void remove() {
            int i10 = this.f28329e;
            if (i10 != -1) {
                if (i10 == e.this.f28324e) {
                    e.this.remove();
                    this.f28329e = -1;
                    return;
                }
                int i11 = this.f28329e + 1;
                if (e.this.f28324e < this.f28329e && i11 < e.this.f28325i) {
                    System.arraycopy(e.this.f28323d, i11, e.this.f28323d, this.f28329e, e.this.f28325i - i11);
                } else {
                    while (i11 != e.this.f28325i) {
                        if (i11 >= e.this.f28327p) {
                            e.this.f28323d[i11 - 1] = e.this.f28323d[0];
                            i11 = 0;
                        } else {
                            e.this.f28323d[e.this.l(i11)] = e.this.f28323d[i11];
                            i11 = e.this.o(i11);
                        }
                    }
                }
                this.f28329e = -1;
                e eVar = e.this;
                eVar.f28325i = eVar.l(eVar.f28325i);
                e.this.f28323d[e.this.f28325i] = null;
                e.this.f28326o = false;
                this.f28328d = e.this.l(this.f28328d);
                return;
            }
            throw new IllegalStateException();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public e(int i10) {
        if (i10 > 0) {
            Object[] objArr = new Object[i10];
            this.f28323d = objArr;
            this.f28327p = objArr.length;
            return;
        }
        throw new IllegalArgumentException("The size must be greater than 0");
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int l(int i10) {
        int i11 = i10 - 1;
        if (i11 < 0) {
            return this.f28327p - 1;
        }
        return i11;
    }

    /* JADX INFO: Access modifiers changed from: private */
    public int o(int i10) {
        int i11 = i10 + 1;
        if (i11 >= this.f28327p) {
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
            Object[] objArr = this.f28323d;
            int i10 = this.f28325i;
            int i11 = i10 + 1;
            this.f28325i = i11;
            objArr[i10] = obj;
            if (i11 >= this.f28327p) {
                this.f28325i = 0;
            }
            if (this.f28325i == this.f28324e) {
                this.f28326o = true;
            }
            return true;
        }
        throw new NullPointerException("Attempted to add null object to queue");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public void clear() {
        this.f28326o = false;
        this.f28324e = 0;
        this.f28325i = 0;
        Arrays.fill(this.f28323d, (Object) null);
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
        if (size() == this.f28327p) {
            return true;
        }
        return false;
    }

    @Override // java.util.Queue
    public Object peek() {
        if (isEmpty()) {
            return null;
        }
        return this.f28323d[this.f28324e];
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
            Object[] objArr = this.f28323d;
            int i10 = this.f28324e;
            Object obj = objArr[i10];
            if (obj != null) {
                int i11 = i10 + 1;
                this.f28324e = i11;
                objArr[i10] = null;
                if (i11 >= this.f28327p) {
                    this.f28324e = 0;
                }
                this.f28326o = false;
            }
            return obj;
        }
        throw new NoSuchElementException("queue is empty");
    }

    @Override // java.util.AbstractCollection, java.util.Collection
    public int size() {
        int i10 = this.f28325i;
        int i11 = this.f28324e;
        if (i10 < i11) {
            return (this.f28327p - i11) + i10;
        }
        if (i10 == i11) {
            if (this.f28326o) {
                return this.f28327p;
            }
            return 0;
        }
        return i10 - i11;
    }
}
