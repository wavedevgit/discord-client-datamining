package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.util.ArrayList;
import java.util.TreeSet;
import ne.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public final int f13352a;

    /* renamed from: b  reason: collision with root package name */
    public final String f13353b;

    /* renamed from: c  reason: collision with root package name */
    private final TreeSet f13354c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f13355d;

    /* renamed from: e  reason: collision with root package name */
    private me.f f13356e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f13357a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13358b;

        public a(long j10, long j11) {
            this.f13357a = j10;
            this.f13358b = j11;
        }

        public boolean a(long j10, long j11) {
            long j12 = this.f13358b;
            if (j12 == -1) {
                if (j10 >= this.f13357a) {
                    return true;
                }
                return false;
            } else if (j11 == -1) {
                return false;
            } else {
                long j13 = this.f13357a;
                if (j13 <= j10 && j10 + j11 <= j13 + j12) {
                    return true;
                }
                return false;
            }
        }

        public boolean b(long j10, long j11) {
            long j12 = this.f13357a;
            if (j12 <= j10) {
                long j13 = this.f13358b;
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
        this(i10, str, me.f.f37074c);
    }

    public void a(j jVar) {
        this.f13354c.add(jVar);
    }

    public boolean b(me.e eVar) {
        me.f fVar = this.f13356e;
        me.f g10 = fVar.g(eVar);
        this.f13356e = g10;
        return !g10.equals(fVar);
    }

    public me.f c() {
        return this.f13356e;
    }

    public j d(long j10, long j11) {
        j j12 = j.j(this.f13353b, j10);
        j jVar = (j) this.f13354c.floor(j12);
        if (jVar != null && jVar.f37067e + jVar.f37068i > j10) {
            return jVar;
        }
        j jVar2 = (j) this.f13354c.ceiling(j12);
        if (jVar2 != null) {
            long j13 = jVar2.f37067e - j10;
            if (j11 == -1) {
                j11 = j13;
            } else {
                j11 = Math.min(j13, j11);
            }
        }
        return j.i(this.f13353b, j10, j11);
    }

    public TreeSet e() {
        return this.f13354c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (this.f13352a == gVar.f13352a && this.f13353b.equals(gVar.f13353b) && this.f13354c.equals(gVar.f13354c) && this.f13356e.equals(gVar.f13356e)) {
                return true;
            }
        }
        return false;
    }

    public boolean f() {
        return this.f13354c.isEmpty();
    }

    public boolean g(long j10, long j11) {
        for (int i10 = 0; i10 < this.f13355d.size(); i10++) {
            if (((a) this.f13355d.get(i10)).a(j10, j11)) {
                return true;
            }
        }
        return false;
    }

    public boolean h() {
        return this.f13355d.isEmpty();
    }

    public int hashCode() {
        return (((this.f13352a * 31) + this.f13353b.hashCode()) * 31) + this.f13356e.hashCode();
    }

    public boolean i(long j10, long j11) {
        for (int i10 = 0; i10 < this.f13355d.size(); i10++) {
            if (((a) this.f13355d.get(i10)).b(j10, j11)) {
                return false;
            }
        }
        this.f13355d.add(new a(j10, j11));
        return true;
    }

    public boolean j(me.c cVar) {
        if (this.f13354c.remove(cVar)) {
            File file = cVar.f37070p;
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
        ne.a.g(this.f13354c.remove(jVar));
        File file = (File) ne.a.e(jVar.f37070p);
        if (z10) {
            j11 = j10;
            File k10 = j.k((File) ne.a.e(file.getParentFile()), this.f13352a, jVar.f37067e, j11);
            if (file.renameTo(k10)) {
                file = k10;
            } else {
                y.i("CachedContent", "Failed to rename " + file + " to " + k10);
            }
        } else {
            j11 = j10;
        }
        j f10 = jVar.f(file, j11);
        this.f13354c.add(f10);
        return f10;
    }

    public void l(long j10) {
        for (int i10 = 0; i10 < this.f13355d.size(); i10++) {
            if (((a) this.f13355d.get(i10)).f13357a == j10) {
                this.f13355d.remove(i10);
                return;
            }
        }
        throw new IllegalStateException();
    }

    public g(int i10, String str, me.f fVar) {
        this.f13352a = i10;
        this.f13353b = str;
        this.f13356e = fVar;
        this.f13354c = new TreeSet();
        this.f13355d = new ArrayList();
    }
}
