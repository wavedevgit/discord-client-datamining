package va;

import com.facebook.common.references.CloseableReference;
import java.nio.ByteBuffer;
import r8.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class s implements r8.h {

    /* renamed from: d  reason: collision with root package name */
    private final int f52369d;

    /* renamed from: e  reason: collision with root package name */
    CloseableReference f52370e;

    public s(CloseableReference closeableReference, int i10) {
        boolean z10;
        o8.j.g(closeableReference);
        if (i10 >= 0 && i10 <= ((q) closeableReference.J()).getSize()) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        this.f52370e = closeableReference.clone();
        this.f52369d = i10;
    }

    @Override // r8.h
    public synchronized byte B(int i10) {
        boolean z10;
        a();
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        if (i10 < this.f52369d) {
            z11 = true;
        }
        o8.j.b(Boolean.valueOf(z11));
        o8.j.g(this.f52370e);
        return ((q) this.f52370e.J()).B(i10);
    }

    @Override // r8.h
    public synchronized long G() {
        a();
        o8.j.g(this.f52370e);
        return ((q) this.f52370e.J()).G();
    }

    synchronized void a() {
        if (isClosed()) {
            throw new h.a();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        CloseableReference.z(this.f52370e);
        this.f52370e = null;
    }

    @Override // r8.h
    public synchronized boolean isClosed() {
        return !CloseableReference.I0(this.f52370e);
    }

    @Override // r8.h
    public synchronized int q(int i10, byte[] bArr, int i11, int i12) {
        boolean z10;
        a();
        if (i10 + i12 <= this.f52369d) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        o8.j.g(this.f52370e);
        return ((q) this.f52370e.J()).q(i10, bArr, i11, i12);
    }

    @Override // r8.h
    public synchronized ByteBuffer r() {
        o8.j.g(this.f52370e);
        return ((q) this.f52370e.J()).r();
    }

    @Override // r8.h
    public synchronized int size() {
        a();
        return this.f52369d;
    }
}
