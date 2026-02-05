package ii;

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
    protected final r0 f27416a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f27417b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f27418c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f27419d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private p0 f27420e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f27421f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public q0(r0 r0Var, IntentFilter intentFilter, Context context) {
        this.f27416a = r0Var;
        this.f27417b = intentFilter;
        this.f27418c = f0.a(context);
    }

    private final void d() {
        p0 p0Var;
        if ((this.f27421f || !this.f27419d.isEmpty()) && this.f27420e == null) {
            p0 p0Var2 = new p0(this, null);
            this.f27420e = p0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f27418c.registerReceiver(p0Var2, this.f27417b, 2);
            } else {
                this.f27418c.registerReceiver(p0Var2, this.f27417b);
            }
        }
        if (!this.f27421f && this.f27419d.isEmpty() && (p0Var = this.f27420e) != null) {
            this.f27418c.unregisterReceiver(p0Var);
            this.f27420e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void a(Context context, Intent intent);

    public final synchronized void b(boolean z10) {
        this.f27421f = true;
        d();
    }

    public final synchronized void c(Object obj) {
        Iterator it = new HashSet(this.f27419d).iterator();
        while (it.hasNext()) {
            ((bi.a) it.next()).a(obj);
        }
    }
}
