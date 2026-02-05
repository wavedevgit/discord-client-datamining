package y8;

import com.facebook.common.internal.Supplier;
import com.facebook.datasource.DataSource;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class h implements Supplier {

    /* renamed from: a  reason: collision with root package name */
    private final List f54521a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f54522b;

    private h(List list, boolean z10) {
        j.c(!list.isEmpty(), "List of suppliers is empty!");
        this.f54521a = list;
        this.f54522b = z10;
    }

    public static h c(List list, boolean z10) {
        return new h(list, z10);
    }

    @Override // com.facebook.common.internal.Supplier
    /* renamed from: d */
    public DataSource get() {
        return new a();
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        return o8.h.a(this.f54521a, ((h) obj).f54521a);
    }

    public int hashCode() {
        return this.f54521a.hashCode();
    }

    public String toString() {
        return o8.h.b(this).b("list", this.f54521a).toString();
    }

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends y8.a {

        /* renamed from: h  reason: collision with root package name */
        private ArrayList f54523h;

        /* renamed from: i  reason: collision with root package name */
        private int f54524i;

        /* renamed from: j  reason: collision with root package name */
        private int f54525j;

        /* renamed from: k  reason: collision with root package name */
        private AtomicInteger f54526k;

        /* renamed from: l  reason: collision with root package name */
        private Throwable f54527l;

        /* renamed from: m  reason: collision with root package name */
        private Map f54528m;

        public a() {
            if (!h.this.f54522b) {
                y();
            }
        }

        private synchronized DataSource A(int i10) {
            DataSource dataSource;
            ArrayList arrayList = this.f54523h;
            if (arrayList != null && i10 < arrayList.size()) {
                dataSource = (DataSource) this.f54523h.get(i10);
            } else {
                dataSource = null;
            }
            return dataSource;
        }

        private synchronized DataSource B() {
            return A(this.f54524i);
        }

        private void C() {
            Throwable th2;
            if (this.f54526k.incrementAndGet() == this.f54525j && (th2 = this.f54527l) != null) {
                o(th2, this.f54528m);
            }
        }

        /* JADX WARN: Removed duplicated region for block: B:20:0x0024 A[LOOP:0: B:19:0x0022->B:20:0x0024, LOOP_END] */
        /*
            Code decompiled incorrectly, please refer to instructions dump.
            To view partially-correct add '--show-bad-code' argument
        */
        private void D(int r3, com.facebook.datasource.DataSource r4, boolean r5) {
            /*
                r2 = this;
                monitor-enter(r2)
                int r0 = r2.f54524i     // Catch: java.lang.Throwable -> L1b
                com.facebook.datasource.DataSource r1 = r2.A(r3)     // Catch: java.lang.Throwable -> L1b
                if (r4 != r1) goto L2f
                int r4 = r2.f54524i     // Catch: java.lang.Throwable -> L1b
                if (r3 != r4) goto Le
                goto L2f
            Le:
                com.facebook.datasource.DataSource r4 = r2.B()     // Catch: java.lang.Throwable -> L1b
                if (r4 == 0) goto L1f
                if (r5 == 0) goto L1d
                int r4 = r2.f54524i     // Catch: java.lang.Throwable -> L1b
                if (r3 >= r4) goto L1d
                goto L1f
            L1b:
                r3 = move-exception
                goto L31
            L1d:
                r3 = r0
                goto L21
            L1f:
                r2.f54524i = r3     // Catch: java.lang.Throwable -> L1b
            L21:
                monitor-exit(r2)     // Catch: java.lang.Throwable -> L1b
            L22:
                if (r0 <= r3) goto L2e
                com.facebook.datasource.DataSource r4 = r2.z(r0)
                r2.x(r4)
                int r0 = r0 + (-1)
                goto L22
            L2e:
                return
            L2f:
                monitor-exit(r2)     // Catch: java.lang.Throwable -> L1b
                return
            L31:
                monitor-exit(r2)     // Catch: java.lang.Throwable -> L1b
                throw r3
            */
            throw new UnsupportedOperationException("Method not decompiled: y8.h.a.D(int, com.facebook.datasource.DataSource, boolean):void");
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void E(int i10, DataSource dataSource) {
            x(G(i10, dataSource));
            if (i10 == 0) {
                this.f54527l = dataSource.b();
                this.f54528m = dataSource.getExtras();
            }
            C();
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void F(int i10, DataSource dataSource) {
            boolean z10;
            D(i10, dataSource, dataSource.isFinished());
            if (dataSource == B()) {
                if (i10 == 0 && dataSource.isFinished()) {
                    z10 = true;
                } else {
                    z10 = false;
                }
                s(null, z10, dataSource.getExtras());
            }
            C();
        }

        private synchronized DataSource G(int i10, DataSource dataSource) {
            if (dataSource == B()) {
                return null;
            }
            if (dataSource == A(i10)) {
                return z(i10);
            }
            return dataSource;
        }

        private void x(DataSource dataSource) {
            if (dataSource != null) {
                dataSource.close();
            }
        }

        private void y() {
            if (this.f54526k != null) {
                return;
            }
            synchronized (this) {
                try {
                    if (this.f54526k == null) {
                        this.f54526k = new AtomicInteger(0);
                        int size = h.this.f54521a.size();
                        this.f54525j = size;
                        this.f54524i = size;
                        this.f54523h = new ArrayList(size);
                        for (int i10 = 0; i10 < size; i10++) {
                            DataSource dataSource = (DataSource) ((Supplier) h.this.f54521a.get(i10)).get();
                            this.f54523h.add(dataSource);
                            dataSource.c(new C0757a(i10), m8.a.a());
                            if (!dataSource.a()) {
                            }
                        }
                    }
                } finally {
                }
            }
        }

        private synchronized DataSource z(int i10) {
            DataSource dataSource;
            ArrayList arrayList = this.f54523h;
            dataSource = null;
            if (arrayList != null && i10 < arrayList.size()) {
                dataSource = (DataSource) this.f54523h.set(i10, null);
            }
            return dataSource;
        }

        @Override // y8.a, com.facebook.datasource.DataSource
        public synchronized boolean a() {
            boolean z10;
            try {
                if (h.this.f54522b) {
                    y();
                }
                DataSource B = B();
                if (B != null) {
                    if (B.a()) {
                        z10 = true;
                    }
                }
                z10 = false;
            } catch (Throwable th2) {
                throw th2;
            }
            return z10;
        }

        @Override // y8.a, com.facebook.datasource.DataSource
        public boolean close() {
            if (h.this.f54522b) {
                y();
            }
            synchronized (this) {
                try {
                    if (!super.close()) {
                        return false;
                    }
                    ArrayList arrayList = this.f54523h;
                    this.f54523h = null;
                    if (arrayList != null) {
                        for (int i10 = 0; i10 < arrayList.size(); i10++) {
                            x((DataSource) arrayList.get(i10));
                        }
                        return true;
                    }
                    return true;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // y8.a, com.facebook.datasource.DataSource
        public synchronized Object getResult() {
            Object obj;
            try {
                if (h.this.f54522b) {
                    y();
                }
                DataSource B = B();
                if (B != null) {
                    obj = B.getResult();
                } else {
                    obj = null;
                }
            } catch (Throwable th2) {
                throw th2;
            }
            return obj;
        }

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: y8.h$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class C0757a implements e {

            /* renamed from: a  reason: collision with root package name */
            private int f54530a;

            public C0757a(int i10) {
                this.f54530a = i10;
            }

            @Override // y8.e
            public void onFailure(DataSource dataSource) {
                a.this.E(this.f54530a, dataSource);
            }

            @Override // y8.e
            public void onNewResult(DataSource dataSource) {
                if (dataSource.a()) {
                    a.this.F(this.f54530a, dataSource);
                } else if (dataSource.isFinished()) {
                    a.this.E(this.f54530a, dataSource);
                }
            }

            @Override // y8.e
            public void onProgressUpdate(DataSource dataSource) {
                if (this.f54530a == 0) {
                    a.this.q(dataSource.d());
                }
            }

            @Override // y8.e
            public void onCancellation(DataSource dataSource) {
            }
        }
    }
}
