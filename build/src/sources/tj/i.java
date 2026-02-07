package tj;

import android.content.Context;
import com.google.mlkit.common.internal.MlKitComponentDiscoveryService;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f50671b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static i f50672c;

    /* renamed from: a  reason: collision with root package name */
    private ui.n f50673a;

    private i() {
    }

    public static i c() {
        boolean z10;
        i iVar;
        synchronized (f50671b) {
            if (f50672c != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.o(z10, "MlKitContext has not been initialized");
            iVar = (i) gf.q.l(f50672c);
        }
        return iVar;
    }

    public static i d(Context context) {
        i e10;
        synchronized (f50671b) {
            e10 = e(context, yg.l.f55384a);
        }
        return e10;
    }

    public static i e(Context context, Executor executor) {
        boolean z10;
        i iVar;
        synchronized (f50671b) {
            if (f50672c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.o(z10, "MlKitContext is already initialized");
            i iVar2 = new i();
            f50672c = iVar2;
            Context f10 = f(context);
            ui.n e10 = ui.n.k(executor).d(ui.f.c(f10, MlKitComponentDiscoveryService.class).b()).b(ui.c.q(f10, Context.class, new Class[0])).b(ui.c.q(iVar2, i.class, new Class[0])).e();
            iVar2.f50673a = e10;
            e10.n(true);
            iVar = f50672c;
        }
        return iVar;
    }

    private static Context f(Context context) {
        Context applicationContext = context.getApplicationContext();
        if (applicationContext != null) {
            return applicationContext;
        }
        return context;
    }

    public Object a(Class cls) {
        boolean z10;
        if (f50672c == this) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.o(z10, "MlKitContext has been deleted");
        gf.q.l(this.f50673a);
        return this.f50673a.a(cls);
    }

    public Context b() {
        return (Context) a(Context.class);
    }
}
