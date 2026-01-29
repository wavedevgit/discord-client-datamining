package com.google.android.play.core.assetpacks;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class p4 implements th.t {

    /* renamed from: a  reason: collision with root package name */
    private final th.w f16973a;

    /* renamed from: b  reason: collision with root package name */
    private final th.w f16974b;

    /* renamed from: c  reason: collision with root package name */
    private final th.w f16975c;

    public p4(th.w wVar, th.w wVar2, th.w wVar3) {
        this.f16973a = wVar;
        this.f16974b = wVar2;
        this.f16975c = wVar3;
    }

    @Override // th.w
    public final /* bridge */ /* synthetic */ Object a() {
        t4 t4Var;
        Context b10 = ((q4) this.f16973a).b();
        th.r c10 = th.r.c(th.v.a(this.f16974b));
        th.r c11 = th.r.c(th.v.a(this.f16975c));
        if (m4.b(b10) == null) {
            t4Var = (t4) c10.a();
        } else {
            t4Var = (t4) c11.a();
        }
        th.s.a(t4Var);
        return t4Var;
    }
}
