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
    private static final d f36005c = e.a(Collections.EMPTY_SET);

    /* renamed from: a  reason: collision with root package name */
    private final List f36006a;

    /* renamed from: b  reason: collision with root package name */
    private final List f36007b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f36008a;

        /* renamed from: b  reason: collision with root package name */
        private final List f36009b;

        public b a(h hVar) {
            this.f36009b.add(hVar);
            return this;
        }

        public b b(h hVar) {
            this.f36008a.add(hVar);
            return this;
        }

        public j c() {
            return new j(this.f36008a, this.f36009b);
        }

        private b(int i10, int i11) {
            this.f36008a = lr.b.d(i10);
            this.f36009b = lr.b.d(i11);
        }
    }

    public static b a(int i10, int i11) {
        return new b(i10, i11);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        int size = this.f36006a.size();
        ArrayList arrayList = new ArrayList(this.f36007b.size());
        int size2 = this.f36007b.size();
        for (int i10 = 0; i10 < size2; i10++) {
            Collection collection = (Collection) ((h) this.f36007b.get(i10)).get();
            size += collection.size();
            arrayList.add(collection);
        }
        HashSet b10 = lr.b.b(size);
        int size3 = this.f36006a.size();
        for (int i11 = 0; i11 < size3; i11++) {
            b10.add(g.b(((h) this.f36006a.get(i11)).get()));
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
        this.f36006a = list;
        this.f36007b = list2;
    }
}
