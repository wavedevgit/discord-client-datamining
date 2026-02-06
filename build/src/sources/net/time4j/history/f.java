package net.time4j.history;

import net.time4j.f0;
import rt.a0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f39392a;

    /* renamed from: b  reason: collision with root package name */
    final c f39393b;

    /* renamed from: c  reason: collision with root package name */
    final h f39394c;

    /* renamed from: d  reason: collision with root package name */
    final h f39395d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f39392a = j10;
        this.f39393b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f39394c = hVar;
            this.f39395d = hVar;
            return;
        }
        this.f39394c = cVar2.e(j10);
        this.f39395d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f39392a == fVar.f39392a && this.f39393b == fVar.f39393b && this.f39395d.equals(fVar.f39395d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f39392a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f39392a + " (" + f0.M0(this.f39392a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f39393b + ",date-before-cutover=" + this.f39395d + ",date-at-cutover=" + this.f39394c + ']';
    }
}
