package com.google.android.play.core.integrity;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
abstract class i0 extends gi.u0 {

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ j0 f17196e;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public i0(j0 j0Var, wg.k kVar) {
        super(kVar);
        this.f17196e = j0Var;
    }

    @Override // gi.u0
    public final void a(Exception exc) {
        if (!(exc instanceof gi.g)) {
            super.a(exc);
        } else if (j0.j(this.f17196e)) {
            super.a(new b(-2, exc));
        } else {
            super.a(new b(-9, exc));
        }
    }
}
