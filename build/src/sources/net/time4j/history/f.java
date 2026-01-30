package net.time4j.history;

import jt.a0;
import net.time4j.f0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f40675a;

    /* renamed from: b  reason: collision with root package name */
    final c f40676b;

    /* renamed from: c  reason: collision with root package name */
    final h f40677c;

    /* renamed from: d  reason: collision with root package name */
    final h f40678d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f40675a = j10;
        this.f40676b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f40677c = hVar;
            this.f40678d = hVar;
            return;
        }
        this.f40677c = cVar2.e(j10);
        this.f40678d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f40675a == fVar.f40675a && this.f40676b == fVar.f40676b && this.f40678d.equals(fVar.f40678d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f40675a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f40675a + " (" + f0.M0(this.f40675a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f40676b + ",date-before-cutover=" + this.f40678d + ",date-at-cutover=" + this.f40677c + ']';
    }
}
