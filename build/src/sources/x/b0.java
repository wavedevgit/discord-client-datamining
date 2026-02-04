package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f52779a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52780b;

    /* renamed from: c  reason: collision with root package name */
    private final List f52781c;

    /* renamed from: d  reason: collision with root package name */
    private final long f52782d;

    b0(a aVar) {
        this.f52779a = Collections.unmodifiableList(aVar.f52783a);
        this.f52780b = Collections.unmodifiableList(aVar.f52784b);
        this.f52781c = Collections.unmodifiableList(aVar.f52785c);
        this.f52782d = aVar.f52786d;
    }

    public long a() {
        return this.f52782d;
    }

    public List b() {
        return this.f52780b;
    }

    public List c() {
        return this.f52779a;
    }

    public List d() {
        return this.f52781c;
    }

    public boolean e() {
        if (this.f52782d > 0) {
            return true;
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final List f52783a;

        /* renamed from: b  reason: collision with root package name */
        final List f52784b;

        /* renamed from: c  reason: collision with root package name */
        final List f52785c;

        /* renamed from: d  reason: collision with root package name */
        long f52786d;

        public a(b1 b1Var, int i10) {
            this.f52783a = new ArrayList();
            this.f52784b = new ArrayList();
            this.f52785c = new ArrayList();
            this.f52786d = 5000L;
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
                this.f52783a.add(b1Var);
            }
            if ((i10 & 2) != 0) {
                this.f52784b.add(b1Var);
            }
            if ((i10 & 4) != 0) {
                this.f52785c.add(b1Var);
            }
            return this;
        }

        public b0 b() {
            return new b0(this);
        }

        public a c(int i10) {
            if ((i10 & 1) != 0) {
                this.f52783a.clear();
            }
            if ((i10 & 2) != 0) {
                this.f52784b.clear();
            }
            if ((i10 & 4) != 0) {
                this.f52785c.clear();
            }
            return this;
        }

        public a(b0 b0Var) {
            ArrayList arrayList = new ArrayList();
            this.f52783a = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.f52784b = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.f52785c = arrayList3;
            this.f52786d = 5000L;
            arrayList.addAll(b0Var.c());
            arrayList2.addAll(b0Var.b());
            arrayList3.addAll(b0Var.d());
            this.f52786d = b0Var.a();
        }
    }
}
