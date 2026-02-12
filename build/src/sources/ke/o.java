package ke;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Collections;
import java.util.List;
import oe.w0;
import qi.s;
import rd.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o implements com.google.android.exoplayer2.g {

    /* renamed from: i  reason: collision with root package name */
    private static final String f31716i = w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f31717o = w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f31718p = new g.a() { // from class: ke.n
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return o.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final u0 f31719d;

    /* renamed from: e  reason: collision with root package name */
    public final s f31720e;

    public o(u0 u0Var, List list) {
        if (!list.isEmpty() && (((Integer) Collections.min(list)).intValue() < 0 || ((Integer) Collections.max(list)).intValue() >= u0Var.f46497d)) {
            throw new IndexOutOfBoundsException();
        }
        this.f31719d = u0Var;
        this.f31720e = s.o(list);
    }

    public static /* synthetic */ o a(Bundle bundle) {
        return new o((u0) u0.f46496s.a((Bundle) oe.a.e(bundle.getBundle(f31716i))), si.e.c((int[]) oe.a.e(bundle.getIntArray(f31717o))));
    }

    public int b() {
        return this.f31719d.f46499i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (this.f31719d.equals(oVar.f31719d) && this.f31720e.equals(oVar.f31720e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f31719d.hashCode() + (this.f31720e.hashCode() * 31);
    }
}
