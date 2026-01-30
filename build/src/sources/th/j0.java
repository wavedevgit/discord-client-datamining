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
    protected final k0 f49568a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f49569b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f49570c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f49571d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private h0 f49572e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f49573f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(k0 k0Var, IntentFilter intentFilter, Context context) {
        this.f49568a = k0Var;
        this.f49569b = intentFilter;
        this.f49570c = h.a(context);
    }

    private final void a() {
        h0 h0Var;
        if ((this.f49573f || !this.f49571d.isEmpty()) && this.f49572e == null) {
            h0 h0Var2 = new h0(this, null);
            this.f49572e = h0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f49570c.registerReceiver(h0Var2, this.f49569b, 2);
            } else {
                this.f49570c.registerReceiver(h0Var2, this.f49569b);
            }
        }
        if (!this.f49573f && this.f49571d.isEmpty() && (h0Var = this.f49572e) != null) {
            this.f49570c.unregisterReceiver(h0Var);
            this.f49572e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(Context context, Intent intent);

    public final synchronized void c(yh.a aVar) {
        this.f49568a.d("registerListener", new Object[0]);
        k.a(aVar, "Registered Play Core listener should not be null.");
        this.f49571d.add(aVar);
        a();
    }

    public final synchronized void d(boolean z10) {
        this.f49573f = z10;
        a();
    }

    public final synchronized void e(Object obj) {
        Iterator it = new HashSet(this.f49571d).iterator();
        while (it.hasNext()) {
            ((yh.a) it.next()).a(obj);
        }
    }

    public final synchronized boolean f() {
        if (this.f49572e != null) {
            return true;
        }
        return false;
    }
}
