package yj;

import hf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f55583a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f55584b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f55585c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f55586a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f55587b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f55588c;

        public b a() {
            return new b(this.f55586a, this.f55587b, this.f55588c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f55586a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f55586a = i11 | this.f55586a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f55583a = i10;
        this.f55584b = z10;
        this.f55585c = executor;
    }

    public final int a() {
        return this.f55583a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f55585c;
    }

    public final boolean d() {
        return this.f55584b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f55583a == bVar.f55583a && this.f55584b == bVar.f55584b && o.a(this.f55585c, bVar.f55585c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f55583a), Boolean.valueOf(this.f55584b), this.f55585c, null);
    }
}
