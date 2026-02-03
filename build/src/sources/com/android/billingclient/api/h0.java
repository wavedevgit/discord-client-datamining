package com.android.billingclient.api;

import android.content.BroadcastReceiver;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Build;
import android.os.Bundle;
import com.google.android.gms.internal.play_billing.e1;
import com.google.android.gms.internal.play_billing.r4;
import java.util.List;
import java.util.Objects;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class h0 extends BroadcastReceiver {

    /* renamed from: a  reason: collision with root package name */
    private boolean f7665a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f7666b;

    /* renamed from: c  reason: collision with root package name */
    final /* synthetic */ i0 f7667c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h0(i0 i0Var, boolean z10) {
        this.f7667c = i0Var;
        this.f7666b = z10;
    }

    private final void d(Bundle bundle, BillingResult billingResult, int i10) {
        t tVar;
        t tVar2;
        if (bundle.getByteArray("FAILURE_LOGGING_PAYLOAD") != null) {
            try {
                tVar = this.f7667c.f7672c;
                tVar.e(r4.B(bundle.getByteArray("FAILURE_LOGGING_PAYLOAD"), e1.a()));
                return;
            } catch (Throwable unused) {
                com.google.android.gms.internal.play_billing.a0.i("BillingBroadcastManager", "Failed parsing Api failure.");
                return;
            }
        }
        tVar2 = this.f7667c.f7672c;
        tVar2.e(s.a(23, i10, billingResult));
    }

    public final synchronized void a(Context context, IntentFilter intentFilter) {
        int i10;
        try {
            if (this.f7665a) {
                return;
            }
            if (Build.VERSION.SDK_INT >= 33) {
                if (true != this.f7666b) {
                    i10 = 4;
                } else {
                    i10 = 2;
                }
                context.registerReceiver(this, intentFilter, i10);
            } else {
                context.registerReceiver(this, intentFilter);
            }
            this.f7665a = true;
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public final synchronized void b(Context context, IntentFilter intentFilter, String str) {
        h0 h0Var;
        int i10;
        try {
            try {
                if (this.f7665a) {
                    return;
                }
                if (Build.VERSION.SDK_INT >= 33) {
                    if (true != this.f7666b) {
                        i10 = 4;
                    } else {
                        i10 = 2;
                    }
                    h0Var = this;
                    context.registerReceiver(h0Var, intentFilter, "com.google.android.finsky.permission.PLAY_BILLING_LIBRARY_BROADCAST", null, i10);
                } else {
                    h0Var = this;
                    context.registerReceiver(this, intentFilter, "com.google.android.finsky.permission.PLAY_BILLING_LIBRARY_BROADCAST", null);
                }
                h0Var.f7665a = true;
            } catch (Throwable th2) {
                th = th2;
                throw th;
            }
        } catch (Throwable th3) {
            th = th3;
            throw th;
        }
    }

    public final synchronized void c(Context context) {
        if (this.f7665a) {
            context.unregisterReceiver(this);
            this.f7665a = false;
            return;
        }
        com.google.android.gms.internal.play_billing.a0.i("BillingBroadcastManager", "Receiver is not registered.");
    }

    @Override // android.content.BroadcastReceiver
    public final void onReceive(Context context, Intent intent) {
        a6.k kVar;
        t tVar;
        t tVar2;
        a6.k kVar2;
        a6.k kVar3;
        t tVar3;
        a6.k kVar4;
        a6.k kVar5;
        Bundle extras = intent.getExtras();
        int i10 = 1;
        if (extras == null) {
            com.google.android.gms.internal.play_billing.a0.i("BillingBroadcastManager", "Bundle is null.");
            tVar3 = this.f7667c.f7672c;
            BillingResult billingResult = u.f7727j;
            tVar3.e(s.a(11, 1, billingResult));
            i0 i0Var = this.f7667c;
            kVar4 = i0Var.f7671b;
            if (kVar4 != null) {
                kVar5 = i0Var.f7671b;
                kVar5.onPurchasesUpdated(billingResult, null);
                return;
            }
            return;
        }
        BillingResult d10 = com.google.android.gms.internal.play_billing.a0.d(intent, "BillingBroadcastManager");
        String action = intent.getAction();
        if (true == Objects.equals(extras.getString("INTENT_SOURCE"), "LAUNCH_BILLING_FLOW")) {
            i10 = 2;
        }
        if (!action.equals("com.android.vending.billing.PURCHASES_UPDATED") && !action.equals("com.android.vending.billing.LOCAL_BROADCAST_PURCHASES_UPDATED")) {
            if (action.equals("com.android.vending.billing.ALTERNATIVE_BILLING")) {
                if (d10.b() != 0) {
                    d(extras, d10, i10);
                    kVar3 = this.f7667c.f7671b;
                    kVar3.onPurchasesUpdated(d10, com.google.android.gms.internal.play_billing.j.k());
                    return;
                }
                i0 i0Var2 = this.f7667c;
                i0.a(i0Var2);
                i0.e(i0Var2);
                com.google.android.gms.internal.play_billing.a0.i("BillingBroadcastManager", "AlternativeBillingListener and UserChoiceBillingListener is null.");
                tVar2 = this.f7667c.f7672c;
                BillingResult billingResult2 = u.f7727j;
                tVar2.e(s.a(77, i10, billingResult2));
                kVar2 = this.f7667c.f7671b;
                kVar2.onPurchasesUpdated(billingResult2, com.google.android.gms.internal.play_billing.j.k());
                return;
            }
            return;
        }
        List g10 = com.google.android.gms.internal.play_billing.a0.g(extras);
        if (d10.b() == 0) {
            tVar = this.f7667c.f7672c;
            tVar.b(s.c(i10));
        } else {
            d(extras, d10, i10);
        }
        kVar = this.f7667c.f7671b;
        kVar.onPurchasesUpdated(d10, g10);
    }
}
