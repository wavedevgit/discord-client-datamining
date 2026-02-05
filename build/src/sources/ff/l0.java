package ff;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class l0 extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    Context f22954a;

    /* renamed from: b  reason: collision with root package name */
    private final k0 f22955b;

    public l0(k0 k0Var) {
        this.f22955b = k0Var;
    }

    public final void a(Context context) {
        this.f22954a = context;
    }

    public final synchronized void b() {
        try {
            Context context = this.f22954a;
            if (context != null) {
                context.unregisterReceiver(this);
            }
            this.f22954a = null;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    @Override // android.content.BroadcastReceiver
    public final void onReceive(Context context, Intent intent) {
        String str;
        Uri data = intent.getData();
        if (data != null) {
            str = data.getSchemeSpecificPart();
        } else {
            str = null;
        }
        if ("com.google.android.gms".equals(str)) {
            this.f22955b.a();
            b();
        }
    }
}
