package kv;

import gv.h;
import gv.m;
import gv.n;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import jv.r;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f36171a;

    /* renamed from: b  reason: collision with root package name */
    private final List f36172b;

    /* renamed from: c  reason: collision with root package name */
    private final c f36173c;

    /* renamed from: d  reason: collision with root package name */
    private final List f36174d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f36175a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f36176b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f36177c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private Set f36178d = h.q();

        /* renamed from: e  reason: collision with root package name */
        private c f36179e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements c {
            a() {
            }

            @Override // kv.c
            public kv.a a(kv.b bVar) {
                return new n(bVar);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public c g() {
            c cVar = this.f36179e;
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
        return new h(this.f36171a, this.f36173c, this.f36172b);
    }

    private r c(r rVar) {
        Iterator it = this.f36174d.iterator();
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
        this.f36171a = h.j(bVar.f36175a, bVar.f36178d);
        c g10 = bVar.g();
        this.f36173c = g10;
        this.f36174d = bVar.f36177c;
        List list = bVar.f36176b;
        this.f36172b = list;
        g10.a(new m(list, Collections.EMPTY_MAP));
    }
}
