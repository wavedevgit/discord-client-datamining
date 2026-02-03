package je;

import com.google.android.exoplayer2.Tracks;
import lc.r0;
import ne.w0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class r {

    /* renamed from: a  reason: collision with root package name */
    public final int f31543a;

    /* renamed from: b  reason: collision with root package name */
    public final r0[] f31544b;

    /* renamed from: c  reason: collision with root package name */
    public final com.google.android.exoplayer2.trackselection.g[] f31545c;

    /* renamed from: d  reason: collision with root package name */
    public final Tracks f31546d;

    /* renamed from: e  reason: collision with root package name */
    public final Object f31547e;

    public r(r0[] r0VarArr, com.google.android.exoplayer2.trackselection.g[] gVarArr, Tracks tracks, Object obj) {
        this.f31544b = r0VarArr;
        this.f31545c = (com.google.android.exoplayer2.trackselection.g[]) gVarArr.clone();
        this.f31546d = tracks;
        this.f31547e = obj;
        this.f31543a = r0VarArr.length;
    }

    public boolean a(r rVar) {
        if (rVar == null || rVar.f31545c.length != this.f31545c.length) {
            return false;
        }
        for (int i10 = 0; i10 < this.f31545c.length; i10++) {
            if (!b(rVar, i10)) {
                return false;
            }
        }
        return true;
    }

    public boolean b(r rVar, int i10) {
        if (rVar == null || !w0.c(this.f31544b[i10], rVar.f31544b[i10]) || !w0.c(this.f31545c[i10], rVar.f31545c[i10])) {
            return false;
        }
        return true;
    }

    public boolean c(int i10) {
        if (this.f31544b[i10] != null) {
            return true;
        }
        return false;
    }
}
