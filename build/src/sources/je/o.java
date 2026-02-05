package je;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Collections;
import java.util.List;
import mi.s;
import ne.w0;
import qd.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o implements com.google.android.exoplayer2.g {

    /* renamed from: i  reason: collision with root package name */
    private static final String f30885i = w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f30886o = w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f30887p = new g.a() { // from class: je.n
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return o.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final u0 f30888d;

    /* renamed from: e  reason: collision with root package name */
    public final s f30889e;

    public o(u0 u0Var, List list) {
        if (!list.isEmpty() && (((Integer) Collections.min(list)).intValue() < 0 || ((Integer) Collections.max(list)).intValue() >= u0Var.f47828d)) {
            throw new IndexOutOfBoundsException();
        }
        this.f30888d = u0Var;
        this.f30889e = s.n(list);
    }

    public static /* synthetic */ o a(Bundle bundle) {
        return new o((u0) u0.f47827s.a((Bundle) ne.a.e(bundle.getBundle(f30885i))), oi.e.c((int[]) ne.a.e(bundle.getIntArray(f30886o))));
    }

    public int b() {
        return this.f30888d.f47830i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (this.f30888d.equals(oVar.f30888d) && this.f30889e.equals(oVar.f30889e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f30888d.hashCode() + (this.f30889e.hashCode() * 31);
    }
}
