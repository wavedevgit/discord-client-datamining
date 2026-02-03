package bv;

import ev.w;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements hv.a {

    /* renamed from: a  reason: collision with root package name */
    private final char f7879a;

    /* renamed from: b  reason: collision with root package name */
    private int f7880b = 0;

    /* renamed from: c  reason: collision with root package name */
    private LinkedList f7881c = new LinkedList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(char c10) {
        this.f7879a = c10;
    }

    private hv.a g(int i10) {
        Iterator it = this.f7881c.iterator();
        while (it.hasNext()) {
            hv.a aVar = (hv.a) it.next();
            if (aVar.b() <= i10) {
                return aVar;
            }
        }
        return (hv.a) this.f7881c.getFirst();
    }

    @Override // hv.a
    public char a() {
        return this.f7879a;
    }

    @Override // hv.a
    public int b() {
        return this.f7880b;
    }

    @Override // hv.a
    public int c(hv.b bVar, hv.b bVar2) {
        return g(bVar.length()).c(bVar, bVar2);
    }

    @Override // hv.a
    public char d() {
        return this.f7879a;
    }

    @Override // hv.a
    public void e(w wVar, w wVar2, int i10) {
        g(i10).e(wVar, wVar2, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(hv.a aVar) {
        int b10 = aVar.b();
        ListIterator listIterator = this.f7881c.listIterator();
        while (listIterator.hasNext()) {
            int b11 = ((hv.a) listIterator.next()).b();
            if (b10 > b11) {
                listIterator.previous();
                listIterator.add(aVar);
                return;
            } else if (b10 == b11) {
                throw new IllegalArgumentException("Cannot add two delimiter processors for char '" + this.f7879a + "' and minimum length " + b10);
            }
        }
        this.f7881c.add(aVar);
        this.f7880b = b10;
    }
}
