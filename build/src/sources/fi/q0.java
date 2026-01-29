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
    protected final r0 f25221a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f25222b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f25223c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f25224d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private p0 f25225e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f25226f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public q0(r0 r0Var, IntentFilter intentFilter, Context context) {
        this.f25221a = r0Var;
        this.f25222b = intentFilter;
        this.f25223c = f0.a(context);
    }

    private final void d() {
        p0 p0Var;
        if ((this.f25226f || !this.f25224d.isEmpty()) && this.f25225e == null) {
            p0 p0Var2 = new p0(this, null);
            this.f25225e = p0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f25223c.registerReceiver(p0Var2, this.f25222b, 2);
            } else {
                this.f25223c.registerReceiver(p0Var2, this.f25222b);
            }
        }
        if (!this.f25226f && this.f25224d.isEmpty() && (p0Var = this.f25225e) != null) {
            this.f25223c.unregisterReceiver(p0Var);
            this.f25225e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void a(Context context, Intent intent);

    public final synchronized void b(boolean z10) {
        this.f25226f = true;
        d();
    }

    public final synchronized void c(Object obj) {
        Iterator it = new HashSet(this.f25224d).iterator();
        while (it.hasNext()) {
            ((yh.a) it.next()).a(obj);
        }
    }
}
