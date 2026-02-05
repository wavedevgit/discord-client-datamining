package gv;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;
import jv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements mv.a {

    /* renamed from: a  reason: collision with root package name */
    private final char f25519a;

    /* renamed from: b  reason: collision with root package name */
    private int f25520b = 0;

    /* renamed from: c  reason: collision with root package name */
    private LinkedList f25521c = new LinkedList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(char c10) {
        this.f25519a = c10;
    }

    private mv.a g(int i10) {
        Iterator it = this.f25521c.iterator();
        while (it.hasNext()) {
            mv.a aVar = (mv.a) it.next();
            if (aVar.b() <= i10) {
                return aVar;
            }
        }
        return (mv.a) this.f25521c.getFirst();
    }

    @Override // mv.a
    public char a() {
        return this.f25519a;
    }

    @Override // mv.a
    public int b() {
        return this.f25520b;
    }

    @Override // mv.a
    public char c() {
        return this.f25519a;
    }

    @Override // mv.a
    public int d(mv.b bVar, mv.b bVar2) {
        return g(bVar.length()).d(bVar, bVar2);
    }

    @Override // mv.a
    public void e(w wVar, w wVar2, int i10) {
        g(i10).e(wVar, wVar2, i10);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(mv.a aVar) {
        int b10 = aVar.b();
        ListIterator listIterator = this.f25521c.listIterator();
        while (listIterator.hasNext()) {
            int b11 = ((mv.a) listIterator.next()).b();
            if (b10 > b11) {
                listIterator.previous();
                listIterator.add(aVar);
                return;
            } else if (b10 == b11) {
                throw new IllegalArgumentException("Cannot add two delimiter processors for char '" + this.f25519a + "' and minimum length " + b10);
            }
        }
        this.f25521c.add(aVar);
        this.f25520b = b10;
    }
}
