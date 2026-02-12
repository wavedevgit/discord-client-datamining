package wa;

import android.util.SparseArray;
import java.util.LinkedList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    protected final SparseArray f52401a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    a f52402b;

    /* renamed from: c  reason: collision with root package name */
    a f52403c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        a f52404a;

        /* renamed from: b  reason: collision with root package name */
        int f52405b;

        /* renamed from: c  reason: collision with root package name */
        LinkedList f52406c;

        /* renamed from: d  reason: collision with root package name */
        a f52407d;

        public String toString() {
            return "LinkedEntry(key: " + this.f52405b + ")";
        }

        private a(a aVar, int i10, LinkedList linkedList, a aVar2) {
            this.f52404a = aVar;
            this.f52405b = i10;
            this.f52406c = linkedList;
            this.f52407d = aVar2;
        }
    }

    private void b(a aVar) {
        if (aVar != null && aVar.f52406c.isEmpty()) {
            d(aVar);
            this.f52401a.remove(aVar.f52405b);
        }
    }

    private void c(a aVar) {
        if (this.f52402b == aVar) {
            return;
        }
        d(aVar);
        a aVar2 = this.f52402b;
        if (aVar2 == null) {
            this.f52402b = aVar;
            this.f52403c = aVar;
            return;
        }
        aVar.f52407d = aVar2;
        aVar2.f52404a = aVar;
        this.f52402b = aVar;
    }

    private synchronized void d(a aVar) {
        try {
            a aVar2 = aVar.f52404a;
            a aVar3 = aVar.f52407d;
            if (aVar2 != null) {
                aVar2.f52407d = aVar3;
            }
            if (aVar3 != null) {
                aVar3.f52404a = aVar2;
            }
            aVar.f52404a = null;
            aVar.f52407d = null;
            if (aVar == this.f52402b) {
                this.f52402b = aVar3;
            }
            if (aVar == this.f52403c) {
                this.f52403c = aVar2;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object a(int i10) {
        a aVar = (a) this.f52401a.get(i10);
        if (aVar == null) {
            return null;
        }
        Object pollFirst = aVar.f52406c.pollFirst();
        c(aVar);
        return pollFirst;
    }

    public synchronized void e(int i10, Object obj) {
        try {
            a aVar = (a) this.f52401a.get(i10);
            if (aVar == null) {
                a aVar2 = new a(null, i10, new LinkedList(), null);
                this.f52401a.put(i10, aVar2);
                aVar = aVar2;
            }
            aVar.f52406c.addLast(obj);
            c(aVar);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object f() {
        a aVar = this.f52403c;
        if (aVar == null) {
            return null;
        }
        Object pollLast = aVar.f52406c.pollLast();
        b(aVar);
        return pollLast;
    }
}
