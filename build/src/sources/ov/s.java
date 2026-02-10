package ov;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.ListIterator;
import rv.w;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
class s implements uv.a {

    /* renamed from: a  reason: collision with root package name */
    private final char f42854a;

    /* renamed from: b  reason: collision with root package name */
    private int f42855b = 0;

    /* renamed from: c  reason: collision with root package name */
    private LinkedList f42856c = new LinkedList();

    /* JADX INFO: Access modifiers changed from: package-private */
    public s(char c10) {
        this.f42854a = c10;
    }

    private uv.a g(int i10) {
        Iterator it = this.f42856c.iterator();
        while (it.hasNext()) {
            uv.a aVar = (uv.a) it.next();
            if (aVar.c() <= i10) {
                return aVar;
            }
        }
        return (uv.a) this.f42856c.getFirst();
    }

    @Override // uv.a
    public void a(w wVar, w wVar2, int i10) {
        g(i10).a(wVar, wVar2, i10);
    }

    @Override // uv.a
    public char b() {
        return this.f42854a;
    }

    @Override // uv.a
    public int c() {
        return this.f42855b;
    }

    @Override // uv.a
    public char d() {
        return this.f42854a;
    }

    @Override // uv.a
    public int e(uv.b bVar, uv.b bVar2) {
        return g(bVar.length()).e(bVar, bVar2);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public void f(uv.a aVar) {
        int c10 = aVar.c();
        ListIterator listIterator = this.f42856c.listIterator();
        while (listIterator.hasNext()) {
            int c11 = ((uv.a) listIterator.next()).c();
            if (c10 > c11) {
                listIterator.previous();
                listIterator.add(aVar);
                return;
            } else if (c10 == c11) {
                throw new IllegalArgumentException("Cannot add two delimiter processors for char '" + this.f42854a + "' and minimum length " + c10);
            }
        }
        this.f42856c.add(aVar);
        this.f42855b = c10;
    }
}
