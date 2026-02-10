package com.google.android.play.core.assetpacks;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c3 implements yh.t {

    /* renamed from: a  reason: collision with root package name */
    private final yh.w f15834a;

    /* renamed from: b  reason: collision with root package name */
    private final yh.w f15835b;

    /* renamed from: c  reason: collision with root package name */
    private final yh.w f15836c;

    /* renamed from: d  reason: collision with root package name */
    private final yh.w f15837d;

    /* renamed from: e  reason: collision with root package name */
    private final yh.w f15838e;

    /* renamed from: f  reason: collision with root package name */
    private final yh.w f15839f;

    /* renamed from: g  reason: collision with root package name */
    private final yh.w f15840g;

    public c3(yh.w wVar, yh.w wVar2, yh.w wVar3, yh.w wVar4, yh.w wVar5, yh.w wVar6, yh.w wVar7) {
        this.f15834a = wVar;
        this.f15835b = wVar2;
        this.f15836c = wVar3;
        this.f15837d = wVar4;
        this.f15838e = wVar5;
        this.f15839f = wVar6;
        this.f15840g = wVar7;
    }

    @Override // yh.w
    public final /* bridge */ /* synthetic */ Object a() {
        File externalFilesDir;
        String str = (String) this.f15834a.a();
        Object a10 = this.f15835b.a();
        Object a11 = this.f15836c.a();
        Context b10 = ((q4) this.f15837d).b();
        Object a12 = this.f15838e.a();
        yh.r c10 = yh.r.c(yh.v.a(this.f15839f));
        d0 d0Var = (d0) a10;
        b2 b2Var = (b2) a11;
        q3 q3Var = (q3) a12;
        o3 o3Var = (o3) this.f15840g.a();
        if (str != null) {
            externalFilesDir = new File(b10.getExternalFilesDir(null), str);
        } else {
            externalFilesDir = b10.getExternalFilesDir(null);
        }
        return new b3(externalFilesDir, d0Var, b2Var, b10, q3Var, c10, o3Var);
    }
}
