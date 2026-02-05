package com.google.android.play.core.assetpacks;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p4 implements wh.t {

    /* renamed from: a  reason: collision with root package name */
    private final wh.w f15964a;

    /* renamed from: b  reason: collision with root package name */
    private final wh.w f15965b;

    /* renamed from: c  reason: collision with root package name */
    private final wh.w f15966c;

    public p4(wh.w wVar, wh.w wVar2, wh.w wVar3) {
        this.f15964a = wVar;
        this.f15965b = wVar2;
        this.f15966c = wVar3;
    }

    @Override // wh.w
    public final /* bridge */ /* synthetic */ Object a() {
        t4 t4Var;
        Context b10 = ((q4) this.f15964a).b();
        wh.r c10 = wh.r.c(wh.v.a(this.f15965b));
        wh.r c11 = wh.r.c(wh.v.a(this.f15966c));
        if (m4.b(b10) == null) {
            t4Var = (t4) c10.a();
        } else {
            t4Var = (t4) c11.a();
        }
        wh.s.a(t4Var);
        return t4Var;
    }
}
