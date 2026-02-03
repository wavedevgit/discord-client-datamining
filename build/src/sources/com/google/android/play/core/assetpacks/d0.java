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
public final class d0 extends th.j0 {

    /* renamed from: g  reason: collision with root package name */
    private final r2 f16359g;

    /* renamed from: h  reason: collision with root package name */
    private final y1 f16360h;

    /* renamed from: i  reason: collision with root package name */
    private final g1 f16361i;

    /* renamed from: j  reason: collision with root package name */
    private final b2 f16362j;

    /* renamed from: k  reason: collision with root package name */
    private final o3 f16363k;

    /* renamed from: l  reason: collision with root package name */
    private final Handler f16364l;

    /* renamed from: m  reason: collision with root package name */
    private final th.r f16365m;

    /* renamed from: n  reason: collision with root package name */
    private final th.r f16366n;

    /* renamed from: o  reason: collision with root package name */
    private final th.r f16367o;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d0(Context context, r2 r2Var, y1 y1Var, th.r rVar, b2 b2Var, g1 g1Var, th.r rVar2, th.r rVar3, o3 o3Var) {
        super(new th.k0("AssetPackServiceListenerRegistry"), new IntentFilter("com.google.android.play.core.assetpacks.receiver.ACTION_SESSION_UPDATE"), context);
        this.f16364l = new Handler(Looper.getMainLooper());
        this.f16359g = r2Var;
        this.f16360h = y1Var;
        this.f16365m = rVar;
        this.f16362j = b2Var;
        this.f16361i = g1Var;
        this.f16366n = rVar2;
        this.f16367o = rVar3;
        this.f16363k = o3Var;
    }

    public static /* synthetic */ void g(d0 d0Var, Bundle bundle) {
        if (d0Var.f16359g.p(bundle)) {
            d0Var.f16360h.a();
        }
    }

    public static /* synthetic */ void h(final d0 d0Var, Bundle bundle, final AssetPackState assetPackState) {
        if (d0Var.f16359g.o(bundle)) {
            d0Var.f16364l.post(new Runnable() { // from class: com.google.android.play.core.assetpacks.z
                @Override // java.lang.Runnable
                public final void run() {
                    d0.this.e(assetPackState);
                }
            });
            ((t4) d0Var.f16365m.a()).f();
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    @Override // th.j0
    public final void b(Context context, Intent intent) {
        Bundle bundleExtra = intent.getBundleExtra("com.google.android.play.core.FLAGS");
        if (bundleExtra != null && bundleExtra.getBoolean("enableWorkManager")) {
            return;
        }
        final Bundle bundleExtra2 = intent.getBundleExtra("com.google.android.play.core.assetpacks.receiver.EXTRA_SESSION_STATE");
        if (bundleExtra2 == null) {
            this.f49840a.b("Empty bundle received from broadcast.", new Object[0]);
            return;
        }
        ArrayList<String> stringArrayList = bundleExtra2.getStringArrayList("pack_names");
        if (stringArrayList != null && stringArrayList.size() == 1) {
            final AssetPackState c10 = AssetPackState.c(bundleExtra2, stringArrayList.get(0), this.f16362j, this.f16363k);
            this.f49840a.a("ListenerRegistryBroadcastReceiver.onReceive: %s", c10);
            PendingIntent pendingIntent = (PendingIntent) bundleExtra2.getParcelable("confirmation_intent");
            if (pendingIntent != null) {
                this.f16361i.a(pendingIntent);
            }
            ((Executor) this.f16367o.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.b0
                @Override // java.lang.Runnable
                public final void run() {
                    d0.h(d0.this, bundleExtra2, c10);
                }
            });
            ((Executor) this.f16366n.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.c0
                @Override // java.lang.Runnable
                public final void run() {
                    d0.g(d0.this, bundleExtra2);
                }
            });
            return;
        }
        this.f49840a.b("Corrupt bundle received from broadcast.", new Object[0]);
    }
}
