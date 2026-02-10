package wa;

import android.util.SparseArray;
import java.util.LinkedList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    protected final SparseArray f52400a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    a f52401b;

    /* renamed from: c  reason: collision with root package name */
    a f52402c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        a f52403a;

        /* renamed from: b  reason: collision with root package name */
        int f52404b;

        /* renamed from: c  reason: collision with root package name */
        LinkedList f52405c;

        /* renamed from: d  reason: collision with root package name */
        a f52406d;

        public String toString() {
            return "LinkedEntry(key: " + this.f52404b + ")";
        }

        private a(a aVar, int i10, LinkedList linkedList, a aVar2) {
            this.f52403a = aVar;
            this.f52404b = i10;
            this.f52405c = linkedList;
            this.f52406d = aVar2;
        }
    }

    private void b(a aVar) {
        if (aVar != null && aVar.f52405c.isEmpty()) {
            d(aVar);
            this.f52400a.remove(aVar.f52404b);
        }
    }

    private void c(a aVar) {
        if (this.f52401b == aVar) {
            return;
        }
        d(aVar);
        a aVar2 = this.f52401b;
        if (aVar2 == null) {
            this.f52401b = aVar;
            this.f52402c = aVar;
            return;
        }
        aVar.f52406d = aVar2;
        aVar2.f52403a = aVar;
        this.f52401b = aVar;
    }

    private synchronized void d(a aVar) {
        try {
            a aVar2 = aVar.f52403a;
            a aVar3 = aVar.f52406d;
            if (aVar2 != null) {
                aVar2.f52406d = aVar3;
            }
            if (aVar3 != null) {
                aVar3.f52403a = aVar2;
            }
            aVar.f52403a = null;
            aVar.f52406d = null;
            if (aVar == this.f52401b) {
                this.f52401b = aVar3;
            }
            if (aVar == this.f52402c) {
                this.f52402c = aVar2;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object a(int i10) {
        a aVar = (a) this.f52400a.get(i10);
        if (aVar == null) {
            return null;
        }
        Object pollFirst = aVar.f52405c.pollFirst();
        c(aVar);
        return pollFirst;
    }

    public synchronized void e(int i10, Object obj) {
        try {
            a aVar = (a) this.f52400a.get(i10);
            if (aVar == null) {
                a aVar2 = new a(null, i10, new LinkedList(), null);
                this.f52400a.put(i10, aVar2);
                aVar = aVar2;
            }
            aVar.f52405c.addLast(obj);
            c(aVar);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object f() {
        a aVar = this.f52402c;
        if (aVar == null) {
            return null;
        }
        Object pollLast = aVar.f52405c.pollLast();
        b(aVar);
        return pollLast;
    }
}
