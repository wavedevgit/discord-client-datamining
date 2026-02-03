package com.google.android.gms.analytics;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import com.google.android.gms.internal.gtm.zzfi;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class AnalyticsReceiver extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    private zzfi f13303a;

    @Override // android.content.BroadcastReceiver
    public void onReceive(Context context, Intent intent) {
        if (this.f13303a == null) {
            this.f13303a = new zzfi();
        }
        zzfi.zzb(context, intent);
    }
}
