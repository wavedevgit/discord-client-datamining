package ne;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f37178d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37179e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37180i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f37181o;

    /* renamed from: p  reason: collision with root package name */
    public final File f37182p;

    /* renamed from: q  reason: collision with root package name */
    public final long f37183q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f37178d = str;
        this.f37179e = j10;
        this.f37180i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f37181o = z10;
        this.f37182p = file;
        this.f37183q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f37178d.equals(cVar.f37178d)) {
            return this.f37178d.compareTo(cVar.f37178d);
        }
        int i10 = ((this.f37179e - cVar.f37179e) > 0L ? 1 : ((this.f37179e - cVar.f37179e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f37181o;
    }

    public boolean e() {
        if (this.f37180i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f37179e + ", " + this.f37180i + "]";
    }
}
