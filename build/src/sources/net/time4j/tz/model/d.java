package net.time4j.tz.model;

import net.time4j.f0;
import net.time4j.g0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public abstract class d {

    /* renamed from: d  reason: collision with root package name */
    private final transient long f40891d;

    /* renamed from: e  reason: collision with root package name */
    private final transient g0 f40892e;

    /* renamed from: i  reason: collision with root package name */
    private final transient i f40893i;

    /* renamed from: o  reason: collision with root package name */
    private final transient int f40894o;

    /* JADX INFO: Access modifiers changed from: protected */
    public d(int i10, i iVar, int i11) {
        if (iVar != null) {
            if (i11 != Integer.MAX_VALUE && (i11 < -64800 || i11 > 64800)) {
                throw new IllegalArgumentException("DST out of range: " + i11);
            }
            if (i10 == 86400) {
                this.f40891d = 0L;
                this.f40892e = g0.E0();
            } else {
                net.time4j.j P0 = g0.F0().P0(i10, net.time4j.g.f40606i);
                this.f40891d = P0.a();
                this.f40892e = P0.b();
            }
            this.f40893i = iVar;
            this.f40894o = i11 == Integer.MAX_VALUE ? 0 : i11;
            return;
        }
        throw new NullPointerException("Missing offset indicator.");
    }

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract String a();

    public abstract f0 b(int i10);

    /* JADX INFO: Access modifiers changed from: protected */
    public final long c() {
        return this.f40891d;
    }

    public final i d() {
        return this.f40893i;
    }

    public final int e() {
        return this.f40894o;
    }

    public final g0 f() {
        return this.f40892e;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract int g();

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract int h(long j10);

    /* JADX INFO: Access modifiers changed from: protected */
    public abstract int i(gt.a aVar);
}
