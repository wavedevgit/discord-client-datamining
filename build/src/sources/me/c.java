package me;

import java.io.File;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    public final String f37822d;

    /* renamed from: e  reason: collision with root package name */
    public final long f37823e;

    /* renamed from: i  reason: collision with root package name */
    public final long f37824i;

    /* renamed from: o  reason: collision with root package name */
    public final boolean f37825o;

    /* renamed from: p  reason: collision with root package name */
    public final File f37826p;

    /* renamed from: q  reason: collision with root package name */
    public final long f37827q;

    public c(String str, long j10, long j11, long j12, File file) {
        boolean z10;
        this.f37822d = str;
        this.f37823e = j10;
        this.f37824i = j11;
        if (file != null) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f37825o = z10;
        this.f37826p = file;
        this.f37827q = j12;
    }

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        if (!this.f37822d.equals(cVar.f37822d)) {
            return this.f37822d.compareTo(cVar.f37822d);
        }
        int i10 = ((this.f37823e - cVar.f37823e) > 0L ? 1 : ((this.f37823e - cVar.f37823e) == 0L ? 0 : -1));
        if (i10 == 0) {
            return 0;
        }
        if (i10 < 0) {
            return -1;
        }
        return 1;
    }

    public boolean d() {
        return !this.f37825o;
    }

    public boolean e() {
        if (this.f37824i == -1) {
            return true;
        }
        return false;
    }

    public String toString() {
        return "[" + this.f37823e + ", " + this.f37824i + "]";
    }
}
