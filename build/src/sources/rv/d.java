package rv;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import nv.h;
import nv.m;
import nv.n;
import qv.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f49602a;

    /* renamed from: b  reason: collision with root package name */
    private final List f49603b;

    /* renamed from: c  reason: collision with root package name */
    private final c f49604c;

    /* renamed from: d  reason: collision with root package name */
    private final List f49605d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f49606a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f49607b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f49608c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private Set f49609d = h.q();

        /* renamed from: e  reason: collision with root package name */
        private c f49610e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements c {
            a() {
            }

            @Override // rv.c
            public rv.a a(rv.b bVar) {
                return new n(bVar);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public c g() {
            c cVar = this.f49610e;
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
        return new h(this.f49602a, this.f49604c, this.f49603b);
    }

    private r c(r rVar) {
        Iterator it = this.f49605d.iterator();
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
        this.f49602a = h.j(bVar.f49606a, bVar.f49609d);
        c g10 = bVar.g();
        this.f49604c = g10;
        this.f49605d = bVar.f49608c;
        List list = bVar.f49607b;
        this.f49603b = list;
        g10.a(new m(list, Collections.EMPTY_MAP));
    }
}
