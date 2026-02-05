package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.util.ArrayList;
import java.util.TreeSet;
import ne.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public final int f13415a;

    /* renamed from: b  reason: collision with root package name */
    public final String f13416b;

    /* renamed from: c  reason: collision with root package name */
    private final TreeSet f13417c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f13418d;

    /* renamed from: e  reason: collision with root package name */
    private me.f f13419e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f13420a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13421b;

        public a(long j10, long j11) {
            this.f13420a = j10;
            this.f13421b = j11;
        }

        public boolean a(long j10, long j11) {
            long j12 = this.f13421b;
            if (j12 == -1) {
                if (j10 >= this.f13420a) {
                    return true;
                }
                return false;
            } else if (j11 == -1) {
                return false;
            } else {
                long j13 = this.f13420a;
                if (j13 <= j10 && j10 + j11 <= j13 + j12) {
                    return true;
                }
                return false;
            }
        }

        public boolean b(long j10, long j11) {
            long j12 = this.f13420a;
            if (j12 <= j10) {
                long j13 = this.f13421b;
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
        this(i10, str, me.f.f37492c);
    }

    public void a(j jVar) {
        this.f13417c.add(jVar);
    }

    public boolean b(me.e eVar) {
        me.f fVar = this.f13419e;
        me.f g10 = fVar.g(eVar);
        this.f13419e = g10;
        return !g10.equals(fVar);
    }

    public me.f c() {
        return this.f13419e;
    }

    public j d(long j10, long j11) {
        j k10 = j.k(this.f13416b, j10);
        j jVar = (j) this.f13417c.floor(k10);
        if (jVar != null && jVar.f37485e + jVar.f37486i > j10) {
            return jVar;
        }
        j jVar2 = (j) this.f13417c.ceiling(k10);
        if (jVar2 != null) {
            long j12 = jVar2.f37485e - j10;
            if (j11 == -1) {
                j11 = j12;
            } else {
                j11 = Math.min(j12, j11);
            }
        }
        return j.i(this.f13416b, j10, j11);
    }

    public TreeSet e() {
        return this.f13417c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (this.f13415a == gVar.f13415a && this.f13416b.equals(gVar.f13416b) && this.f13417c.equals(gVar.f13417c) && this.f13419e.equals(gVar.f13419e)) {
                return true;
            }
        }
        return false;
    }

    public boolean f() {
        return this.f13417c.isEmpty();
    }

    public boolean g(long j10, long j11) {
        for (int i10 = 0; i10 < this.f13418d.size(); i10++) {
            if (((a) this.f13418d.get(i10)).a(j10, j11)) {
                return true;
            }
        }
        return false;
    }

    public boolean h() {
        return this.f13418d.isEmpty();
    }

    public int hashCode() {
        return (((this.f13415a * 31) + this.f13416b.hashCode()) * 31) + this.f13419e.hashCode();
    }

    public boolean i(long j10, long j11) {
        for (int i10 = 0; i10 < this.f13418d.size(); i10++) {
            if (((a) this.f13418d.get(i10)).b(j10, j11)) {
                return false;
            }
        }
        this.f13418d.add(new a(j10, j11));
        return true;
    }

    public boolean j(me.c cVar) {
        if (this.f13417c.remove(cVar)) {
            File file = cVar.f37488p;
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
        ne.a.g(this.f13417c.remove(jVar));
        File file = (File) ne.a.e(jVar.f37488p);
        if (z10) {
            j11 = j10;
            File l10 = j.l((File) ne.a.e(file.getParentFile()), this.f13415a, jVar.f37485e, j11);
            if (file.renameTo(l10)) {
                file = l10;
            } else {
                y.i("CachedContent", "Failed to rename " + file + " to " + l10);
            }
        } else {
            j11 = j10;
        }
        j f10 = jVar.f(file, j11);
        this.f13417c.add(f10);
        return f10;
    }

    public void l(long j10) {
        for (int i10 = 0; i10 < this.f13418d.size(); i10++) {
            if (((a) this.f13418d.get(i10)).f13420a == j10) {
                this.f13418d.remove(i10);
                return;
            }
        }
        throw new IllegalStateException();
    }

    public g(int i10, String str, me.f fVar) {
        this.f13415a = i10;
        this.f13416b = str;
        this.f13419e = fVar;
        this.f13417c = new TreeSet();
        this.f13418d = new ArrayList();
    }
}
