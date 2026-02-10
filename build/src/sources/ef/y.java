package ef;

import android.content.Context;
import android.os.Bundle;
import android.util.Log;
import com.google.android.gms.tasks.Task;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class y {

    /* renamed from: e */
    private static y f21637e;

    /* renamed from: a */
    private final Context f21638a;

    /* renamed from: b */
    private final ScheduledExecutorService f21639b;

    /* renamed from: c */
    private s f21640c = new s(this, null);

    /* renamed from: d */
    private int f21641d = 1;

    y(Context context, ScheduledExecutorService scheduledExecutorService) {
        this.f21639b = scheduledExecutorService;
        this.f21638a = context.getApplicationContext();
    }

    public static /* bridge */ /* synthetic */ Context a(y yVar) {
        return yVar.f21638a;
    }

    public static synchronized y b(Context context) {
        y yVar;
        synchronized (y.class) {
            try {
                if (f21637e == null) {
                    hg.e.a();
                    f21637e = new y(context, Executors.unconfigurableScheduledExecutorService(Executors.newScheduledThreadPool(1, new pf.a("MessengerIpcClient"))));
                }
                yVar = f21637e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return yVar;
    }

    public static /* bridge */ /* synthetic */ ScheduledExecutorService e(y yVar) {
        return yVar.f21639b;
    }

    private final synchronized int f() {
        int i10;
        i10 = this.f21641d;
        this.f21641d = i10 + 1;
        return i10;
    }

    private final synchronized Task g(v vVar) {
        try {
            if (Log.isLoggable("MessengerIpcClient", 3)) {
                Log.d("MessengerIpcClient", "Queueing ".concat(vVar.toString()));
            }
            if (!this.f21640c.g(vVar)) {
                s sVar = new s(this, null);
                this.f21640c = sVar;
                sVar.g(vVar);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return vVar.f21634b.a();
    }

    public final Task c(int i10, Bundle bundle) {
        return g(new u(f(), i10, bundle));
    }

    public final Task d(int i10, Bundle bundle) {
        return g(new x(f(), i10, bundle));
    }
}
