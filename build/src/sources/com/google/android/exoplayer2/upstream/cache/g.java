package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.util.ArrayList;
import java.util.TreeSet;
import oe.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public final int f14070a;

    /* renamed from: b  reason: collision with root package name */
    public final String f14071b;

    /* renamed from: c  reason: collision with root package name */
    private final TreeSet f14072c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f14073d;

    /* renamed from: e  reason: collision with root package name */
    private ne.f f14074e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f14075a;

        /* renamed from: b  reason: collision with root package name */
        public final long f14076b;

        public a(long j10, long j11) {
            this.f14075a = j10;
            this.f14076b = j11;
        }

        public boolean a(long j10, long j11) {
            long j12 = this.f14076b;
            if (j12 == -1) {
                if (j10 >= this.f14075a) {
                    return true;
                }
                return false;
            } else if (j11 == -1) {
                return false;
            } else {
                long j13 = this.f14075a;
                if (j13 <= j10 && j10 + j11 <= j13 + j12) {
                    return true;
                }
                return false;
            }
        }

        public boolean b(long j10, long j11) {
            long j12 = this.f14075a;
            if (j12 <= j10) {
                long j13 = this.f14076b;
                if (j13 == -1 || j12 + j13 > j10) {
                    return true;
                }
                return false;
            } else if (j11 == -1 || j10 + j11 > j12) {
                return true;
            } else {
                return false;
            }
        }
    }

    public g(int i10, String str) {
        this(i10, str, ne.f.f37186c);
    }

    public void a(j jVar) {
        this.f14072c.add(jVar);
    }

    public boolean b(ne.e eVar) {
        ne.f fVar = this.f14074e;
        ne.f g10 = fVar.g(eVar);
        this.f14074e = g10;
        return !g10.equals(fVar);
    }

    public ne.f c() {
        return this.f14074e;
    }

    public j d(long j10, long j11) {
        j k10 = j.k(this.f14071b, j10);
        j jVar = (j) this.f14072c.floor(k10);
        if (jVar != null && jVar.f37179e + jVar.f37180i > j10) {
            return jVar;
        }
        j jVar2 = (j) this.f14072c.ceiling(k10);
        if (jVar2 != null) {
            long j12 = jVar2.f37179e - j10;
            if (j11 == -1) {
                j11 = j12;
            } else {
                j11 = Math.min(j12, j11);
            }
        }
        return j.i(this.f14071b, j10, j11);
    }

    public TreeSet e() {
        return this.f14072c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (this.f14070a == gVar.f14070a && this.f14071b.equals(gVar.f14071b) && this.f14072c.equals(gVar.f14072c) && this.f14074e.equals(gVar.f14074e)) {
                return true;
            }
        }
        return false;
    }

    public boolean f() {
        return this.f14072c.isEmpty();
    }

    public boolean g(long j10, long j11) {
        for (int i10 = 0; i10 < this.f14073d.size(); i10++) {
            if (((a) this.f14073d.get(i10)).a(j10, j11)) {
                return true;
            }
        }
        return false;
    }

    public boolean h() {
        return this.f14073d.isEmpty();
    }

    public int hashCode() {
        return (((this.f14070a * 31) + this.f14071b.hashCode()) * 31) + this.f14074e.hashCode();
    }

    public boolean i(long j10, long j11) {
        for (int i10 = 0; i10 < this.f14073d.size(); i10++) {
            if (((a) this.f14073d.get(i10)).b(j10, j11)) {
                return false;
            }
        }
        this.f14073d.add(new a(j10, j11));
        return true;
    }

    public boolean j(ne.c cVar) {
        if (this.f14072c.remove(cVar)) {
            File file = cVar.f37182p;
            if (file != null) {
                file.delete();
                return true;
            }
            return true;
        }
        return false;
    }

    public j k(j jVar, long j10, boolean z10) {
        long j11;
        oe.a.g(this.f14072c.remove(jVar));
        File file = (File) oe.a.e(jVar.f37182p);
        if (z10) {
            j11 = j10;
            File l10 = j.l((File) oe.a.e(file.getParentFile()), this.f14070a, jVar.f37179e, j11);
            if (file.renameTo(l10)) {
                file = l10;
            } else {
                y.i("CachedContent", "Failed to rename " + file + " to " + l10);
            }
        } else {
            j11 = j10;
        }
        j f10 = jVar.f(file, j11);
        this.f14072c.add(f10);
        return f10;
    }

    public void l(long j10) {
        for (int i10 = 0; i10 < this.f14073d.size(); i10++) {
            if (((a) this.f14073d.get(i10)).f14075a == j10) {
                this.f14073d.remove(i10);
                return;
            }
        }
        throw new IllegalStateException();
    }

    public g(int i10, String str, ne.f fVar) {
        this.f14070a = i10;
        this.f14071b = str;
        this.f14074e = fVar;
        this.f14072c = new TreeSet();
        this.f14073d = new ArrayList();
    }
}
