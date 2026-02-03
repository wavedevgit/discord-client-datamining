package u8;

import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends FilterInputStream {

    /* renamed from: d  reason: collision with root package name */
    private int f50439d;

    /* renamed from: e  reason: collision with root package name */
    private int f50440e;

    public a(InputStream inputStream, int i10) {
        super(inputStream);
        inputStream.getClass();
        if (i10 >= 0) {
            this.f50439d = i10;
            this.f50440e = -1;
            return;
        }
        throw new IllegalArgumentException("limit must be >= 0");
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public int available() {
        return Math.min(((FilterInputStream) this).in.available(), this.f50439d);
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public void mark(int i10) {
        if (((FilterInputStream) this).in.markSupported()) {
            ((FilterInputStream) this).in.mark(i10);
            this.f50440e = this.f50439d;
        }
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public int read() {
        if (this.f50439d == 0) {
            return -1;
        }
        int read = ((FilterInputStream) this).in.read();
        if (read != -1) {
            this.f50439d--;
        }
        return read;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public void reset() {
        if (((FilterInputStream) this).in.markSupported()) {
            if (this.f50440e != -1) {
                ((FilterInputStream) this).in.reset();
                this.f50439d = this.f50440e;
                return;
            }
            throw new IOException("mark not set");
        }
        throw new IOException("mark is not supported");
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public long skip(long j10) {
        long skip = ((FilterInputStream) this).in.skip(Math.min(j10, this.f50439d));
        this.f50439d = (int) (this.f50439d - skip);
        return skip;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        int i12 = this.f50439d;
        if (i12 == 0) {
            return -1;
        }
        int read = ((FilterInputStream) this).in.read(bArr, i10, Math.min(i11, i12));
        if (read > 0) {
            this.f50439d -= read;
        }
        return read;
    }
}
