package wa;

import com.facebook.common.references.CloseableReference;
import java.nio.ByteBuffer;
import s8.h;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class s implements s8.h {

    /* renamed from: d  reason: collision with root package name */
    private final int f52426d;

    /* renamed from: e  reason: collision with root package name */
    CloseableReference f52427e;

    public s(CloseableReference closeableReference, int i10) {
        boolean z10;
        p8.j.g(closeableReference);
        if (i10 >= 0 && i10 <= ((q) closeableReference.J()).getSize()) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.b(Boolean.valueOf(z10));
        this.f52427e = closeableReference.clone();
        this.f52426d = i10;
    }

    @Override // s8.h
    public synchronized byte B(int i10) {
        boolean z10;
        a();
        boolean z11 = false;
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.b(Boolean.valueOf(z10));
        if (i10 < this.f52426d) {
            z11 = true;
        }
        p8.j.b(Boolean.valueOf(z11));
        p8.j.g(this.f52427e);
        return ((q) this.f52427e.J()).B(i10);
    }

    @Override // s8.h
    public synchronized long G() {
        a();
        p8.j.g(this.f52427e);
        return ((q) this.f52427e.J()).G();
    }

    synchronized void a() {
        if (isClosed()) {
            throw new h.a();
        }
    }

    @Override // java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        CloseableReference.z(this.f52427e);
        this.f52427e = null;
    }

    @Override // s8.h
    public synchronized boolean isClosed() {
        return !CloseableReference.C0(this.f52427e);
    }

    @Override // s8.h
    public synchronized int q(int i10, byte[] bArr, int i11, int i12) {
        boolean z10;
        a();
        if (i10 + i12 <= this.f52426d) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.b(Boolean.valueOf(z10));
        p8.j.g(this.f52427e);
        return ((q) this.f52427e.J()).q(i10, bArr, i11, i12);
    }

    @Override // s8.h
    public synchronized ByteBuffer r() {
        p8.j.g(this.f52427e);
        return ((q) this.f52427e.J()).r();
    }

    @Override // s8.h
    public synchronized int size() {
        a();
        return this.f52426d;
    }
}
