package je;

import com.google.android.exoplayer2.Tracks;
import lc.r0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f29865a;

    /* renamed from: b  reason: collision with root package name */
    public final r0[] f29866b;

    /* renamed from: c  reason: collision with root package name */
    public final com.google.android.exoplayer2.trackselection.g[] f29867c;

    /* renamed from: d  reason: collision with root package name */
    public final Tracks f29868d;

    /* renamed from: e  reason: collision with root package name */
    public final Object f29869e;

    public r(r0[] r0VarArr, com.google.android.exoplayer2.trackselection.g[] gVarArr, Tracks tracks, Object obj) {
        this.f29866b = r0VarArr;
        this.f29867c = (com.google.android.exoplayer2.trackselection.g[]) gVarArr.clone();
        this.f29868d = tracks;
        this.f29869e = obj;
        this.f29865a = r0VarArr.length;
    }

    public boolean a(r rVar) {
        if (rVar == null || rVar.f29867c.length != this.f29867c.length) {
            return false;
        }
        for (int i10 = 0; i10 < this.f29867c.length; i10++) {
            if (!b(rVar, i10)) {
                return false;
            }
        }
        return true;
    }

    public boolean b(r rVar, int i10) {
        if (rVar == null || !w0.c(this.f29866b[i10], rVar.f29866b[i10]) || !w0.c(this.f29867c[i10], rVar.f29867c[i10])) {
            return false;
        }
        return true;
    }

    public boolean c(int i10) {
        if (this.f29866b[i10] != null) {
            return true;
        }
        return false;
    }
}
