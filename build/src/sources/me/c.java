package me;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f38025d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38026e;

    /* renamed from: i  reason: collision with root package name */
    public final long f38027i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f38028o;

    /* renamed from: p  reason: collision with root package name */
    public final File f38029p;

    /* renamed from: q  reason: collision with root package name */
    public final long f38030q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f38025d = str;
        this.f38026e = j10;
        this.f38027i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f38028o = z10;
        this.f38029p = file;
        this.f38030q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f38025d.equals(cVar.f38025d)) {
            return this.f38025d.compareTo(cVar.f38025d);
        }
        int i10 = ((this.f38026e - cVar.f38026e) > 0L ? 1 : ((this.f38026e - cVar.f38026e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f38028o;
    }

    public boolean e() {
        if (this.f38027i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f38026e + ", " + this.f38027i + "]";
    }
}
