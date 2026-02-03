package net.time4j.history;

import kt.a0;
import net.time4j.f0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f40538a;

    /* renamed from: b  reason: collision with root package name */
    final c f40539b;

    /* renamed from: c  reason: collision with root package name */
    final h f40540c;

    /* renamed from: d  reason: collision with root package name */
    final h f40541d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f40538a = j10;
        this.f40539b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f40540c = hVar;
            this.f40541d = hVar;
            return;
        }
        this.f40540c = cVar2.e(j10);
        this.f40541d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f40538a == fVar.f40538a && this.f40539b == fVar.f40539b && this.f40541d.equals(fVar.f40541d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f40538a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f40538a + " (" + f0.M0(this.f40538a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f40539b + ",date-before-cutover=" + this.f40541d + ",date-at-cutover=" + this.f40540c + ']';
    }
}
