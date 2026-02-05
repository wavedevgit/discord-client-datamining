package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.gms.common.d[] f22968a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f22969b;

    /* renamed from: c  reason: collision with root package name */
    private final int f22970c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private m f22971a;

        /* renamed from: c  reason: collision with root package name */
        private com.google.android.gms.common.d[] f22973c;

        /* renamed from: b  reason: collision with root package name */
        private boolean f22972b = true;

        /* renamed from: d  reason: collision with root package name */
        private int f22974d = 0;

        /* synthetic */ a(w0 w0Var) {
        }

        public q a() {
            boolean z10;
            if (this.f22971a != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.b(z10, "execute parameter required");
            return new v0(this, this.f22973c, this.f22972b, this.f22974d);
        }

        public a b(m mVar) {
            this.f22971a = mVar;
            return this;
        }

        public a c(boolean z10) {
            this.f22972b = z10;
            return this;
        }

        public a d(com.google.android.gms.common.d... dVarArr) {
            this.f22973c = dVarArr;
            return this;
        }

        public a e(int i10) {
            this.f22974d = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public q(com.google.android.gms.common.d[] dVarArr, boolean z10, int i10) {
        this.f22968a = dVarArr;
        boolean z11 = false;
        if (dVarArr != null && z10) {
            z11 = true;
        }
        this.f22969b = z11;
        this.f22970c = i10;
    }

    public static a a() {
        return new a(null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(a.b bVar, xg.k kVar);

    public boolean c() {
        return this.f22969b;
    }

    public final int d() {
        return this.f22970c;
    }

    public final com.google.android.gms.common.d[] e() {
        return this.f22968a;
    }
}
