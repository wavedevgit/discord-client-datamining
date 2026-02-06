package nv;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;
import qv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements tv.a {

    /* renamed from: a  reason: collision with root package name */
    private final char f41278a;

    /* renamed from: b  reason: collision with root package name */
    private int f41279b = 0;

    /* renamed from: c  reason: collision with root package name */
    private LinkedList f41280c = new LinkedList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(char c10) {
        this.f41278a = c10;
    }

    private tv.a g(int i10) {
        Iterator it = this.f41280c.iterator();
        while (it.hasNext()) {
            tv.a aVar = (tv.a) it.next();
            if (aVar.b() <= i10) {
                return aVar;
            }
        }
        return (tv.a) this.f41280c.getFirst();
    }

    @Override // tv.a
    public char a() {
        return this.f41278a;
    }

    @Override // tv.a
    public int b() {
        return this.f41279b;
    }

    @Override // tv.a
    public int c(tv.b bVar, tv.b bVar2) {
        return g(bVar.length()).c(bVar, bVar2);
    }

    @Override // tv.a
    public char d() {
        return this.f41278a;
    }

    @Override // tv.a
    public void e(w wVar, w wVar2, int i10) {
        g(i10).e(wVar, wVar2, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(tv.a aVar) {
        int b10 = aVar.b();
        ListIterator listIterator = this.f41280c.listIterator();
        while (listIterator.hasNext()) {
            int b11 = ((tv.a) listIterator.next()).b();
            if (b10 > b11) {
                listIterator.previous();
                listIterator.add(aVar);
                return;
            } else if (b10 == b11) {
                throw new IllegalArgumentException("Cannot add two delimiter processors for char '" + this.f41278a + "' and minimum length " + b10);
            }
        }
        this.f41280c.add(aVar);
        this.f41279b = b10;
    }
}
