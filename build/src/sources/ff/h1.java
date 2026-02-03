package ff;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ g f23914d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ String f23915e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i1 f23916i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, g gVar, String str) {
        this.f23914d = gVar;
        this.f23915e = str;
        this.f23916i = i1Var;
    }

    @Override // java.lang.Runnable
    public final void run() {
        int i10;
        int i11;
        int i12;
        int i13;
        int i14;
        Bundle bundle;
        Bundle bundle2;
        Bundle bundle3;
        i1 i1Var = this.f23916i;
        i10 = i1Var.f23924b;
        if (i10 > 0) {
            g gVar = this.f23914d;
            bundle = i1Var.f23925c;
            if (bundle != null) {
                String str = this.f23915e;
                bundle3 = i1Var.f23925c;
                bundle2 = bundle3.getBundle(str);
            } else {
                bundle2 = null;
            }
            gVar.f(bundle2);
        }
        i11 = this.f23916i.f23924b;
        if (i11 >= 2) {
            this.f23914d.j();
        }
        i12 = this.f23916i.f23924b;
        if (i12 >= 3) {
            this.f23914d.h();
        }
        i13 = this.f23916i.f23924b;
        if (i13 >= 4) {
            this.f23914d.k();
        }
        i14 = this.f23916i.f23924b;
        if (i14 >= 5) {
            this.f23914d.g();
        }
    }
}
