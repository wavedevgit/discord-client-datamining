package com.google.android.play.core.integrity;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 implements u {

    /* renamed from: a  reason: collision with root package name */
    private final gi.d0 f15770a;

    /* renamed from: b  reason: collision with root package name */
    private final gi.d0 f15771b;

    /* renamed from: c  reason: collision with root package name */
    private final gi.d0 f15772c;

    /* renamed from: d  reason: collision with root package name */
    private final gi.d0 f15773d;

    /* renamed from: e  reason: collision with root package name */
    private final gi.d0 f15774e;

    /* renamed from: f  reason: collision with root package name */
    private final gi.d0 f15775f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ f1(Context context, wh.k kVar) {
        wh.d dVar;
        b1 b1Var;
        b1 b1Var2;
        gi.z b10 = gi.a0.b(context);
        this.f15770a = b10;
        dVar = a0.f15743a;
        gi.d0 b11 = gi.y.b(dVar);
        this.f15771b = b11;
        b1Var = a1.f15744a;
        s sVar = new s(b10, b1Var);
        this.f15772c = sVar;
        b1Var2 = a1.f15744a;
        gi.d0 b12 = gi.y.b(new l0(b10, b11, sVar, b1Var2));
        this.f15773d = b12;
        gi.d0 b13 = gi.y.b(new q0(b12));
        this.f15774e = b13;
        this.f15775f = gi.y.b(new z(b12, b13));
    }

    @Override // com.google.android.play.core.integrity.u
    public final c a() {
        return (c) this.f15775f.a();
    }
}
