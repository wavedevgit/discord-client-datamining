package com.google.android.play.core.assetpacks;

import android.content.ComponentName;
import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o4 implements yh.t {

    /* renamed from: a  reason: collision with root package name */
    private final yh.w f16067a;

    /* renamed from: b  reason: collision with root package name */
    private final yh.w f16068b;

    public o4(yh.w wVar, yh.w wVar2) {
        this.f16067a = wVar;
        this.f16068b = wVar2;
    }

    @Override // yh.w
    public final /* bridge */ /* synthetic */ Object a() {
        Object a10 = this.f16067a.a();
        Context b10 = ((q4) this.f16068b).b();
        k4 k4Var = (k4) a10;
        yh.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.AssetPackExtractionService"), 4);
        yh.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.ExtractionForegroundService"), 4);
        yh.s.a(k4Var);
        return k4Var;
    }
}
