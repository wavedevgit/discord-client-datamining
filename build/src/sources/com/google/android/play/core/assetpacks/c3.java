package com.google.android.play.core.assetpacks;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c3 implements th.t {

    /* renamed from: a  reason: collision with root package name */
    private final th.w f16352a;

    /* renamed from: b  reason: collision with root package name */
    private final th.w f16353b;

    /* renamed from: c  reason: collision with root package name */
    private final th.w f16354c;

    /* renamed from: d  reason: collision with root package name */
    private final th.w f16355d;

    /* renamed from: e  reason: collision with root package name */
    private final th.w f16356e;

    /* renamed from: f  reason: collision with root package name */
    private final th.w f16357f;

    /* renamed from: g  reason: collision with root package name */
    private final th.w f16358g;

    public c3(th.w wVar, th.w wVar2, th.w wVar3, th.w wVar4, th.w wVar5, th.w wVar6, th.w wVar7) {
        this.f16352a = wVar;
        this.f16353b = wVar2;
        this.f16354c = wVar3;
        this.f16355d = wVar4;
        this.f16356e = wVar5;
        this.f16357f = wVar6;
        this.f16358g = wVar7;
    }

    @Override // th.w
    public final /* bridge */ /* synthetic */ Object a() {
        File externalFilesDir;
        String str = (String) this.f16352a.a();
        Object a10 = this.f16353b.a();
        Object a11 = this.f16354c.a();
        Context b10 = ((q4) this.f16355d).b();
        Object a12 = this.f16356e.a();
        th.r c10 = th.r.c(th.v.a(this.f16357f));
        d0 d0Var = (d0) a10;
        b2 b2Var = (b2) a11;
        q3 q3Var = (q3) a12;
        o3 o3Var = (o3) this.f16358g.a();
        if (str != null) {
            externalFilesDir = new File(b10.getExternalFilesDir(null), str);
        } else {
            externalFilesDir = b10.getExternalFilesDir(null);
        }
        return new b3(externalFilesDir, d0Var, b2Var, b10, q3Var, c10, o3Var);
    }
}
