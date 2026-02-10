package kotlin.collections;

import java.util.Arrays;
import java.util.Iterator;
import java.util.RandomAccess;
import kotlin.jvm.internal.Intrinsics;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class w0 extends d implements RandomAccess {

    /* renamed from: e  reason: collision with root package name */
    private final Object[] f32047e;

    /* renamed from: i  reason: collision with root package name */
    private final int f32048i;

    /* renamed from: o  reason: collision with root package name */
    private int f32049o;

    /* renamed from: p  reason: collision with root package name */
    private int f32050p;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class a extends c {

        /* renamed from: i  reason: collision with root package name */
        private int f32051i;

        /* renamed from: o  reason: collision with root package name */
        private int f32052o;

        a() {
            this.f32051i = w0.this.size();
            this.f32052o = w0.this.f32049o;
        }

        @Override // kotlin.collections.c
        protected void a() {
            if (this.f32051i == 0) {
                b();
                return;
            }
            c(w0.this.f32047e[this.f32052o]);
            this.f32052o = (this.f32052o + 1) % w0.this.f32048i;
            this.f32051i--;
        }
    }

    public w0(Object[] buffer, int i10) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        this.f32047e = buffer;
        if (i10 >= 0) {
            if (i10 <= buffer.length) {
                this.f32048i = buffer.length;
                this.f32050p = i10;
                return;
            }
            throw new IllegalArgumentException(("ring buffer filled size: " + i10 + " cannot be larger than the buffer size: " + buffer.length).toString());
        }
        throw new IllegalArgumentException(("ring buffer filled size should not be negative but it is " + i10).toString());
    }

    @Override // kotlin.collections.b
    public int c() {
        return this.f32050p;
    }

    @Override // kotlin.collections.d, java.util.List
    public Object get(int i10) {
        d.f32021d.b(i10, size());
        return this.f32047e[(this.f32049o + i10) % this.f32048i];
    }

    public final void i(Object obj) {
        if (!k()) {
            this.f32047e[(this.f32049o + size()) % this.f32048i] = obj;
            this.f32050p = size() + 1;
            return;
        }
        throw new IllegalStateException("ring buffer is full");
    }

    @Override // kotlin.collections.d, java.util.Collection, java.lang.Iterable, java.util.List
    public Iterator iterator() {
        return new a();
    }

    public final w0 j(int i10) {
        Object[] array;
        int i11 = this.f32048i;
        int i12 = kotlin.ranges.d.i(i11 + (i11 >> 1) + 1, i10);
        if (this.f32049o == 0) {
            array = Arrays.copyOf(this.f32047e, i12);
            Intrinsics.checkNotNullExpressionValue(array, "copyOf(...)");
        } else {
            array = toArray(new Object[i12]);
        }
        return new w0(array, size());
    }

    public final boolean k() {
        if (size() == this.f32048i) {
            return true;
        }
        return false;
    }

    public final void l(int i10) {
        if (i10 >= 0) {
            if (i10 <= size()) {
                if (i10 > 0) {
                    int i11 = this.f32049o;
                    int i12 = (i11 + i10) % this.f32048i;
                    if (i11 > i12) {
                        l.v(this.f32047e, null, i11, this.f32048i);
                        l.v(this.f32047e, null, 0, i12);
                    } else {
                        l.v(this.f32047e, null, i11, i12);
                    }
                    this.f32049o = i12;
                    this.f32050p = size() - i10;
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
        for (int i12 = this.f32049o; i11 < size && i12 < this.f32048i; i12++) {
            array[i11] = this.f32047e[i12];
            i11++;
        }
        while (i11 < size) {
            array[i11] = this.f32047e[i10];
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
