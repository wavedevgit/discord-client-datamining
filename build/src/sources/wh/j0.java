package wh;

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
    protected final k0 f53072a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f53073b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f53074c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f53075d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private h0 f53076e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f53077f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(k0 k0Var, IntentFilter intentFilter, Context context) {
        this.f53072a = k0Var;
        this.f53073b = intentFilter;
        this.f53074c = h.a(context);
    }

    private final void a() {
        h0 h0Var;
        if ((this.f53077f || !this.f53075d.isEmpty()) && this.f53076e == null) {
            h0 h0Var2 = new h0(this, null);
            this.f53076e = h0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f53074c.registerReceiver(h0Var2, this.f53073b, 2);
            } else {
                this.f53074c.registerReceiver(h0Var2, this.f53073b);
            }
        }
        if (!this.f53077f && this.f53075d.isEmpty() && (h0Var = this.f53076e) != null) {
            this.f53074c.unregisterReceiver(h0Var);
            this.f53076e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(Context context, Intent intent);

    public final synchronized void c(bi.a aVar) {
        this.f53072a.d("registerListener", new Object[0]);
        k.a(aVar, "Registered Play Core listener should not be null.");
        this.f53075d.add(aVar);
        a();
    }

    public final synchronized void d(boolean z10) {
        this.f53077f = z10;
        a();
    }

    public final synchronized void e(Object obj) {
        Iterator it = new HashSet(this.f53075d).iterator();
        while (it.hasNext()) {
            ((bi.a) it.next()).a(obj);
        }
    }

    public final synchronized boolean f() {
        if (this.f53076e != null) {
            return true;
        }
        return false;
    }
}
