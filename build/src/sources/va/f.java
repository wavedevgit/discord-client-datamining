package va;

import android.util.SparseArray;
import java.util.LinkedList;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f {

    /* renamed from: a  reason: collision with root package name */
    protected final SparseArray f50793a = new SparseArray();

    /* renamed from: b  reason: collision with root package name */
    a f50794b;

    /* renamed from: c  reason: collision with root package name */
    a f50795c;

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        a f50796a;

        /* renamed from: b  reason: collision with root package name */
        int f50797b;

        /* renamed from: c  reason: collision with root package name */
        LinkedList f50798c;

        /* renamed from: d  reason: collision with root package name */
        a f50799d;

        public String toString() {
            return "LinkedEntry(key: " + this.f50797b + ")";
        }

        private a(a aVar, int i10, LinkedList linkedList, a aVar2) {
            this.f50796a = aVar;
            this.f50797b = i10;
            this.f50798c = linkedList;
            this.f50799d = aVar2;
        }
    }

    private void b(a aVar) {
        if (aVar != null && aVar.f50798c.isEmpty()) {
            d(aVar);
            this.f50793a.remove(aVar.f50797b);
        }
    }

    private void c(a aVar) {
        if (this.f50794b == aVar) {
            return;
        }
        d(aVar);
        a aVar2 = this.f50794b;
        if (aVar2 == null) {
            this.f50794b = aVar;
            this.f50795c = aVar;
            return;
        }
        aVar.f50799d = aVar2;
        aVar2.f50796a = aVar;
        this.f50794b = aVar;
    }

    private synchronized void d(a aVar) {
        try {
            a aVar2 = aVar.f50796a;
            a aVar3 = aVar.f50799d;
            if (aVar2 != null) {
                aVar2.f50799d = aVar3;
            }
            if (aVar3 != null) {
                aVar3.f50796a = aVar2;
            }
            aVar.f50796a = null;
            aVar.f50799d = null;
            if (aVar == this.f50794b) {
                this.f50794b = aVar3;
            }
            if (aVar == this.f50795c) {
                this.f50795c = aVar2;
            }
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object a(int i10) {
        a aVar = (a) this.f50793a.get(i10);
        if (aVar == null) {
            return null;
        }
        Object pollFirst = aVar.f50798c.pollFirst();
        c(aVar);
        return pollFirst;
    }

    public synchronized void e(int i10, Object obj) {
        try {
            a aVar = (a) this.f50793a.get(i10);
            if (aVar == null) {
                a aVar2 = new a(null, i10, new LinkedList(), null);
                this.f50793a.put(i10, aVar2);
                aVar = aVar2;
            }
            aVar.f50798c.addLast(obj);
            c(aVar);
        } catch (Throwable th2) {
            throw th2;
        }
    }

    public synchronized Object f() {
        a aVar = this.f50795c;
        if (aVar == null) {
            return null;
        }
        Object pollLast = aVar.f50798c.pollLast();
        b(aVar);
        return pollLast;
    }
}
