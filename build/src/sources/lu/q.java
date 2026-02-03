package lu;

import java.io.RandomAccessFile;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class q extends f {

    /* renamed from: p  reason: collision with root package name */
    private final RandomAccessFile f37342p;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public q(boolean z10, RandomAccessFile randomAccessFile) {
        super(z10);
        Intrinsics.checkNotNullParameter(randomAccessFile, "randomAccessFile");
        this.f37342p = randomAccessFile;
    }

    @Override // lu.f
    protected synchronized void B() {
        this.f37342p.close();
    }

    @Override // lu.f
    protected synchronized int E(long j10, byte[] array, int i10, int i11) {
        Intrinsics.checkNotNullParameter(array, "array");
        this.f37342p.seek(j10);
        int i12 = 0;
        while (true) {
            if (i12 >= i11) {
                break;
            }
            int read = this.f37342p.read(array, i10, i11 - i12);
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

    @Override // lu.f
    protected synchronized long F() {
        return this.f37342p.length();
    }
}
