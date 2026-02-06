package y8;

import com.facebook.common.internal.Supplier;
import com.facebook.datasource.DataSource;
import java.util.List;
import o8.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class f implements Supplier {

    /* renamed from: a  reason: collision with root package name */
    private final List f55059a;

    /* JADX INFO: Access modifiers changed from: private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public class a extends y8.a {

        /* renamed from: h  reason: collision with root package name */
        private int f55060h = 0;

        /* renamed from: i  reason: collision with root package name */
        private DataSource f55061i = null;

        /* renamed from: j  reason: collision with root package name */
        private DataSource f55062j = null;

        /* JADX INFO: Access modifiers changed from: private */
        /* renamed from: y8.f$a$a  reason: collision with other inner class name */
        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public class C0743a implements e {
            @Override // y8.e
            public void onFailure(DataSource dataSource) {
                a.this.C(dataSource);
            }

            @Override // y8.e
            public void onNewResult(DataSource dataSource) {
                if (dataSource.a()) {
                    a.this.D(dataSource);
                } else if (dataSource.isFinished()) {
                    a.this.C(dataSource);
                }
            }

            @Override // y8.e
            public void onProgressUpdate(DataSource dataSource) {
                a.this.q(Math.max(a.this.d(), dataSource.d()));
            }

            private C0743a() {
            }

            @Override // y8.e
            public void onCancellation(DataSource dataSource) {
            }
        }

        public a() {
            if (!F()) {
                n(new RuntimeException("No data source supplier or supplier returned null."));
            }
        }

        private synchronized Supplier A() {
            if (!i() && this.f55060h < f.this.f55059a.size()) {
                List list = f.this.f55059a;
                int i10 = this.f55060h;
                this.f55060h = i10 + 1;
                return (Supplier) list.get(i10);
            }
            return null;
        }

        private void B(DataSource dataSource, boolean z10) {
            DataSource dataSource2;
            synchronized (this) {
                if (dataSource == this.f55061i && dataSource != (dataSource2 = this.f55062j)) {
                    if (dataSource2 != null && !z10) {
                        dataSource2 = null;
                        y(dataSource2);
                    }
                    this.f55062j = dataSource;
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
            this.f55061i = dataSource;
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
                dataSource.c(new C0743a(), m8.a.a());
                return true;
            }
            y(dataSource);
            return false;
        }

        private synchronized boolean x(DataSource dataSource) {
            if (!i() && dataSource == this.f55061i) {
                this.f55061i = null;
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
            return this.f55062j;
        }

        @Override // y8.a, com.facebook.datasource.DataSource
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

        @Override // y8.a, com.facebook.datasource.DataSource
        public boolean close() {
            synchronized (this) {
                try {
                    if (!super.close()) {
                        return false;
                    }
                    DataSource dataSource = this.f55061i;
                    this.f55061i = null;
                    DataSource dataSource2 = this.f55062j;
                    this.f55062j = null;
                    y(dataSource2);
                    y(dataSource);
                    return true;
                } catch (Throwable th2) {
                    throw th2;
                }
            }
        }

        @Override // y8.a, com.facebook.datasource.DataSource
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
        this.f55059a = list;
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
        return o8.h.a(this.f55059a, ((f) obj).f55059a);
    }

    public int hashCode() {
        return this.f55059a.hashCode();
    }

    public String toString() {
        return o8.h.b(this).b("list", this.f55059a).toString();
    }
}
