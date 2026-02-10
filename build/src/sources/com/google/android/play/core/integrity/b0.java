package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 extends li.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Context f16260e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j0 f16261i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b0(j0 j0Var, zg.k kVar, Context context) {
        super(kVar);
        this.f16260e = context;
        this.f16261i = j0Var;
    }

    @Override // li.u0
    protected final void b() {
        zg.k kVar;
        Context context = this.f16260e;
        kVar = this.f16261i.f16314c;
        kVar.e(Integer.valueOf(li.j.a(context)));
    }
}
