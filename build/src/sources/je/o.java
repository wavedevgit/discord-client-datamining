package je;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Collections;
import java.util.List;
import ne.w0;
import ni.s;
import qd.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o implements com.google.android.exoplayer2.g {

    /* renamed from: i  reason: collision with root package name */
    private static final String f29906i = w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f29907o = w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f29908p = new g.a() { // from class: je.n
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return o.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final u0 f29909d;

    /* renamed from: e  reason: collision with root package name */
    public final s f29910e;

    public o(u0 u0Var, List list) {
        if (!list.isEmpty() && (((Integer) Collections.min(list)).intValue() < 0 || ((Integer) Collections.max(list)).intValue() >= u0Var.f46924d)) {
            throw new IndexOutOfBoundsException();
        }
        this.f29909d = u0Var;
        this.f29910e = s.o(list);
    }

    public static /* synthetic */ o a(Bundle bundle) {
        return new o((u0) u0.f46923s.a((Bundle) ne.a.e(bundle.getBundle(f29906i))), pi.e.c((int[]) ne.a.e(bundle.getIntArray(f29907o))));
    }

    public int b() {
        return this.f29909d.f46926i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (this.f29909d.equals(oVar.f29909d) && this.f29910e.equals(oVar.f29910e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f29909d.hashCode() + (this.f29910e.hashCode() * 31);
    }
}
