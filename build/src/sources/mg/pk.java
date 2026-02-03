package mg;

import android.content.Context;
import android.os.SystemClock;
import java.util.Arrays;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class pk {

    /* renamed from: a  reason: collision with root package name */
    private final gf.w f38360a;

    /* renamed from: b  reason: collision with root package name */
    private final AtomicLong f38361b = new AtomicLong(-1);

    pk(Context context, String str) {
        this.f38360a = gf.v.b(context, gf.x.a().b("mlkit:vision").a());
    }

    public static pk a(Context context) {
        return new pk(context, "mlkit:vision");
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final /* synthetic */ void b(long j10, Exception exc) {
        this.f38361b.set(j10);
    }

    public final synchronized void c(int i10, int i11, long j10, long j11) {
        AtomicLong atomicLong = this.f38361b;
        final long elapsedRealtime = SystemClock.elapsedRealtime();
        if (atomicLong.get() != -1 && elapsedRealtime - this.f38361b.get() <= TimeUnit.MINUTES.toMillis(30L)) {
            return;
        }
        this.f38360a.d(new gf.u(0, Arrays.asList(new gf.n(i10, i11, 0, j10, j11, null, null, 0, -1)))).e(new wg.f() { // from class: mg.ok
            @Override // wg.f
            public final void onFailure(Exception exc) {
                pk.this.b(elapsedRealtime, exc);
            }
        });
    }
}
