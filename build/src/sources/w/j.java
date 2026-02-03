package w;

import a0.e2;
import a0.q1;
import a0.r0;
import a0.r1;
import a0.w1;
import w.j;
import x.a0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class j implements e2 {
    private final r0 I;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static final class a implements a0 {

        /* renamed from: a  reason: collision with root package name */
        private final r1 f51789a = r1.Z();

        public static /* synthetic */ boolean c(a aVar, r0 r0Var, r0.a aVar2) {
            aVar.a().K(aVar2, r0Var.f(aVar2), r0Var.a(aVar2));
            return true;
        }

        public static a e(final r0 r0Var) {
            final a aVar = new a();
            r0Var.g("camera2.captureRequest.option.", new r0.b() { // from class: w.i
                @Override // a0.r0.b
                public final boolean a(r0.a aVar2) {
                    return j.a.c(j.a.this, r0Var, aVar2);
                }
            });
            return aVar;
        }

        @Override // x.a0
        public q1 a() {
            return this.f51789a;
        }

        public j d() {
            return new j(w1.Y(this.f51789a));
        }
    }

    public j(r0 r0Var) {
        this.I = r0Var;
    }

    @Override // a0.e2
    public r0 getConfig() {
        return this.I;
    }
}
