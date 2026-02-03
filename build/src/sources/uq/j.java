package uq;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f50594c = e.a(Collections.EMPTY_SET);

    /* renamed from: a  reason: collision with root package name */
    private final List f50595a;

    /* renamed from: b  reason: collision with root package name */
    private final List f50596b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f50597a;

        /* renamed from: b  reason: collision with root package name */
        private final List f50598b;

        public b a(h hVar) {
            this.f50598b.add(hVar);
            return this;
        }

        public b b(h hVar) {
            this.f50597a.add(hVar);
            return this;
        }

        public j c() {
            return new j(this.f50597a, this.f50598b);
        }

        private b(int i10, int i11) {
            this.f50597a = uq.b.d(i10);
            this.f50598b = uq.b.d(i11);
        }
    }

    public static b a(int i10, int i11) {
        return new b(i10, i11);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        int size = this.f50595a.size();
        ArrayList arrayList = new ArrayList(this.f50596b.size());
        int size2 = this.f50596b.size();
        for (int i10 = 0; i10 < size2; i10++) {
            Collection collection = (Collection) ((h) this.f50596b.get(i10)).get();
            size += collection.size();
            arrayList.add(collection);
        }
        HashSet b10 = uq.b.b(size);
        int size3 = this.f50595a.size();
        for (int i11 = 0; i11 < size3; i11++) {
            b10.add(g.b(((h) this.f50595a.get(i11)).get()));
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
        this.f50595a = list;
        this.f50596b = list2;
    }
}
