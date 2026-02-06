package vj;

import gf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f52685a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f52686b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f52687c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f52688a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f52689b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f52690c;

        public b a() {
            return new b(this.f52688a, this.f52689b, this.f52690c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f52688a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f52688a = i11 | this.f52688a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f52685a = i10;
        this.f52686b = z10;
        this.f52687c = executor;
    }

    public final int a() {
        return this.f52685a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f52687c;
    }

    public final boolean d() {
        return this.f52686b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f52685a == bVar.f52685a && this.f52686b == bVar.f52686b && o.a(this.f52687c, bVar.f52687c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f52685a), Boolean.valueOf(this.f52686b), this.f52687c, null);
    }
}
