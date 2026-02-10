package com.google.android.play.core.assetpacks;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c3 implements ai.t {

    /* renamed from: a  reason: collision with root package name */
    private final ai.w f16583a;

    /* renamed from: b  reason: collision with root package name */
    private final ai.w f16584b;

    /* renamed from: c  reason: collision with root package name */
    private final ai.w f16585c;

    /* renamed from: d  reason: collision with root package name */
    private final ai.w f16586d;

    /* renamed from: e  reason: collision with root package name */
    private final ai.w f16587e;

    /* renamed from: f  reason: collision with root package name */
    private final ai.w f16588f;

    /* renamed from: g  reason: collision with root package name */
    private final ai.w f16589g;

    public c3(ai.w wVar, ai.w wVar2, ai.w wVar3, ai.w wVar4, ai.w wVar5, ai.w wVar6, ai.w wVar7) {
        this.f16583a = wVar;
        this.f16584b = wVar2;
        this.f16585c = wVar3;
        this.f16586d = wVar4;
        this.f16587e = wVar5;
        this.f16588f = wVar6;
        this.f16589g = wVar7;
    }

    @Override // ai.w
    public final /* bridge */ /* synthetic */ Object a() {
        File externalFilesDir;
        String str = (String) this.f16583a.a();
        Object a10 = this.f16584b.a();
        Object a11 = this.f16585c.a();
        Context b10 = ((q4) this.f16586d).b();
        Object a12 = this.f16587e.a();
        ai.r c10 = ai.r.c(ai.v.a(this.f16588f));
        d0 d0Var = (d0) a10;
        b2 b2Var = (b2) a11;
        q3 q3Var = (q3) a12;
        o3 o3Var = (o3) this.f16589g.a();
        if (str != null) {
            externalFilesDir = new File(b10.getExternalFilesDir(null), str);
        } else {
            externalFilesDir = b10.getExternalFilesDir(null);
        }
        return new b3(externalFilesDir, d0Var, b2Var, b10, q3Var, c10, o3Var);
    }
}
