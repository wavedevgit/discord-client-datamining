package ai;

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
    protected final k0 f801a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f802b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f803c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f804d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private h0 f805e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f806f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(k0 k0Var, IntentFilter intentFilter, Context context) {
        this.f801a = k0Var;
        this.f802b = intentFilter;
        this.f803c = h.a(context);
    }

    private final void a() {
        h0 h0Var;
        if ((this.f806f || !this.f804d.isEmpty()) && this.f805e == null) {
            h0 h0Var2 = new h0(this, null);
            this.f805e = h0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f803c.registerReceiver(h0Var2, this.f802b, 2);
            } else {
                this.f803c.registerReceiver(h0Var2, this.f802b);
            }
        }
        if (!this.f806f && this.f804d.isEmpty() && (h0Var = this.f805e) != null) {
            this.f803c.unregisterReceiver(h0Var);
            this.f805e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(Context context, Intent intent);

    public final synchronized void c(fi.a aVar) {
        this.f801a.d("registerListener", new Object[0]);
        k.a(aVar, "Registered Play Core listener should not be null.");
        this.f804d.add(aVar);
        a();
    }

    public final synchronized void d(boolean z10) {
        this.f806f = z10;
        a();
    }

    public final synchronized void e(Object obj) {
        Iterator it = new HashSet(this.f804d).iterator();
        while (it.hasNext()) {
            ((fi.a) it.next()).a(obj);
        }
    }

    public final synchronized boolean f() {
        if (this.f805e != null) {
            return true;
        }
        return false;
    }
}
