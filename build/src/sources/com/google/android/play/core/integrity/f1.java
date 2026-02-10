package com.google.android.play.core.integrity;

import android.content.Context;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class f1 implements u {

    /* renamed from: a  reason: collision with root package name */
    private final ni.d0 f17033a;

    /* renamed from: b  reason: collision with root package name */
    private final ni.d0 f17034b;

    /* renamed from: c  reason: collision with root package name */
    private final ni.d0 f17035c;

    /* renamed from: d  reason: collision with root package name */
    private final ni.d0 f17036d;

    /* renamed from: e  reason: collision with root package name */
    private final ni.d0 f17037e;

    /* renamed from: f  reason: collision with root package name */
    private final ni.d0 f17038f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public /* synthetic */ f1(Context context, di.k kVar) {
        di.d dVar;
        b1 b1Var;
        b1 b1Var2;
        ni.z b10 = ni.a0.b(context);
        this.f17033a = b10;
        dVar = a0.f17006a;
        ni.d0 b11 = ni.y.b(dVar);
        this.f17034b = b11;
        b1Var = a1.f17007a;
        s sVar = new s(b10, b1Var);
        this.f17035c = sVar;
        b1Var2 = a1.f17007a;
        ni.d0 b12 = ni.y.b(new l0(b10, b11, sVar, b1Var2));
        this.f17036d = b12;
        ni.d0 b13 = ni.y.b(new q0(b12));
        this.f17037e = b13;
        this.f17038f = ni.y.b(new z(b12, b13));
    }

    @Override // com.google.android.play.core.integrity.u
    public final c a() {
        return (c) this.f17038f.a();
    }
}
