package com.google.android.play.core.assetpacks;

import android.app.PendingIntent;
import android.os.Bundle;
import java.util.ArrayList;
import java.util.concurrent.Executor;
import k4.p;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class s1 {

    /* renamed from: i  reason: collision with root package name */
    private static final wh.k0 f16001i = new wh.k0("ExtractionWorkScheduler");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f16002a;

    /* renamed from: b  reason: collision with root package name */
    private final b2 f16003b;

    /* renamed from: c  reason: collision with root package name */
    private final o3 f16004c;

    /* renamed from: d  reason: collision with root package name */
    private final g1 f16005d;

    /* renamed from: e  reason: collision with root package name */
    private final i0 f16006e;

    /* renamed from: f  reason: collision with root package name */
    private final wh.r f16007f;

    /* renamed from: g  reason: collision with root package name */
    private final wh.r f16008g;

    /* renamed from: h  reason: collision with root package name */
    private final wh.r f16009h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s1(r2 r2Var, b2 b2Var, o3 o3Var, g1 g1Var, wh.r rVar, wh.r rVar2, i0 i0Var, wh.r rVar3) {
        this.f16007f = rVar;
        this.f16002a = r2Var;
        this.f16003b = b2Var;
        this.f16004c = o3Var;
        this.f16005d = g1Var;
        this.f16008g = rVar2;
        this.f16006e = i0Var;
        this.f16009h = rVar3;
    }

    public static /* synthetic */ void a(s1 s1Var, Bundle bundle, AssetPackState assetPackState) {
        if (s1Var.f16002a.o(bundle)) {
            s1Var.f16006e.c(assetPackState);
            ((t4) s1Var.f16008g.a()).f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(final Bundle bundle, Bundle bundle2, Bundle bundle3) {
        ArrayList<String> stringArrayList = bundle.getStringArrayList("pack_names");
        if (stringArrayList != null && stringArrayList.size() == 1) {
            boolean z10 = bundle2.getBoolean("enableExpeditedWork");
            if (z10 && bundle3 == null) {
                f16001i.b("Notification options must be present when expedited work is enabled.", new Object[0]);
                return;
            }
            final AssetPackState c10 = AssetPackState.c(bundle, stringArrayList.get(0), this.f16003b, this.f16004c);
            f16001i.a("ExtractionWorkScheduler.scheduleExtraction: %s", c10);
            PendingIntent pendingIntent = (PendingIntent) bundle.getParcelable("confirmation_intent");
            if (pendingIntent != null) {
                this.f16005d.a(pendingIntent);
            }
            ((Executor) this.f16009h.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.r1
                @Override // java.lang.Runnable
                public final void run() {
                    s1.a(s1.this, bundle, c10);
                }
            });
            if (z10) {
                ((k4.y) this.f16007f.a()).d("extractAssetPacks", k4.f.APPEND, (k4.p) ((p.a) ((p.a) new p.a(ExtractionWorker.class).h(k4.r.RUN_AS_NON_EXPEDITED_WORK_REQUEST)).j(b1.c(bundle, bundle3))).a());
                return;
            } else {
                ((k4.y) this.f16007f.a()).d("extractAssetPacks", k4.f.APPEND, (k4.p) ((p.a) new p.a(ExtractionWorker.class).j(b1.c(bundle, new Bundle()))).a());
                return;
            }
        }
        f16001i.b("Corrupt packStateBundle.", new Object[0]);
    }
}
