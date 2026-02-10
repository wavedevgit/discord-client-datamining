package wa;

import android.os.SharedMemory;
import android.system.ErrnoException;
import android.util.Log;
import java.io.Closeable;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a implements q, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private SharedMemory f52386d;

    /* renamed from: e  reason: collision with root package name */
    private ByteBuffer f52387e;

    /* renamed from: i  reason: collision with root package name */
    private final long f52388i;

    public a(int i10) {
        boolean z10;
        if (i10 > 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.b(Boolean.valueOf(z10));
        try {
            SharedMemory create = SharedMemory.create("AshmemMemoryChunk", i10);
            this.f52386d = create;
            this.f52387e = create.mapReadWrite();
            this.f52388i = System.identityHashCode(this);
        } catch (ErrnoException e10) {
            throw new RuntimeException("Fail to create AshmemMemory", e10);
        }
    }

    private void m(int i10, q qVar, int i11, int i12) {
        if (qVar instanceof a) {
            p8.j.i(!isClosed());
            p8.j.i(!qVar.isClosed());
            p8.j.g(this.f52387e);
            p8.j.g(qVar.r());
            r.b(i10, qVar.getSize(), i11, i12, getSize());
            this.f52387e.position(i10);
            qVar.r().position(i11);
            byte[] bArr = new byte[i12];
            this.f52387e.get(bArr, 0, i12);
            qVar.r().put(bArr, 0, i12);
            return;
        }
        throw new IllegalArgumentException("Cannot copy two incompatible MemoryChunks");
    }

    @Override // wa.q
    public synchronized byte B(int i10) {
        boolean z10;
        boolean z11 = true;
        p8.j.i(!isClosed());
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        p8.j.b(Boolean.valueOf(z10));
        if (i10 >= getSize()) {
            z11 = false;
        }
        p8.j.b(Boolean.valueOf(z11));
        p8.j.g(this.f52387e);
        return this.f52387e.get(i10);
    }

    @Override // wa.q
    public long G() {
        throw new UnsupportedOperationException("Cannot get the pointer of an  AshmemMemoryChunk");
    }

    @Override // wa.q
    public long a() {
        return this.f52388i;
    }

    @Override // wa.q, java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        try {
            if (!isClosed()) {
                SharedMemory sharedMemory = this.f52386d;
                if (sharedMemory != null) {
                    sharedMemory.close();
                }
                ByteBuffer byteBuffer = this.f52387e;
                if (byteBuffer != null) {
                    SharedMemory.unmap(byteBuffer);
                }
                this.f52387e = null;
                this.f52386d = null;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // wa.q
    public int getSize() {
        p8.j.g(this.f52386d);
        return this.f52386d.getSize();
    }

    @Override // wa.q
    public synchronized int h(int i10, byte[] bArr, int i11, int i12) {
        int a10;
        p8.j.g(bArr);
        p8.j.g(this.f52387e);
        a10 = r.a(i10, i12, getSize());
        r.b(i10, bArr.length, i11, a10, getSize());
        this.f52387e.position(i10);
        this.f52387e.put(bArr, i11, a10);
        return a10;
    }

    @Override // wa.q
    public void i(int i10, q qVar, int i11, int i12) {
        p8.j.g(qVar);
        if (qVar.a() == a()) {
            Log.w("AshmemMemoryChunk", "Copying from AshmemMemoryChunk " + Long.toHexString(a()) + " to AshmemMemoryChunk " + Long.toHexString(qVar.a()) + " which are the same ");
            p8.j.b(Boolean.FALSE);
        }
        if (qVar.a() < a()) {
            synchronized (qVar) {
                synchronized (this) {
                    m(i10, qVar, i11, i12);
                }
            }
            return;
        }
        synchronized (this) {
            synchronized (qVar) {
                m(i10, qVar, i11, i12);
            }
        }
    }

    @Override // wa.q
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f52387e != null) {
            if (this.f52386d != null) {
                z10 = false;
            }
        }
        z10 = true;
        return z10;
    }

    @Override // wa.q
    public synchronized int q(int i10, byte[] bArr, int i11, int i12) {
        int a10;
        p8.j.g(bArr);
        p8.j.g(this.f52387e);
        a10 = r.a(i10, i12, getSize());
        r.b(i10, bArr.length, i11, a10, getSize());
        this.f52387e.position(i10);
        this.f52387e.get(bArr, i11, a10);
        return a10;
    }

    @Override // wa.q
    public ByteBuffer r() {
        return this.f52387e;
    }
}
