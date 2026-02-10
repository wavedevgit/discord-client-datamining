package com.google.android.play.core.integrity;

import android.content.Context;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class b0 extends ni.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ Context f17009e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ j0 f17010i;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b0(j0 j0Var, zg.k kVar, Context context) {
        super(kVar);
        this.f17009e = context;
        this.f17010i = j0Var;
    }

    @Override // ni.u0
    protected final void b() {
        zg.k kVar;
        Context context = this.f17009e;
        kVar = this.f17010i.f17063c;
        kVar.e(Integer.valueOf(ni.j.a(context)));
    }
}
