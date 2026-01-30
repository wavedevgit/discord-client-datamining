package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.util.ArrayList;
import java.util.TreeSet;
import ne.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public final int f14433a;

    /* renamed from: b  reason: collision with root package name */
    public final String f14434b;

    /* renamed from: c  reason: collision with root package name */
    private final TreeSet f14435c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f14436d;

    /* renamed from: e  reason: collision with root package name */
    private me.f f14437e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f14438a;

        /* renamed from: b  reason: collision with root package name */
        public final long f14439b;

        public a(long j10, long j11) {
            this.f14438a = j10;
            this.f14439b = j11;
        }

        public boolean a(long j10, long j11) {
            long j12 = this.f14439b;
            if (j12 == -1) {
                if (j10 >= this.f14438a) {
                    return true;
                }
                return false;
            } else if (j11 == -1) {
                return false;
            } else {
                long j13 = this.f14438a;
                if (j13 <= j10 && j10 + j11 <= j13 + j12) {
                    return true;
                }
                return false;
            }
        }

        public boolean b(long j10, long j11) {
            long j12 = this.f14438a;
            if (j12 <= j10) {
                long j13 = this.f14439b;
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
        this(i10, str, me.f.f38053c);
    }

    public void a(j jVar) {
        this.f14435c.add(jVar);
    }

    public boolean b(me.e eVar) {
        me.f fVar = this.f14437e;
        me.f g10 = fVar.g(eVar);
        this.f14437e = g10;
        return !g10.equals(fVar);
    }

    public me.f c() {
        return this.f14437e;
    }

    public j d(long j10, long j11) {
        j j12 = j.j(this.f14434b, j10);
        j jVar = (j) this.f14435c.floor(j12);
        if (jVar != null && jVar.f38046e + jVar.f38047i > j10) {
            return jVar;
        }
        j jVar2 = (j) this.f14435c.ceiling(j12);
        if (jVar2 != null) {
            long j13 = jVar2.f38046e - j10;
            if (j11 == -1) {
                j11 = j13;
            } else {
                j11 = Math.min(j13, j11);
            }
        }
        return j.i(this.f14434b, j10, j11);
    }

    public TreeSet e() {
        return this.f14435c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (this.f14433a == gVar.f14433a && this.f14434b.equals(gVar.f14434b) && this.f14435c.equals(gVar.f14435c) && this.f14437e.equals(gVar.f14437e)) {
                return true;
            }
        }
        return false;
    }

    public boolean f() {
        return this.f14435c.isEmpty();
    }

    public boolean g(long j10, long j11) {
        for (int i10 = 0; i10 < this.f14436d.size(); i10++) {
            if (((a) this.f14436d.get(i10)).a(j10, j11)) {
                return true;
            }
        }
        return false;
    }

    public boolean h() {
        return this.f14436d.isEmpty();
    }

    public int hashCode() {
        return (((this.f14433a * 31) + this.f14434b.hashCode()) * 31) + this.f14437e.hashCode();
    }

    public boolean i(long j10, long j11) {
        for (int i10 = 0; i10 < this.f14436d.size(); i10++) {
            if (((a) this.f14436d.get(i10)).b(j10, j11)) {
                return false;
            }
        }
        this.f14436d.add(new a(j10, j11));
        return true;
    }

    public boolean j(me.c cVar) {
        if (this.f14435c.remove(cVar)) {
            File file = cVar.f38049p;
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
        ne.a.g(this.f14435c.remove(jVar));
        File file = (File) ne.a.e(jVar.f38049p);
        if (z10) {
            j11 = j10;
            File k10 = j.k((File) ne.a.e(file.getParentFile()), this.f14433a, jVar.f38046e, j11);
            if (file.renameTo(k10)) {
                file = k10;
            } else {
                y.i("CachedContent", "Failed to rename " + file + " to " + k10);
            }
        } else {
            j11 = j10;
        }
        j f10 = jVar.f(file, j11);
        this.f14435c.add(f10);
        return f10;
    }

    public void l(long j10) {
        for (int i10 = 0; i10 < this.f14436d.size(); i10++) {
            if (((a) this.f14436d.get(i10)).f14438a == j10) {
                this.f14436d.remove(i10);
                return;
            }
        }
        throw new IllegalStateException();
    }

    public g(int i10, String str, me.f fVar) {
        this.f14433a = i10;
        this.f14434b = str;
        this.f14437e = fVar;
        this.f14435c = new TreeSet();
        this.f14436d = new ArrayList();
    }
}
