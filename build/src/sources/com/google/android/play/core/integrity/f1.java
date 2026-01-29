package com.google.android.play.core.integrity;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 implements u {

    /* renamed from: a  reason: collision with root package name */
    private final gi.d0 f17173a;

    /* renamed from: b  reason: collision with root package name */
    private final gi.d0 f17174b;

    /* renamed from: c  reason: collision with root package name */
    private final gi.d0 f17175c;

    /* renamed from: d  reason: collision with root package name */
    private final gi.d0 f17176d;

    /* renamed from: e  reason: collision with root package name */
    private final gi.d0 f17177e;

    /* renamed from: f  reason: collision with root package name */
    private final gi.d0 f17178f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ f1(Context context, wh.k kVar) {
        wh.d dVar;
        b1 b1Var;
        b1 b1Var2;
        gi.z b10 = gi.a0.b(context);
        this.f17173a = b10;
        dVar = a0.f17146a;
        gi.d0 b11 = gi.y.b(dVar);
        this.f17174b = b11;
        b1Var = a1.f17147a;
        s sVar = new s(b10, b1Var);
        this.f17175c = sVar;
        b1Var2 = a1.f17147a;
        gi.d0 b12 = gi.y.b(new l0(b10, b11, sVar, b1Var2));
        this.f17176d = b12;
        gi.d0 b13 = gi.y.b(new q0(b12));
        this.f17177e = b13;
        this.f17178f = gi.y.b(new z(b12, b13));
    }

    @Override // com.google.android.play.core.integrity.u
    public final c a() {
        return (c) this.f17178f.a();
    }
}
