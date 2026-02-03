package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 extends gi.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Context f16778e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j0 f16779i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b0(j0 j0Var, wg.k kVar, Context context) {
        super(kVar);
        this.f16778e = context;
        this.f16779i = j0Var;
    }

    @Override // gi.u0
    protected final void b() {
        wg.k kVar;
        Context context = this.f16778e;
        kVar = this.f16779i.f16832c;
        kVar.e(Integer.valueOf(gi.j.a(context)));
    }
}
