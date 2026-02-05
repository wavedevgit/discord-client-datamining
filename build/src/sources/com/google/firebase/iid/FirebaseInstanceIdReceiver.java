package com.google.firebase.iid;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import com.google.firebase.messaging.g0;
import df.a;
import java.util.concurrent.ExecutionException;
import xg.m;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class FirebaseInstanceIdReceiver extends a {
    private static Intent f(Context context, String str, Bundle bundle) {
        return new Intent(str).putExtras(bundle);
    }

    @Override // df.a
    protected int b(Context context, com.google.android.gms.cloudmessaging.a aVar) {
        try {
            return ((Integer) m.a(new com.google.firebase.messaging.m(context).g(aVar.b()))).intValue();
        } catch (InterruptedException | ExecutionException e10) {
            Log.e("FirebaseMessaging", "Failed to send message to service.", e10);
            return 500;
        }
    }

    @Override // df.a
    protected void c(Context context, Bundle bundle) {
        Intent f10 = f(context, "com.google.firebase.messaging.NOTIFICATION_DISMISS", bundle);
        if (g0.A(f10)) {
            g0.s(f10);
        }
    }
}
