package ff;

import android.app.Dialog;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 extends k0 {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Dialog f25067a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ e1 f25068b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, Dialog dialog) {
        this.f25068b = e1Var;
        this.f25067a = dialog;
    }

    @Override // ff.k0
    public final void a() {
        this.f25068b.f25098e.o();
        if (this.f25067a.isShowing()) {
            this.f25067a.dismiss();
        }
    }
}
