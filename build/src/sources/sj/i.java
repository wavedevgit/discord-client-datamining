package sj;

import android.content.Context;
import com.google.mlkit.common.internal.MlKitComponentDiscoveryService;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f49659b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static i f49660c;

    /* renamed from: a  reason: collision with root package name */
    private ti.n f49661a;

    private i() {
    }

    public static i c() {
        boolean z10;
        i iVar;
        synchronized (f49659b) {
            if (f49660c != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.o(z10, "MlKitContext has not been initialized");
            iVar = (i) gf.q.l(f49660c);
        }
        return iVar;
    }

    public static i d(Context context) {
        i e10;
        synchronized (f49659b) {
            e10 = e(context, xg.l.f53832a);
        }
        return e10;
    }

    public static i e(Context context, Executor executor) {
        boolean z10;
        i iVar;
        synchronized (f49659b) {
            if (f49660c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.o(z10, "MlKitContext is already initialized");
            i iVar2 = new i();
            f49660c = iVar2;
            Context f10 = f(context);
            ti.n e10 = ti.n.k(executor).d(ti.f.c(f10, MlKitComponentDiscoveryService.class).b()).b(ti.c.q(f10, Context.class, new Class[0])).b(ti.c.q(iVar2, i.class, new Class[0])).e();
            iVar2.f49661a = e10;
            e10.n(true);
            iVar = f49660c;
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
        if (f49660c == this) {
            z10 = true;
        } else {
            z10 = false;
        }
        gf.q.o(z10, "MlKitContext has been deleted");
        gf.q.l(this.f49661a);
        return this.f49661a.a(cls);
    }

    public Context b() {
        return (Context) a(Context.class);
    }
}
