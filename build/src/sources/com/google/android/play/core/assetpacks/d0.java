package com.google.android.play.core.assetpacks;

import android.app.PendingIntent;
import android.content.Context;
import android.content.Intent;
import android.content.IntentFilter;
import android.os.Bundle;
import android.os.Handler;
import android.os.Looper;
import java.util.ArrayList;
import java.util.concurrent.Executor;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class d0 extends ai.j0 {

    /* renamed from: g  reason: collision with root package name */
    private final r2 f16591g;

    /* renamed from: h  reason: collision with root package name */
    private final y1 f16592h;

    /* renamed from: i  reason: collision with root package name */
    private final g1 f16593i;

    /* renamed from: j  reason: collision with root package name */
    private final b2 f16594j;

    /* renamed from: k  reason: collision with root package name */
    private final o3 f16595k;

    /* renamed from: l  reason: collision with root package name */
    private final Handler f16596l;

    /* renamed from: m  reason: collision with root package name */
    private final ai.r f16597m;

    /* renamed from: n  reason: collision with root package name */
    private final ai.r f16598n;

    /* renamed from: o  reason: collision with root package name */
    private final ai.r f16599o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(Context context, r2 r2Var, y1 y1Var, ai.r rVar, b2 b2Var, g1 g1Var, ai.r rVar2, ai.r rVar3, o3 o3Var) {
        super(new ai.k0("AssetPackServiceListenerRegistry"), new IntentFilter("com.google.android.play.core.assetpacks.receiver.ACTION_SESSION_UPDATE"), context);
        this.f16596l = new Handler(Looper.getMainLooper());
        this.f16591g = r2Var;
        this.f16592h = y1Var;
        this.f16597m = rVar;
        this.f16594j = b2Var;
        this.f16593i = g1Var;
        this.f16598n = rVar2;
        this.f16599o = rVar3;
        this.f16595k = o3Var;
    }

    public static /* synthetic */ void g(d0 d0Var, Bundle bundle) {
        if (d0Var.f16591g.p(bundle)) {
            d0Var.f16592h.a();
        }
    }

    public static /* synthetic */ void h(final d0 d0Var, Bundle bundle, final AssetPackState assetPackState) {
        if (d0Var.f16591g.o(bundle)) {
            d0Var.f16596l.post(new Runnable() { // from class: com.google.android.play.core.assetpacks.z
                @Override // java.lang.Runnable
                public final void run() {
                    d0.this.e(assetPackState);
                }
            });
            ((t4) d0Var.f16597m.a()).f();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // ai.j0
    public final void b(Context context, Intent intent) {
        Bundle bundleExtra = intent.getBundleExtra("com.google.android.play.core.FLAGS");
        if (bundleExtra != null && bundleExtra.getBoolean("enableWorkManager")) {
            return;
        }
        final Bundle bundleExtra2 = intent.getBundleExtra("com.google.android.play.core.assetpacks.receiver.EXTRA_SESSION_STATE");
        if (bundleExtra2 == null) {
            this.f801a.b("Empty bundle received from broadcast.", new Object[0]);
            return;
        }
        ArrayList<String> stringArrayList = bundleExtra2.getStringArrayList("pack_names");
        if (stringArrayList != null && stringArrayList.size() == 1) {
            final AssetPackState c10 = AssetPackState.c(bundleExtra2, stringArrayList.get(0), this.f16594j, this.f16595k);
            this.f801a.a("ListenerRegistryBroadcastReceiver.onReceive: %s", c10);
            PendingIntent pendingIntent = (PendingIntent) bundleExtra2.getParcelable("confirmation_intent");
            if (pendingIntent != null) {
                this.f16593i.a(pendingIntent);
            }
            ((Executor) this.f16599o.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.b0
                @Override // java.lang.Runnable
                public final void run() {
                    d0.h(d0.this, bundleExtra2, c10);
                }
            });
            ((Executor) this.f16598n.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.c0
                @Override // java.lang.Runnable
                public final void run() {
                    d0.g(d0.this, bundleExtra2);
                }
            });
            return;
        }
        this.f801a.b("Corrupt bundle received from broadcast.", new Object[0]);
    }
}
