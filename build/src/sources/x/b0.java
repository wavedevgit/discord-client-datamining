package x;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class b0 {

    /* renamed from: a  reason: collision with root package name */
    private final List f52782a;

    /* renamed from: b  reason: collision with root package name */
    private final List f52783b;

    /* renamed from: c  reason: collision with root package name */
    private final List f52784c;

    /* renamed from: d  reason: collision with root package name */
    private final long f52785d;

    b0(a aVar) {
        this.f52782a = Collections.unmodifiableList(aVar.f52786a);
        this.f52783b = Collections.unmodifiableList(aVar.f52787b);
        this.f52784c = Collections.unmodifiableList(aVar.f52788c);
        this.f52785d = aVar.f52789d;
    }

    public long a() {
        return this.f52785d;
    }

    public List b() {
        return this.f52783b;
    }

    public List c() {
        return this.f52782a;
    }

    public List d() {
        return this.f52784c;
    }

    public boolean e() {
        if (this.f52785d > 0) {
            return true;
        }
        return false;
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        final List f52786a;

        /* renamed from: b  reason: collision with root package name */
        final List f52787b;

        /* renamed from: c  reason: collision with root package name */
        final List f52788c;

        /* renamed from: d  reason: collision with root package name */
        long f52789d;

        public a(b1 b1Var, int i10) {
            this.f52786a = new ArrayList();
            this.f52787b = new ArrayList();
            this.f52788c = new ArrayList();
            this.f52789d = 5000L;
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
                this.f52786a.add(b1Var);
            }
            if ((i10 & 2) != 0) {
                this.f52787b.add(b1Var);
            }
            if ((i10 & 4) != 0) {
                this.f52788c.add(b1Var);
            }
            return this;
        }

        public b0 b() {
            return new b0(this);
        }

        public a c(int i10) {
            if ((i10 & 1) != 0) {
                this.f52786a.clear();
            }
            if ((i10 & 2) != 0) {
                this.f52787b.clear();
            }
            if ((i10 & 4) != 0) {
                this.f52788c.clear();
            }
            return this;
        }

        public a(b0 b0Var) {
            ArrayList arrayList = new ArrayList();
            this.f52786a = arrayList;
            ArrayList arrayList2 = new ArrayList();
            this.f52787b = arrayList2;
            ArrayList arrayList3 = new ArrayList();
            this.f52788c = arrayList3;
            this.f52789d = 5000L;
            arrayList.addAll(b0Var.c());
            arrayList2.addAll(b0Var.b());
            arrayList3.addAll(b0Var.d());
            this.f52789d = b0Var.a();
        }
    }
}
