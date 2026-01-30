package ii;

import java.io.Serializable;
import java.util.Arrays;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class o {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class b implements n, Serializable {

        /* renamed from: d  reason: collision with root package name */
        private final List f28552d;

        @Override // ii.n
        public boolean apply(Object obj) {
            for (int i10 = 0; i10 < this.f28552d.size(); i10++) {
                if (!((n) this.f28552d.get(i10)).apply(obj)) {
                    return false;
                }
            }
            return true;
        }

        public boolean equals(Object obj) {
            if (obj instanceof b) {
                return this.f28552d.equals(((b) obj).f28552d);
            }
            return false;
        }

        public int hashCode() {
            return this.f28552d.hashCode() + 306654252;
        }

        public String toString() {
            return o.d("and", this.f28552d);
        }

        private b(List list) {
            this.f28552d = list;
        }
    }

    public static n b(n nVar, n nVar2) {
        return new b(c((n) m.j(nVar), (n) m.j(nVar2)));
    }

    private static List c(n nVar, n nVar2) {
        return Arrays.asList(nVar, nVar2);
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static String d(String str, Iterable iterable) {
        StringBuilder sb2 = new StringBuilder("Predicates.");
        sb2.append(str);
        sb2.append('(');
        boolean z10 = true;
        for (Object obj : iterable) {
            if (!z10) {
                sb2.append(',');
            }
            sb2.append(obj);
            z10 = false;
        }
        sb2.append(')');
        return sb2.toString();
    }
}
