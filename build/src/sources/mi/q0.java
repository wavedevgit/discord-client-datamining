package mi;

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
    protected final r0 f36515a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f36516b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f36517c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f36518d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private p0 f36519e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f36520f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public q0(r0 r0Var, IntentFilter intentFilter, Context context) {
        this.f36515a = r0Var;
        this.f36516b = intentFilter;
        this.f36517c = f0.a(context);
    }

    private final void d() {
        p0 p0Var;
        if ((this.f36520f || !this.f36518d.isEmpty()) && this.f36519e == null) {
            p0 p0Var2 = new p0(this, null);
            this.f36519e = p0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f36517c.registerReceiver(p0Var2, this.f36516b, 2);
            } else {
                this.f36517c.registerReceiver(p0Var2, this.f36516b);
            }
        }
        if (!this.f36520f && this.f36518d.isEmpty() && (p0Var = this.f36519e) != null) {
            this.f36517c.unregisterReceiver(p0Var);
            this.f36519e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void a(Context context, Intent intent);

    public final synchronized void b(boolean z10) {
        this.f36520f = true;
        d();
    }

    public final synchronized void c(Object obj) {
        Iterator it = new HashSet(this.f36518d).iterator();
        while (it.hasNext()) {
            ((fi.a) it.next()).a(obj);
        }
    }
}
