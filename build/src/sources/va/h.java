package va;

import android.util.Log;
import java.io.Closeable;
import java.nio.ByteBuffer;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements q, Closeable {

    /* renamed from: d  reason: collision with root package name */
    private ByteBuffer f51938d;

    /* renamed from: e  reason: collision with root package name */
    private final int f51939e;

    /* renamed from: i  reason: collision with root package name */
    private final long f51940i = System.identityHashCode(this);

    public h(int i10) {
        this.f51938d = ByteBuffer.allocateDirect(i10);
        this.f51939e = i10;
    }

    private void m(int i10, q qVar, int i11, int i12) {
        if (qVar instanceof h) {
            o8.j.i(!isClosed());
            o8.j.i(!qVar.isClosed());
            o8.j.g(this.f51938d);
            r.b(i10, qVar.getSize(), i11, i12, this.f51939e);
            this.f51938d.position(i10);
            ByteBuffer byteBuffer = (ByteBuffer) o8.j.g(qVar.q());
            byteBuffer.position(i11);
            byte[] bArr = new byte[i12];
            this.f51938d.get(bArr, 0, i12);
            byteBuffer.put(bArr, 0, i12);
            return;
        }
        throw new IllegalArgumentException("Cannot copy two incompatible MemoryChunks");
    }

    @Override // va.q
    public long C() {
        throw new UnsupportedOperationException("Cannot get the pointer of a BufferMemoryChunk");
    }

    @Override // va.q
    public long a() {
        return this.f51940i;
    }

    @Override // va.q, java.io.Closeable, java.lang.AutoCloseable
    public synchronized void close() {
        this.f51938d = null;
    }

    @Override // va.q
    public int getSize() {
        return this.f51939e;
    }

    @Override // va.q
    public synchronized int h(int i10, byte[] bArr, int i11, int i12) {
        int a10;
        o8.j.g(bArr);
        o8.j.i(!isClosed());
        o8.j.g(this.f51938d);
        a10 = r.a(i10, i12, this.f51939e);
        r.b(i10, bArr.length, i11, a10, this.f51939e);
        this.f51938d.position(i10);
        this.f51938d.put(bArr, i11, a10);
        return a10;
    }

    @Override // va.q
    public synchronized boolean isClosed() {
        boolean z10;
        if (this.f51938d == null) {
            z10 = true;
        } else {
            z10 = false;
        }
        return z10;
    }

    @Override // va.q
    public void k(int i10, q qVar, int i11, int i12) {
        o8.j.g(qVar);
        if (qVar.a() == a()) {
            Log.w("BufferMemoryChunk", "Copying from BufferMemoryChunk " + Long.toHexString(a()) + " to BufferMemoryChunk " + Long.toHexString(qVar.a()) + " which are the same ");
            o8.j.b(Boolean.FALSE);
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

    @Override // va.q
    public synchronized int p(int i10, byte[] bArr, int i11, int i12) {
        int a10;
        o8.j.g(bArr);
        o8.j.i(!isClosed());
        o8.j.g(this.f51938d);
        a10 = r.a(i10, i12, this.f51939e);
        r.b(i10, bArr.length, i11, a10, this.f51939e);
        this.f51938d.position(i10);
        this.f51938d.get(bArr, i11, a10);
        return a10;
    }

    @Override // va.q
    public synchronized ByteBuffer q() {
        return this.f51938d;
    }

    @Override // va.q
    public synchronized byte x(int i10) {
        boolean z10;
        boolean z11 = true;
        o8.j.i(!isClosed());
        if (i10 >= 0) {
            z10 = true;
        } else {
            z10 = false;
        }
        o8.j.b(Boolean.valueOf(z10));
        if (i10 >= this.f51939e) {
            z11 = false;
        }
        o8.j.b(Boolean.valueOf(z11));
        o8.j.g(this.f51938d);
        return this.f51938d.get(i10);
    }
}
