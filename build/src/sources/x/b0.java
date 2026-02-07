package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f54190a;

    /* renamed from: b  reason: collision with root package name */
    private final List f54191b;

    /* renamed from: c  reason: collision with root package name */
    private final List f54192c;

    /* renamed from: d  reason: collision with root package name */
    private final long f54193d;

    b0(a aVar) {
        this.f54190a = Collections.unmodifiableList(aVar.f54194a);
        this.f54191b = Collections.unmodifiableList(aVar.f54195b);
        this.f54192c = Collections.unmodifiableList(aVar.f54196c);
        this.f54193d = aVar.f54197d;
    }

    public long a() {
        return this.f54193d;
    }

    public List b() {
        return this.f54191b;
    }

    public List c() {
        return this.f54190a;
    }

    public List d() {
        return this.f54192c;
    }

    public boolean e() {
        if (this.f54193d > 0) {
            return true;
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final List f54194a;

        /* renamed from: b  reason: collision with root package name */
        final List f54195b;

        /* renamed from: c  reason: collision with root package name */
        final List f54196c;

        /* renamed from: d  reason: collision with root package name */
        long f54197d;

        public a(b1 b1Var, int i10) {
            this.f54194a = new ArrayList();
            this.f54195b = new ArrayList();
            this.f54196c = new ArrayList();
            this.f54197d = 5000L;
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
                this.f54194a.add(b1Var);
            }
            if ((i10 & 2) != 0) {
                this.f54195b.add(b1Var);
            }
            if ((i10 & 4) != 0) {
                this.f54196c.add(b1Var);
            }
            return this;
        }

        public b0 b() {
            return new b0(this);
        }

        public a c(int i10) {
            if ((i10 & 1) != 0) {
                this.f54194a.clear();
            }
            if ((i10 & 2) != 0) {
                this.f54195b.clear();
            }
            if ((i10 & 4) != 0) {
                this.f54196c.clear();
            }
            return this;
        }

        public a(b0 b0Var) {
            ArrayList arrayList = new ArrayList();
            this.f54194a = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.f54195b = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.f54196c = arrayList3;
            this.f54197d = 5000L;
            arrayList.addAll(b0Var.c());
            arrayList2.addAll(b0Var.b());
            arrayList3.addAll(b0Var.d());
            this.f54197d = b0Var.a();
        }
    }
}
