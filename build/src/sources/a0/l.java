package a0;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public abstract class l {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a extends k {

        /* renamed from: a  reason: collision with root package name */
        private final List f133a = new ArrayList();

        a(List list) {
            Iterator it = list.iterator();
            while (it.hasNext()) {
                k kVar = (k) it.next();
                if (!(kVar instanceof b)) {
                    this.f133a.add(kVar);
                }
            }
        }

        @Override // a0.k
        public void a(int i10) {
            for (k kVar : this.f133a) {
                kVar.a(i10);
            }
        }

        @Override // a0.k
        public void b(int i10, u uVar) {
            for (k kVar : this.f133a) {
                kVar.b(i10, uVar);
            }
        }

        @Override // a0.k
        public void c(int i10, m mVar) {
            for (k kVar : this.f133a) {
                kVar.c(i10, mVar);
            }
        }

        @Override // a0.k
        public void d(int i10) {
            for (k kVar : this.f133a) {
                kVar.d(i10);
            }
        }

        public List e() {
            return this.f133a;
        }
    }

    static k a(List list) {
        if (list.isEmpty()) {
            return c();
        }
        if (list.size() == 1) {
            return (k) list.get(0);
        }
        return new a(list);
    }

    public static k b(k... kVarArr) {
        return a(Arrays.asList(kVarArr));
    }

    public static k c() {
        return new b();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class b extends k {
        b() {
        }

        @Override // a0.k
        public void d(int i10) {
        }

        @Override // a0.k
        public void b(int i10, u uVar) {
        }

        @Override // a0.k
        public void c(int i10, m mVar) {
        }
    }
}
