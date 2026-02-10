package bw;

import aw.r;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import xv.h;
import xv.m;
import xv.n;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class d {

    /* renamed from: a  reason: collision with root package name */
    private final List f7904a;

    /* renamed from: b  reason: collision with root package name */
    private final List f7905b;

    /* renamed from: c  reason: collision with root package name */
    private final c f7906c;

    /* renamed from: d  reason: collision with root package name */
    private final List f7907d;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    public static class b {

        /* renamed from: a  reason: collision with root package name */
        private final List f7908a = new ArrayList();

        /* renamed from: b  reason: collision with root package name */
        private final List f7909b = new ArrayList();

        /* renamed from: c  reason: collision with root package name */
        private final List f7910c = new ArrayList();

        /* renamed from: d  reason: collision with root package name */
        private Set f7911d = h.q();

        /* renamed from: e  reason: collision with root package name */
        private c f7912e;

        /* JADX INFO: Access modifiers changed from: package-private */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
        public class a implements c {
            a() {
            }

            @Override // bw.c
            public bw.a a(bw.b bVar) {
                return new n(bVar);
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public c g() {
            c cVar = this.f7912e;
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
        return new h(this.f7904a, this.f7906c, this.f7905b);
    }

    private r c(r rVar) {
        Iterator it = this.f7907d.iterator();
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
        this.f7904a = h.j(bVar.f7908a, bVar.f7911d);
        c g10 = bVar.g();
        this.f7906c = g10;
        this.f7907d = bVar.f7910c;
        List list = bVar.f7909b;
        this.f7905b = list;
        g10.a(new m(list, Collections.EMPTY_MAP));
    }
}
