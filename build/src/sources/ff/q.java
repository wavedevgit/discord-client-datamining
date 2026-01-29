package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.gms.common.d[] f25140a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f25141b;

    /* renamed from: c  reason: collision with root package name */
    private final int f25142c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private m f25143a;

        /* renamed from: c  reason: collision with root package name */
        private com.google.android.gms.common.d[] f25145c;

        /* renamed from: b  reason: collision with root package name */
        private boolean f25144b = true;

        /* renamed from: d  reason: collision with root package name */
        private int f25146d = 0;

        /* synthetic */ a(w0 w0Var) {
        }

        public q a() {
            boolean z10;
            if (this.f25143a != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.b(z10, "execute parameter required");
            return new v0(this, this.f25145c, this.f25144b, this.f25146d);
        }

        public a b(m mVar) {
            this.f25143a = mVar;
            return this;
        }

        public a c(boolean z10) {
            this.f25144b = z10;
            return this;
        }

        public a d(com.google.android.gms.common.d... dVarArr) {
            this.f25145c = dVarArr;
            return this;
        }

        public a e(int i10) {
            this.f25146d = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public q(com.google.android.gms.common.d[] dVarArr, boolean z10, int i10) {
        this.f25140a = dVarArr;
        boolean z11 = false;
        if (dVarArr != null && z10) {
            z11 = true;
        }
        this.f25141b = z11;
        this.f25142c = i10;
    }

    public static a a() {
        return new a(null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(a.b bVar, wg.k kVar);

    public boolean c() {
        return this.f25141b;
    }

    public final int d() {
        return this.f25142c;
    }

    public final com.google.android.gms.common.d[] e() {
        return this.f25140a;
    }
}
