package wj;

import android.content.Context;
import com.google.mlkit.common.internal.MlKitComponentDiscoveryService;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f52789b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static i f52790c;

    /* renamed from: a  reason: collision with root package name */
    private xi.n f52791a;

    private i() {
    }

    public static i c() {
        boolean z10;
        i iVar;
        synchronized (f52789b) {
            if (f52790c != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            hf.q.o(z10, "MlKitContext has not been initialized");
            iVar = (i) hf.q.l(f52790c);
        }
        return iVar;
    }

    public static i d(Context context) {
        i e10;
        synchronized (f52789b) {
            e10 = e(context, zg.l.f56449a);
        }
        return e10;
    }

    public static i e(Context context, Executor executor) {
        boolean z10;
        i iVar;
        synchronized (f52789b) {
            if (f52790c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            hf.q.o(z10, "MlKitContext is already initialized");
            i iVar2 = new i();
            f52790c = iVar2;
            Context f10 = f(context);
            xi.n e10 = xi.n.k(executor).d(xi.f.c(f10, MlKitComponentDiscoveryService.class).b()).b(xi.c.q(f10, Context.class, new Class[0])).b(xi.c.q(iVar2, i.class, new Class[0])).e();
            iVar2.f52791a = e10;
            e10.n(true);
            iVar = f52790c;
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
        if (f52790c == this) {
            z10 = true;
        } else {
            z10 = false;
        }
        hf.q.o(z10, "MlKitContext has been deleted");
        hf.q.l(this.f52791a);
        return this.f52791a.a(cls);
    }

    public Context b() {
        return (Context) a(Context.class);
    }
}
