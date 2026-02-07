package ji;

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
    protected final r0 f29962a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f29963b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f29964c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f29965d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private p0 f29966e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f29967f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public q0(r0 r0Var, IntentFilter intentFilter, Context context) {
        this.f29962a = r0Var;
        this.f29963b = intentFilter;
        this.f29964c = f0.a(context);
    }

    private final void d() {
        p0 p0Var;
        if ((this.f29967f || !this.f29965d.isEmpty()) && this.f29966e == null) {
            p0 p0Var2 = new p0(this, null);
            this.f29966e = p0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f29964c.registerReceiver(p0Var2, this.f29963b, 2);
            } else {
                this.f29964c.registerReceiver(p0Var2, this.f29963b);
            }
        }
        if (!this.f29967f && this.f29965d.isEmpty() && (p0Var = this.f29966e) != null) {
            this.f29964c.unregisterReceiver(p0Var);
            this.f29966e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void a(Context context, Intent intent);

    public final synchronized void b(boolean z10) {
        this.f29967f = true;
        d();
    }

    public final synchronized void c(Object obj) {
        Iterator it = new HashSet(this.f29965d).iterator();
        while (it.hasNext()) {
            ((ci.a) it.next()).a(obj);
        }
    }
}
