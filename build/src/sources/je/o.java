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
    private static final String f31536i = w0.B0(0);

    /* renamed from: o  reason: collision with root package name */
    private static final String f31537o = w0.B0(1);

    /* renamed from: p  reason: collision with root package name */
    public static final g.a f31538p = new g.a() { // from class: je.n
        @Override // com.google.android.exoplayer2.g.a
        public final com.google.android.exoplayer2.g a(Bundle bundle) {
            return o.a(bundle);
        }
    };

    /* renamed from: d  reason: collision with root package name */
    public final u0 f31539d;

    /* renamed from: e  reason: collision with root package name */
    public final s f31540e;

    public o(u0 u0Var, List list) {
        if (!list.isEmpty() && (((Integer) Collections.min(list)).intValue() < 0 || ((Integer) Collections.max(list)).intValue() >= u0Var.f47764d)) {
            throw new IndexOutOfBoundsException();
        }
        this.f31539d = u0Var;
        this.f31540e = s.m(list);
    }

    public static /* synthetic */ o a(Bundle bundle) {
        return new o((u0) u0.f47763s.a((Bundle) ne.a.e(bundle.getBundle(f31536i))), li.e.c((int[]) ne.a.e(bundle.getIntArray(f31537o))));
    }

    public int b() {
        return this.f31539d.f47766i;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && o.class == obj.getClass()) {
            o oVar = (o) obj;
            if (this.f31539d.equals(oVar.f31539d) && this.f31540e.equals(oVar.f31540e)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        return this.f31539d.hashCode() + (this.f31540e.hashCode() * 31);
    }
}
