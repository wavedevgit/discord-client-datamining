package hv;

import dv.h;
import dv.m;
import dv.n;
import gv.r;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f28184a;

    /* renamed from: b  reason: collision with root package name */
    private final List f28185b;

    /* renamed from: c  reason: collision with root package name */
    private final c f28186c;

    /* renamed from: d  reason: collision with root package name */
    private final List f28187d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f28188a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f28189b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f28190c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private Set f28191d = h.q();

        /* renamed from: e  reason: collision with root package name */
        private c f28192e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements c {
            a() {
            }

            @Override // hv.c
            public hv.a a(hv.b bVar) {
                return new n(bVar);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public c g() {
            c cVar = this.f28192e;
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
        return new h(this.f28184a, this.f28186c, this.f28185b);
    }

    private r c(r rVar) {
        Iterator it = this.f28187d.iterator();
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
        this.f28184a = h.j(bVar.f28188a, bVar.f28191d);
        c g10 = bVar.g();
        this.f28186c = g10;
        this.f28187d = bVar.f28190c;
        List list = bVar.f28189b;
        this.f28185b = list;
        g10.a(new m(list, Collections.EMPTY_MAP));
    }
}
