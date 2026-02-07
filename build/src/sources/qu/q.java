package qu;

import java.io.RandomAccessFile;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends f {

    /* renamed from: p  reason: collision with root package name */
    private final RandomAccessFile f48314p;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public q(boolean z10, RandomAccessFile randomAccessFile) {
        super(z10);
        Intrinsics.checkNotNullParameter(randomAccessFile, "randomAccessFile");
        this.f48314p = randomAccessFile;
    }

    @Override // qu.f
    protected synchronized void p() {
        this.f48314p.close();
    }

    @Override // qu.f
    protected synchronized int s(long j10, byte[] array, int i10, int i11) {
        Intrinsics.checkNotNullParameter(array, "array");
        this.f48314p.seek(j10);
        int i12 = 0;
        while (true) {
            if (i12 >= i11) {
                break;
            }
            int read = this.f48314p.read(array, i10, i11 - i12);
            if (read == -1) {
                if (i12 == 0) {
                    return -1;
                }
            } else {
                i12 += read;
            }
        }
        return i12;
    }

    @Override // qu.f
    protected synchronized long y() {
        return this.f48314p.length();
    }
}
