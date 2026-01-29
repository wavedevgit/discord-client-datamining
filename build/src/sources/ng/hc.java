package ng;

import android.os.SystemClock;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class hc {
    public static void a(wb wbVar, int i10, int i11, long j10, int i12, int i13, int i14, int i15) {
        wbVar.c(b(i10, i11, j10, i12, i13, i14, i15), e8.INPUT_IMAGE_CONSTRUCTION);
    }

    private static gc b(int i10, int i11, long j10, int i12, int i13, int i14, int i15) {
        return new gc(i10, i11, i14, i12, i13, SystemClock.elapsedRealtime() - j10, i15);
    }
}
