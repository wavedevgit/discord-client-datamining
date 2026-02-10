package j5;

import g5.f;
import g5.i;
import g5.q;
import j5.c;
import rr.p;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b implements c {

    /* renamed from: a  reason: collision with root package name */
    private final d f30031a;

    /* renamed from: b  reason: collision with root package name */
    private final i f30032b;

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
        this.f30031a = dVar;
        this.f30032b = iVar;
    }

    @Override // j5.c
    public void a() {
        i iVar = this.f30032b;
        if (iVar instanceof q) {
            this.f30031a.a(((q) iVar).a());
        } else if (iVar instanceof f) {
            this.f30031a.c(((f) iVar).a());
        } else {
            throw new p();
        }
    }
}
