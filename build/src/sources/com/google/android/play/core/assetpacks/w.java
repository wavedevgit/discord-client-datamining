package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class w extends o {

    /* renamed from: e  reason: collision with root package name */
    private final b2 f16192e;

    /* renamed from: f  reason: collision with root package name */
    private final o3 f16193f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(x xVar, zg.k kVar, b2 b2Var, o3 o3Var) {
        super(xVar, kVar);
        this.f16192e = b2Var;
        this.f16193f = o3Var;
    }

    @Override // com.google.android.play.core.assetpacks.o, yh.d0
    public final void s(int i10, Bundle bundle) {
        super.s(i10, bundle);
        this.f16056c.e(d.a(bundle, this.f16192e, this.f16193f));
    }
}
