package uj;

import android.content.Context;
import com.google.mlkit.common.internal.MlKitComponentDiscoveryService;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class i {

    /* renamed from: b  reason: collision with root package name */
    private static final Object f51576b = new Object();

    /* renamed from: c  reason: collision with root package name */
    private static i f51577c;

    /* renamed from: a  reason: collision with root package name */
    private vi.n f51578a;

    private i() {
    }

    public static i c() {
        boolean z10;
        i iVar;
        synchronized (f51576b) {
            if (f51577c != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            hf.q.o(z10, "MlKitContext has not been initialized");
            iVar = (i) hf.q.l(f51577c);
        }
        return iVar;
    }

    public static i d(Context context) {
        i e10;
        synchronized (f51576b) {
            e10 = e(context, zg.l.f56409a);
        }
        return e10;
    }

    public static i e(Context context, Executor executor) {
        boolean z10;
        i iVar;
        synchronized (f51576b) {
            if (f51577c == null) {
                z10 = true;
            } else {
                z10 = false;
            }
            hf.q.o(z10, "MlKitContext is already initialized");
            i iVar2 = new i();
            f51577c = iVar2;
            Context f10 = f(context);
            vi.n e10 = vi.n.k(executor).d(vi.f.c(f10, MlKitComponentDiscoveryService.class).b()).b(vi.c.q(f10, Context.class, new Class[0])).b(vi.c.q(iVar2, i.class, new Class[0])).e();
            iVar2.f51578a = e10;
            e10.n(true);
            iVar = f51577c;
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
        if (f51577c == this) {
            z10 = true;
        } else {
            z10 = false;
        }
        hf.q.o(z10, "MlKitContext has been deleted");
        hf.q.l(this.f51578a);
        return this.f51578a.a(cls);
    }

    public Context b() {
        return (Context) a(Context.class);
    }
}
