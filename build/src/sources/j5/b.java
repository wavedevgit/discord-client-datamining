package j5;

import g5.f;
import g5.i;
import g5.q;
import ir.p;
import j5.c;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final d f31857a;

    /* renamed from: b  reason: collision with root package name */
    private final i f31858b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements c.a {
        @Override // j5.c.a
        public c a(d dVar, i iVar) {
            return new b(dVar, iVar);
        }

        public boolean equals(Object obj) {
            return obj instanceof a;
        }

        public int hashCode() {
            return a.class.hashCode();
        }
    }

    public b(d dVar, i iVar) {
        this.f31857a = dVar;
        this.f31858b = iVar;
    }

    @Override // j5.c
    public void a() {
        i iVar = this.f31858b;
        if (iVar instanceof q) {
            this.f31857a.a(((q) iVar).a());
        } else if (iVar instanceof f) {
            this.f31857a.c(((f) iVar).a());
        } else {
            throw new p();
        }
    }
}
