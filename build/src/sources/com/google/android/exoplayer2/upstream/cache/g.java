package com.google.android.exoplayer2.upstream.cache;

import java.io.File;
import java.util.ArrayList;
import java.util.TreeSet;
import ne.y;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class g {

    /* renamed from: a  reason: collision with root package name */
    public final int f13030a;

    /* renamed from: b  reason: collision with root package name */
    public final String f13031b;

    /* renamed from: c  reason: collision with root package name */
    private final TreeSet f13032c;

    /* renamed from: d  reason: collision with root package name */
    private final ArrayList f13033d;

    /* renamed from: e  reason: collision with root package name */
    private me.f f13034e;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    private static final class a {

        /* renamed from: a  reason: collision with root package name */
        public final long f13035a;

        /* renamed from: b  reason: collision with root package name */
        public final long f13036b;

        public a(long j10, long j11) {
            this.f13035a = j10;
            this.f13036b = j11;
        }

        public boolean a(long j10, long j11) {
            long j12 = this.f13036b;
            if (j12 == -1) {
                if (j10 >= this.f13035a) {
                    return true;
                }
                return false;
            } else if (j11 == -1) {
                return false;
            } else {
                long j13 = this.f13035a;
                if (j13 <= j10 && j10 + j11 <= j13 + j12) {
                    return true;
                }
                return false;
            }
        }

        public boolean b(long j10, long j11) {
            long j12 = this.f13035a;
            if (j12 <= j10) {
                long j13 = this.f13036b;
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
        this(i10, str, me.f.f37830c);
    }

    public void a(j jVar) {
        this.f13032c.add(jVar);
    }

    public boolean b(me.e eVar) {
        me.f fVar = this.f13034e;
        me.f g10 = fVar.g(eVar);
        this.f13034e = g10;
        return !g10.equals(fVar);
    }

    public me.f c() {
        return this.f13034e;
    }

    public j d(long j10, long j11) {
        j j12 = j.j(this.f13031b, j10);
        j jVar = (j) this.f13032c.floor(j12);
        if (jVar != null && jVar.f37823e + jVar.f37824i > j10) {
            return jVar;
        }
        j jVar2 = (j) this.f13032c.ceiling(j12);
        if (jVar2 != null) {
            long j13 = jVar2.f37823e - j10;
            if (j11 == -1) {
                j11 = j13;
            } else {
                j11 = Math.min(j13, j11);
            }
        }
        return j.i(this.f13031b, j10, j11);
    }

    public TreeSet e() {
        return this.f13032c;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && g.class == obj.getClass()) {
            g gVar = (g) obj;
            if (this.f13030a == gVar.f13030a && this.f13031b.equals(gVar.f13031b) && this.f13032c.equals(gVar.f13032c) && this.f13034e.equals(gVar.f13034e)) {
                return true;
            }
        }
        return false;
    }

    public boolean f() {
        return this.f13032c.isEmpty();
    }

    public boolean g(long j10, long j11) {
        for (int i10 = 0; i10 < this.f13033d.size(); i10++) {
            if (((a) this.f13033d.get(i10)).a(j10, j11)) {
                return true;
            }
        }
        return false;
    }

    public boolean h() {
        return this.f13033d.isEmpty();
    }

    public int hashCode() {
        return (((this.f13030a * 31) + this.f13031b.hashCode()) * 31) + this.f13034e.hashCode();
    }

    public boolean i(long j10, long j11) {
        for (int i10 = 0; i10 < this.f13033d.size(); i10++) {
            if (((a) this.f13033d.get(i10)).b(j10, j11)) {
                return false;
            }
        }
        this.f13033d.add(new a(j10, j11));
        return true;
    }

    public boolean j(me.c cVar) {
        if (this.f13032c.remove(cVar)) {
            File file = cVar.f37826p;
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
        ne.a.g(this.f13032c.remove(jVar));
        File file = (File) ne.a.e(jVar.f37826p);
        if (z10) {
            j11 = j10;
            File k10 = j.k((File) ne.a.e(file.getParentFile()), this.f13030a, jVar.f37823e, j11);
            if (file.renameTo(k10)) {
                file = k10;
            } else {
                y.i("CachedContent", "Failed to rename " + file + " to " + k10);
            }
        } else {
            j11 = j10;
        }
        j f10 = jVar.f(file, j11);
        this.f13032c.add(f10);
        return f10;
    }

    public void l(long j10) {
        for (int i10 = 0; i10 < this.f13033d.size(); i10++) {
            if (((a) this.f13033d.get(i10)).f13035a == j10) {
                this.f13033d.remove(i10);
                return;
            }
        }
        throw new IllegalStateException();
    }

    public g(int i10, String str, me.f fVar) {
        this.f13030a = i10;
        this.f13031b = str;
        this.f13034e = fVar;
        this.f13032c = new TreeSet();
        this.f13033d = new ArrayList();
    }
}
