package gf;

import ff.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.gms.common.d[] f24354a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f24355b;

    /* renamed from: c  reason: collision with root package name */
    private final int f24356c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private m f24357a;

        /* renamed from: c  reason: collision with root package name */
        private com.google.android.gms.common.d[] f24359c;

        /* renamed from: b  reason: collision with root package name */
        private boolean f24358b = true;

        /* renamed from: d  reason: collision with root package name */
        private int f24360d = 0;

        /* synthetic */ a(w0 w0Var) {
        }

        public q a() {
            boolean z10;
            if (this.f24357a != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            hf.q.b(z10, "execute parameter required");
            return new v0(this, this.f24359c, this.f24358b, this.f24360d);
        }

        public a b(m mVar) {
            this.f24357a = mVar;
            return this;
        }

        public a c(boolean z10) {
            this.f24358b = z10;
            return this;
        }

        public a d(com.google.android.gms.common.d... dVarArr) {
            this.f24359c = dVarArr;
            return this;
        }

        public a e(int i10) {
            this.f24360d = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public q(com.google.android.gms.common.d[] dVarArr, boolean z10, int i10) {
        this.f24354a = dVarArr;
        boolean z11 = false;
        if (dVarArr != null && z10) {
            z11 = true;
        }
        this.f24355b = z11;
        this.f24356c = i10;
    }

    public static a a() {
        return new a(null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(a.b bVar, zg.k kVar);

    public boolean c() {
        return this.f24355b;
    }

    public final int d() {
        return this.f24356c;
    }

    public final com.google.android.gms.common.d[] e() {
        return this.f24354a;
    }
}
