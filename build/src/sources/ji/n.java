package ji;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
import ki.q0;
import ki.r0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends q0 {

    /* renamed from: j  reason: collision with root package name */
    private static n f30196j;

    /* renamed from: g  reason: collision with root package name */
    private final Handler f30197g;

    /* renamed from: h  reason: collision with root package name */
    private final e f30198h;

    /* renamed from: i  reason: collision with root package name */
    private final Set f30199i;

    public n(Context context, e eVar) {
        super(new r0("SplitInstallListenerRegistry"), new IntentFilter("com.google.android.play.core.splitinstall.receiver.SplitInstallUpdateIntentService"), context);
        this.f30197g = new Handler(Looper.getMainLooper());
        this.f30199i = new LinkedHashSet();
        this.f30198h = eVar;
    }

    public static synchronized n f(Context context) {
        n nVar;
        synchronized (n.class) {
            try {
                if (f30196j == null) {
                    f30196j = new n(context, h.INSTANCE);
                }
                nVar = f30196j;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return nVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ki.q0
    public final void a(Context context, Intent intent) {
        Bundle bundleExtra = intent.getBundleExtra("session_state");
        if (bundleExtra == null) {
            return;
        }
        a j10 = a.j(bundleExtra);
        this.f30913a.a("ListenerRegistryBroadcastReceiver.onReceive: %s", j10);
        f zza = this.f30198h.zza();
        if (j10.e() == 3 && zza != null) {
            zza.a(j10.i(), new l(this, j10, intent, context));
        } else {
            h(j10);
        }
    }

    public final synchronized void h(a aVar) {
        Iterator it = new LinkedHashSet(this.f30199i).iterator();
        if (!it.hasNext()) {
            super.c(aVar);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }
}
