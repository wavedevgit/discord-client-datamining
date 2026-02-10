package ke;

import com.google.android.exoplayer2.Tracks;
import mc.r0;
import oe.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f30864a;

    /* renamed from: b  reason: collision with root package name */
    public final r0[] f30865b;

    /* renamed from: c  reason: collision with root package name */
    public final com.google.android.exoplayer2.trackselection.g[] f30866c;

    /* renamed from: d  reason: collision with root package name */
    public final Tracks f30867d;

    /* renamed from: e  reason: collision with root package name */
    public final Object f30868e;

    public r(r0[] r0VarArr, com.google.android.exoplayer2.trackselection.g[] gVarArr, Tracks tracks, Object obj) {
        this.f30865b = r0VarArr;
        this.f30866c = (com.google.android.exoplayer2.trackselection.g[]) gVarArr.clone();
        this.f30867d = tracks;
        this.f30868e = obj;
        this.f30864a = r0VarArr.length;
    }

    public boolean a(r rVar) {
        if (rVar == null || rVar.f30866c.length != this.f30866c.length) {
            return false;
        }
        for (int i10 = 0; i10 < this.f30866c.length; i10++) {
            if (!b(rVar, i10)) {
                return false;
            }
        }
        return true;
    }

    public boolean b(r rVar, int i10) {
        if (rVar == null || !w0.c(this.f30865b[i10], rVar.f30865b[i10]) || !w0.c(this.f30866c[i10], rVar.f30866c[i10])) {
            return false;
        }
        return true;
    }

    public boolean c(int i10) {
        if (this.f30865b[i10] != null) {
            return true;
        }
        return false;
    }
}
