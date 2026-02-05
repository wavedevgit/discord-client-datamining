package com.google.android.play.core.assetpacks;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c3 implements wh.t {

    /* renamed from: a  reason: collision with root package name */
    private final wh.w f15714a;

    /* renamed from: b  reason: collision with root package name */
    private final wh.w f15715b;

    /* renamed from: c  reason: collision with root package name */
    private final wh.w f15716c;

    /* renamed from: d  reason: collision with root package name */
    private final wh.w f15717d;

    /* renamed from: e  reason: collision with root package name */
    private final wh.w f15718e;

    /* renamed from: f  reason: collision with root package name */
    private final wh.w f15719f;

    /* renamed from: g  reason: collision with root package name */
    private final wh.w f15720g;

    public c3(wh.w wVar, wh.w wVar2, wh.w wVar3, wh.w wVar4, wh.w wVar5, wh.w wVar6, wh.w wVar7) {
        this.f15714a = wVar;
        this.f15715b = wVar2;
        this.f15716c = wVar3;
        this.f15717d = wVar4;
        this.f15718e = wVar5;
        this.f15719f = wVar6;
        this.f15720g = wVar7;
    }

    @Override // wh.w
    public final /* bridge */ /* synthetic */ Object a() {
        File externalFilesDir;
        String str = (String) this.f15714a.a();
        Object a10 = this.f15715b.a();
        Object a11 = this.f15716c.a();
        Context b10 = ((q4) this.f15717d).b();
        Object a12 = this.f15718e.a();
        wh.r c10 = wh.r.c(wh.v.a(this.f15719f));
        d0 d0Var = (d0) a10;
        b2 b2Var = (b2) a11;
        q3 q3Var = (q3) a12;
        o3 o3Var = (o3) this.f15720g.a();
        if (str != null) {
            externalFilesDir = new File(b10.getExternalFilesDir(null), str);
        } else {
            externalFilesDir = b10.getExternalFilesDir(null);
        }
        return new b3(externalFilesDir, d0Var, b2Var, b10, q3Var, c10, o3Var);
    }
}
