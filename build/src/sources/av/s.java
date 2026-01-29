package av;

import dv.w;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements gv.a {

    /* renamed from: a  reason: collision with root package name */
    private final char f7065a;

    /* renamed from: b  reason: collision with root package name */
    private int f7066b = 0;

    /* renamed from: c  reason: collision with root package name */
    private LinkedList f7067c = new LinkedList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(char c10) {
        this.f7065a = c10;
    }

    private gv.a g(int i10) {
        Iterator it = this.f7067c.iterator();
        while (it.hasNext()) {
            gv.a aVar = (gv.a) it.next();
            if (aVar.b() <= i10) {
                return aVar;
            }
        }
        return (gv.a) this.f7067c.getFirst();
    }

    @Override // gv.a
    public char a() {
        return this.f7065a;
    }

    @Override // gv.a
    public int b() {
        return this.f7066b;
    }

    @Override // gv.a
    public void c(w wVar, w wVar2, int i10) {
        g(i10).c(wVar, wVar2, i10);
    }

    @Override // gv.a
    public char d() {
        return this.f7065a;
    }

    @Override // gv.a
    public int e(gv.b bVar, gv.b bVar2) {
        return g(bVar.length()).e(bVar, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(gv.a aVar) {
        int b10 = aVar.b();
        ListIterator listIterator = this.f7067c.listIterator();
        while (listIterator.hasNext()) {
            int b11 = ((gv.a) listIterator.next()).b();
            if (b10 > b11) {
                listIterator.previous();
                listIterator.add(aVar);
                return;
            } else if (b10 == b11) {
                throw new IllegalArgumentException("Cannot add two delimiter processors for char '" + this.f7065a + "' and minimum length " + b10);
            }
        }
        this.f7067c.add(aVar);
        this.f7066b = b10;
    }
}
