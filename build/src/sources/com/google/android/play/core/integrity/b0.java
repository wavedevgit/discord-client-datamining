package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 extends ki.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Context f16120e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j0 f16121i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b0(j0 j0Var, yg.k kVar, Context context) {
        super(kVar);
        this.f16120e = context;
        this.f16121i = j0Var;
    }

    @Override // ki.u0
    protected final void b() {
        yg.k kVar;
        Context context = this.f16120e;
        kVar = this.f16121i.f16174c;
        kVar.e(Integer.valueOf(ki.j.a(context)));
    }
}
