package pg;

import android.content.Context;
import android.os.SystemClock;
import java.util.Arrays;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class sd {

    /* renamed from: a  reason: collision with root package name */
    private final gf.w f44781a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicLong f44782b = new AtomicLong(-1);

    sd(Context context, String str) {
        this.f44781a = gf.v.b(context, gf.x.a().b("mlkit:vision").a());
    }

    public static sd a(Context context) {
        return new sd(context, "mlkit:vision");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void b(long j10, Exception exc) {
        this.f44782b.set(j10);
    }

    public final synchronized void c(int i10, int i11, long j10, long j11) {
        final long elapsedRealtime = SystemClock.elapsedRealtime();
        if (this.f44782b.get() != -1 && elapsedRealtime - this.f44782b.get() <= TimeUnit.MINUTES.toMillis(30L)) {
            return;
        }
        this.f44781a.d(new gf.u(0, Arrays.asList(new gf.n(i10, i11, 0, j10, j11, null, null, 0)))).e(new yg.f() { // from class: pg.rd
            @Override // yg.f
            public final void onFailure(Exception exc) {
                sd.this.b(elapsedRealtime, exc);
            }
        });
    }
}
