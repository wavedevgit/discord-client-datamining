package ne;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f37177d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37178e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37179i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f37180o;

    /* renamed from: p  reason: collision with root package name */
    public final File f37181p;

    /* renamed from: q  reason: collision with root package name */
    public final long f37182q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f37177d = str;
        this.f37178e = j10;
        this.f37179i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f37180o = z10;
        this.f37181p = file;
        this.f37182q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f37177d.equals(cVar.f37177d)) {
            return this.f37177d.compareTo(cVar.f37177d);
        }
        int i10 = ((this.f37178e - cVar.f37178e) > 0L ? 1 : ((this.f37178e - cVar.f37178e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f37180o;
    }

    public boolean e() {
        if (this.f37179i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f37178e + ", " + this.f37179i + "]";
    }
}
