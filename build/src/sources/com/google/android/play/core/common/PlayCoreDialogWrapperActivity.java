package com.google.android.play.core.common;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Intent;
import android.content.IntentSender;
import android.os.Bundle;
import android.os.ResultReceiver;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class PlayCoreDialogWrapperActivity extends Activity {

    /* renamed from: d  reason: collision with root package name */
    private ResultReceiver f16135d;

    private final void a() {
        ResultReceiver resultReceiver = this.f16135d;
        if (resultReceiver != null) {
            resultReceiver.send(3, new Bundle());
        }
    }

    @Override // android.app.Activity
    protected final void onActivityResult(int i10, int i11, Intent intent) {
        ResultReceiver resultReceiver;
        super.onActivityResult(i10, i11, intent);
        if (i10 == 0 && (resultReceiver = this.f16135d) != null) {
            if (i11 == -1) {
                resultReceiver.send(1, new Bundle());
            } else if (i11 == 0) {
                resultReceiver.send(2, new Bundle());
            }
        }
        finish();
    }

    @Override // android.app.Activity
    protected final void onCreate(Bundle bundle) {
        Intent intent;
        int intExtra = getIntent().getIntExtra("window_flags", 0);
        PendingIntent pendingIntent = null;
        if (intExtra != 0) {
            getWindow().getDecorView().setSystemUiVisibility(intExtra);
            Intent intent2 = new Intent();
            intent2.putExtra("window_flags", intExtra);
            intent = intent2;
        } else {
            intent = null;
        }
        super.onCreate(bundle);
        if (bundle == null) {
            this.f16135d = (ResultReceiver) getIntent().getParcelableExtra("result_receiver");
            Bundle extras = getIntent().getExtras();
            if (extras != null) {
                pendingIntent = (PendingIntent) extras.get("confirmation_intent");
            }
            if (extras != null && pendingIntent != null) {
                try {
                    try {
                        startIntentSenderForResult(pendingIntent.getIntentSender(), 0, intent, 0, 0, 0);
                    } catch (IntentSender.SendIntentException unused) {
                        a();
                        finish();
                    }
                } catch (IntentSender.SendIntentException unused2) {
                }
            } else {
                a();
                finish();
            }
        } else {
            this.f16135d = (ResultReceiver) bundle.getParcelable("result_receiver");
        }
    }

    @Override // android.app.Activity
    protected final void onSaveInstanceState(Bundle bundle) {
        bundle.putParcelable("result_receiver", this.f16135d);
    }
}
