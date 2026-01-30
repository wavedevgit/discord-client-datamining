package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f52853a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52854b;

    /* renamed from: c  reason: collision with root package name */
    private final List f52855c;

    /* renamed from: d  reason: collision with root package name */
    private final long f52856d;

    b0(a aVar) {
        this.f52853a = Collections.unmodifiableList(aVar.f52857a);
        this.f52854b = Collections.unmodifiableList(aVar.f52858b);
        this.f52855c = Collections.unmodifiableList(aVar.f52859c);
        this.f52856d = aVar.f52860d;
    }

    public long a() {
        return this.f52856d;
    }

    public List b() {
        return this.f52854b;
    }

    public List c() {
        return this.f52853a;
    }

    public List d() {
        return this.f52855c;
    }

    public boolean e() {
        if (this.f52856d > 0) {
            return true;
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final List f52857a;

        /* renamed from: b  reason: collision with root package name */
        final List f52858b;

        /* renamed from: c  reason: collision with root package name */
        final List f52859c;

        /* renamed from: d  reason: collision with root package name */
        long f52860d;

        public a(b1 b1Var, int i10) {
            this.f52857a = new ArrayList();
            this.f52858b = new ArrayList();
            this.f52859c = new ArrayList();
            this.f52860d = 5000L;
            a(b1Var, i10);
        }

        public a a(b1 b1Var, int i10) {
            boolean z10;
            boolean z11 = false;
            if (b1Var != null) {
                z10 = true;
            } else {
                z10 = false;
            }
            b2.e.b(z10, "Point cannot be null.");
            if (i10 >= 1 && i10 <= 7) {
                z11 = true;
            }
            b2.e.b(z11, "Invalid metering mode " + i10);
            if ((i10 & 1) != 0) {
                this.f52857a.add(b1Var);
            }
            if ((i10 & 2) != 0) {
                this.f52858b.add(b1Var);
            }
            if ((i10 & 4) != 0) {
                this.f52859c.add(b1Var);
            }
            return this;
        }

        public b0 b() {
            return new b0(this);
        }

        public a c(int i10) {
            if ((i10 & 1) != 0) {
                this.f52857a.clear();
            }
            if ((i10 & 2) != 0) {
                this.f52858b.clear();
            }
            if ((i10 & 4) != 0) {
                this.f52859c.clear();
            }
            return this;
        }

        public a(b0 b0Var) {
            ArrayList arrayList = new ArrayList();
            this.f52857a = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.f52858b = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.f52859c = arrayList3;
            this.f52860d = 5000L;
            arrayList.addAll(b0Var.c());
            arrayList2.addAll(b0Var.b());
            arrayList3.addAll(b0Var.d());
            this.f52860d = b0Var.a();
        }
    }
}
