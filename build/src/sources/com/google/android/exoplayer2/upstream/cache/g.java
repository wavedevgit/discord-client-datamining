package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.util.ArrayList;
import java.util.TreeSet;
import oe.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public final int f13492a;

    /* renamed from: b  reason: collision with root package name */
    public final String f13493b;

    /* renamed from: c  reason: collision with root package name */
    private final TreeSet f13494c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f13495d;

    /* renamed from: e  reason: collision with root package name */
    private ne.f f13496e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f13497a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13498b;

        public a(long j10, long j11) {
            this.f13497a = j10;
            this.f13498b = j11;
        }

        public boolean a(long j10, long j11) {
            long j12 = this.f13498b;
            if (j12 == -1) {
                if (j10 >= this.f13497a) {
                    return true;
                }
                return false;
            } else if (j11 == -1) {
                return false;
            } else {
                long j13 = this.f13497a;
                if (j13 <= j10 && j10 + j11 <= j13 + j12) {
                    return true;
                }
                return false;
            }
        }

        public boolean b(long j10, long j11) {
            long j12 = this.f13497a;
            if (j12 <= j10) {
                long j13 = this.f13498b;
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
        this(i10, str, ne.f.f38181c);
    }

    public void a(j jVar) {
        this.f13494c.add(jVar);
    }

    public boolean b(ne.e eVar) {
        ne.f fVar = this.f13496e;
        ne.f g10 = fVar.g(eVar);
        this.f13496e = g10;
        return !g10.equals(fVar);
    }

    public ne.f c() {
        return this.f13496e;
    }

    public j d(long j10, long j11) {
        j k10 = j.k(this.f13493b, j10);
        j jVar = (j) this.f13494c.floor(k10);
        if (jVar != null && jVar.f38174e + jVar.f38175i > j10) {
            return jVar;
        }
        j jVar2 = (j) this.f13494c.ceiling(k10);
        if (jVar2 != null) {
            long j12 = jVar2.f38174e - j10;
            if (j11 == -1) {
                j11 = j12;
            } else {
                j11 = Math.min(j12, j11);
            }
        }
        return j.i(this.f13493b, j10, j11);
    }

    public TreeSet e() {
        return this.f13494c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (this.f13492a == gVar.f13492a && this.f13493b.equals(gVar.f13493b) && this.f13494c.equals(gVar.f13494c) && this.f13496e.equals(gVar.f13496e)) {
                return true;
            }
        }
        return false;
    }

    public boolean f() {
        return this.f13494c.isEmpty();
    }

    public boolean g(long j10, long j11) {
        for (int i10 = 0; i10 < this.f13495d.size(); i10++) {
            if (((a) this.f13495d.get(i10)).a(j10, j11)) {
                return true;
            }
        }
        return false;
    }

    public boolean h() {
        return this.f13495d.isEmpty();
    }

    public int hashCode() {
        return (((this.f13492a * 31) + this.f13493b.hashCode()) * 31) + this.f13496e.hashCode();
    }

    public boolean i(long j10, long j11) {
        for (int i10 = 0; i10 < this.f13495d.size(); i10++) {
            if (((a) this.f13495d.get(i10)).b(j10, j11)) {
                return false;
            }
        }
        this.f13495d.add(new a(j10, j11));
        return true;
    }

    public boolean j(ne.c cVar) {
        if (this.f13494c.remove(cVar)) {
            File file = cVar.f38177p;
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
        oe.a.g(this.f13494c.remove(jVar));
        File file = (File) oe.a.e(jVar.f38177p);
        if (z10) {
            j11 = j10;
            File l10 = j.l((File) oe.a.e(file.getParentFile()), this.f13492a, jVar.f38174e, j11);
            if (file.renameTo(l10)) {
                file = l10;
            } else {
                y.i("CachedContent", "Failed to rename " + file + " to " + l10);
            }
        } else {
            j11 = j10;
        }
        j f10 = jVar.f(file, j11);
        this.f13494c.add(f10);
        return f10;
    }

    public void l(long j10) {
        for (int i10 = 0; i10 < this.f13495d.size(); i10++) {
            if (((a) this.f13495d.get(i10)).f13497a == j10) {
                this.f13495d.remove(i10);
                return;
            }
        }
        throw new IllegalStateException();
    }

    public g(int i10, String str, ne.f fVar) {
        this.f13492a = i10;
        this.f13493b = str;
        this.f13496e = fVar;
        this.f13494c = new TreeSet();
        this.f13495d = new ArrayList();
    }
}
