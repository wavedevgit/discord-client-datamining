package n0;

import a0.d0;
import a0.d1;
import b0.q;
import java.util.UUID;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class p extends d1 {

    /* renamed from: b  reason: collision with root package name */
    private final String f38431b;

    /* renamed from: c  reason: collision with root package name */
    private int f38432c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(d0 d0Var) {
        super(d0Var);
        this.f38431b = "virtual-" + d0Var.b() + "-" + UUID.randomUUID().toString();
    }

    @Override // a0.d1, x.o
    public int a() {
        return j(0);
    }

    @Override // a0.d1, a0.d0
    public String b() {
        return this.f38431b;
    }

    @Override // a0.d1, x.o
    public int j(int i10) {
        return q.u(super.j(i10) - this.f38432c);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void l(int i10) {
        this.f38432c = i10;
    }
}
