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
    protected final k0 f54707a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f54708b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f54709c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f54710d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private h0 f54711e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f54712f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(k0 k0Var, IntentFilter intentFilter, Context context) {
        this.f54707a = k0Var;
        this.f54708b = intentFilter;
        this.f54709c = h.a(context);
    }

    private final void a() {
        h0 h0Var;
        if ((this.f54712f || !this.f54710d.isEmpty()) && this.f54711e == null) {
            h0 h0Var2 = new h0(this, null);
            this.f54711e = h0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f54709c.registerReceiver(h0Var2, this.f54708b, 2);
            } else {
                this.f54709c.registerReceiver(h0Var2, this.f54708b);
            }
        }
        if (!this.f54712f && this.f54710d.isEmpty() && (h0Var = this.f54711e) != null) {
            this.f54709c.unregisterReceiver(h0Var);
            this.f54711e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(Context context, Intent intent);

    public final synchronized void c(ci.a aVar) {
        this.f54707a.d("registerListener", new Object[0]);
        k.a(aVar, "Registered Play Core listener should not be null.");
        this.f54710d.add(aVar);
        a();
    }

    public final synchronized void d(boolean z10) {
        this.f54712f = z10;
        a();
    }

    public final synchronized void e(Object obj) {
        Iterator it = new HashSet(this.f54710d).iterator();
        while (it.hasNext()) {
            ((ci.a) it.next()).a(obj);
        }
    }

    public final synchronized boolean f() {
        if (this.f54711e != null) {
            return true;
        }
        return false;
    }
}
