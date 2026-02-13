package xv;

import aw.w;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements dw.a {

    /* renamed from: a  reason: collision with root package name */
    private final char f55845a;

    /* renamed from: b  reason: collision with root package name */
    private int f55846b = 0;

    /* renamed from: c  reason: collision with root package name */
    private LinkedList f55847c = new LinkedList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(char c10) {
        this.f55845a = c10;
    }

    private dw.a g(int i10) {
        Iterator it = this.f55847c.iterator();
        while (it.hasNext()) {
            dw.a aVar = (dw.a) it.next();
            if (aVar.b() <= i10) {
                return aVar;
            }
        }
        return (dw.a) this.f55847c.getFirst();
    }

    @Override // dw.a
    public char a() {
        return this.f55845a;
    }

    @Override // dw.a
    public int b() {
        return this.f55846b;
    }

    @Override // dw.a
    public char c() {
        return this.f55845a;
    }

    @Override // dw.a
    public int d(dw.b bVar, dw.b bVar2) {
        return g(bVar.length()).d(bVar, bVar2);
    }

    @Override // dw.a
    public void e(w wVar, w wVar2, int i10) {
        g(i10).e(wVar, wVar2, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(dw.a aVar) {
        int b10 = aVar.b();
        ListIterator listIterator = this.f55847c.listIterator();
        while (listIterator.hasNext()) {
            int b11 = ((dw.a) listIterator.next()).b();
            if (b10 > b11) {
                listIterator.previous();
                listIterator.add(aVar);
                return;
            } else if (b10 == b11) {
                throw new IllegalArgumentException("Cannot add two delimiter processors for char '" + this.f55845a + "' and minimum length " + b10);
            }
        }
        this.f55847c.add(aVar);
        this.f55846b = b10;
    }
}
