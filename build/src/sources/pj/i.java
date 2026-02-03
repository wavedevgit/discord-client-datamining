package pj;

import android.content.Context;
import com.google.mlkit.common.internal.MlKitComponentDiscoveryService;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f46085b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static i f46086c;

    /* renamed from: a  reason: collision with root package name */
    private qi.n f46087a;

    private i() {
    }

    public static i c() {
        boolean z10;
        i iVar;
        synchronized (f46085b) {
            if (f46086c != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.o(z10, "MlKitContext has not been initialized");
            iVar = (i) gf.q.l(f46086c);
        }
        return iVar;
    }

    public static i d(Context context) {
        i e10;
        synchronized (f46085b) {
            e10 = e(context, wg.l.f52188a);
        }
        return e10;
    }

    public static i e(Context context, Executor executor) {
        boolean z10;
        i iVar;
        synchronized (f46085b) {
            if (f46086c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.o(z10, "MlKitContext is already initialized");
            i iVar2 = new i();
            f46086c = iVar2;
            Context f10 = f(context);
            qi.n e10 = qi.n.k(executor).d(qi.f.c(f10, MlKitComponentDiscoveryService.class).b()).b(qi.c.q(f10, Context.class, new Class[0])).b(qi.c.q(iVar2, i.class, new Class[0])).e();
            iVar2.f46087a = e10;
            e10.n(true);
            iVar = f46086c;
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
        if (f46086c == this) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.o(z10, "MlKitContext has been deleted");
        gf.q.l(this.f46087a);
        return this.f46087a.a(cls);
    }

    public Context b() {
        return (Context) a(Context.class);
    }
}
