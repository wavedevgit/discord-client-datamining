package ne;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f38173d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38174e;

    /* renamed from: i  reason: collision with root package name */
    public final long f38175i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f38176o;

    /* renamed from: p  reason: collision with root package name */
    public final File f38177p;

    /* renamed from: q  reason: collision with root package name */
    public final long f38178q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f38173d = str;
        this.f38174e = j10;
        this.f38175i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f38176o = z10;
        this.f38177p = file;
        this.f38178q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f38173d.equals(cVar.f38173d)) {
            return this.f38173d.compareTo(cVar.f38173d);
        }
        int i10 = ((this.f38174e - cVar.f38174e) > 0L ? 1 : ((this.f38174e - cVar.f38174e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f38176o;
    }

    public boolean e() {
        if (this.f38175i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f38174e + ", " + this.f38175i + "]";
    }
}
