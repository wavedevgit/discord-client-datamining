package hi;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import ii.q0;
import ii.r0;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends q0 {

    /* renamed from: j  reason: collision with root package name */
    private static n f25889j;

    /* renamed from: g  reason: collision with root package name */
    private final Handler f25890g;

    /* renamed from: h  reason: collision with root package name */
    private final e f25891h;

    /* renamed from: i  reason: collision with root package name */
    private final Set f25892i;

    public n(Context context, e eVar) {
        super(new r0("SplitInstallListenerRegistry"), new IntentFilter("com.google.android.play.core.splitinstall.receiver.SplitInstallUpdateIntentService"), context);
        this.f25890g = new Handler(Looper.getMainLooper());
        this.f25892i = new LinkedHashSet();
        this.f25891h = eVar;
    }

    public static synchronized n f(Context context) {
        n nVar;
        synchronized (n.class) {
            try {
                if (f25889j == null) {
                    f25889j = new n(context, h.INSTANCE);
                }
                nVar = f25889j;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return nVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ii.q0
    public final void a(Context context, Intent intent) {
        Bundle bundleExtra = intent.getBundleExtra("session_state");
        if (bundleExtra == null) {
            return;
        }
        a j10 = a.j(bundleExtra);
        this.f27416a.a("ListenerRegistryBroadcastReceiver.onReceive: %s", j10);
        f zza = this.f25891h.zza();
        if (j10.e() == 3 && zza != null) {
            zza.a(j10.i(), new l(this, j10, intent, context));
        } else {
            h(j10);
        }
    }

    public final synchronized void h(a aVar) {
        Iterator it = new LinkedHashSet(this.f25892i).iterator();
        if (!it.hasNext()) {
            super.c(aVar);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }
}
