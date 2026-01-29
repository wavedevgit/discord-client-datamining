package kotlin.collections;

import java.util.Arrays;
import java.util.Iterator;
import java.util.RandomAccess;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 extends d implements RandomAccess {

    /* renamed from: e  reason: collision with root package name */
    private final Object[] f33342e;

    /* renamed from: i  reason: collision with root package name */
    private final int f33343i;

    /* renamed from: o  reason: collision with root package name */
    private int f33344o;

    /* renamed from: p  reason: collision with root package name */
    private int f33345p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends c {

        /* renamed from: i  reason: collision with root package name */
        private int f33346i;

        /* renamed from: o  reason: collision with root package name */
        private int f33347o;

        a() {
            this.f33346i = w0.this.size();
            this.f33347o = w0.this.f33344o;
        }

        @Override // kotlin.collections.c
        protected void a() {
            if (this.f33346i == 0) {
                b();
                return;
            }
            c(w0.this.f33342e[this.f33347o]);
            this.f33347o = (this.f33347o + 1) % w0.this.f33343i;
            this.f33346i--;
        }
    }

    public w0(Object[] buffer, int i10) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        this.f33342e = buffer;
        if (i10 >= 0) {
            if (i10 <= buffer.length) {
                this.f33343i = buffer.length;
                this.f33345p = i10;
                return;
            }
            throw new IllegalArgumentException(("ring buffer filled size: " + i10 + " cannot be larger than the buffer size: " + buffer.length).toString());
        }
        throw new IllegalArgumentException(("ring buffer filled size should not be negative but it is " + i10).toString());
    }

    @Override // kotlin.collections.b
    public int c() {
        return this.f33345p;
    }

    @Override // kotlin.collections.d, java.util.List
    public Object get(int i10) {
        d.f33316d.b(i10, size());
        return this.f33342e[(this.f33344o + i10) % this.f33343i];
    }

    public final void h(Object obj) {
        if (!j()) {
            this.f33342e[(this.f33344o + size()) % this.f33343i] = obj;
            this.f33345p = size() + 1;
            return;
        }
        throw new IllegalStateException("ring buffer is full");
    }

    public final w0 i(int i10) {
        Object[] array;
        int i11 = this.f33343i;
        int i12 = kotlin.ranges.d.i(i11 + (i11 >> 1) + 1, i10);
        if (this.f33344o == 0) {
            array = Arrays.copyOf(this.f33342e, i12);
            Intrinsics.checkNotNullExpressionValue(array, "copyOf(...)");
        } else {
            array = toArray(new Object[i12]);
        }
        return new w0(array, size());
    }

    @Override // kotlin.collections.d, java.util.Collection, java.lang.Iterable, java.util.List
    public Iterator iterator() {
        return new a();
    }

    public final boolean j() {
        if (size() == this.f33343i) {
            return true;
        }
        return false;
    }

    public final void k(int i10) {
        if (i10 >= 0) {
            if (i10 <= size()) {
                if (i10 > 0) {
                    int i11 = this.f33344o;
                    int i12 = (i11 + i10) % this.f33343i;
                    if (i11 > i12) {
                        l.v(this.f33342e, null, i11, this.f33343i);
                        l.v(this.f33342e, null, 0, i12);
                    } else {
                        l.v(this.f33342e, null, i11, i12);
                    }
                    this.f33344o = i12;
                    this.f33345p = size() - i10;
                    return;
                }
                return;
            }
            throw new IllegalArgumentException(("n shouldn't be greater than the buffer size: n = " + i10 + ", size = " + size()).toString());
        }
        throw new IllegalArgumentException(("n shouldn't be negative but it is " + i10).toString());
    }

    @Override // kotlin.collections.b, java.util.Collection
    public Object[] toArray(Object[] array) {
        Intrinsics.checkNotNullParameter(array, "array");
        if (array.length < size()) {
            array = Arrays.copyOf(array, size());
            Intrinsics.checkNotNullExpressionValue(array, "copyOf(...)");
        }
        int size = size();
        int i10 = 0;
        int i11 = 0;
        for (int i12 = this.f33344o; i11 < size && i12 < this.f33343i; i12++) {
            array[i11] = this.f33342e[i12];
            i11++;
        }
        while (i11 < size) {
            array[i11] = this.f33342e[i10];
            i11++;
            i10++;
        }
        return s.f(size, array);
    }

    public w0(int i10) {
        this(new Object[i10], 0);
    }

    @Override // kotlin.collections.b, java.util.Collection
    public Object[] toArray() {
        return toArray(new Object[size()]);
    }
}
