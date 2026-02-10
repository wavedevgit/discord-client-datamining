package wj;

import android.content.Context;
import com.google.mlkit.common.internal.MlKitComponentDiscoveryService;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f52788b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static i f52789c;

    /* renamed from: a  reason: collision with root package name */
    private xi.n f52790a;

    private i() {
    }

    public static i c() {
        boolean z10;
        i iVar;
        synchronized (f52788b) {
            if (f52789c != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            hf.q.o(z10, "MlKitContext has not been initialized");
            iVar = (i) hf.q.l(f52789c);
        }
        return iVar;
    }

    public static i d(Context context) {
        i e10;
        synchronized (f52788b) {
            e10 = e(context, zg.l.f56448a);
        }
        return e10;
    }

    public static i e(Context context, Executor executor) {
        boolean z10;
        i iVar;
        synchronized (f52788b) {
            if (f52789c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            hf.q.o(z10, "MlKitContext is already initialized");
            i iVar2 = new i();
            f52789c = iVar2;
            Context f10 = f(context);
            xi.n e10 = xi.n.k(executor).d(xi.f.c(f10, MlKitComponentDiscoveryService.class).b()).b(xi.c.q(f10, Context.class, new Class[0])).b(xi.c.q(iVar2, i.class, new Class[0])).e();
            iVar2.f52790a = e10;
            e10.n(true);
            iVar = f52789c;
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
        if (f52789c == this) {
            z10 = true;
        } else {
            z10 = false;
        }
        hf.q.o(z10, "MlKitContext has been deleted");
        hf.q.l(this.f52790a);
        return this.f52790a.a(cls);
    }

    public Context b() {
        return (Context) a(Context.class);
    }
}
