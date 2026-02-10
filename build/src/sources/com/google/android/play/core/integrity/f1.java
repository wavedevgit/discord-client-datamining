package com.google.android.play.core.integrity;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 implements u {

    /* renamed from: a  reason: collision with root package name */
    private final li.d0 f16284a;

    /* renamed from: b  reason: collision with root package name */
    private final li.d0 f16285b;

    /* renamed from: c  reason: collision with root package name */
    private final li.d0 f16286c;

    /* renamed from: d  reason: collision with root package name */
    private final li.d0 f16287d;

    /* renamed from: e  reason: collision with root package name */
    private final li.d0 f16288e;

    /* renamed from: f  reason: collision with root package name */
    private final li.d0 f16289f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ f1(Context context, bi.k kVar) {
        bi.d dVar;
        b1 b1Var;
        b1 b1Var2;
        li.z b10 = li.a0.b(context);
        this.f16284a = b10;
        dVar = a0.f16257a;
        li.d0 b11 = li.y.b(dVar);
        this.f16285b = b11;
        b1Var = a1.f16258a;
        s sVar = new s(b10, b1Var);
        this.f16286c = sVar;
        b1Var2 = a1.f16258a;
        li.d0 b12 = li.y.b(new l0(b10, b11, sVar, b1Var2));
        this.f16287d = b12;
        li.d0 b13 = li.y.b(new q0(b12));
        this.f16288e = b13;
        this.f16289f = li.y.b(new z(b12, b13));
    }

    @Override // com.google.android.play.core.integrity.u
    public final c a() {
        return (c) this.f16289f.a();
    }
}
