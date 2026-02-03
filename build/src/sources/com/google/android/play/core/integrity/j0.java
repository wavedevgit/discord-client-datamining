package com.google.android.play.core.integrity;

import android.content.Context;
import android.os.Bundle;
import android.os.IBinder;
import com.google.android.gms.tasks.Task;
import com.google.android.play.core.integrity.c;
import gi.k0;
import java.util.ArrayList;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j0 {

    /* renamed from: a  reason: collision with root package name */
    private final gi.t0 f15798a;

    /* renamed from: b  reason: collision with root package name */
    private final String f15799b;

    /* renamed from: c  reason: collision with root package name */
    private final wg.k f15800c;

    /* renamed from: d  reason: collision with root package name */
    private final r f15801d;

    /* renamed from: e  reason: collision with root package name */
    private final x0 f15802e;

    /* renamed from: f  reason: collision with root package name */
    final gi.f f15803f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public j0(Context context, gi.t0 t0Var, r rVar, x0 x0Var) {
        wg.k kVar = new wg.k();
        this.f15800c = kVar;
        this.f15799b = context.getPackageName();
        this.f15798a = t0Var;
        this.f15801d = rVar;
        this.f15802e = x0Var;
        gi.f fVar = new gi.f(context, t0Var, "ExpressIntegrityService", k0.f15810a, new gi.a1() { // from class: wh.e
            @Override // gi.a1
            public final Object a(IBinder iBinder) {
                return k0.f(iBinder);
            }
        }, null);
        this.f15803f = fVar;
        fVar.c().post(new b0(this, kVar, context));
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Bundle a(j0 j0Var, c.d dVar, long j10, long j11, int i10) {
        Bundle bundle = new Bundle();
        bundle.putString("package.name", j0Var.f15799b);
        bundle.putLong("cloud.prj", j10);
        bundle.putString("nonce", dVar.b());
        bundle.putLong("warm.up.sid", j11);
        bundle.putInt("playcore.integrity.version.major", 1);
        bundle.putInt("playcore.integrity.version.minor", 4);
        bundle.putInt("playcore.integrity.version.patch", 0);
        bundle.putInt("webview.request.mode", 0);
        bundle.putIntegerArrayList("request.verdict.opt.out", new ArrayList<>(dVar.c()));
        ArrayList arrayList = new ArrayList();
        gi.g0.b(5, arrayList);
        bundle.putParcelableArrayList("event_timestamps", new ArrayList<>(gi.g0.a(arrayList)));
        return bundle;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ Bundle b(j0 j0Var, long j10, int i10) {
        Bundle bundle = new Bundle();
        bundle.putString("package.name", j0Var.f15799b);
        bundle.putLong("cloud.prj", j10);
        bundle.putInt("playcore.integrity.version.major", 1);
        bundle.putInt("playcore.integrity.version.minor", 4);
        bundle.putInt("playcore.integrity.version.patch", 0);
        bundle.putInt("webview.request.mode", 0);
        ArrayList arrayList = new ArrayList();
        gi.g0.b(4, arrayList);
        bundle.putParcelableArrayList("event_timestamps", new ArrayList<>(gi.g0.a(arrayList)));
        return bundle;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ boolean i(j0 j0Var, int i10) {
        if (j0Var.f15800c.a().p() && ((Integer) j0Var.f15800c.a().l()).intValue() < 83420000) {
            return true;
        }
        return false;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static /* bridge */ /* synthetic */ boolean j(j0 j0Var) {
        if (j0Var.f15800c.a().p() && ((Integer) j0Var.f15800c.a().l()).intValue() == 0) {
            return true;
        }
        return false;
    }

    public final Task c(c.d dVar, long j10, long j11, int i10) {
        this.f15798a.c("requestExpressIntegrityToken(%s)", Long.valueOf(j11));
        wg.k kVar = new wg.k();
        this.f15803f.t(new d0(this, kVar, 0, dVar, j10, j11, kVar), kVar);
        return kVar.a();
    }

    public final Task d(long j10, int i10) {
        this.f15798a.c("warmUpIntegrityToken(%s)", Long.valueOf(j10));
        wg.k kVar = new wg.k();
        this.f15803f.t(new c0(this, kVar, 0, j10, kVar), kVar);
        return kVar.a();
    }
}
