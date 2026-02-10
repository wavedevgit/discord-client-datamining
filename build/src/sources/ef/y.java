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
    private static y f22804e;

    /* renamed from: a */
    private final Context f22805a;

    /* renamed from: b */
    private final ScheduledExecutorService f22806b;

    /* renamed from: c */
    private s f22807c = new s(this, null);

    /* renamed from: d */
    private int f22808d = 1;

    y(Context context, ScheduledExecutorService scheduledExecutorService) {
        this.f22806b = scheduledExecutorService;
        this.f22805a = context.getApplicationContext();
    }

    public static /* bridge */ /* synthetic */ Context a(y yVar) {
        return yVar.f22805a;
    }

    public static synchronized y b(Context context) {
        y yVar;
        synchronized (y.class) {
            try {
                if (f22804e == null) {
                    hg.e.a();
                    f22804e = new y(context, Executors.unconfigurableScheduledExecutorService(Executors.newScheduledThreadPool(1, new pf.a("MessengerIpcClient"))));
                }
                yVar = f22804e;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return yVar;
    }

    public static /* bridge */ /* synthetic */ ScheduledExecutorService e(y yVar) {
        return yVar.f22806b;
    }

    private final synchronized int f() {
        int i10;
        i10 = this.f22808d;
        this.f22808d = i10 + 1;
        return i10;
    }

    private final synchronized Task g(v vVar) {
        try {
            if (Log.isLoggable("MessengerIpcClient", 3)) {
                Log.d("MessengerIpcClient", "Queueing ".concat(vVar.toString()));
            }
            if (!this.f22807c.g(vVar)) {
                s sVar = new s(this, null);
                this.f22807c = sVar;
                sVar.g(vVar);
            }
        } catch (Throwable th2) {
            throw th2;
        }
        return vVar.f22801b.a();
    }

    public final Task c(int i10, Bundle bundle) {
        return g(new u(f(), i10, bundle));
    }

    public final Task d(int i10, Bundle bundle) {
        return g(new x(f(), i10, bundle));
    }
}
