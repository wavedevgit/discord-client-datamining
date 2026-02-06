package com.android.billingclient.api;

import android.app.PendingIntent;
import android.content.Intent;
import android.os.Bundle;
import android.os.ResultReceiver;
import androidx.activity.ComponentActivity;
import androidx.activity.result.ActivityResultCallback;
import androidx.activity.result.ActivityResultLauncher;
import com.google.android.apps.common.proguard.UsedByReflection;
import d.e;
@UsedByReflection("PlatformActivityProxy")
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class ProxyBillingActivityV2 extends ComponentActivity {

    /* renamed from: d  reason: collision with root package name */
    private ActivityResultLauncher f7876d;

    /* renamed from: e  reason: collision with root package name */
    private ActivityResultLauncher f7877e;

    /* renamed from: i  reason: collision with root package name */
    private ResultReceiver f7878i;

    /* renamed from: o  reason: collision with root package name */
    private ResultReceiver f7879o;

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public final void onCreate(Bundle bundle) {
        super.onCreate(bundle);
        this.f7876d = registerForActivityResult(new e.b(), new ActivityResultCallback() { // from class: com.android.billingclient.api.d0
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                ProxyBillingActivityV2.this.r((d.a) obj);
            }
        });
        this.f7877e = registerForActivityResult(new e.b(), new ActivityResultCallback() { // from class: com.android.billingclient.api.e0
            @Override // androidx.activity.result.ActivityResultCallback
            public final void a(Object obj) {
                ProxyBillingActivityV2.this.s((d.a) obj);
            }
        });
        if (bundle == null) {
            com.google.android.gms.internal.play_billing.a0.h("ProxyBillingActivityV2", "Launching Play Store billing dialog");
            if (getIntent().hasExtra("ALTERNATIVE_BILLING_ONLY_DIALOG_INTENT")) {
                this.f7878i = (ResultReceiver) getIntent().getParcelableExtra("alternative_billing_only_dialog_result_receiver");
                this.f7876d.b(new e.a((PendingIntent) getIntent().getParcelableExtra("ALTERNATIVE_BILLING_ONLY_DIALOG_INTENT")).a());
            } else if (getIntent().hasExtra("external_payment_dialog_pending_intent")) {
                this.f7879o = (ResultReceiver) getIntent().getParcelableExtra("external_payment_dialog_result_receiver");
                this.f7877e.b(new e.a((PendingIntent) getIntent().getParcelableExtra("external_payment_dialog_pending_intent")).a());
            }
        } else if (bundle.containsKey("alternative_billing_only_dialog_result_receiver")) {
            this.f7878i = (ResultReceiver) bundle.getParcelable("alternative_billing_only_dialog_result_receiver");
        } else if (bundle.containsKey("external_payment_dialog_result_receiver")) {
            this.f7879o = (ResultReceiver) bundle.getParcelable("external_payment_dialog_result_receiver");
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // androidx.activity.ComponentActivity, androidx.core.app.ComponentActivity, android.app.Activity
    public final void onSaveInstanceState(Bundle bundle) {
        super.onSaveInstanceState(bundle);
        ResultReceiver resultReceiver = this.f7878i;
        if (resultReceiver != null) {
            bundle.putParcelable("alternative_billing_only_dialog_result_receiver", resultReceiver);
        }
        ResultReceiver resultReceiver2 = this.f7879o;
        if (resultReceiver2 != null) {
            bundle.putParcelable("external_payment_dialog_result_receiver", resultReceiver2);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void r(d.a aVar) {
        Bundle extras;
        Intent a10 = aVar.a();
        int b10 = com.google.android.gms.internal.play_billing.a0.d(a10, "ProxyBillingActivityV2").b();
        ResultReceiver resultReceiver = this.f7878i;
        if (resultReceiver != null) {
            if (a10 == null) {
                extras = null;
            } else {
                extras = a10.getExtras();
            }
            resultReceiver.send(b10, extras);
        }
        if (aVar.b() != -1 || b10 != 0) {
            int b11 = aVar.b();
            com.google.android.gms.internal.play_billing.a0.i("ProxyBillingActivityV2", "Alternative billing only dialog finished with resultCode " + b11 + " and billing's responseCode: " + b10);
        }
        finish();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void s(d.a aVar) {
        Bundle extras;
        Intent a10 = aVar.a();
        int b10 = com.google.android.gms.internal.play_billing.a0.d(a10, "ProxyBillingActivityV2").b();
        ResultReceiver resultReceiver = this.f7879o;
        if (resultReceiver != null) {
            if (a10 == null) {
                extras = null;
            } else {
                extras = a10.getExtras();
            }
            resultReceiver.send(b10, extras);
        }
        if (aVar.b() != -1 || b10 != 0) {
            com.google.android.gms.internal.play_billing.a0.i("ProxyBillingActivityV2", String.format("External offer dialog finished with resultCode: %s and billing's responseCode: %s", Integer.valueOf(aVar.b()), Integer.valueOf(b10)));
        }
        finish();
    }
}
