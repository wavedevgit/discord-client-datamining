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
    private final f f11282d;

    /* renamed from: e  reason: collision with root package name */
    private CloseableReference f11283e;

    /* renamed from: i  reason: collision with root package name */
    private int f11284i;

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
        if (CloseableReference.K0(this.f11283e)) {
            return;
        }
        throw new a();
    }

    @Override // r8.k, java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        CloseableReference.N(this.f11283e);
        this.f11283e = null;
        this.f11284i = -1;
        super.close();
    }

    public final void l(int i10) {
        h();
        CloseableReference closeableReference = this.f11283e;
        if (closeableReference != null) {
            Intrinsics.checkNotNull(closeableReference);
            if (i10 <= ((q) closeableReference.F0()).getSize()) {
                return;
            }
            Object obj = this.f11282d.get(i10);
            Intrinsics.checkNotNullExpressionValue(obj, "get(...)");
            q qVar = (q) obj;
            CloseableReference closeableReference2 = this.f11283e;
            if (closeableReference2 != null) {
                Intrinsics.checkNotNull(closeableReference2);
                ((q) closeableReference2.F0()).l(0, qVar, 0, this.f11284i);
                CloseableReference closeableReference3 = this.f11283e;
                Intrinsics.checkNotNull(closeableReference3);
                closeableReference3.close();
                this.f11283e = CloseableReference.V0(qVar, this.f11282d);
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // r8.k
    /* renamed from: n */
    public s a() {
        h();
        CloseableReference closeableReference = this.f11283e;
        if (closeableReference != null) {
            return new s(closeableReference, this.f11284i);
        }
        throw new IllegalStateException("Required value was null.");
    }

    @Override // r8.k
    public int size() {
        return this.f11284i;
    }

    @Override // java.io.OutputStream
    public void write(int i10) {
        write(new byte[]{(byte) i10});
    }

    public g(f pool, int i10) {
        Intrinsics.checkNotNullParameter(pool, "pool");
        if (i10 > 0) {
            this.f11282d = pool;
            this.f11284i = 0;
            this.f11283e = CloseableReference.V0(pool.get(i10), pool);
            return;
        }
        throw new IllegalStateException("Check failed.");
    }

    @Override // java.io.OutputStream
    public void write(byte[] buffer, int i10, int i11) {
        Intrinsics.checkNotNullParameter(buffer, "buffer");
        if (i10 >= 0 && i11 >= 0 && i10 + i11 <= buffer.length) {
            h();
            l(this.f11284i + i11);
            CloseableReference closeableReference = this.f11283e;
            if (closeableReference != null) {
                ((q) closeableReference.F0()).h(this.f11284i, buffer, i10, i11);
                this.f11284i += i11;
                return;
            }
            throw new IllegalStateException("Required value was null.");
        }
        throw new ArrayIndexOutOfBoundsException("length=" + buffer.length + "; regionStart=" + i10 + "; regionLength=" + i11);
    }
}
