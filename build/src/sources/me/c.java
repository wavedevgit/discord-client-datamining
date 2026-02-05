package me;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f37484d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37485e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37486i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f37487o;

    /* renamed from: p  reason: collision with root package name */
    public final File f37488p;

    /* renamed from: q  reason: collision with root package name */
    public final long f37489q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f37484d = str;
        this.f37485e = j10;
        this.f37486i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f37487o = z10;
        this.f37488p = file;
        this.f37489q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f37484d.equals(cVar.f37484d)) {
            return this.f37484d.compareTo(cVar.f37484d);
        }
        int i10 = ((this.f37485e - cVar.f37485e) > 0L ? 1 : ((this.f37485e - cVar.f37485e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f37487o;
    }

    public boolean e() {
        if (this.f37486i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f37485e + ", " + this.f37486i + "]";
    }
}
