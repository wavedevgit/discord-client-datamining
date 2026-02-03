package fi;

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
    protected final r0 f24024a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f24025b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f24026c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f24027d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private p0 f24028e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f24029f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public q0(r0 r0Var, IntentFilter intentFilter, Context context) {
        this.f24024a = r0Var;
        this.f24025b = intentFilter;
        this.f24026c = f0.a(context);
    }

    private final void d() {
        p0 p0Var;
        if ((this.f24029f || !this.f24027d.isEmpty()) && this.f24028e == null) {
            p0 p0Var2 = new p0(this, null);
            this.f24028e = p0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f24026c.registerReceiver(p0Var2, this.f24025b, 2);
            } else {
                this.f24026c.registerReceiver(p0Var2, this.f24025b);
            }
        }
        if (!this.f24029f && this.f24027d.isEmpty() && (p0Var = this.f24028e) != null) {
            this.f24026c.unregisterReceiver(p0Var);
            this.f24028e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void a(Context context, Intent intent);

    public final synchronized void b(boolean z10) {
        this.f24029f = true;
        d();
    }

    public final synchronized void c(Object obj) {
        Iterator it = new HashSet(this.f24027d).iterator();
        while (it.hasNext()) {
            ((yh.a) it.next()).a(obj);
        }
    }
}
