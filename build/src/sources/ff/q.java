package ff;

import ef.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class q {

    /* renamed from: a  reason: collision with root package name */
    private final com.google.android.gms.common.d[] f23269a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f23270b;

    /* renamed from: c  reason: collision with root package name */
    private final int f23271c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private m f23272a;

        /* renamed from: c  reason: collision with root package name */
        private com.google.android.gms.common.d[] f23274c;

        /* renamed from: b  reason: collision with root package name */
        private boolean f23273b = true;

        /* renamed from: d  reason: collision with root package name */
        private int f23275d = 0;

        /* synthetic */ a(w0 w0Var) {
        }

        public q a() {
            boolean z10;
            if (this.f23272a != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            gf.q.b(z10, "execute parameter required");
            return new v0(this, this.f23274c, this.f23273b, this.f23275d);
        }

        public a b(m mVar) {
            this.f23272a = mVar;
            return this;
        }

        public a c(boolean z10) {
            this.f23273b = z10;
            return this;
        }

        public a d(com.google.android.gms.common.d... dVarArr) {
            this.f23274c = dVarArr;
            return this;
        }

        public a e(int i10) {
            this.f23275d = i10;
            return this;
        }
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public q(com.google.android.gms.common.d[] dVarArr, boolean z10, int i10) {
        this.f23269a = dVarArr;
        boolean z11 = false;
        if (dVarArr != null && z10) {
            z11 = true;
        }
        this.f23270b = z11;
        this.f23271c = i10;
    }

    public static a a() {
        return new a(null);
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract void b(a.b bVar, yg.k kVar);

    public boolean c() {
        return this.f23270b;
    }

    public final int d() {
        return this.f23271c;
    }

    public final com.google.android.gms.common.d[] e() {
        return this.f23269a;
    }
}
