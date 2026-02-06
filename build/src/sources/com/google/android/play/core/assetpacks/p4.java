package com.google.android.play.core.assetpacks;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p4 implements xh.t {

    /* renamed from: a  reason: collision with root package name */
    private final xh.w f15944a;

    /* renamed from: b  reason: collision with root package name */
    private final xh.w f15945b;

    /* renamed from: c  reason: collision with root package name */
    private final xh.w f15946c;

    public p4(xh.w wVar, xh.w wVar2, xh.w wVar3) {
        this.f15944a = wVar;
        this.f15945b = wVar2;
        this.f15946c = wVar3;
    }

    @Override // xh.w
    public final /* bridge */ /* synthetic */ Object a() {
        t4 t4Var;
        Context b10 = ((q4) this.f15944a).b();
        xh.r c10 = xh.r.c(xh.v.a(this.f15945b));
        xh.r c11 = xh.r.c(xh.v.a(this.f15946c));
        if (m4.b(b10) == null) {
            t4Var = (t4) c10.a();
        } else {
            t4Var = (t4) c11.a();
        }
        xh.s.a(t4Var);
        return t4Var;
    }
}
