package cv;

import ev.f;
import ev.r;
import ev.v;
import ev.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b implements hv.a {

    /* renamed from: a  reason: collision with root package name */
    private final char f21024a;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(char c10) {
        this.f21024a = c10;
    }

    @Override // hv.a
    public char a() {
        return this.f21024a;
    }

    @Override // hv.a
    public int b() {
        return 1;
    }

    @Override // hv.a
    public int c(hv.b bVar, hv.b bVar2) {
        if ((bVar.a() || bVar2.c()) && bVar2.b() % 3 != 0 && (bVar.b() + bVar2.b()) % 3 == 0) {
            return 0;
        }
        if (bVar.length() >= 2 && bVar2.length() >= 2) {
            return 2;
        }
        return 1;
    }

    @Override // hv.a
    public char d() {
        return this.f21024a;
    }

    @Override // hv.a
    public void e(w wVar, w wVar2, int i10) {
        r vVar;
        String valueOf = String.valueOf(d());
        if (i10 == 1) {
            vVar = new f(valueOf);
        } else {
            vVar = new v(valueOf + valueOf);
        }
        r e10 = wVar.e();
        while (e10 != null && e10 != wVar2) {
            r e11 = e10.e();
            vVar.b(e10);
            e10 = e11;
        }
        wVar.h(vVar);
    }
}
