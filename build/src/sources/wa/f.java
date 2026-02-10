package wa;

import android.util.SparseArray;
import java.util.LinkedList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    protected final SparseArray f53371a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    a f53372b;

    /* renamed from: c  reason: collision with root package name */
    a f53373c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        a f53374a;

        /* renamed from: b  reason: collision with root package name */
        int f53375b;

        /* renamed from: c  reason: collision with root package name */
        LinkedList f53376c;

        /* renamed from: d  reason: collision with root package name */
        a f53377d;

        public String toString() {
            return "LinkedEntry(key: " + this.f53375b + ")";
        }

        private a(a aVar, int i10, LinkedList linkedList, a aVar2) {
            this.f53374a = aVar;
            this.f53375b = i10;
            this.f53376c = linkedList;
            this.f53377d = aVar2;
        }
    }

    private void b(a aVar) {
        if (aVar != null && aVar.f53376c.isEmpty()) {
            d(aVar);
            this.f53371a.remove(aVar.f53375b);
        }
    }

    private void c(a aVar) {
        if (this.f53372b == aVar) {
            return;
        }
        d(aVar);
        a aVar2 = this.f53372b;
        if (aVar2 == null) {
            this.f53372b = aVar;
            this.f53373c = aVar;
            return;
        }
        aVar.f53377d = aVar2;
        aVar2.f53374a = aVar;
        this.f53372b = aVar;
    }

    private synchronized void d(a aVar) {
        try {
            a aVar2 = aVar.f53374a;
            a aVar3 = aVar.f53377d;
            if (aVar2 != null) {
                aVar2.f53377d = aVar3;
            }
            if (aVar3 != null) {
                aVar3.f53374a = aVar2;
            }
            aVar.f53374a = null;
            aVar.f53377d = null;
            if (aVar == this.f53372b) {
                this.f53372b = aVar3;
            }
            if (aVar == this.f53373c) {
                this.f53373c = aVar2;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object a(int i10) {
        a aVar = (a) this.f53371a.get(i10);
        if (aVar == null) {
            return null;
        }
        Object pollFirst = aVar.f53376c.pollFirst();
        c(aVar);
        return pollFirst;
    }

    public synchronized void e(int i10, Object obj) {
        try {
            a aVar = (a) this.f53371a.get(i10);
            if (aVar == null) {
                a aVar2 = new a(null, i10, new LinkedList(), null);
                this.f53371a.put(i10, aVar2);
                aVar = aVar2;
            }
            aVar.f53376c.addLast(obj);
            c(aVar);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object f() {
        a aVar = this.f53373c;
        if (aVar == null) {
            return null;
        }
        Object pollLast = aVar.f53376c.pollLast();
        b(aVar);
        return pollLast;
    }
}
