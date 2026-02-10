package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class i0 extends li.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ j0 f16307e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i0(j0 j0Var, zg.k kVar) {
        super(kVar);
        this.f16307e = j0Var;
    }

    @Override // li.u0
    public final void a(Exception exc) {
        if (!(exc instanceof li.g)) {
            super.a(exc);
        } else if (j0.j(this.f16307e)) {
            super.a(new b(-2, exc));
        } else {
            super.a(new b(-9, exc));
        }
    }
}
