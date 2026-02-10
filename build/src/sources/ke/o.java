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
    private static final String f31715i = w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f31716o = w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f31717p = new g.a() { // from class: ke.n
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return o.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final u0 f31718d;

    /* renamed from: e  reason: collision with root package name */
    public final s f31719e;

    public o(u0 u0Var, List list) {
        if (!list.isEmpty() && (((Integer) Collections.min(list)).intValue() < 0 || ((Integer) Collections.max(list)).intValue() >= u0Var.f46496d)) {
            throw new IndexOutOfBoundsException();
        }
        this.f31718d = u0Var;
        this.f31719e = s.o(list);
    }

    public static /* synthetic */ o a(Bundle bundle) {
        return new o((u0) u0.f46495s.a((Bundle) oe.a.e(bundle.getBundle(f31715i))), si.e.c((int[]) oe.a.e(bundle.getIntArray(f31716o))));
    }

    public int b() {
        return this.f31718d.f46498i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (this.f31718d.equals(oVar.f31718d) && this.f31719e.equals(oVar.f31719e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f31718d.hashCode() + (this.f31719e.hashCode() * 31);
    }
}
