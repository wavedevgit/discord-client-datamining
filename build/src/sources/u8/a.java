package u8;

import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends FilterInputStream {

    /* renamed from: d  reason: collision with root package name */
    private int f51208d;

    /* renamed from: e  reason: collision with root package name */
    private int f51209e;

    public a(InputStream inputStream, int i10) {
        super(inputStream);
        inputStream.getClass();
        if (i10 >= 0) {
            this.f51208d = i10;
            this.f51209e = -1;
            return;
        }
        throw new IllegalArgumentException("limit must be >= 0");
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public int available() {
        return Math.min(((FilterInputStream) this).in.available(), this.f51208d);
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public void mark(int i10) {
        if (((FilterInputStream) this).in.markSupported()) {
            ((FilterInputStream) this).in.mark(i10);
            this.f51209e = this.f51208d;
        }
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public int read() {
        if (this.f51208d == 0) {
            return -1;
        }
        int read = ((FilterInputStream) this).in.read();
        if (read != -1) {
            this.f51208d--;
        }
        return read;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public void reset() {
        if (((FilterInputStream) this).in.markSupported()) {
            if (this.f51209e != -1) {
                ((FilterInputStream) this).in.reset();
                this.f51208d = this.f51209e;
                return;
            }
            throw new IOException("mark not set");
        }
        throw new IOException("mark is not supported");
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public long skip(long j10) {
        long skip = ((FilterInputStream) this).in.skip(Math.min(j10, this.f51208d));
        this.f51208d = (int) (this.f51208d - skip);
        return skip;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        int i12 = this.f51208d;
        if (i12 == 0) {
            return -1;
        }
        int read = ((FilterInputStream) this).in.read(bArr, i10, Math.min(i11, i12));
        if (read > 0) {
            this.f51208d -= read;
        }
        return read;
    }
}
