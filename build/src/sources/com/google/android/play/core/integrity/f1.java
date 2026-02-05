package com.google.android.play.core.integrity;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 implements u {

    /* renamed from: a  reason: collision with root package name */
    private final ji.d0 f16164a;

    /* renamed from: b  reason: collision with root package name */
    private final ji.d0 f16165b;

    /* renamed from: c  reason: collision with root package name */
    private final ji.d0 f16166c;

    /* renamed from: d  reason: collision with root package name */
    private final ji.d0 f16167d;

    /* renamed from: e  reason: collision with root package name */
    private final ji.d0 f16168e;

    /* renamed from: f  reason: collision with root package name */
    private final ji.d0 f16169f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ f1(Context context, zh.k kVar) {
        zh.d dVar;
        b1 b1Var;
        b1 b1Var2;
        ji.z b10 = ji.a0.b(context);
        this.f16164a = b10;
        dVar = a0.f16137a;
        ji.d0 b11 = ji.y.b(dVar);
        this.f16165b = b11;
        b1Var = a1.f16138a;
        s sVar = new s(b10, b1Var);
        this.f16166c = sVar;
        b1Var2 = a1.f16138a;
        ji.d0 b12 = ji.y.b(new l0(b10, b11, sVar, b1Var2));
        this.f16167d = b12;
        ji.d0 b13 = ji.y.b(new q0(b12));
        this.f16168e = b13;
        this.f16169f = ji.y.b(new z(b12, b13));
    }

    @Override // com.google.android.play.core.integrity.u
    public final c a() {
        return (c) this.f16169f.a();
    }
}
