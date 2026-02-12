package s8;

import java.io.InputStream;
import java.io.OutputStream;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class l {

    /* renamed from: a  reason: collision with root package name */
    private final int f47877a;

    /* renamed from: b  reason: collision with root package name */
    private final a f47878b;

    public l(a aVar) {
        this(aVar, 16384);
    }

    public long a(InputStream inputStream, OutputStream outputStream) {
        byte[] bArr = (byte[]) this.f47878b.get(this.f47877a);
        long j10 = 0;
        while (true) {
            try {
                int read = inputStream.read(bArr, 0, this.f47877a);
                if (read == -1) {
                    return j10;
                }
                outputStream.write(bArr, 0, read);
                j10 += read;
            } finally {
                this.f47878b.release(bArr);
            }
        }
    }

    public l(a aVar, int i10) {
        p8.j.b(Boolean.valueOf(i10 > 0));
        this.f47877a = i10;
        this.f47878b = aVar;
    }
}
