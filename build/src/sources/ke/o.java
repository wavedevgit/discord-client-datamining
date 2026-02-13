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
    private static final String f32284i = w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f32285o = w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f32286p = new g.a() { // from class: ke.n
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return o.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final u0 f32287d;

    /* renamed from: e  reason: collision with root package name */
    public final s f32288e;

    public o(u0 u0Var, List list) {
        if (!list.isEmpty() && (((Integer) Collections.min(list)).intValue() < 0 || ((Integer) Collections.max(list)).intValue() >= u0Var.f47065d)) {
            throw new IndexOutOfBoundsException();
        }
        this.f32287d = u0Var;
        this.f32288e = s.o(list);
    }

    public static /* synthetic */ o a(Bundle bundle) {
        return new o((u0) u0.f47064s.a((Bundle) oe.a.e(bundle.getBundle(f32284i))), si.e.c((int[]) oe.a.e(bundle.getIntArray(f32285o))));
    }

    public int b() {
        return this.f32287d.f47067i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (this.f32287d.equals(oVar.f32287d) && this.f32288e.equals(oVar.f32288e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f32287d.hashCode() + (this.f32288e.hashCode() * 31);
    }
}
