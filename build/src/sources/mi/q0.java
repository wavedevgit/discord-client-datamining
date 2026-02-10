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
    protected final r0 f36514a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f36515b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f36516c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f36517d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private p0 f36518e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f36519f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public q0(r0 r0Var, IntentFilter intentFilter, Context context) {
        this.f36514a = r0Var;
        this.f36515b = intentFilter;
        this.f36516c = f0.a(context);
    }

    private final void d() {
        p0 p0Var;
        if ((this.f36519f || !this.f36517d.isEmpty()) && this.f36518e == null) {
            p0 p0Var2 = new p0(this, null);
            this.f36518e = p0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f36516c.registerReceiver(p0Var2, this.f36515b, 2);
            } else {
                this.f36516c.registerReceiver(p0Var2, this.f36515b);
            }
        }
        if (!this.f36519f && this.f36517d.isEmpty() && (p0Var = this.f36518e) != null) {
            this.f36516c.unregisterReceiver(p0Var);
            this.f36518e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void a(Context context, Intent intent);

    public final synchronized void b(boolean z10) {
        this.f36519f = true;
        d();
    }

    public final synchronized void c(Object obj) {
        Iterator it = new HashSet(this.f36517d).iterator();
        while (it.hasNext()) {
            ((fi.a) it.next()).a(obj);
        }
    }
}
