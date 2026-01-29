package va;

import android.util.SparseArray;
import java.util.LinkedList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    protected final SparseArray f50777a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    a f50778b;

    /* renamed from: c  reason: collision with root package name */
    a f50779c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        a f50780a;

        /* renamed from: b  reason: collision with root package name */
        int f50781b;

        /* renamed from: c  reason: collision with root package name */
        LinkedList f50782c;

        /* renamed from: d  reason: collision with root package name */
        a f50783d;

        public String toString() {
            return "LinkedEntry(key: " + this.f50781b + ")";
        }

        private a(a aVar, int i10, LinkedList linkedList, a aVar2) {
            this.f50780a = aVar;
            this.f50781b = i10;
            this.f50782c = linkedList;
            this.f50783d = aVar2;
        }
    }

    private void b(a aVar) {
        if (aVar != null && aVar.f50782c.isEmpty()) {
            d(aVar);
            this.f50777a.remove(aVar.f50781b);
        }
    }

    private void c(a aVar) {
        if (this.f50778b == aVar) {
            return;
        }
        d(aVar);
        a aVar2 = this.f50778b;
        if (aVar2 == null) {
            this.f50778b = aVar;
            this.f50779c = aVar;
            return;
        }
        aVar.f50783d = aVar2;
        aVar2.f50780a = aVar;
        this.f50778b = aVar;
    }

    private synchronized void d(a aVar) {
        try {
            a aVar2 = aVar.f50780a;
            a aVar3 = aVar.f50783d;
            if (aVar2 != null) {
                aVar2.f50783d = aVar3;
            }
            if (aVar3 != null) {
                aVar3.f50780a = aVar2;
            }
            aVar.f50780a = null;
            aVar.f50783d = null;
            if (aVar == this.f50778b) {
                this.f50778b = aVar3;
            }
            if (aVar == this.f50779c) {
                this.f50779c = aVar2;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object a(int i10) {
        a aVar = (a) this.f50777a.get(i10);
        if (aVar == null) {
            return null;
        }
        Object pollFirst = aVar.f50782c.pollFirst();
        c(aVar);
        return pollFirst;
    }

    public synchronized void e(int i10, Object obj) {
        try {
            a aVar = (a) this.f50777a.get(i10);
            if (aVar == null) {
                a aVar2 = new a(null, i10, new LinkedList(), null);
                this.f50777a.put(i10, aVar2);
                aVar = aVar2;
            }
            aVar.f50782c.addLast(obj);
            c(aVar);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object f() {
        a aVar = this.f50779c;
        if (aVar == null) {
            return null;
        }
        Object pollLast = aVar.f50782c.pollLast();
        b(aVar);
        return pollLast;
    }
}
