package com.google.android.play.core.assetpacks;

import android.content.ComponentName;
import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class o4 implements ai.t {

    /* renamed from: a  reason: collision with root package name */
    private final ai.w f16817a;

    /* renamed from: b  reason: collision with root package name */
    private final ai.w f16818b;

    public o4(ai.w wVar, ai.w wVar2) {
        this.f16817a = wVar;
        this.f16818b = wVar2;
    }

    @Override // ai.w
    public final /* bridge */ /* synthetic */ Object a() {
        Object a10 = this.f16817a.a();
        Context b10 = ((q4) this.f16818b).b();
        k4 k4Var = (k4) a10;
        ai.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.AssetPackExtractionService"), 4);
        ai.g.a(b10.getPackageManager(), new ComponentName(b10.getPackageName(), "com.google.android.play.core.assetpacks.ExtractionForegroundService"), 4);
        ai.s.a(k4Var);
        return k4Var;
    }
}
