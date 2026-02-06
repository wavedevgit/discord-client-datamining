package me;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f37066d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37067e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37068i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f37069o;

    /* renamed from: p  reason: collision with root package name */
    public final File f37070p;

    /* renamed from: q  reason: collision with root package name */
    public final long f37071q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f37066d = str;
        this.f37067e = j10;
        this.f37068i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f37069o = z10;
        this.f37070p = file;
        this.f37071q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f37066d.equals(cVar.f37066d)) {
            return this.f37066d.compareTo(cVar.f37066d);
        }
        int i10 = ((this.f37067e - cVar.f37067e) > 0L ? 1 : ((this.f37067e - cVar.f37067e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f37069o;
    }

    public boolean e() {
        if (this.f37068i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f37067e + ", " + this.f37068i + "]";
    }
}
