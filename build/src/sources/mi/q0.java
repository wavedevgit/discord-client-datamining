package mi;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class q0 {

    /* renamed from: a  reason: collision with root package name */
    protected final r0 f37083a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f37084b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f37085c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f37086d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private p0 f37087e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f37088f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public q0(r0 r0Var, IntentFilter intentFilter, Context context) {
        this.f37083a = r0Var;
        this.f37084b = intentFilter;
        this.f37085c = f0.a(context);
    }

    private final void d() {
        p0 p0Var;
        if ((this.f37088f || !this.f37086d.isEmpty()) && this.f37087e == null) {
            p0 p0Var2 = new p0(this, null);
            this.f37087e = p0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f37085c.registerReceiver(p0Var2, this.f37084b, 2);
            } else {
                this.f37085c.registerReceiver(p0Var2, this.f37084b);
            }
        }
        if (!this.f37088f && this.f37086d.isEmpty() && (p0Var = this.f37087e) != null) {
            this.f37085c.unregisterReceiver(p0Var);
            this.f37087e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void a(Context context, Intent intent);

    public final synchronized void b(boolean z10) {
        this.f37088f = true;
        d();
    }

    public final synchronized void c(Object obj) {
        Iterator it = new HashSet(this.f37086d).iterator();
        while (it.hasNext()) {
            ((fi.a) it.next()).a(obj);
        }
    }
}
