package com.google.android.play.core.assetpacks;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class SessionStateBroadcastReceiver extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    private static final th.k0 f16674a = new th.k0("SessionStateBroadcastReceiver");

    @Override // android.content.BroadcastReceiver
    public final void onReceive(Context context, Intent intent) {
        Bundle bundleExtra = intent.getBundleExtra("com.google.android.play.core.FLAGS");
        if (bundleExtra == null) {
            f16674a.b("Empty flags bundle received from broadcast.", new Object[0]);
        } else if (!bundleExtra.getBoolean("enableWorkManager")) {
        } else {
            Bundle bundleExtra2 = intent.getBundleExtra("com.google.android.play.core.assetpacks.receiver.EXTRA_SESSION_STATE");
            if (bundleExtra2 == null) {
                f16674a.b("Empty bundle received from broadcast.", new Object[0]);
            } else {
                x1.a(context).b().b(bundleExtra2, bundleExtra, intent.getBundleExtra("com.google.android.play.core.assetpacks.receiver.EXTRA_NOTIFICATION_OPTIONS"));
            }
        }
    }
}
