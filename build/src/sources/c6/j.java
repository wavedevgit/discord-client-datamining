package c6;

import com.facebook.react.fabric.mounting.mountitems.IntBufferBatchMountItem;
import java.io.ByteArrayOutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j extends ByteArrayOutputStream {

    /* renamed from: d  reason: collision with root package name */
    private final c f7260d;

    public j(c cVar, int i10) {
        this.f7260d = cVar;
        ((ByteArrayOutputStream) this).buf = cVar.a(Math.max(i10, (int) IntBufferBatchMountItem.INSTRUCTION_UPDATE_EVENT_EMITTER));
    }

    private void a(int i10) {
        int i11 = ((ByteArrayOutputStream) this).count;
        if (i11 + i10 <= ((ByteArrayOutputStream) this).buf.length) {
            return;
        }
        byte[] a10 = this.f7260d.a((i11 + i10) * 2);
        System.arraycopy(((ByteArrayOutputStream) this).buf, 0, a10, 0, ((ByteArrayOutputStream) this).count);
        this.f7260d.b(((ByteArrayOutputStream) this).buf);
        ((ByteArrayOutputStream) this).buf = a10;
    }

    @Override // java.io.ByteArrayOutputStream, java.io.OutputStream, java.io.Closeable, java.lang.AutoCloseable
    public void close() {
        this.f7260d.b(((ByteArrayOutputStream) this).buf);
        ((ByteArrayOutputStream) this).buf = null;
        super.close();
    }

    public void finalize() {
        this.f7260d.b(((ByteArrayOutputStream) this).buf);
    }

    @Override // java.io.ByteArrayOutputStream, java.io.OutputStream
    public synchronized void write(byte[] bArr, int i10, int i11) {
        a(i11);
        super.write(bArr, i10, i11);
    }

    @Override // java.io.ByteArrayOutputStream, java.io.OutputStream
    public synchronized void write(int i10) {
        a(1);
        super.write(i10);
    }
}
