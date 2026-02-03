package com.google.android.play.core.assetpacks;

import android.content.Context;
import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class c3 implements th.t {

    /* renamed from: a  reason: collision with root package name */
    private final th.w f15320a;

    /* renamed from: b  reason: collision with root package name */
    private final th.w f15321b;

    /* renamed from: c  reason: collision with root package name */
    private final th.w f15322c;

    /* renamed from: d  reason: collision with root package name */
    private final th.w f15323d;

    /* renamed from: e  reason: collision with root package name */
    private final th.w f15324e;

    /* renamed from: f  reason: collision with root package name */
    private final th.w f15325f;

    /* renamed from: g  reason: collision with root package name */
    private final th.w f15326g;

    public c3(th.w wVar, th.w wVar2, th.w wVar3, th.w wVar4, th.w wVar5, th.w wVar6, th.w wVar7) {
        this.f15320a = wVar;
        this.f15321b = wVar2;
        this.f15322c = wVar3;
        this.f15323d = wVar4;
        this.f15324e = wVar5;
        this.f15325f = wVar6;
        this.f15326g = wVar7;
    }

    @Override // th.w
    public final /* bridge */ /* synthetic */ Object a() {
        File externalFilesDir;
        String str = (String) this.f15320a.a();
        Object a10 = this.f15321b.a();
        Object a11 = this.f15322c.a();
        Context b10 = ((q4) this.f15323d).b();
        Object a12 = this.f15324e.a();
        th.r c10 = th.r.c(th.v.a(this.f15325f));
        d0 d0Var = (d0) a10;
        b2 b2Var = (b2) a11;
        q3 q3Var = (q3) a12;
        o3 o3Var = (o3) this.f15326g.a();
        if (str != null) {
            externalFilesDir = new File(b10.getExternalFilesDir(null), str);
        } else {
            externalFilesDir = b10.getExternalFilesDir(null);
        }
        return new b3(externalFilesDir, d0Var, b2Var, b10, q3Var, c10, o3Var);
    }
}
