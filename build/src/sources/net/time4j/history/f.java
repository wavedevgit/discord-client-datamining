package net.time4j.history;

import net.time4j.f0;
import rt.a0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f39440a;

    /* renamed from: b  reason: collision with root package name */
    final c f39441b;

    /* renamed from: c  reason: collision with root package name */
    final h f39442c;

    /* renamed from: d  reason: collision with root package name */
    final h f39443d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f39440a = j10;
        this.f39441b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f39442c = hVar;
            this.f39443d = hVar;
            return;
        }
        this.f39442c = cVar2.e(j10);
        this.f39443d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f39440a == fVar.f39440a && this.f39441b == fVar.f39441b && this.f39443d.equals(fVar.f39443d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f39440a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f39440a + " (" + f0.M0(this.f39440a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f39441b + ",date-before-cutover=" + this.f39443d + ",date-at-cutover=" + this.f39442c + ']';
    }
}
