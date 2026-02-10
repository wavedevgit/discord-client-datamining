package sv;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import ov.h;
import ov.m;
import ov.n;
import rv.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f50475a;

    /* renamed from: b  reason: collision with root package name */
    private final List f50476b;

    /* renamed from: c  reason: collision with root package name */
    private final c f50477c;

    /* renamed from: d  reason: collision with root package name */
    private final List f50478d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f50479a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f50480b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f50481c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private Set f50482d = h.q();

        /* renamed from: e  reason: collision with root package name */
        private c f50483e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements c {
            a() {
            }

            @Override // sv.c
            public sv.a a(sv.b bVar) {
                return new n(bVar);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public c g() {
            c cVar = this.f50483e;
            if (cVar != null) {
                return cVar;
            }
            return new a();
        }

        public d f() {
            return new d(this);
        }
    }

    private h a() {
        return new h(this.f50475a, this.f50477c, this.f50476b);
    }

    private r c(r rVar) {
        Iterator it = this.f50478d.iterator();
        if (!it.hasNext()) {
            return rVar;
        }
        android.support.v4.media.session.b.a(it.next());
        throw null;
    }

    public r b(String str) {
        if (str != null) {
            return c(a().s(str));
        }
        throw new NullPointerException("input must not be null");
    }

    private d(b bVar) {
        this.f50475a = h.j(bVar.f50479a, bVar.f50482d);
        c g10 = bVar.g();
        this.f50477c = g10;
        this.f50478d = bVar.f50481c;
        List list = bVar.f50480b;
        this.f50476b = list;
        g10.a(new m(list, Collections.EMPTY_MAP));
    }
}
