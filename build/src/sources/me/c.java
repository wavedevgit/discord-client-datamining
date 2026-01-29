package me;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f38029d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38030e;

    /* renamed from: i  reason: collision with root package name */
    public final long f38031i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f38032o;

    /* renamed from: p  reason: collision with root package name */
    public final File f38033p;

    /* renamed from: q  reason: collision with root package name */
    public final long f38034q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f38029d = str;
        this.f38030e = j10;
        this.f38031i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f38032o = z10;
        this.f38033p = file;
        this.f38034q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f38029d.equals(cVar.f38029d)) {
            return this.f38029d.compareTo(cVar.f38029d);
        }
        int i10 = ((this.f38030e - cVar.f38030e) > 0L ? 1 : ((this.f38030e - cVar.f38030e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f38032o;
    }

    public boolean e() {
        if (this.f38031i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f38030e + ", " + this.f38031i + "]";
    }
}
