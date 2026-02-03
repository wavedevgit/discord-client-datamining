package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.util.ArrayList;
import java.util.TreeSet;
import ne.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public final int f14062a;

    /* renamed from: b  reason: collision with root package name */
    public final String f14063b;

    /* renamed from: c  reason: collision with root package name */
    private final TreeSet f14064c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f14065d;

    /* renamed from: e  reason: collision with root package name */
    private me.f f14066e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f14067a;

        /* renamed from: b  reason: collision with root package name */
        public final long f14068b;

        public a(long j10, long j11) {
            this.f14067a = j10;
            this.f14068b = j11;
        }

        public boolean a(long j10, long j11) {
            long j12 = this.f14068b;
            if (j12 == -1) {
                if (j10 >= this.f14067a) {
                    return true;
                }
                return false;
            } else if (j11 == -1) {
                return false;
            } else {
                long j13 = this.f14067a;
                if (j13 <= j10 && j10 + j11 <= j13 + j12) {
                    return true;
                }
                return false;
            }
        }

        public boolean b(long j10, long j11) {
            long j12 = this.f14067a;
            if (j12 <= j10) {
                long j13 = this.f14068b;
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
        this(i10, str, me.f.f38033c);
    }

    public void a(j jVar) {
        this.f14064c.add(jVar);
    }

    public boolean b(me.e eVar) {
        me.f fVar = this.f14066e;
        me.f g10 = fVar.g(eVar);
        this.f14066e = g10;
        return !g10.equals(fVar);
    }

    public me.f c() {
        return this.f14066e;
    }

    public j d(long j10, long j11) {
        j k10 = j.k(this.f14063b, j10);
        j jVar = (j) this.f14064c.floor(k10);
        if (jVar != null && jVar.f38026e + jVar.f38027i > j10) {
            return jVar;
        }
        j jVar2 = (j) this.f14064c.ceiling(k10);
        if (jVar2 != null) {
            long j12 = jVar2.f38026e - j10;
            if (j11 == -1) {
                j11 = j12;
            } else {
                j11 = Math.min(j12, j11);
            }
        }
        return j.i(this.f14063b, j10, j11);
    }

    public TreeSet e() {
        return this.f14064c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (this.f14062a == gVar.f14062a && this.f14063b.equals(gVar.f14063b) && this.f14064c.equals(gVar.f14064c) && this.f14066e.equals(gVar.f14066e)) {
                return true;
            }
        }
        return false;
    }

    public boolean f() {
        return this.f14064c.isEmpty();
    }

    public boolean g(long j10, long j11) {
        for (int i10 = 0; i10 < this.f14065d.size(); i10++) {
            if (((a) this.f14065d.get(i10)).a(j10, j11)) {
                return true;
            }
        }
        return false;
    }

    public boolean h() {
        return this.f14065d.isEmpty();
    }

    public int hashCode() {
        return (((this.f14062a * 31) + this.f14063b.hashCode()) * 31) + this.f14066e.hashCode();
    }

    public boolean i(long j10, long j11) {
        for (int i10 = 0; i10 < this.f14065d.size(); i10++) {
            if (((a) this.f14065d.get(i10)).b(j10, j11)) {
                return false;
            }
        }
        this.f14065d.add(new a(j10, j11));
        return true;
    }

    public boolean j(me.c cVar) {
        if (this.f14064c.remove(cVar)) {
            File file = cVar.f38029p;
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
        ne.a.g(this.f14064c.remove(jVar));
        File file = (File) ne.a.e(jVar.f38029p);
        if (z10) {
            j11 = j10;
            File l10 = j.l((File) ne.a.e(file.getParentFile()), this.f14062a, jVar.f38026e, j11);
            if (file.renameTo(l10)) {
                file = l10;
            } else {
                y.i("CachedContent", "Failed to rename " + file + " to " + l10);
            }
        } else {
            j11 = j10;
        }
        j f10 = jVar.f(file, j11);
        this.f14064c.add(f10);
        return f10;
    }

    public void l(long j10) {
        for (int i10 = 0; i10 < this.f14065d.size(); i10++) {
            if (((a) this.f14065d.get(i10)).f14067a == j10) {
                this.f14065d.remove(i10);
                return;
            }
        }
        throw new IllegalStateException();
    }

    public g(int i10, String str, me.f fVar) {
        this.f14062a = i10;
        this.f14063b = str;
        this.f14066e = fVar;
        this.f14064c = new TreeSet();
        this.f14065d = new ArrayList();
    }
}
