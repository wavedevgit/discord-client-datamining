package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 extends gi.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Context f15746e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j0 f15747i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b0(j0 j0Var, wg.k kVar, Context context) {
        super(kVar);
        this.f15746e = context;
        this.f15747i = j0Var;
    }

    @Override // gi.u0
    protected final void b() {
        wg.k kVar;
        Context context = this.f15746e;
        kVar = this.f15747i.f15800c;
        kVar.e(Integer.valueOf(gi.j.a(context)));
    }
}
