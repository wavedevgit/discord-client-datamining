package f6;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class a extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    private final Context f23603a;

    /* renamed from: b  reason: collision with root package name */
    private b f23604b = b.f23605f;

    public a(Context context) {
        this.f23603a = context.getApplicationContext();
    }

    public void a() {
        this.f23604b = b.f23605f;
        try {
            this.f23603a.unregisterReceiver(this);
        } catch (Exception unused) {
        }
    }

    public void b(b bVar) {
        this.f23604b = bVar;
        androidx.core.content.a.l(this.f23603a, this, new IntentFilter("android.media.AUDIO_BECOMING_NOISY"), 4);
    }

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        if ("android.media.AUDIO_BECOMING_NOISY".equals(intent.getAction())) {
            this.f23604b.g();
        }
    }
}
