package net.time4j.history;

import jt.a0;
import net.time4j.f0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f40659a;

    /* renamed from: b  reason: collision with root package name */
    final c f40660b;

    /* renamed from: c  reason: collision with root package name */
    final h f40661c;

    /* renamed from: d  reason: collision with root package name */
    final h f40662d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f40659a = j10;
        this.f40660b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f40661c = hVar;
            this.f40662d = hVar;
            return;
        }
        this.f40661c = cVar2.e(j10);
        this.f40662d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f40659a == fVar.f40659a && this.f40660b == fVar.f40660b && this.f40662d.equals(fVar.f40662d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f40659a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f40659a + " (" + f0.M0(this.f40659a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f40660b + ",date-before-cutover=" + this.f40662d + ",date-at-cutover=" + this.f40661c + ']';
    }
}
