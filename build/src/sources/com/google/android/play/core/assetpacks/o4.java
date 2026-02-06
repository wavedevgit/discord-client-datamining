package com.google.android.play.core.assetpacks;

import android.content.ComponentName;
import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o4 implements xh.t {

    /* renamed from: a  reason: collision with root package name */
    private final xh.w f15927a;

    /* renamed from: b  reason: collision with root package name */
    private final xh.w f15928b;

    public o4(xh.w wVar, xh.w wVar2) {
        this.f15927a = wVar;
        this.f15928b = wVar2;
    }

    @Override // xh.w
    public final /* bridge */ /* synthetic */ Object a() {
        Object a10 = this.f15927a.a();
        Context b10 = ((q4) this.f15928b).b();
        k4 k4Var = (k4) a10;
        xh.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.AssetPackExtractionService"), 4);
        xh.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.ExtractionForegroundService"), 4);
        xh.s.a(k4Var);
        return k4Var;
    }
}
