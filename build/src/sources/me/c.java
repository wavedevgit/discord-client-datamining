package me;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f37114d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37115e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37116i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f37117o;

    /* renamed from: p  reason: collision with root package name */
    public final File f37118p;

    /* renamed from: q  reason: collision with root package name */
    public final long f37119q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f37114d = str;
        this.f37115e = j10;
        this.f37116i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f37117o = z10;
        this.f37118p = file;
        this.f37119q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f37114d.equals(cVar.f37114d)) {
            return this.f37114d.compareTo(cVar.f37114d);
        }
        int i10 = ((this.f37115e - cVar.f37115e) > 0L ? 1 : ((this.f37115e - cVar.f37115e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f37117o;
    }

    public boolean e() {
        if (this.f37116i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f37115e + ", " + this.f37116i + "]";
    }
}
