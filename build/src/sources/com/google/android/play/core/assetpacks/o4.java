package com.google.android.play.core.assetpacks;

import android.content.ComponentName;
import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o4 implements wh.t {

    /* renamed from: a  reason: collision with root package name */
    private final wh.w f15947a;

    /* renamed from: b  reason: collision with root package name */
    private final wh.w f15948b;

    public o4(wh.w wVar, wh.w wVar2) {
        this.f15947a = wVar;
        this.f15948b = wVar2;
    }

    @Override // wh.w
    public final /* bridge */ /* synthetic */ Object a() {
        Object a10 = this.f15947a.a();
        Context b10 = ((q4) this.f15948b).b();
        k4 k4Var = (k4) a10;
        wh.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.AssetPackExtractionService"), 4);
        wh.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.ExtractionForegroundService"), 4);
        wh.s.a(k4Var);
        return k4Var;
    }
}
