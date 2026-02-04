package wj;

import android.os.SystemClock;
import gf.i;
import gf.q;
import java.util.LinkedList;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class a {

    /* renamed from: c  reason: collision with root package name */
    private static final i f52462c = new i("StreamingFormatChecker", "");

    /* renamed from: a  reason: collision with root package name */
    private final LinkedList f52463a = new LinkedList();

    /* renamed from: b  reason: collision with root package name */
    private long f52464b = -1;

    public void a(vj.a aVar) {
        if (aVar.g() == -1) {
            long elapsedRealtime = SystemClock.elapsedRealtime();
            this.f52463a.add(Long.valueOf(elapsedRealtime));
            if (this.f52463a.size() > 5) {
                this.f52463a.removeFirst();
            }
            if (this.f52463a.size() == 5 && elapsedRealtime - ((Long) q.l((Long) this.f52463a.peekFirst())).longValue() < 5000) {
                long j10 = this.f52464b;
                if (j10 == -1 || elapsedRealtime - j10 >= TimeUnit.SECONDS.toMillis(5L)) {
                    this.f52464b = elapsedRealtime;
                    f52462c.f("StreamingFormatChecker", "ML Kit has detected that you seem to pass camera frames to the detector as a Bitmap object. This is inefficient. Please use YUV_420_888 format for camera2 API or NV21 format for (legacy) camera API and directly pass down the byte array to ML Kit.");
                }
            }
        }
    }
}
