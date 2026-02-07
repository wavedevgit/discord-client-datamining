package vj;

import gf.o;
import java.util.concurrent.Executor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class b {

    /* renamed from: a  reason: collision with root package name */
    private final int f52733a;

    /* renamed from: b  reason: collision with root package name */
    private final boolean f52734b;

    /* renamed from: c  reason: collision with root package name */
    private final Executor f52735c;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private int f52736a = 0;

        /* renamed from: b  reason: collision with root package name */
        private boolean f52737b;

        /* renamed from: c  reason: collision with root package name */
        private Executor f52738c;

        public b a() {
            return new b(this.f52736a, this.f52737b, this.f52738c, null, null);
        }

        public a b(int i10, int... iArr) {
            this.f52736a = i10;
            if (iArr != null) {
                for (int i11 : iArr) {
                    this.f52736a = i11 | this.f52736a;
                }
            }
            return this;
        }
    }

    /* synthetic */ b(int i10, boolean z10, Executor executor, d dVar, e eVar) {
        this.f52733a = i10;
        this.f52734b = z10;
        this.f52735c = executor;
    }

    public final int a() {
        return this.f52733a;
    }

    public final d b() {
        return null;
    }

    public final Executor c() {
        return this.f52735c;
    }

    public final boolean d() {
        return this.f52734b;
    }

    public boolean equals(Object obj) {
        if (obj == this) {
            return true;
        }
        if (!(obj instanceof b)) {
            return false;
        }
        b bVar = (b) obj;
        if (this.f52733a == bVar.f52733a && this.f52734b == bVar.f52734b && o.a(this.f52735c, bVar.f52735c) && o.a(null, null)) {
            return true;
        }
        return false;
    }

    public int hashCode() {
        return o.b(Integer.valueOf(this.f52733a), Boolean.valueOf(this.f52734b), this.f52735c, null);
    }
}
