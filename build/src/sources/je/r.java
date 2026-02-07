package je;

import com.google.android.exoplayer2.Tracks;
import lc.r0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f29913a;

    /* renamed from: b  reason: collision with root package name */
    public final r0[] f29914b;

    /* renamed from: c  reason: collision with root package name */
    public final com.google.android.exoplayer2.trackselection.g[] f29915c;

    /* renamed from: d  reason: collision with root package name */
    public final Tracks f29916d;

    /* renamed from: e  reason: collision with root package name */
    public final Object f29917e;

    public r(r0[] r0VarArr, com.google.android.exoplayer2.trackselection.g[] gVarArr, Tracks tracks, Object obj) {
        this.f29914b = r0VarArr;
        this.f29915c = (com.google.android.exoplayer2.trackselection.g[]) gVarArr.clone();
        this.f29916d = tracks;
        this.f29917e = obj;
        this.f29913a = r0VarArr.length;
    }

    public boolean a(r rVar) {
        if (rVar == null || rVar.f29915c.length != this.f29915c.length) {
            return false;
        }
        for (int i10 = 0; i10 < this.f29915c.length; i10++) {
            if (!b(rVar, i10)) {
                return false;
            }
        }
        return true;
    }

    public boolean b(r rVar, int i10) {
        if (rVar == null || !w0.c(this.f29914b[i10], rVar.f29914b[i10]) || !w0.c(this.f29915c[i10], rVar.f29915c[i10])) {
            return false;
        }
        return true;
    }

    public boolean c(int i10) {
        if (this.f29914b[i10] != null) {
            return true;
        }
        return false;
    }
}
