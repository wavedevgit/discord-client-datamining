package com.google.android.play.core.assetpacks;

import android.os.Bundle;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class w extends o {

    /* renamed from: e  reason: collision with root package name */
    private final b2 f16072e;

    /* renamed from: f  reason: collision with root package name */
    private final o3 f16073f;

    /* JADX INFO: Access modifiers changed from: package-private */
    public w(x xVar, xg.k kVar, b2 b2Var, o3 o3Var) {
        super(xVar, kVar);
        this.f16072e = b2Var;
        this.f16073f = o3Var;
    }

    @Override // com.google.android.play.core.assetpacks.o, wh.d0
    public final void r(int i10, Bundle bundle) {
        super.r(i10, bundle);
        this.f15936c.e(d.a(bundle, this.f16072e, this.f16073f));
    }
}
