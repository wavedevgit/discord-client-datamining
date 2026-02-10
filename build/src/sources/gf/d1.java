package gf;

import android.app.Dialog;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 extends k0 {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Dialog f25581a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ e1 f25582b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, Dialog dialog) {
        this.f25582b = e1Var;
        this.f25581a = dialog;
    }

    @Override // gf.k0
    public final void a() {
        this.f25582b.f25612e.o();
        if (this.f25581a.isShowing()) {
            this.f25581a.dismiss();
        }
    }
}
