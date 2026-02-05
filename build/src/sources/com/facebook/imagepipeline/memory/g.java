package com.facebook.imagepipeline.memory;

import com.facebook.common.references.CloseableReference;
import kotlin.jvm.internal.DefaultConstructorMarker;
import kotlin.jvm.internal.Intrinsics;
import r8.k;
import va.q;
import va.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g extends k {

    /* renamed from: d  reason: collision with root package name */
    private final f f10635d;

    /* renamed from: e  reason: collision with root package name */
    private CloseableReference f10636e;

    /* renamed from: i  reason: collision with root package name */
    private int f10637i;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static final class a extends RuntimeException {
        public a() {
            super("OutputStream no longer valid");
        }
    }

    public /* synthetic */ g(f fVar, int i10, int i11, DefaultConstructorMarker defaultConstructorMarker) {
        this(fVar, (i11 & 2) != 0 ? fVar.C() : i10);
    }

    private final void h() {
        if (CloseableReference.K0(this.f10636e)) {
            return;
        }
        throw new a();
    }

    @Override // r8.k, java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.N(this.f10636e);
        this.f10636e = null;
        this.f10637i = -1;
        super.close();
    }

    public final void k(int i10) {
        h();
        CloseableReference closeableReference = this.f10636e;
        if (closeableReference != null) {
            Intrinsics.checkNotNull(closeableReference);
            if (i10 <= ((q) closeableReference.E0()).getSize()) {
                return;
            }
            Object obj = this.f10635d.get(i10);
            Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
            q qVar = (q) obj;
            CloseableReference closeableReference2 = this.f10636e;
            if (closeableReference2 != null) {
                Intrinsics.checkNotNull(closeableReference2);
                ((q) closeableReference2.E0()).k(0, qVar, 0, this.f10637i);
                CloseableReference closeableReference3 = this.f10636e;
                Intrinsics.checkNotNull(closeableReference3);
                closeableReference3.close();
                this.f10636e = CloseableReference.V0(qVar, this.f10635d);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // r8.k
    /* renamed from: m */
    public s a() {
        h();
        CloseableReference closeableReference = this.f10636e;
        if (closeableReference != null) {
            return new s(closeableReference, this.f10637i);
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // r8.k
    public int size() {
        return this.f10637i;
    }

    @Override // java.io.OutputStream
    public void write(int i10) {
        write(new byte[]{(byte) i10});
    }

    public g(f pool, int i10) {
        Intrinsics.checkNotNullParameter(pool, "pool");
        if (i10 > 0) {
            this.f10635d = pool;
            this.f10637i = 0;
            this.f10636e = CloseableReference.V0(pool.get(i10), pool);
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // java.io.OutputStream
    public void write(byte[] buffer, int i10, int i11) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (i10 >= 0 && i11 >= 0 && i10 + i11 <= buffer.length) {
            h();
            k(this.f10637i + i11);
            CloseableReference closeableReference = this.f10636e;
            if (closeableReference != null) {
                ((q) closeableReference.E0()).h(this.f10637i, buffer, i10, i11);
                this.f10637i += i11;
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new ArrayIndexOutOfBoundsException("length=" + buffer.length + "; regionStart=" + i10 + "; regionLength=" + i11);
    }
}
