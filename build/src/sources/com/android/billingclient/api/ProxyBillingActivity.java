package com.android.billingclient.api;

import android.app.Activity;
import android.app.PendingIntent;
import android.content.Intent;
import android.content.IntentSender;
import android.os.Bundle;
import android.os.ResultReceiver;
import com.google.android.apps.common.proguard.UsedByReflection;
@UsedByReflection("PlatformActivityProxy")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ProxyBillingActivity extends Activity {

    /* renamed from: d  reason: collision with root package name */
    private ResultReceiver f7588d;

    /* renamed from: e  reason: collision with root package name */
    private ResultReceiver f7589e;

    /* renamed from: i  reason: collision with root package name */
    private boolean f7590i;

    /* renamed from: o  reason: collision with root package name */
    private boolean f7591o;

    private Intent a(String str) {
        Intent intent = new Intent("com.android.vending.billing.ALTERNATIVE_BILLING");
        intent.setPackage(getApplicationContext().getPackageName());
        intent.putExtra("ALTERNATIVE_BILLING_USER_CHOICE_DATA", str);
        return intent;
    }

    private Intent b() {
        Intent intent = new Intent("com.android.vending.billing.LOCAL_BROADCAST_PURCHASES_UPDATED");
        intent.setPackage(getApplicationContext().getPackageName());
        return intent;
    }

    /* JADX WARN: Removed duplicated region for block: B:23:0x0074  */
    /* JADX WARN: Removed duplicated region for block: B:27:0x0080  */
    @Override // android.app.Activity
    /*
        Code decompiled incorrectly, please refer to instructions dump.
        To view partially-correct add '--show-bad-code' argument
    */
    protected void onActivityResult(int r8, int r9, android.content.Intent r10) {
        /*
            Method dump skipped, instructions count: 252
            To view this dump add '--comments-level debug' option
        */
        throw new UnsupportedOperationException("Method not decompiled: com.android.billingclient.api.ProxyBillingActivity.onActivityResult(int, int, android.content.Intent):void");
    }

    @Override // android.app.Activity
    protected void onCreate(Bundle bundle) {
        int i10;
        PendingIntent pendingIntent;
        super.onCreate(bundle);
        if (bundle == null) {
            com.google.android.gms.internal.play_billing.a0.h("ProxyBillingActivity", "Launching Play Store billing flow");
            int i11 = 100;
            try {
                if (getIntent().hasExtra("BUY_INTENT")) {
                    pendingIntent = (PendingIntent) getIntent().getParcelableExtra("BUY_INTENT");
                    if (getIntent().hasExtra("IS_FLOW_FROM_FIRST_PARTY_CLIENT") && getIntent().getBooleanExtra("IS_FLOW_FROM_FIRST_PARTY_CLIENT", false)) {
                        this.f7591o = true;
                        i11 = 110;
                    }
                } else if (getIntent().hasExtra("SUBS_MANAGEMENT_INTENT")) {
                    pendingIntent = (PendingIntent) getIntent().getParcelableExtra("SUBS_MANAGEMENT_INTENT");
                    this.f7588d = (ResultReceiver) getIntent().getParcelableExtra("result_receiver");
                } else if (getIntent().hasExtra("IN_APP_MESSAGE_INTENT")) {
                    pendingIntent = (PendingIntent) getIntent().getParcelableExtra("IN_APP_MESSAGE_INTENT");
                    this.f7589e = (ResultReceiver) getIntent().getParcelableExtra("in_app_message_result_receiver");
                    i11 = 101;
                } else {
                    i10 = 100;
                    pendingIntent = null;
                    this.f7590i = true;
                    startIntentSenderForResult(pendingIntent.getIntentSender(), i10, new Intent(), 0, 0, 0);
                    return;
                }
                this.f7590i = true;
                startIntentSenderForResult(pendingIntent.getIntentSender(), i10, new Intent(), 0, 0, 0);
                return;
            } catch (IntentSender.SendIntentException e10) {
                com.google.android.gms.internal.play_billing.a0.j("ProxyBillingActivity", "Got exception while trying to start a purchase flow.", e10);
                ResultReceiver resultReceiver = this.f7588d;
                if (resultReceiver != null) {
                    resultReceiver.send(6, null);
                } else {
                    ResultReceiver resultReceiver2 = this.f7589e;
                    if (resultReceiver2 != null) {
                        resultReceiver2.send(0, null);
                    } else {
                        Intent b10 = b();
                        if (this.f7591o) {
                            b10.putExtra("IS_FIRST_PARTY_PURCHASE", true);
                        }
                        b10.putExtra("RESPONSE_CODE", 6);
                        b10.putExtra("DEBUG_MESSAGE", "An internal error occurred.");
                        sendBroadcast(b10);
                    }
                }
                this.f7590i = false;
                finish();
                return;
            }
            i10 = i11;
        } else {
            com.google.android.gms.internal.play_billing.a0.h("ProxyBillingActivity", "Launching Play Store billing flow from savedInstanceState");
            this.f7590i = bundle.getBoolean("send_cancelled_broadcast_if_finished", false);
            if (bundle.containsKey("result_receiver")) {
                this.f7588d = (ResultReceiver) bundle.getParcelable("result_receiver");
            } else if (bundle.containsKey("in_app_message_result_receiver")) {
                this.f7589e = (ResultReceiver) bundle.getParcelable("in_app_message_result_receiver");
            }
            this.f7591o = bundle.getBoolean("IS_FLOW_FROM_FIRST_PARTY_CLIENT", false);
        }
    }

    @Override // android.app.Activity
    protected void onDestroy() {
        super.onDestroy();
        if (isFinishing() && this.f7590i) {
            Intent b10 = b();
            b10.putExtra("RESPONSE_CODE", 1);
            b10.putExtra("DEBUG_MESSAGE", "Billing dialog closed.");
            sendBroadcast(b10);
        }
    }

    @Override // android.app.Activity
    protected void onSaveInstanceState(Bundle bundle) {
        super.onSaveInstanceState(bundle);
        ResultReceiver resultReceiver = this.f7588d;
        if (resultReceiver != null) {
            bundle.putParcelable("result_receiver", resultReceiver);
        }
        ResultReceiver resultReceiver2 = this.f7589e;
        if (resultReceiver2 != null) {
            bundle.putParcelable("in_app_message_result_receiver", resultReceiver2);
        }
        bundle.putBoolean("send_cancelled_broadcast_if_finished", this.f7590i);
        bundle.putBoolean("IS_FLOW_FROM_FIRST_PARTY_CLIENT", this.f7591o);
    }
}
