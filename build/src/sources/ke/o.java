package ke;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Collections;
import java.util.List;
import oe.w0;
import oi.s;
import rd.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o implements com.google.android.exoplayer2.g {

    /* renamed from: i  reason: collision with root package name */
    private static final String f30857i = w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f30858o = w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f30859p = new g.a() { // from class: ke.n
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return o.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final u0 f30860d;

    /* renamed from: e  reason: collision with root package name */
    public final s f30861e;

    public o(u0 u0Var, List list) {
        if (!list.isEmpty() && (((Integer) Collections.min(list)).intValue() < 0 || ((Integer) Collections.max(list)).intValue() >= u0Var.f48042d)) {
            throw new IndexOutOfBoundsException();
        }
        this.f30860d = u0Var;
        this.f30861e = s.o(list);
    }

    public static /* synthetic */ o a(Bundle bundle) {
        return new o((u0) u0.f48041s.a((Bundle) oe.a.e(bundle.getBundle(f30857i))), qi.e.c((int[]) oe.a.e(bundle.getIntArray(f30858o))));
    }

    public int b() {
        return this.f30860d.f48044i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (this.f30860d.equals(oVar.f30860d) && this.f30861e.equals(oVar.f30861e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f30860d.hashCode() + (this.f30861e.hashCode() * 31);
    }
}
