package a0;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class l1 implements x.n {

    /* renamed from: b  reason: collision with root package name */
    private final int f144b;

    public l1(int i10) {
        this.f144b = i10;
    }

    @Override // x.n
    public List b(List list) {
        ArrayList arrayList = new ArrayList();
        Iterator it = list.iterator();
        while (it.hasNext()) {
            x.o oVar = (x.o) it.next();
            b2.e.b(oVar instanceof d0, "The camera info doesn't contain internal implementation.");
            if (oVar.c() == this.f144b) {
                arrayList.add(oVar);
            }
        }
        return arrayList;
    }

    public int c() {
        return this.f144b;
    }
}
