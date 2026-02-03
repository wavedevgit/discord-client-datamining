package ei;

import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import fi.q0;
import fi.r0;
import java.util.Iterator;
import java.util.LinkedHashSet;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class n extends q0 {

    /* renamed from: j  reason: collision with root package name */
    private static n f21545j;

    /* renamed from: g  reason: collision with root package name */
    private final Handler f21546g;

    /* renamed from: h  reason: collision with root package name */
    private final e f21547h;

    /* renamed from: i  reason: collision with root package name */
    private final Set f21548i;

    public n(Context context, e eVar) {
        super(new r0("SplitInstallListenerRegistry"), new IntentFilter("com.google.android.play.core.splitinstall.receiver.SplitInstallUpdateIntentService"), context);
        this.f21546g = new Handler(Looper.getMainLooper());
        this.f21548i = new LinkedHashSet();
        this.f21547h = eVar;
    }

    public static synchronized n f(Context context) {
        n nVar;
        synchronized (n.class) {
            try {
                if (f21545j == null) {
                    f21545j = new n(context, h.INSTANCE);
                }
                nVar = f21545j;
            } catch (Throwable th2) {
                throw th2;
            }
        }
        return nVar;
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // fi.q0
    public final void a(Context context, Intent intent) {
        Bundle bundleExtra = intent.getBundleExtra("session_state");
        if (bundleExtra == null) {
            return;
        }
        a j10 = a.j(bundleExtra);
        this.f24024a.a("ListenerRegistryBroadcastReceiver.onReceive: %s", j10);
        f zza = this.f21547h.zza();
        if (j10.e() == 3 && zza != null) {
            zza.a(j10.i(), new l(this, j10, intent, context));
        } else {
            h(j10);
        }
    }

    public final synchronized void h(a aVar) {
        Iterator it = new LinkedHashSet(this.f21548i).iterator();
        if (!it.hasNext()) {
            super.c(aVar);
        } else {
            android.support.v4.media.session.b.a(it.next());
            throw null;
        }
    }
}
