package df;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y {

    /* renamed from: e */
    private static y f20793e;

    /* renamed from: a */
    private final Context f20794a;

    /* renamed from: b */
    private final ScheduledExecutorService f20795b;

    /* renamed from: c */
    private s f20796c = new s(this, null);

    /* renamed from: d */
    private int f20797d = 1;

    y(Context context, ScheduledExecutorService scheduledExecutorService) {
        this.f20795b = scheduledExecutorService;
        this.f20794a = context.getApplicationContext();
    }

    public static /* bridge */ /* synthetic */ Context a(y yVar) {
        return yVar.f20794a;
    }

    public static synchronized y b(Context context) {
        y yVar;
        synchronized (y.class) {
            try {
                if (f20793e == null) {
                    gg.e.a();
                    f20793e = new y(context, Executors.unconfigurableScheduledExecutorService(Executors.newScheduledThreadPool(1, new of.a("MessengerIpcClient"))));
                }
                yVar = f20793e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return yVar;
    }

    public static /* bridge */ /* synthetic */ ScheduledExecutorService e(y yVar) {
        return yVar.f20795b;
    }

    private final synchronized int f() {
        int i10;
        i10 = this.f20797d;
        this.f20797d = i10 + 1;
        return i10;
    }

    private final synchronized Task g(v vVar) {
        try {
            if (Log.isLoggable("MessengerIpcClient", 3)) {
                Log.d("MessengerIpcClient", "Queueing ".concat(vVar.toString()));
            }
            if (!this.f20796c.g(vVar)) {
                s sVar = new s(this, null);
                this.f20796c = sVar;
                sVar.g(vVar);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return vVar.f20790b.a();
    }

    public final Task c(int i10, Bundle bundle) {
        return g(new u(f(), i10, bundle));
    }

    public final Task d(int i10, Bundle bundle) {
        return g(new x(f(), i10, bundle));
    }
}
