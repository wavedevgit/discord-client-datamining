package dv;

import gv.w;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements jv.a {

    /* renamed from: a  reason: collision with root package name */
    private final char f21195a;

    /* renamed from: b  reason: collision with root package name */
    private int f21196b = 0;

    /* renamed from: c  reason: collision with root package name */
    private LinkedList f21197c = new LinkedList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(char c10) {
        this.f21195a = c10;
    }

    private jv.a g(int i10) {
        Iterator it = this.f21197c.iterator();
        while (it.hasNext()) {
            jv.a aVar = (jv.a) it.next();
            if (aVar.c() <= i10) {
                return aVar;
            }
        }
        return (jv.a) this.f21197c.getFirst();
    }

    @Override // jv.a
    public char a() {
        return this.f21195a;
    }

    @Override // jv.a
    public void b(w wVar, w wVar2, int i10) {
        g(i10).b(wVar, wVar2, i10);
    }

    @Override // jv.a
    public int c() {
        return this.f21196b;
    }

    @Override // jv.a
    public char d() {
        return this.f21195a;
    }

    @Override // jv.a
    public int e(jv.b bVar, jv.b bVar2) {
        return g(bVar.length()).e(bVar, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(jv.a aVar) {
        int c10 = aVar.c();
        ListIterator listIterator = this.f21197c.listIterator();
        while (listIterator.hasNext()) {
            int c11 = ((jv.a) listIterator.next()).c();
            if (c10 > c11) {
                listIterator.previous();
                listIterator.add(aVar);
                return;
            } else if (c10 == c11) {
                throw new IllegalArgumentException("Cannot add two delimiter processors for char '" + this.f21195a + "' and minimum length " + c10);
            }
        }
        this.f21197c.add(aVar);
        this.f21196b = c10;
    }
}
