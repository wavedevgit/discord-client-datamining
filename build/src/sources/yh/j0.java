package yh;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class j0 {

    /* renamed from: a  reason: collision with root package name */
    protected final k0 f55642a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f55643b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f55644c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f55645d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private h0 f55646e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f55647f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(k0 k0Var, IntentFilter intentFilter, Context context) {
        this.f55642a = k0Var;
        this.f55643b = intentFilter;
        this.f55644c = h.a(context);
    }

    private final void a() {
        h0 h0Var;
        if ((this.f55647f || !this.f55645d.isEmpty()) && this.f55646e == null) {
            h0 h0Var2 = new h0(this, null);
            this.f55646e = h0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f55644c.registerReceiver(h0Var2, this.f55643b, 2);
            } else {
                this.f55644c.registerReceiver(h0Var2, this.f55643b);
            }
        }
        if (!this.f55647f && this.f55645d.isEmpty() && (h0Var = this.f55646e) != null) {
            this.f55644c.unregisterReceiver(h0Var);
            this.f55646e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(Context context, Intent intent);

    public final synchronized void c(di.a aVar) {
        this.f55642a.d("registerListener", new Object[0]);
        k.a(aVar, "Registered Play Core listener should not be null.");
        this.f55645d.add(aVar);
        a();
    }

    public final synchronized void d(boolean z10) {
        this.f55647f = z10;
        a();
    }

    public final synchronized void e(Object obj) {
        Iterator it = new HashSet(this.f55645d).iterator();
        while (it.hasNext()) {
            ((di.a) it.next()).a(obj);
        }
    }

    public final synchronized boolean f() {
        if (this.f55646e != null) {
            return true;
        }
        return false;
    }
}
