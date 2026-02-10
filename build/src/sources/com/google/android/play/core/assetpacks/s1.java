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
    private static final ai.k0 f16870i = new ai.k0("ExtractionWorkScheduler");

    /* renamed from: a  reason: collision with root package name */
    private final r2 f16871a;

    /* renamed from: b  reason: collision with root package name */
    private final b2 f16872b;

    /* renamed from: c  reason: collision with root package name */
    private final o3 f16873c;

    /* renamed from: d  reason: collision with root package name */
    private final g1 f16874d;

    /* renamed from: e  reason: collision with root package name */
    private final i0 f16875e;

    /* renamed from: f  reason: collision with root package name */
    private final ai.r f16876f;

    /* renamed from: g  reason: collision with root package name */
    private final ai.r f16877g;

    /* renamed from: h  reason: collision with root package name */
    private final ai.r f16878h;

    /* JADX INFO: Access modifiers changed from: package-private */
    public s1(r2 r2Var, b2 b2Var, o3 o3Var, g1 g1Var, ai.r rVar, ai.r rVar2, i0 i0Var, ai.r rVar3) {
        this.f16876f = rVar;
        this.f16871a = r2Var;
        this.f16872b = b2Var;
        this.f16873c = o3Var;
        this.f16874d = g1Var;
        this.f16877g = rVar2;
        this.f16875e = i0Var;
        this.f16878h = rVar3;
    }

    public static /* synthetic */ void a(s1 s1Var, Bundle bundle, AssetPackState assetPackState) {
        if (s1Var.f16871a.o(bundle)) {
            s1Var.f16875e.c(assetPackState);
            ((t4) s1Var.f16877g.a()).f();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void b(final Bundle bundle, Bundle bundle2, Bundle bundle3) {
        ArrayList<String> stringArrayList = bundle.getStringArrayList("pack_names");
        if (stringArrayList != null && stringArrayList.size() == 1) {
            boolean z10 = bundle2.getBoolean("enableExpeditedWork");
            if (z10 && bundle3 == null) {
                f16870i.b("Notification options must be present when expedited work is enabled.", new Object[0]);
                return;
            }
            final AssetPackState c10 = AssetPackState.c(bundle, stringArrayList.get(0), this.f16872b, this.f16873c);
            f16870i.a("ExtractionWorkScheduler.scheduleExtraction: %s", c10);
            PendingIntent pendingIntent = (PendingIntent) bundle.getParcelable("confirmation_intent");
            if (pendingIntent != null) {
                this.f16874d.a(pendingIntent);
            }
            ((Executor) this.f16878h.a()).execute(new Runnable() { // from class: com.google.android.play.core.assetpacks.r1
                @Override // java.lang.Runnable
                public final void run() {
                    s1.a(s1.this, bundle, c10);
                }
            });
            if (z10) {
                ((k4.y) this.f16876f.a()).d("extractAssetPacks", k4.f.APPEND, (k4.p) ((p.a) ((p.a) new p.a(ExtractionWorker.class).h(k4.r.RUN_AS_NON_EXPEDITED_WORK_REQUEST)).j(b1.c(bundle, bundle3))).a());
                return;
            } else {
                ((k4.y) this.f16876f.a()).d("extractAssetPacks", k4.f.APPEND, (k4.p) ((p.a) new p.a(ExtractionWorker.class).j(b1.c(bundle, new Bundle()))).a());
                return;
            }
        }
        f16870i.b("Corrupt packStateBundle.", new Object[0]);
    }
}
