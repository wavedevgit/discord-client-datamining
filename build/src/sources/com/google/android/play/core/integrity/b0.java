package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 extends ji.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Context f16140e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j0 f16141i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b0(j0 j0Var, xg.k kVar, Context context) {
        super(kVar);
        this.f16140e = context;
        this.f16141i = j0Var;
    }

    @Override // ji.u0
    protected final void b() {
        xg.k kVar;
        Context context = this.f16140e;
        kVar = this.f16141i.f16194c;
        kVar.e(Integer.valueOf(ji.j.a(context)));
    }
}
