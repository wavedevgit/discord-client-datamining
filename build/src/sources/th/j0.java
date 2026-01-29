package th;

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
    protected final k0 f49552a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f49553b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f49554c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f49555d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private h0 f49556e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f49557f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(k0 k0Var, IntentFilter intentFilter, Context context) {
        this.f49552a = k0Var;
        this.f49553b = intentFilter;
        this.f49554c = h.a(context);
    }

    private final void a() {
        h0 h0Var;
        if ((this.f49557f || !this.f49555d.isEmpty()) && this.f49556e == null) {
            h0 h0Var2 = new h0(this, null);
            this.f49556e = h0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f49554c.registerReceiver(h0Var2, this.f49553b, 2);
            } else {
                this.f49554c.registerReceiver(h0Var2, this.f49553b);
            }
        }
        if (!this.f49557f && this.f49555d.isEmpty() && (h0Var = this.f49556e) != null) {
            this.f49554c.unregisterReceiver(h0Var);
            this.f49556e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(Context context, Intent intent);

    public final synchronized void c(yh.a aVar) {
        this.f49552a.d("registerListener", new Object[0]);
        k.a(aVar, "Registered Play Core listener should not be null.");
        this.f49555d.add(aVar);
        a();
    }

    public final synchronized void d(boolean z10) {
        this.f49557f = z10;
        a();
    }

    public final synchronized void e(Object obj) {
        Iterator it = new HashSet(this.f49555d).iterator();
        while (it.hasNext()) {
            ((yh.a) it.next()).a(obj);
        }
    }

    public final synchronized boolean f() {
        if (this.f49556e != null) {
            return true;
        }
        return false;
    }
}
