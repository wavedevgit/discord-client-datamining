package gf;

import android.app.Dialog;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 extends k0 {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Dialog f24281a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ e1 f24282b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, Dialog dialog) {
        this.f24282b = e1Var;
        this.f24281a = dialog;
    }

    @Override // gf.k0
    public final void a() {
        this.f24282b.f24312e.o();
        if (this.f24281a.isShowing()) {
            this.f24281a.dismiss();
        }
    }
}
