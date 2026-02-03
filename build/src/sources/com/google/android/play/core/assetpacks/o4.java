package com.google.android.play.core.assetpacks;

import android.content.ComponentName;
import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o4 implements th.t {

    /* renamed from: a  reason: collision with root package name */
    private final th.w f16585a;

    /* renamed from: b  reason: collision with root package name */
    private final th.w f16586b;

    public o4(th.w wVar, th.w wVar2) {
        this.f16585a = wVar;
        this.f16586b = wVar2;
    }

    @Override // th.w
    public final /* bridge */ /* synthetic */ Object a() {
        Object a10 = this.f16585a.a();
        Context b10 = ((q4) this.f16586b).b();
        k4 k4Var = (k4) a10;
        th.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.AssetPackExtractionService"), 4);
        th.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.ExtractionForegroundService"), 4);
        th.s.a(k4Var);
        return k4Var;
    }
}
