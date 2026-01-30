package tq;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class j implements d {

    /* renamed from: c  reason: collision with root package name */
    private static final d f49836c = e.a(Collections.EMPTY_SET);

    /* renamed from: a  reason: collision with root package name */
    private final List f49837a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49838b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static final class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f49839a;

        /* renamed from: b  reason: collision with root package name */
        private final List f49840b;

        public b a(h hVar) {
            this.f49840b.add(hVar);
            return this;
        }

        public b b(h hVar) {
            this.f49839a.add(hVar);
            return this;
        }

        public j c() {
            return new j(this.f49839a, this.f49840b);
        }

        private b(int i10, int i11) {
            this.f49839a = tq.b.d(i10);
            this.f49840b = tq.b.d(i11);
        }
    }

    public static b a(int i10, int i11) {
        return new b(i10, i11);
    }

    @Override // javax.inject.Provider
    /* renamed from: b */
    public Set get() {
        int size = this.f49837a.size();
        ArrayList arrayList = new ArrayList(this.f49838b.size());
        int size2 = this.f49838b.size();
        for (int i10 = 0; i10 < size2; i10++) {
            Collection collection = (Collection) ((h) this.f49838b.get(i10)).get();
            size += collection.size();
            arrayList.add(collection);
        }
        HashSet b10 = tq.b.b(size);
        int size3 = this.f49837a.size();
        for (int i11 = 0; i11 < size3; i11++) {
            b10.add(g.b(((h) this.f49837a.get(i11)).get()));
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
        this.f49837a = list;
        this.f49838b = list2;
    }
}
