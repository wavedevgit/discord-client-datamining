package e6;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    private final Context f21369a;

    /* renamed from: b  reason: collision with root package name */
    private b f21370b = b.f21371b;

    public a(Context context) {
        this.f21369a = context.getApplicationContext();
    }

    public void a() {
        this.f21370b = b.f21371b;
        try {
            this.f21369a.unregisterReceiver(this);
        } catch (Exception unused) {
        }
    }

    public void b(b bVar) {
        this.f21370b = bVar;
        androidx.core.content.a.l(this.f21369a, this, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"), 4);
    }

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
            this.f21370b.g();
        }
    }
}
