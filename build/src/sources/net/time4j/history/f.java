package net.time4j.history;

import net.time4j.f0;
import st.a0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f38532a;

    /* renamed from: b  reason: collision with root package name */
    final c f38533b;

    /* renamed from: c  reason: collision with root package name */
    final h f38534c;

    /* renamed from: d  reason: collision with root package name */
    final h f38535d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f38532a = j10;
        this.f38533b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f38534c = hVar;
            this.f38535d = hVar;
            return;
        }
        this.f38534c = cVar2.e(j10);
        this.f38535d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f38532a == fVar.f38532a && this.f38533b == fVar.f38533b && this.f38535d.equals(fVar.f38535d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f38532a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f38532a + " (" + f0.M0(this.f38532a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f38533b + ",date-before-cutover=" + this.f38535d + ",date-at-cutover=" + this.f38534c + ']';
    }
}
