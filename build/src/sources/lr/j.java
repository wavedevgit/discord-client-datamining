package lr;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f36573c = e.a(Collections.EMPTY_SET);

    /* renamed from: a  reason: collision with root package name */
    private final List f36574a;

    /* renamed from: b  reason: collision with root package name */
    private final List f36575b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f36576a;

        /* renamed from: b  reason: collision with root package name */
        private final List f36577b;

        public b a(h hVar) {
            this.f36577b.add(hVar);
            return this;
        }

        public b b(h hVar) {
            this.f36576a.add(hVar);
            return this;
        }

        public j c() {
            return new j(this.f36576a, this.f36577b);
        }

        private b(int i10, int i11) {
            this.f36576a = lr.b.d(i10);
            this.f36577b = lr.b.d(i11);
        }
    }

    public static b a(int i10, int i11) {
        return new b(i10, i11);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        int size = this.f36574a.size();
        ArrayList arrayList = new ArrayList(this.f36575b.size());
        int size2 = this.f36575b.size();
        for (int i10 = 0; i10 < size2; i10++) {
            Collection collection = (Collection) ((h) this.f36575b.get(i10)).get();
            size += collection.size();
            arrayList.add(collection);
        }
        HashSet b10 = lr.b.b(size);
        int size3 = this.f36574a.size();
        for (int i11 = 0; i11 < size3; i11++) {
            b10.add(g.b(((h) this.f36574a.get(i11)).get()));
        }
        int size4 = arrayList.size();
        for (int i12 = 0; i12 < size4; i12++) {
            for (Object obj : (Collection) arrayList.get(i12)) {
                b10.add(g.b(obj));
            }
        }
        return Collections.unmodifiableSet(b10);
    }

    private j(List list, List list2) {
        this.f36574a = list;
        this.f36575b = list2;
    }
}
