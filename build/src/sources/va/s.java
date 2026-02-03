package va;

import com.facebook.common.references.CloseableReference;
import java.nio.ByteBuffer;
import r8.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class s implements r8.h {

    /* renamed from: d  reason: collision with root package name */
    private final int f51270d;

    /* renamed from: e  reason: collision with root package name */
    CloseableReference f51271e;

    public s(CloseableReference closeableReference, int i10) {
        boolean z10;
        o8.j.g(closeableReference);
        if (i10 >= 0 && i10 <= ((q) closeableReference.C0()).getSize()) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        this.f51271e = closeableReference.clone();
        this.f51270d = i10;
    }

    @Override // r8.h
    public synchronized long C() {
        a();
        o8.j.g(this.f51271e);
        return ((q) this.f51271e.C0()).C();
    }

    synchronized void a() {
        if (isClosed()) {
            throw new h.a();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        CloseableReference.N(this.f51271e);
        this.f51271e = null;
    }

    @Override // r8.h
    public synchronized boolean isClosed() {
        return !CloseableReference.F0(this.f51271e);
    }

    @Override // r8.h
    public synchronized int o(int i10, byte[] bArr, int i11, int i12) {
        boolean z10;
        a();
        if (i10 + i12 <= this.f51270d) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        o8.j.g(this.f51271e);
        return ((q) this.f51271e.C0()).o(i10, bArr, i11, i12);
    }

    @Override // r8.h
    public synchronized ByteBuffer p() {
        o8.j.g(this.f51271e);
        return ((q) this.f51271e.C0()).p();
    }

    @Override // r8.h
    public synchronized int size() {
        a();
        return this.f51270d;
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
        if (i10 < this.f51270d) {
            z11 = true;
        }
        o8.j.b(Boolean.valueOf(z11));
        o8.j.g(this.f51271e);
        return ((q) this.f51271e.C0()).w(i10);
    }
}
