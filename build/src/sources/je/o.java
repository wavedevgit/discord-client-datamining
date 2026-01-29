package je;

import android.os.Bundle;
import com.google.android.exoplayer2.g;
import java.util.Collections;
import java.util.List;
import ji.s;
import ne.w0;
import qd.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o implements com.google.android.exoplayer2.g {

    /* renamed from: i  reason: collision with root package name */
    private static final String f31986i = w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f31987o = w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f31988p = new g.a() { // from class: je.n
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return o.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final u0 f31989d;

    /* renamed from: e  reason: collision with root package name */
    public final s f31990e;

    public o(u0 u0Var, List list) {
        if (!list.isEmpty() && (((Integer) Collections.min(list)).intValue() < 0 || ((Integer) Collections.max(list)).intValue() >= u0Var.f47343d)) {
            throw new IndexOutOfBoundsException();
        }
        this.f31989d = u0Var;
        this.f31990e = s.m(list);
    }

    public static /* synthetic */ o a(Bundle bundle) {
        return new o((u0) u0.f47342s.a((Bundle) ne.a.e(bundle.getBundle(f31986i))), li.e.c((int[]) ne.a.e(bundle.getIntArray(f31987o))));
    }

    public int b() {
        return this.f31989d.f47345i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (this.f31989d.equals(oVar.f31989d) && this.f31990e.equals(oVar.f31990e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f31989d.hashCode() + (this.f31990e.hashCode() * 31);
    }
}
