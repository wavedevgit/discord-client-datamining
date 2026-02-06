package com.google.android.play.core.integrity;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 implements u {

    /* renamed from: a  reason: collision with root package name */
    private final ki.d0 f16144a;

    /* renamed from: b  reason: collision with root package name */
    private final ki.d0 f16145b;

    /* renamed from: c  reason: collision with root package name */
    private final ki.d0 f16146c;

    /* renamed from: d  reason: collision with root package name */
    private final ki.d0 f16147d;

    /* renamed from: e  reason: collision with root package name */
    private final ki.d0 f16148e;

    /* renamed from: f  reason: collision with root package name */
    private final ki.d0 f16149f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ f1(Context context, ai.k kVar) {
        ai.d dVar;
        b1 b1Var;
        b1 b1Var2;
        ki.z b10 = ki.a0.b(context);
        this.f16144a = b10;
        dVar = a0.f16117a;
        ki.d0 b11 = ki.y.b(dVar);
        this.f16145b = b11;
        b1Var = a1.f16118a;
        s sVar = new s(b10, b1Var);
        this.f16146c = sVar;
        b1Var2 = a1.f16118a;
        ki.d0 b12 = ki.y.b(new l0(b10, b11, sVar, b1Var2));
        this.f16147d = b12;
        ki.d0 b13 = ki.y.b(new q0(b12));
        this.f16148e = b13;
        this.f16149f = ki.y.b(new z(b12, b13));
    }

    @Override // com.google.android.play.core.integrity.u
    public final c a() {
        return (c) this.f16149f.a();
    }
}
