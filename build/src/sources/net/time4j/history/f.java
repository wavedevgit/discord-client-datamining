package net.time4j.history;

import net.time4j.f0;
import pt.a0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f40037a;

    /* renamed from: b  reason: collision with root package name */
    final c f40038b;

    /* renamed from: c  reason: collision with root package name */
    final h f40039c;

    /* renamed from: d  reason: collision with root package name */
    final h f40040d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f40037a = j10;
        this.f40038b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f40039c = hVar;
            this.f40040d = hVar;
            return;
        }
        this.f40039c = cVar2.e(j10);
        this.f40040d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f40037a == fVar.f40037a && this.f40038b == fVar.f40038b && this.f40040d.equals(fVar.f40040d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f40037a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f40037a + " (" + f0.M0(this.f40037a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f40038b + ",date-before-cutover=" + this.f40040d + ",date-at-cutover=" + this.f40039c + ']';
    }
}
