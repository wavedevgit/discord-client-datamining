package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.gms.common.d[] f24351a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f24352b;

    /* renamed from: c  reason: collision with root package name */
    private final int f24353c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private m f24354a;

        /* renamed from: c  reason: collision with root package name */
        private com.google.android.gms.common.d[] f24356c;

        /* renamed from: b  reason: collision with root package name */
        private boolean f24355b = true;

        /* renamed from: d  reason: collision with root package name */
        private int f24357d = 0;

        /* synthetic */ a(w0 w0Var) {
        }

        public q a() {
            boolean z10;
            if (this.f24354a != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.b(z10, "execute parameter required");
            return new v0(this, this.f24356c, this.f24355b, this.f24357d);
        }

        public a b(m mVar) {
            this.f24354a = mVar;
            return this;
        }

        public a c(boolean z10) {
            this.f24355b = z10;
            return this;
        }

        public a d(com.google.android.gms.common.d... dVarArr) {
            this.f24356c = dVarArr;
            return this;
        }

        public a e(int i10) {
            this.f24357d = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public q(com.google.android.gms.common.d[] dVarArr, boolean z10, int i10) {
        this.f24351a = dVarArr;
        boolean z11 = false;
        if (dVarArr != null && z10) {
            z11 = true;
        }
        this.f24352b = z11;
        this.f24353c = i10;
    }

    public static a a() {
        return new a(null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(a.b bVar, wg.k kVar);

    public boolean c() {
        return this.f24352b;
    }

    public final int d() {
        return this.f24353c;
    }

    public final com.google.android.gms.common.d[] e() {
        return this.f24351a;
    }
}
