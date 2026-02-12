package gf;

import android.app.Dialog;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 extends k0 {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Dialog f25582a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ e1 f25583b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, Dialog dialog) {
        this.f25583b = e1Var;
        this.f25582a = dialog;
    }

    @Override // gf.k0
    public final void a() {
        this.f25583b.f25613e.o();
        if (this.f25582a.isShowing()) {
            this.f25582a.dismiss();
        }
    }
}
