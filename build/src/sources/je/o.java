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
    private static final String f29858i = w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f29859o = w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f29860p = new g.a() { // from class: je.n
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return o.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final u0 f29861d;

    /* renamed from: e  reason: collision with root package name */
    public final s f29862e;

    public o(u0 u0Var, List list) {
        if (!list.isEmpty() && (((Integer) Collections.min(list)).intValue() < 0 || ((Integer) Collections.max(list)).intValue() >= u0Var.f46876d)) {
            throw new IndexOutOfBoundsException();
        }
        this.f29861d = u0Var;
        this.f29862e = s.o(list);
    }

    public static /* synthetic */ o a(Bundle bundle) {
        return new o((u0) u0.f46875s.a((Bundle) ne.a.e(bundle.getBundle(f29858i))), pi.e.c((int[]) ne.a.e(bundle.getIntArray(f29859o))));
    }

    public int b() {
        return this.f29861d.f46878i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (this.f29861d.equals(oVar.f29861d) && this.f29862e.equals(oVar.f29862e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f29861d.hashCode() + (this.f29862e.hashCode() * 31);
    }
}
