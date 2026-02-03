package ff;

import android.os.Bundle;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h1 implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    final /* synthetic */ g f24322d;

    /* renamed from: e  reason: collision with root package name */
    final /* synthetic */ String f24323e;

    /* renamed from: i  reason: collision with root package name */
    final /* synthetic */ i1 f24324i;

    /* JADX INFO: Access modifiers changed from: package-private */
    public h1(i1 i1Var, g gVar, String str) {
        this.f24322d = gVar;
        this.f24323e = str;
        this.f24324i = i1Var;
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
        i1 i1Var = this.f24324i;
        i10 = i1Var.f24332b;
        if (i10 > 0) {
            g gVar = this.f24322d;
            bundle = i1Var.f24333c;
            if (bundle != null) {
                String str = this.f24323e;
                bundle3 = i1Var.f24333c;
                bundle2 = bundle3.getBundle(str);
            } else {
                bundle2 = null;
            }
            gVar.f(bundle2);
        }
        i11 = this.f24324i.f24332b;
        if (i11 >= 2) {
            this.f24322d.j();
        }
        i12 = this.f24324i.f24332b;
        if (i12 >= 3) {
            this.f24322d.h();
        }
        i13 = this.f24324i.f24332b;
        if (i13 >= 4) {
            this.f24322d.k();
        }
        i14 = this.f24324i.f24332b;
        if (i14 >= 5) {
            this.f24322d.g();
        }
    }
}
