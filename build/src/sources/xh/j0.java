package xh;

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
    protected final k0 f54659a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f54660b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f54661c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f54662d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private h0 f54663e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f54664f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(k0 k0Var, IntentFilter intentFilter, Context context) {
        this.f54659a = k0Var;
        this.f54660b = intentFilter;
        this.f54661c = h.a(context);
    }

    private final void a() {
        h0 h0Var;
        if ((this.f54664f || !this.f54662d.isEmpty()) && this.f54663e == null) {
            h0 h0Var2 = new h0(this, null);
            this.f54663e = h0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f54661c.registerReceiver(h0Var2, this.f54660b, 2);
            } else {
                this.f54661c.registerReceiver(h0Var2, this.f54660b);
            }
        }
        if (!this.f54664f && this.f54662d.isEmpty() && (h0Var = this.f54663e) != null) {
            this.f54661c.unregisterReceiver(h0Var);
            this.f54663e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(Context context, Intent intent);

    public final synchronized void c(ci.a aVar) {
        this.f54659a.d("registerListener", new Object[0]);
        k.a(aVar, "Registered Play Core listener should not be null.");
        this.f54662d.add(aVar);
        a();
    }

    public final synchronized void d(boolean z10) {
        this.f54664f = z10;
        a();
    }

    public final synchronized void e(Object obj) {
        Iterator it = new HashSet(this.f54662d).iterator();
        while (it.hasNext()) {
            ((ci.a) it.next()).a(obj);
        }
    }

    public final synchronized boolean f() {
        if (this.f54663e != null) {
            return true;
        }
        return false;
    }
}
