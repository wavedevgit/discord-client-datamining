package me;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f38045d;

    /* renamed from: e  reason: collision with root package name */
    public final long f38046e;

    /* renamed from: i  reason: collision with root package name */
    public final long f38047i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f38048o;

    /* renamed from: p  reason: collision with root package name */
    public final File f38049p;

    /* renamed from: q  reason: collision with root package name */
    public final long f38050q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f38045d = str;
        this.f38046e = j10;
        this.f38047i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f38048o = z10;
        this.f38049p = file;
        this.f38050q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f38045d.equals(cVar.f38045d)) {
            return this.f38045d.compareTo(cVar.f38045d);
        }
        int i10 = ((this.f38046e - cVar.f38046e) > 0L ? 1 : ((this.f38046e - cVar.f38046e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f38048o;
    }

    public boolean e() {
        if (this.f38047i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f38046e + ", " + this.f38047i + "]";
    }
}
