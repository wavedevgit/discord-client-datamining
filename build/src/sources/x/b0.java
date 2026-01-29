package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f52837a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52838b;

    /* renamed from: c  reason: collision with root package name */
    private final List f52839c;

    /* renamed from: d  reason: collision with root package name */
    private final long f52840d;

    b0(a aVar) {
        this.f52837a = Collections.unmodifiableList(aVar.f52841a);
        this.f52838b = Collections.unmodifiableList(aVar.f52842b);
        this.f52839c = Collections.unmodifiableList(aVar.f52843c);
        this.f52840d = aVar.f52844d;
    }

    public long a() {
        return this.f52840d;
    }

    public List b() {
        return this.f52838b;
    }

    public List c() {
        return this.f52837a;
    }

    public List d() {
        return this.f52839c;
    }

    public boolean e() {
        if (this.f52840d > 0) {
            return true;
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final List f52841a;

        /* renamed from: b  reason: collision with root package name */
        final List f52842b;

        /* renamed from: c  reason: collision with root package name */
        final List f52843c;

        /* renamed from: d  reason: collision with root package name */
        long f52844d;

        public a(b1 b1Var, int i10) {
            this.f52841a = new ArrayList();
            this.f52842b = new ArrayList();
            this.f52843c = new ArrayList();
            this.f52844d = 5000L;
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
                this.f52841a.add(b1Var);
            }
            if ((i10 & 2) != 0) {
                this.f52842b.add(b1Var);
            }
            if ((i10 & 4) != 0) {
                this.f52843c.add(b1Var);
            }
            return this;
        }

        public b0 b() {
            return new b0(this);
        }

        public a c(int i10) {
            if ((i10 & 1) != 0) {
                this.f52841a.clear();
            }
            if ((i10 & 2) != 0) {
                this.f52842b.clear();
            }
            if ((i10 & 4) != 0) {
                this.f52843c.clear();
            }
            return this;
        }

        public a(b0 b0Var) {
            ArrayList arrayList = new ArrayList();
            this.f52841a = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.f52842b = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.f52843c = arrayList3;
            this.f52844d = 5000L;
            arrayList.addAll(b0Var.c());
            arrayList2.addAll(b0Var.b());
            arrayList3.addAll(b0Var.d());
            this.f52844d = b0Var.a();
        }
    }
}
