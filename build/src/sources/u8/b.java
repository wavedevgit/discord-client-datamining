package u8;

import java.io.FilterInputStream;
import java.io.IOException;
import java.io.InputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class b extends FilterInputStream {

    /* renamed from: d  reason: collision with root package name */
    private final byte[] f51210d;

    /* renamed from: e  reason: collision with root package name */
    private int f51211e;

    /* renamed from: i  reason: collision with root package name */
    private int f51212i;

    public b(InputStream inputStream, byte[] bArr) {
        super(inputStream);
        inputStream.getClass();
        bArr.getClass();
        this.f51210d = bArr;
    }

    private int a() {
        int i10 = this.f51211e;
        byte[] bArr = this.f51210d;
        if (i10 >= bArr.length) {
            return -1;
        }
        this.f51211e = i10 + 1;
        return bArr[i10] & 255;
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public void mark(int i10) {
        if (((FilterInputStream) this).in.markSupported()) {
            super.mark(i10);
            this.f51212i = this.f51211e;
        }
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public int read() {
        int read = ((FilterInputStream) this).in.read();
        return read != -1 ? read : a();
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public void reset() {
        if (((FilterInputStream) this).in.markSupported()) {
            ((FilterInputStream) this).in.reset();
            this.f51211e = this.f51212i;
            return;
        }
        throw new IOException("mark is not supported");
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public int read(byte[] bArr) {
        return read(bArr, 0, bArr.length);
    }

    @Override // java.io.FilterInputStream, java.io.InputStream
    public int read(byte[] bArr, int i10, int i11) {
        int read = ((FilterInputStream) this).in.read(bArr, i10, i11);
        if (read != -1) {
            return read;
        }
        int i12 = 0;
        if (i11 == 0) {
            return 0;
        }
        while (i12 < i11) {
            int a10 = a();
            if (a10 == -1) {
                break;
            }
            bArr[i10 + i12] = (byte) a10;
            i12++;
        }
        if (i12 > 0) {
            return i12;
        }
        return -1;
    }
}
