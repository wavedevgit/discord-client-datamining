package rj;

import gf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f48521a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f48522b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f48523c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f48524a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f48525b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f48526c;

        public b a() {
            return new b(this.f48524a, this.f48525b, this.f48526c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f48524a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f48524a = i11 | this.f48524a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f48521a = i10;
        this.f48522b = z10;
        this.f48523c = executor;
    }

    public final int a() {
        return this.f48521a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f48523c;
    }

    public final boolean d() {
        return this.f48522b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f48521a == bVar.f48521a && this.f48522b == bVar.f48522b && o.a(this.f48523c, bVar.f48523c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f48521a), Boolean.valueOf(this.f48522b), this.f48523c, null);
    }
}
