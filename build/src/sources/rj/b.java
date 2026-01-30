package rj;

import gf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f48319a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f48320b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f48321c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f48322a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f48323b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f48324c;

        public b a() {
            return new b(this.f48322a, this.f48323b, this.f48324c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f48322a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f48322a = i11 | this.f48322a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f48319a = i10;
        this.f48320b = z10;
        this.f48321c = executor;
    }

    public final int a() {
        return this.f48319a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f48321c;
    }

    public final boolean d() {
        return this.f48320b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f48319a == bVar.f48319a && this.f48320b == bVar.f48320b && o.a(this.f48321c, bVar.f48321c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f48319a), Boolean.valueOf(this.f48320b), this.f48321c, null);
    }
}
