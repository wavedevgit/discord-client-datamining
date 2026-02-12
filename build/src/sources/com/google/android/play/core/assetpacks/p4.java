package com.google.android.play.core.assetpacks;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p4 implements ai.t {

    /* renamed from: a  reason: collision with root package name */
    private final ai.w f16834a;

    /* renamed from: b  reason: collision with root package name */
    private final ai.w f16835b;

    /* renamed from: c  reason: collision with root package name */
    private final ai.w f16836c;

    public p4(ai.w wVar, ai.w wVar2, ai.w wVar3) {
        this.f16834a = wVar;
        this.f16835b = wVar2;
        this.f16836c = wVar3;
    }

    @Override // ai.w
    public final /* bridge */ /* synthetic */ Object a() {
        t4 t4Var;
        Context b10 = ((q4) this.f16834a).b();
        ai.r c10 = ai.r.c(ai.v.a(this.f16835b));
        ai.r c11 = ai.r.c(ai.v.a(this.f16836c));
        if (m4.b(b10) == null) {
            t4Var = (t4) c10.a();
        } else {
            t4Var = (t4) c11.a();
        }
        ai.s.a(t4Var);
        return t4Var;
    }
}
