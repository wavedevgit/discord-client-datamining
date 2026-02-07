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
public final class d0 extends xh.j0 {

    /* renamed from: g  reason: collision with root package name */
    private final r2 f15701g;

    /* renamed from: h  reason: collision with root package name */
    private final y1 f15702h;

    /* renamed from: i  reason: collision with root package name */
    private final g1 f15703i;

    /* renamed from: j  reason: collision with root package name */
    private final b2 f15704j;

    /* renamed from: k  reason: collision with root package name */
    private final o3 f15705k;

    /* renamed from: l  reason: collision with root package name */
    private final Handler f15706l;

    /* renamed from: m  reason: collision with root package name */
    private final xh.r f15707m;

    /* renamed from: n  reason: collision with root package name */
    private final xh.r f15708n;

    /* renamed from: o  reason: collision with root package name */
    private final xh.r f15709o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(Context context, r2 r2Var, y1 y1Var, xh.r rVar, b2 b2Var, g1 g1Var, xh.r rVar2, xh.r rVar3, o3 o3Var) {
        super(new xh.k0("AssetPackServiceListenerRegistry"), new IntentFilter("com.google.android.play.core.assetpacks.receiver.ACTION_SESSION_UPDATE"), context);
        this.f15706l = new Handler(Looper.getMainLooper());
        this.f15701g = r2Var;
        this.f15702h = y1Var;
        this.f15707m = rVar;
        this.f15704j = b2Var;
        this.f15703i = g1Var;
        this.f15708n = rVar2;
        this.f15709o = rVar3;
        this.f15705k = o3Var;
    }

    public static /* synthetic */ void g(d0 d0Var, Bundle bundle) {
        if (d0Var.f15701g.p(bundle)) {
            d0Var.f15702h.a();
        }
    }

    public static /* synthetic */ void h(final d0 d0Var, Bundle bundle, final AssetPackState assetPackState) {
        if (d0Var.f15701g.o(bundle)) {
            d0Var.f15706l.post(new Runnable() { // from class: com.google.android.play.core.assetpacks.z
                @Override // java.lang.Runnable
                public final void run() {
                    d0.this.e(assetPackState);
                }
            });
            ((t4) d0Var.f15707m.a()).f();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // xh.j0
    public final void b(Context context, Intent intent) {
        Bundle bundleExtra = intent.getBundleExtra("com.google.android.play.core.FLAGS");
        if (bundleExtra != null && bundleExtra.getBoolean("enableWorkManager")) {
            return;
        }
        final Bundle bundleExtra2 = intent.getBundleExtra("com.google.android.play.core.assetpacks.receiver.EXTRA_SESSION_STATE");
        if (bundleExtra2 == null) {
            this.f54707a.b("Empty bundle received from broadcast.", new Object[0]);
            return;
        }
        ArrayList<String> stringArrayList = bundleExtra2.getStringArrayList("pack_names");
        if (stringArrayList != null && stringArrayList.size() == 1) {
            final AssetPackState c10 = AssetPackState.c(bundleExtra2, stringArrayList.get(0), this.f15704j, this.f15705k);
            this.f54707a.a("ListenerRegistryBroadcastReceiver.onReceive: %s", c10);
            PendingIntent pendingIntent = (PendingIntent) bundleExtra2.getParcelable("confirmation_intent");
            if (pendingIntent != null) {
                this.f15703i.a(pendingIntent);
            }
            ((Executor) this.f15709o.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.b0
                @Override // java.lang.Runnable
                public final void run() {
                    d0.h(d0.this, bundleExtra2, c10);
                }
            });
            ((Executor) this.f15708n.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.c0
                @Override // java.lang.Runnable
                public final void run() {
                    d0.g(d0.this, bundleExtra2);
                }
            });
            return;
        }
        this.f54707a.b("Corrupt bundle received from broadcast.", new Object[0]);
    }
}
