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
    protected final k0 f50051a;

    /* renamed from: b  reason: collision with root package name */
    private final IntentFilter f50052b;

    /* renamed from: c  reason: collision with root package name */
    private final Context f50053c;

    /* renamed from: d  reason: collision with root package name */
    protected final Set f50054d = new HashSet();

    /* renamed from: e  reason: collision with root package name */
    private h0 f50055e = null;

    /* renamed from: f  reason: collision with root package name */
    private volatile boolean f50056f = false;

    /* JADX INFO: Access modifiers changed from: protected */
    public j0(k0 k0Var, IntentFilter intentFilter, Context context) {
        this.f50051a = k0Var;
        this.f50052b = intentFilter;
        this.f50053c = h.a(context);
    }

    private final void a() {
        h0 h0Var;
        if ((this.f50056f || !this.f50054d.isEmpty()) && this.f50055e == null) {
            h0 h0Var2 = new h0(this, null);
            this.f50055e = h0Var2;
            if (Build.VERSION.SDK_INT >= 33) {
                this.f50053c.registerReceiver(h0Var2, this.f50052b, 2);
            } else {
                this.f50053c.registerReceiver(h0Var2, this.f50052b);
            }
        }
        if (!this.f50056f && this.f50054d.isEmpty() && (h0Var = this.f50055e) != null) {
            this.f50053c.unregisterReceiver(h0Var);
            this.f50055e = null;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(Context context, Intent intent);

    public final synchronized void c(yh.a aVar) {
        this.f50051a.d("registerListener", new Object[0]);
        k.a(aVar, "Registered Play Core listener should not be null.");
        this.f50054d.add(aVar);
        a();
    }

    public final synchronized void d(boolean z10) {
        this.f50056f = z10;
        a();
    }

    public final synchronized void e(Object obj) {
        Iterator it = new HashSet(this.f50054d).iterator();
        while (it.hasNext()) {
            ((yh.a) it.next()).a(obj);
        }
    }

    public final synchronized boolean f() {
        if (this.f50055e != null) {
            return true;
        }
        return false;
    }
}
