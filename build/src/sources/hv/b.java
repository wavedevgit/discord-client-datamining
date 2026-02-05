package hv;

import jv.f;
import jv.r;
import jv.v;
import jv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class b implements mv.a {

    /* renamed from: a  reason: collision with root package name */
    private final char f27182a;

    /* JADX INFO: Access modifiers changed from: protected */
    public b(char c10) {
        this.f27182a = c10;
    }

    @Override // mv.a
    public char a() {
        return this.f27182a;
    }

    @Override // mv.a
    public int b() {
        return 1;
    }

    @Override // mv.a
    public char c() {
        return this.f27182a;
    }

    @Override // mv.a
    public int d(mv.b bVar, mv.b bVar2) {
        if ((bVar.a() || bVar2.c()) && bVar2.b() % 3 != 0 && (bVar.b() + bVar2.b()) % 3 == 0) {
            return 0;
        }
        if (bVar.length() >= 2 && bVar2.length() >= 2) {
            return 2;
        }
        return 1;
    }

    @Override // mv.a
    public void e(w wVar, w wVar2, int i10) {
        r vVar;
        String valueOf = String.valueOf(c());
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
