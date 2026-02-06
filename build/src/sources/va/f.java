package va;

import android.util.SparseArray;
import java.util.LinkedList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    protected final SparseArray f52296a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    a f52297b;

    /* renamed from: c  reason: collision with root package name */
    a f52298c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        a f52299a;

        /* renamed from: b  reason: collision with root package name */
        int f52300b;

        /* renamed from: c  reason: collision with root package name */
        LinkedList f52301c;

        /* renamed from: d  reason: collision with root package name */
        a f52302d;

        public String toString() {
            return "LinkedEntry(key: " + this.f52300b + ")";
        }

        private a(a aVar, int i10, LinkedList linkedList, a aVar2) {
            this.f52299a = aVar;
            this.f52300b = i10;
            this.f52301c = linkedList;
            this.f52302d = aVar2;
        }
    }

    private void b(a aVar) {
        if (aVar != null && aVar.f52301c.isEmpty()) {
            d(aVar);
            this.f52296a.remove(aVar.f52300b);
        }
    }

    private void c(a aVar) {
        if (this.f52297b == aVar) {
            return;
        }
        d(aVar);
        a aVar2 = this.f52297b;
        if (aVar2 == null) {
            this.f52297b = aVar;
            this.f52298c = aVar;
            return;
        }
        aVar.f52302d = aVar2;
        aVar2.f52299a = aVar;
        this.f52297b = aVar;
    }

    private synchronized void d(a aVar) {
        try {
            a aVar2 = aVar.f52299a;
            a aVar3 = aVar.f52302d;
            if (aVar2 != null) {
                aVar2.f52302d = aVar3;
            }
            if (aVar3 != null) {
                aVar3.f52299a = aVar2;
            }
            aVar.f52299a = null;
            aVar.f52302d = null;
            if (aVar == this.f52297b) {
                this.f52297b = aVar3;
            }
            if (aVar == this.f52298c) {
                this.f52298c = aVar2;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object a(int i10) {
        a aVar = (a) this.f52296a.get(i10);
        if (aVar == null) {
            return null;
        }
        Object pollFirst = aVar.f52301c.pollFirst();
        c(aVar);
        return pollFirst;
    }

    public synchronized void e(int i10, Object obj) {
        try {
            a aVar = (a) this.f52296a.get(i10);
            if (aVar == null) {
                a aVar2 = new a(null, i10, new LinkedList(), null);
                this.f52296a.put(i10, aVar2);
                aVar = aVar2;
            }
            aVar.f52301c.addLast(obj);
            c(aVar);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object f() {
        a aVar = this.f52298c;
        if (aVar == null) {
            return null;
        }
        Object pollLast = aVar.f52301c.pollLast();
        b(aVar);
        return pollLast;
    }
}
