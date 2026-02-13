package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f54583a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54584b;

    /* renamed from: c  reason: collision with root package name */
    private final List f54585c;

    /* renamed from: d  reason: collision with root package name */
    private final long f54586d;

    b0(a aVar) {
        this.f54583a = Collections.unmodifiableList(aVar.f54587a);
        this.f54584b = Collections.unmodifiableList(aVar.f54588b);
        this.f54585c = Collections.unmodifiableList(aVar.f54589c);
        this.f54586d = aVar.f54590d;
    }

    public long a() {
        return this.f54586d;
    }

    public List b() {
        return this.f54584b;
    }

    public List c() {
        return this.f54583a;
    }

    public List d() {
        return this.f54585c;
    }

    public boolean e() {
        if (this.f54586d > 0) {
            return true;
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final List f54587a;

        /* renamed from: b  reason: collision with root package name */
        final List f54588b;

        /* renamed from: c  reason: collision with root package name */
        final List f54589c;

        /* renamed from: d  reason: collision with root package name */
        long f54590d;

        public a(b1 b1Var, int i10) {
            this.f54587a = new ArrayList();
            this.f54588b = new ArrayList();
            this.f54589c = new ArrayList();
            this.f54590d = 5000L;
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
                this.f54587a.add(b1Var);
            }
            if ((i10 & 2) != 0) {
                this.f54588b.add(b1Var);
            }
            if ((i10 & 4) != 0) {
                this.f54589c.add(b1Var);
            }
            return this;
        }

        public b0 b() {
            return new b0(this);
        }

        public a c(int i10) {
            if ((i10 & 1) != 0) {
                this.f54587a.clear();
            }
            if ((i10 & 2) != 0) {
                this.f54588b.clear();
            }
            if ((i10 & 4) != 0) {
                this.f54589c.clear();
            }
            return this;
        }

        public a(b0 b0Var) {
            ArrayList arrayList = new ArrayList();
            this.f54587a = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.f54588b = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.f54589c = arrayList3;
            this.f54590d = 5000L;
            arrayList.addAll(b0Var.c());
            arrayList2.addAll(b0Var.b());
            arrayList3.addAll(b0Var.d());
            this.f54590d = b0Var.a();
        }
    }
}
