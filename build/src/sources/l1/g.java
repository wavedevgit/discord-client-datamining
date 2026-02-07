package l1;

import l1.f;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class g extends f {

    /* renamed from: m  reason: collision with root package name */
    public int f35722m;

    /* JADX INFO: Access modifiers changed from: package-private */
    public g(p pVar) {
        super(pVar);
        if (pVar instanceof l) {
            this.f35705e = f.a.HORIZONTAL_DIMENSION;
        } else {
            this.f35705e = f.a.VERTICAL_DIMENSION;
        }
    }

    @Override // l1.f
    public void d(int i10) {
        if (!this.f35710j) {
            this.f35710j = true;
            this.f35707g = i10;
            for (d dVar : this.f35711k) {
                dVar.a(dVar);
            }
        }
    }
}
