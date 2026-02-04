package va;

import android.util.SparseArray;
import java.util.LinkedList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    protected final SparseArray f51242a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    a f51243b;

    /* renamed from: c  reason: collision with root package name */
    a f51244c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        a f51245a;

        /* renamed from: b  reason: collision with root package name */
        int f51246b;

        /* renamed from: c  reason: collision with root package name */
        LinkedList f51247c;

        /* renamed from: d  reason: collision with root package name */
        a f51248d;

        public String toString() {
            return "LinkedEntry(key: " + this.f51246b + ")";
        }

        private a(a aVar, int i10, LinkedList linkedList, a aVar2) {
            this.f51245a = aVar;
            this.f51246b = i10;
            this.f51247c = linkedList;
            this.f51248d = aVar2;
        }
    }

    private void b(a aVar) {
        if (aVar != null && aVar.f51247c.isEmpty()) {
            d(aVar);
            this.f51242a.remove(aVar.f51246b);
        }
    }

    private void c(a aVar) {
        if (this.f51243b == aVar) {
            return;
        }
        d(aVar);
        a aVar2 = this.f51243b;
        if (aVar2 == null) {
            this.f51243b = aVar;
            this.f51244c = aVar;
            return;
        }
        aVar.f51248d = aVar2;
        aVar2.f51245a = aVar;
        this.f51243b = aVar;
    }

    private synchronized void d(a aVar) {
        try {
            a aVar2 = aVar.f51245a;
            a aVar3 = aVar.f51248d;
            if (aVar2 != null) {
                aVar2.f51248d = aVar3;
            }
            if (aVar3 != null) {
                aVar3.f51245a = aVar2;
            }
            aVar.f51245a = null;
            aVar.f51248d = null;
            if (aVar == this.f51243b) {
                this.f51243b = aVar3;
            }
            if (aVar == this.f51244c) {
                this.f51244c = aVar2;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object a(int i10) {
        a aVar = (a) this.f51242a.get(i10);
        if (aVar == null) {
            return null;
        }
        Object pollFirst = aVar.f51247c.pollFirst();
        c(aVar);
        return pollFirst;
    }

    public synchronized void e(int i10, Object obj) {
        try {
            a aVar = (a) this.f51242a.get(i10);
            if (aVar == null) {
                a aVar2 = new a(null, i10, new LinkedList(), null);
                this.f51242a.put(i10, aVar2);
                aVar = aVar2;
            }
            aVar.f51247c.addLast(obj);
            c(aVar);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object f() {
        a aVar = this.f51244c;
        if (aVar == null) {
            return null;
        }
        Object pollLast = aVar.f51247c.pollLast();
        b(aVar);
        return pollLast;
    }
}
