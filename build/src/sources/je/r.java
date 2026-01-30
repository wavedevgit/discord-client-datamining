package je;

import com.google.android.exoplayer2.Tracks;
import lc.r0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f32009a;

    /* renamed from: b  reason: collision with root package name */
    public final r0[] f32010b;

    /* renamed from: c  reason: collision with root package name */
    public final com.google.android.exoplayer2.trackselection.g[] f32011c;

    /* renamed from: d  reason: collision with root package name */
    public final Tracks f32012d;

    /* renamed from: e  reason: collision with root package name */
    public final Object f32013e;

    public r(r0[] r0VarArr, com.google.android.exoplayer2.trackselection.g[] gVarArr, Tracks tracks, Object obj) {
        this.f32010b = r0VarArr;
        this.f32011c = (com.google.android.exoplayer2.trackselection.g[]) gVarArr.clone();
        this.f32012d = tracks;
        this.f32013e = obj;
        this.f32009a = r0VarArr.length;
    }

    public boolean a(r rVar) {
        if (rVar == null || rVar.f32011c.length != this.f32011c.length) {
            return false;
        }
        for (int i10 = 0; i10 < this.f32011c.length; i10++) {
            if (!b(rVar, i10)) {
                return false;
            }
        }
        return true;
    }

    public boolean b(r rVar, int i10) {
        if (rVar == null || !w0.c(this.f32010b[i10], rVar.f32010b[i10]) || !w0.c(this.f32011c[i10], rVar.f32011c[i10])) {
            return false;
        }
        return true;
    }

    public boolean c(int i10) {
        if (this.f32010b[i10] != null) {
            return true;
        }
        return false;
    }
}
