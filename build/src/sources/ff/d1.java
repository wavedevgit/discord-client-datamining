package ff;

import android.app.Dialog;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
final class d1 extends k0 {

    /* renamed from: a  reason: collision with root package name */
    final /* synthetic */ Dialog f22895a;

    /* renamed from: b  reason: collision with root package name */
    final /* synthetic */ e1 f22896b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public d1(e1 e1Var, Dialog dialog) {
        this.f22896b = e1Var;
        this.f22895a = dialog;
    }

    @Override // ff.k0
    public final void a() {
        this.f22896b.f22926e.o();
        if (this.f22895a.isShowing()) {
            this.f22895a.dismiss();
        }
    }
}
