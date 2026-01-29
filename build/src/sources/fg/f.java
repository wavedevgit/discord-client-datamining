package fg;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f extends androidx.core.content.a {
    public static Intent q(Context context, BroadcastReceiver broadcastReceiver, IntentFilter intentFilter) {
        int i10;
        if (e.a()) {
            if (true != e.a()) {
                i10 = 0;
            } else {
                i10 = 2;
            }
            return context.registerReceiver(broadcastReceiver, intentFilter, i10);
        }
        return context.registerReceiver(broadcastReceiver, intentFilter);
    }
}
