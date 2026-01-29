package va;

import com.facebook.common.references.CloseableReference;
import java.nio.ByteBuffer;
import r8.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class s implements r8.h {

    /* renamed from: d  reason: collision with root package name */
    private final int f50802d;

    /* renamed from: e  reason: collision with root package name */
    CloseableReference f50803e;

    public s(CloseableReference closeableReference, int i10) {
        boolean z10;
        o8.j.g(closeableReference);
        if (i10 >= 0 && i10 <= ((q) closeableReference.D0()).getSize()) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        this.f50803e = closeableReference.clone();
        this.f50802d = i10;
    }

    @Override // r8.h
    public synchronized long C() {
        a();
        o8.j.g(this.f50803e);
        return ((q) this.f50803e.D0()).C();
    }

    synchronized void a() {
        if (isClosed()) {
            throw new h.a();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        CloseableReference.N(this.f50803e);
        this.f50803e = null;
    }

    @Override // r8.h
    public synchronized boolean isClosed() {
        return !CloseableReference.I0(this.f50803e);
    }

    @Override // r8.h
    public synchronized int o(int i10, byte[] bArr, int i11, int i12) {
        boolean z10;
        a();
        if (i10 + i12 <= this.f50802d) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        o8.j.g(this.f50803e);
        return ((q) this.f50803e.D0()).o(i10, bArr, i11, i12);
    }

    @Override // r8.h
    public synchronized ByteBuffer p() {
        o8.j.g(this.f50803e);
        return ((q) this.f50803e.D0()).p();
    }

    @Override // r8.h
    public synchronized int size() {
        a();
        return this.f50802d;
    }

    @Override // r8.h
    public synchronized byte w(int i10) {
        boolean z10;
        a();
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        if (i10 < this.f50802d) {
            z11 = true;
        }
        o8.j.b(Boolean.valueOf(z11));
        o8.j.g(this.f50803e);
        return ((q) this.f50803e.D0()).w(i10);
    }
}
