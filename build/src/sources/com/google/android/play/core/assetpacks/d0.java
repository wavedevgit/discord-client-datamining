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
public final class d0 extends yh.j0 {

    /* renamed from: g  reason: collision with root package name */
    private final r2 f15841g;

    /* renamed from: h  reason: collision with root package name */
    private final y1 f15842h;

    /* renamed from: i  reason: collision with root package name */
    private final g1 f15843i;

    /* renamed from: j  reason: collision with root package name */
    private final b2 f15844j;

    /* renamed from: k  reason: collision with root package name */
    private final o3 f15845k;

    /* renamed from: l  reason: collision with root package name */
    private final Handler f15846l;

    /* renamed from: m  reason: collision with root package name */
    private final yh.r f15847m;

    /* renamed from: n  reason: collision with root package name */
    private final yh.r f15848n;

    /* renamed from: o  reason: collision with root package name */
    private final yh.r f15849o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(Context context, r2 r2Var, y1 y1Var, yh.r rVar, b2 b2Var, g1 g1Var, yh.r rVar2, yh.r rVar3, o3 o3Var) {
        super(new yh.k0("AssetPackServiceListenerRegistry"), new IntentFilter("com.google.android.play.core.assetpacks.receiver.ACTION_SESSION_UPDATE"), context);
        this.f15846l = new Handler(Looper.getMainLooper());
        this.f15841g = r2Var;
        this.f15842h = y1Var;
        this.f15847m = rVar;
        this.f15844j = b2Var;
        this.f15843i = g1Var;
        this.f15848n = rVar2;
        this.f15849o = rVar3;
        this.f15845k = o3Var;
    }

    public static /* synthetic */ void g(d0 d0Var, Bundle bundle) {
        if (d0Var.f15841g.p(bundle)) {
            d0Var.f15842h.a();
        }
    }

    public static /* synthetic */ void h(final d0 d0Var, Bundle bundle, final AssetPackState assetPackState) {
        if (d0Var.f15841g.o(bundle)) {
            d0Var.f15846l.post(new Runnable() { // from class: com.google.android.play.core.assetpacks.z
                @Override // java.lang.Runnable
                public final void run() {
                    d0.this.e(assetPackState);
                }
            });
            ((t4) d0Var.f15847m.a()).f();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // yh.j0
    public final void b(Context context, Intent intent) {
        Bundle bundleExtra = intent.getBundleExtra("com.google.android.play.core.FLAGS");
        if (bundleExtra != null && bundleExtra.getBoolean("enableWorkManager")) {
            return;
        }
        final Bundle bundleExtra2 = intent.getBundleExtra("com.google.android.play.core.assetpacks.receiver.EXTRA_SESSION_STATE");
        if (bundleExtra2 == null) {
            this.f55642a.b("Empty bundle received from broadcast.", new Object[0]);
            return;
        }
        ArrayList<String> stringArrayList = bundleExtra2.getStringArrayList("pack_names");
        if (stringArrayList != null && stringArrayList.size() == 1) {
            final AssetPackState c10 = AssetPackState.c(bundleExtra2, stringArrayList.get(0), this.f15844j, this.f15845k);
            this.f55642a.a("ListenerRegistryBroadcastReceiver.onReceive: %s", c10);
            PendingIntent pendingIntent = (PendingIntent) bundleExtra2.getParcelable("confirmation_intent");
            if (pendingIntent != null) {
                this.f15843i.a(pendingIntent);
            }
            ((Executor) this.f15849o.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.b0
                @Override // java.lang.Runnable
                public final void run() {
                    d0.h(d0.this, bundleExtra2, c10);
                }
            });
            ((Executor) this.f15848n.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.c0
                @Override // java.lang.Runnable
                public final void run() {
                    d0.g(d0.this, bundleExtra2);
                }
            });
            return;
        }
        this.f55642a.b("Corrupt bundle received from broadcast.", new Object[0]);
    }
}
