package ou;

import java.io.RandomAccessFile;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends f {

    /* renamed from: p  reason: collision with root package name */
    private final RandomAccessFile f44550p;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public q(boolean z10, RandomAccessFile randomAccessFile) {
        super(z10);
        Intrinsics.checkNotNullParameter(randomAccessFile, "randomAccessFile");
        this.f44550p = randomAccessFile;
    }

    @Override // ou.f
    protected synchronized int E(long j10, byte[] array, int i10, int i11) {
        Intrinsics.checkNotNullParameter(array, "array");
        this.f44550p.seek(j10);
        int i12 = 0;
        while (true) {
            if (i12 >= i11) {
                break;
            }
            int read = this.f44550p.read(array, i10, i11 - i12);
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

    @Override // ou.f
    protected synchronized long F() {
        return this.f44550p.length();
    }

    @Override // ou.f
    protected synchronized void y() {
        this.f44550p.close();
    }
}
