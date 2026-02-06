package ni;

import java.util.AbstractCollection;
import java.util.List;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public abstract class d0 {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    private static class a extends c {

        /* renamed from: r  reason: collision with root package name */
        transient mi.r f40761r;

        a(Map map, mi.r rVar) {
            super(map);
            this.f40761r = (mi.r) mi.m.j(rVar);
        }

        /* JADX INFO: Access modifiers changed from: protected */
        @Override // ni.d
        /* renamed from: B */
        public List r() {
            return (List) this.f40761r.get();
        }

        @Override // ni.f
        Map d() {
            return t();
        }

        @Override // ni.f
        Set f() {
            return u();
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    static abstract class b extends AbstractCollection {
        abstract b0 b();

        @Override // java.util.AbstractCollection, java.util.Collection
        public void clear() {
            b().clear();
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean contains(Object obj) {
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                return b().b(entry.getKey(), entry.getValue());
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public boolean remove(Object obj) {
            if (obj instanceof Map.Entry) {
                Map.Entry entry = (Map.Entry) obj;
                return b().remove(entry.getKey(), entry.getValue());
            }
            return false;
        }

        @Override // java.util.AbstractCollection, java.util.Collection
        public int size() {
            return b().size();
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static boolean a(b0 b0Var, Object obj) {
        if (obj == b0Var) {
            return true;
        }
        if (obj instanceof b0) {
            return b0Var.asMap().equals(((b0) obj).asMap());
        }
        return false;
    }

    public static x b(Map map, mi.r rVar) {
        return new a(map, rVar);
    }
}
