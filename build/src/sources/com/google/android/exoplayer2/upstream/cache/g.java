package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.util.ArrayList;
import java.util.TreeSet;
import oe.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public final int f14069a;

    /* renamed from: b  reason: collision with root package name */
    public final String f14070b;

    /* renamed from: c  reason: collision with root package name */
    private final TreeSet f14071c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f14072d;

    /* renamed from: e  reason: collision with root package name */
    private ne.f f14073e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f14074a;

        /* renamed from: b  reason: collision with root package name */
        public final long f14075b;

        public a(long j10, long j11) {
            this.f14074a = j10;
            this.f14075b = j11;
        }

        public boolean a(long j10, long j11) {
            long j12 = this.f14075b;
            if (j12 == -1) {
                if (j10 >= this.f14074a) {
                    return true;
                }
                return false;
            } else if (j11 == -1) {
                return false;
            } else {
                long j13 = this.f14074a;
                if (j13 <= j10 && j10 + j11 <= j13 + j12) {
                    return true;
                }
                return false;
            }
        }

        public boolean b(long j10, long j11) {
            long j12 = this.f14074a;
            if (j12 <= j10) {
                long j13 = this.f14075b;
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
        this(i10, str, ne.f.f37185c);
    }

    public void a(j jVar) {
        this.f14071c.add(jVar);
    }

    public boolean b(ne.e eVar) {
        ne.f fVar = this.f14073e;
        ne.f g10 = fVar.g(eVar);
        this.f14073e = g10;
        return !g10.equals(fVar);
    }

    public ne.f c() {
        return this.f14073e;
    }

    public j d(long j10, long j11) {
        j k10 = j.k(this.f14070b, j10);
        j jVar = (j) this.f14071c.floor(k10);
        if (jVar != null && jVar.f37178e + jVar.f37179i > j10) {
            return jVar;
        }
        j jVar2 = (j) this.f14071c.ceiling(k10);
        if (jVar2 != null) {
            long j12 = jVar2.f37178e - j10;
            if (j11 == -1) {
                j11 = j12;
            } else {
                j11 = Math.min(j12, j11);
            }
        }
        return j.i(this.f14070b, j10, j11);
    }

    public TreeSet e() {
        return this.f14071c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (this.f14069a == gVar.f14069a && this.f14070b.equals(gVar.f14070b) && this.f14071c.equals(gVar.f14071c) && this.f14073e.equals(gVar.f14073e)) {
                return true;
            }
        }
        return false;
    }

    public boolean f() {
        return this.f14071c.isEmpty();
    }

    public boolean g(long j10, long j11) {
        for (int i10 = 0; i10 < this.f14072d.size(); i10++) {
            if (((a) this.f14072d.get(i10)).a(j10, j11)) {
                return true;
            }
        }
        return false;
    }

    public boolean h() {
        return this.f14072d.isEmpty();
    }

    public int hashCode() {
        return (((this.f14069a * 31) + this.f14070b.hashCode()) * 31) + this.f14073e.hashCode();
    }

    public boolean i(long j10, long j11) {
        for (int i10 = 0; i10 < this.f14072d.size(); i10++) {
            if (((a) this.f14072d.get(i10)).b(j10, j11)) {
                return false;
            }
        }
        this.f14072d.add(new a(j10, j11));
        return true;
    }

    public boolean j(ne.c cVar) {
        if (this.f14071c.remove(cVar)) {
            File file = cVar.f37181p;
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
        oe.a.g(this.f14071c.remove(jVar));
        File file = (File) oe.a.e(jVar.f37181p);
        if (z10) {
            j11 = j10;
            File l10 = j.l((File) oe.a.e(file.getParentFile()), this.f14069a, jVar.f37178e, j11);
            if (file.renameTo(l10)) {
                file = l10;
            } else {
                y.i("CachedContent", "Failed to rename " + file + " to " + l10);
            }
        } else {
            j11 = j10;
        }
        j f10 = jVar.f(file, j11);
        this.f14071c.add(f10);
        return f10;
    }

    public void l(long j10) {
        for (int i10 = 0; i10 < this.f14072d.size(); i10++) {
            if (((a) this.f14072d.get(i10)).f14074a == j10) {
                this.f14072d.remove(i10);
                return;
            }
        }
        throw new IllegalStateException();
    }

    public g(int i10, String str, ne.f fVar) {
        this.f14069a = i10;
        this.f14070b = str;
        this.f14073e = fVar;
        this.f14071c = new TreeSet();
        this.f14072d = new ArrayList();
    }
}
