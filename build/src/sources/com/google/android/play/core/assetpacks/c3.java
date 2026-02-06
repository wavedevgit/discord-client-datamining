package com.google.android.play.core.assetpacks;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c3 implements xh.t {

    /* renamed from: a  reason: collision with root package name */
    private final xh.w f15694a;

    /* renamed from: b  reason: collision with root package name */
    private final xh.w f15695b;

    /* renamed from: c  reason: collision with root package name */
    private final xh.w f15696c;

    /* renamed from: d  reason: collision with root package name */
    private final xh.w f15697d;

    /* renamed from: e  reason: collision with root package name */
    private final xh.w f15698e;

    /* renamed from: f  reason: collision with root package name */
    private final xh.w f15699f;

    /* renamed from: g  reason: collision with root package name */
    private final xh.w f15700g;

    public c3(xh.w wVar, xh.w wVar2, xh.w wVar3, xh.w wVar4, xh.w wVar5, xh.w wVar6, xh.w wVar7) {
        this.f15694a = wVar;
        this.f15695b = wVar2;
        this.f15696c = wVar3;
        this.f15697d = wVar4;
        this.f15698e = wVar5;
        this.f15699f = wVar6;
        this.f15700g = wVar7;
    }

    @Override // xh.w
    public final /* bridge */ /* synthetic */ Object a() {
        File externalFilesDir;
        String str = (String) this.f15694a.a();
        Object a10 = this.f15695b.a();
        Object a11 = this.f15696c.a();
        Context b10 = ((q4) this.f15697d).b();
        Object a12 = this.f15698e.a();
        xh.r c10 = xh.r.c(xh.v.a(this.f15699f));
        d0 d0Var = (d0) a10;
        b2 b2Var = (b2) a11;
        q3 q3Var = (q3) a12;
        o3 o3Var = (o3) this.f15700g.a();
        if (str != null) {
            externalFilesDir = new File(b10.getExternalFilesDir(null), str);
        } else {
            externalFilesDir = b10.getExternalFilesDir(null);
        }
        return new b3(externalFilesDir, d0Var, b2Var, b10, q3Var, c10, o3Var);
    }
}
