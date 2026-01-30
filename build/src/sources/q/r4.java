package q;

import android.hardware.camera2.CameraCaptureSession;
import android.view.Surface;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import q.g4;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
final class r4 extends g4.c {

    /* renamed from: a  reason: collision with root package name */
    private final List f46575a;

    r4(List list) {
        ArrayList arrayList = new ArrayList();
        this.f46575a = arrayList;
        arrayList.addAll(list);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public static g4.c w(g4.c... cVarArr) {
        return new r4(Arrays.asList(cVarArr));
    }

    @Override // q.g4.c
    public void o(g4 g4Var) {
        for (g4.c cVar : this.f46575a) {
            cVar.o(g4Var);
        }
    }

    @Override // q.g4.c
    public void p(g4 g4Var) {
        for (g4.c cVar : this.f46575a) {
            cVar.p(g4Var);
        }
    }

    @Override // q.g4.c
    public void q(g4 g4Var) {
        for (g4.c cVar : this.f46575a) {
            cVar.q(g4Var);
        }
    }

    @Override // q.g4.c
    public void r(g4 g4Var) {
        for (g4.c cVar : this.f46575a) {
            cVar.r(g4Var);
        }
    }

    @Override // q.g4.c
    public void s(g4 g4Var) {
        for (g4.c cVar : this.f46575a) {
            cVar.s(g4Var);
        }
    }

    @Override // q.g4.c
    public void t(g4 g4Var) {
        for (g4.c cVar : this.f46575a) {
            cVar.t(g4Var);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    @Override // q.g4.c
    public void u(g4 g4Var) {
        for (g4.c cVar : this.f46575a) {
            cVar.u(g4Var);
        }
    }

    @Override // q.g4.c
    public void v(g4 g4Var, Surface surface) {
        for (g4.c cVar : this.f46575a) {
            cVar.v(g4Var, surface);
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    static class a extends g4.c {

        /* renamed from: a  reason: collision with root package name */
        private final CameraCaptureSession.StateCallback f46576a;

        a(CameraCaptureSession.StateCallback stateCallback) {
            this.f46576a = stateCallback;
        }

        @Override // q.g4.c
        public void o(g4 g4Var) {
            this.f46576a.onActive(g4Var.k().c());
        }

        @Override // q.g4.c
        public void p(g4 g4Var) {
            r.d.a(this.f46576a, g4Var.k().c());
        }

        @Override // q.g4.c
        public void q(g4 g4Var) {
            this.f46576a.onClosed(g4Var.k().c());
        }

        @Override // q.g4.c
        public void r(g4 g4Var) {
            this.f46576a.onConfigureFailed(g4Var.k().c());
        }

        @Override // q.g4.c
        public void s(g4 g4Var) {
            this.f46576a.onConfigured(g4Var.k().c());
        }

        @Override // q.g4.c
        public void t(g4 g4Var) {
            this.f46576a.onReady(g4Var.k().c());
        }

        @Override // q.g4.c
        public void v(g4 g4Var, Surface surface) {
            r.b.a(this.f46576a, g4Var.k().c(), surface);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public a(List list) {
            this(j2.a(list));
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        @Override // q.g4.c
        public void u(g4 g4Var) {
        }
    }
}
