package z8;

import com.facebook.common.internal.Supplier;
import com.facebook.datasource.DataSource;
import java.util.List;
import p8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements Supplier {

    /* renamed from: a  reason: collision with root package name */
    private final List f56171a;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends z8.a {

        /* renamed from: h  reason: collision with root package name */
        private int f56172h = 0;

        /* renamed from: i  reason: collision with root package name */
        private DataSource f56173i = null;

        /* renamed from: j  reason: collision with root package name */
        private DataSource f56174j = null;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: z8.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class C0794a implements e {
            @Override // z8.e
            public void onFailure(DataSource dataSource) {
                a.this.C(dataSource);
            }

            @Override // z8.e
            public void onNewResult(DataSource dataSource) {
                if (dataSource.a()) {
                    a.this.D(dataSource);
                } else if (dataSource.isFinished()) {
                    a.this.C(dataSource);
                }
            }

            @Override // z8.e
            public void onProgressUpdate(DataSource dataSource) {
                a.this.q(Math.max(a.this.d(), dataSource.d()));
            }

            private C0794a() {
            }

            @Override // z8.e
            public void onCancellation(DataSource dataSource) {
            }
        }

        public a() {
            if (!F()) {
                n(new RuntimeException("No data source supplier or supplier returned null."));
            }
        }

        private synchronized Supplier A() {
            if (!i() && this.f56172h < f.this.f56171a.size()) {
                List list = f.this.f56171a;
                int i10 = this.f56172h;
                this.f56172h = i10 + 1;
                return (Supplier) list.get(i10);
            }
            return null;
        }

        private void B(DataSource dataSource, boolean z10) {
            DataSource dataSource2;
            synchronized (this) {
                if (dataSource == this.f56173i && dataSource != (dataSource2 = this.f56174j)) {
                    if (dataSource2 != null && !z10) {
                        dataSource2 = null;
                        y(dataSource2);
                    }
                    this.f56174j = dataSource;
                    y(dataSource2);
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void C(DataSource dataSource) {
            if (x(dataSource)) {
                if (dataSource != z()) {
                    y(dataSource);
                }
                if (!F()) {
                    o(dataSource.b(), dataSource.getExtras());
                }
            }
        }

        /* JADX INFO: Access modifiers changed from: private */
        public void D(DataSource dataSource) {
            B(dataSource, dataSource.isFinished());
            if (dataSource == z()) {
                s(null, dataSource.isFinished(), dataSource.getExtras());
            }
        }

        private synchronized boolean E(DataSource dataSource) {
            if (i()) {
                return false;
            }
            this.f56173i = dataSource;
            return true;
        }

        private boolean F() {
            DataSource dataSource;
            Supplier A = A();
            if (A != null) {
                dataSource = (DataSource) A.get();
            } else {
                dataSource = null;
            }
            if (E(dataSource) && dataSource != null) {
                dataSource.c(new C0794a(), n8.a.a());
                return true;
            }
            y(dataSource);
            return false;
        }

        private synchronized boolean x(DataSource dataSource) {
            if (!i() && dataSource == this.f56173i) {
                this.f56173i = null;
                return true;
            }
            return false;
        }

        private void y(DataSource dataSource) {
            if (dataSource != null) {
                dataSource.close();
            }
        }

        private synchronized DataSource z() {
            return this.f56174j;
        }

        @Override // z8.a, com.facebook.datasource.DataSource
        public synchronized boolean a() {
            boolean z10;
            DataSource z11 = z();
            if (z11 != null) {
                if (z11.a()) {
                    z10 = true;
                }
            }
            z10 = false;
            return z10;
        }

        @Override // z8.a, com.facebook.datasource.DataSource
        public boolean close() {
            synchronized (this) {
                try {
                    if (!super.close()) {
                        return false;
                    }
                    DataSource dataSource = this.f56173i;
                    this.f56173i = null;
                    DataSource dataSource2 = this.f56174j;
                    this.f56174j = null;
                    y(dataSource2);
                    y(dataSource);
                    return true;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // z8.a, com.facebook.datasource.DataSource
        public synchronized Object getResult() {
            Object obj;
            DataSource z10 = z();
            if (z10 != null) {
                obj = z10.getResult();
            } else {
                obj = null;
            }
            return obj;
        }
    }

    private f(List list) {
        j.c(!list.isEmpty(), "List of suppliers is empty!");
        this.f56171a = list;
    }

    public static f b(List list) {
        return new f(list);
    }

    @Override // com.facebook.common.internal.Supplier
    /* renamed from: c */
    public DataSource get() {
        return new a();
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof f)) {
            return false;
        }
        return p8.h.a(this.f56171a, ((f) obj).f56171a);
    }

    public int hashCode() {
        return this.f56171a.hashCode();
    }

    public String toString() {
        return p8.h.b(this).b("list", this.f56171a).toString();
    }
}
