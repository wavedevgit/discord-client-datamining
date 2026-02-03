package e6;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    private final Context f22673a;

    /* renamed from: b  reason: collision with root package name */
    private b f22674b = b.f22675b;

    public a(Context context) {
        this.f22673a = context.getApplicationContext();
    }

    public void a() {
        this.f22674b = b.f22675b;
        try {
            this.f22673a.unregisterReceiver(this);
        } catch (Exception unused) {
        }
    }

    public void b(b bVar) {
        this.f22674b = bVar;
        androidx.core.content.a.l(this.f22673a, this, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"), 4);
    }

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
            this.f22674b.g();
        }
    }
}
