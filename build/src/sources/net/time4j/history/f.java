package net.time4j.history;

import mt.a0;
import net.time4j.f0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f40577a;

    /* renamed from: b  reason: collision with root package name */
    final c f40578b;

    /* renamed from: c  reason: collision with root package name */
    final h f40579c;

    /* renamed from: d  reason: collision with root package name */
    final h f40580d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f40577a = j10;
        this.f40578b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f40579c = hVar;
            this.f40580d = hVar;
            return;
        }
        this.f40579c = cVar2.e(j10);
        this.f40580d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f40577a == fVar.f40577a && this.f40578b == fVar.f40578b && this.f40580d.equals(fVar.f40580d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f40577a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f40577a + " (" + f0.M0(this.f40577a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f40578b + ",date-before-cutover=" + this.f40580d + ",date-at-cutover=" + this.f40579c + ']';
    }
}
