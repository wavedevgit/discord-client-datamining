package com.google.android.play.core.assetpacks;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c3 implements th.t {

    /* renamed from: a  reason: collision with root package name */
    private final th.w f16723a;

    /* renamed from: b  reason: collision with root package name */
    private final th.w f16724b;

    /* renamed from: c  reason: collision with root package name */
    private final th.w f16725c;

    /* renamed from: d  reason: collision with root package name */
    private final th.w f16726d;

    /* renamed from: e  reason: collision with root package name */
    private final th.w f16727e;

    /* renamed from: f  reason: collision with root package name */
    private final th.w f16728f;

    /* renamed from: g  reason: collision with root package name */
    private final th.w f16729g;

    public c3(th.w wVar, th.w wVar2, th.w wVar3, th.w wVar4, th.w wVar5, th.w wVar6, th.w wVar7) {
        this.f16723a = wVar;
        this.f16724b = wVar2;
        this.f16725c = wVar3;
        this.f16726d = wVar4;
        this.f16727e = wVar5;
        this.f16728f = wVar6;
        this.f16729g = wVar7;
    }

    @Override // th.w
    public final /* bridge */ /* synthetic */ Object a() {
        File externalFilesDir;
        String str = (String) this.f16723a.a();
        Object a10 = this.f16724b.a();
        Object a11 = this.f16725c.a();
        Context b10 = ((q4) this.f16726d).b();
        Object a12 = this.f16727e.a();
        th.r c10 = th.r.c(th.v.a(this.f16728f));
        d0 d0Var = (d0) a10;
        b2 b2Var = (b2) a11;
        q3 q3Var = (q3) a12;
        o3 o3Var = (o3) this.f16729g.a();
        if (str != null) {
            externalFilesDir = new File(b10.getExternalFilesDir(null), str);
        } else {
            externalFilesDir = b10.getExternalFilesDir(null);
        }
        return new b3(externalFilesDir, d0Var, b2Var, b10, q3Var, c10, o3Var);
    }
}
