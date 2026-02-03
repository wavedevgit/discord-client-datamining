package je;

import com.google.android.exoplayer2.Tracks;
import lc.r0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f31747a;

    /* renamed from: b  reason: collision with root package name */
    public final r0[] f31748b;

    /* renamed from: c  reason: collision with root package name */
    public final com.google.android.exoplayer2.trackselection.g[] f31749c;

    /* renamed from: d  reason: collision with root package name */
    public final Tracks f31750d;

    /* renamed from: e  reason: collision with root package name */
    public final Object f31751e;

    public r(r0[] r0VarArr, com.google.android.exoplayer2.trackselection.g[] gVarArr, Tracks tracks, Object obj) {
        this.f31748b = r0VarArr;
        this.f31749c = (com.google.android.exoplayer2.trackselection.g[]) gVarArr.clone();
        this.f31750d = tracks;
        this.f31751e = obj;
        this.f31747a = r0VarArr.length;
    }

    public boolean a(r rVar) {
        if (rVar == null || rVar.f31749c.length != this.f31749c.length) {
            return false;
        }
        for (int i10 = 0; i10 < this.f31749c.length; i10++) {
            if (!b(rVar, i10)) {
                return false;
            }
        }
        return true;
    }

    public boolean b(r rVar, int i10) {
        if (rVar == null || !w0.c(this.f31748b[i10], rVar.f31748b[i10]) || !w0.c(this.f31749c[i10], rVar.f31749c[i10])) {
            return false;
        }
        return true;
    }

    public boolean c(int i10) {
        if (this.f31748b[i10] != null) {
            return true;
        }
        return false;
    }
}
