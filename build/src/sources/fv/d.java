package fv;

import bv.h;
import bv.m;
import bv.n;
import ev.r;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f25619a;

    /* renamed from: b  reason: collision with root package name */
    private final List f25620b;

    /* renamed from: c  reason: collision with root package name */
    private final c f25621c;

    /* renamed from: d  reason: collision with root package name */
    private final List f25622d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f25623a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f25624b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f25625c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private Set f25626d = h.q();

        /* renamed from: e  reason: collision with root package name */
        private c f25627e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements c {
            a() {
            }

            @Override // fv.c
            public fv.a a(fv.b bVar) {
                return new n(bVar);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public c g() {
            c cVar = this.f25627e;
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
        return new h(this.f25619a, this.f25621c, this.f25620b);
    }

    private r c(r rVar) {
        Iterator it = this.f25622d.iterator();
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
        this.f25619a = h.j(bVar.f25623a, bVar.f25626d);
        c g10 = bVar.g();
        this.f25621c = g10;
        this.f25622d = bVar.f25625c;
        List list = bVar.f25624b;
        this.f25620b = list;
        g10.a(new m(list, Collections.EMPTY_MAP));
    }
}
