package com.google.android.play.core.assetpacks;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p4 implements yh.t {

    /* renamed from: a  reason: collision with root package name */
    private final yh.w f16084a;

    /* renamed from: b  reason: collision with root package name */
    private final yh.w f16085b;

    /* renamed from: c  reason: collision with root package name */
    private final yh.w f16086c;

    public p4(yh.w wVar, yh.w wVar2, yh.w wVar3) {
        this.f16084a = wVar;
        this.f16085b = wVar2;
        this.f16086c = wVar3;
    }

    @Override // yh.w
    public final /* bridge */ /* synthetic */ Object a() {
        t4 t4Var;
        Context b10 = ((q4) this.f16084a).b();
        yh.r c10 = yh.r.c(yh.v.a(this.f16085b));
        yh.r c11 = yh.r.c(yh.v.a(this.f16086c));
        if (m4.b(b10) == null) {
            t4Var = (t4) c10.a();
        } else {
            t4Var = (t4) c11.a();
        }
        yh.s.a(t4Var);
        return t4Var;
    }
}
