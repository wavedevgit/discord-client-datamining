package net.time4j.history;

import bu.a0;
import net.time4j.f0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f37537a;

    /* renamed from: b  reason: collision with root package name */
    final c f37538b;

    /* renamed from: c  reason: collision with root package name */
    final h f37539c;

    /* renamed from: d  reason: collision with root package name */
    final h f37540d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f37537a = j10;
        this.f37538b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f37539c = hVar;
            this.f37540d = hVar;
            return;
        }
        this.f37539c = cVar2.e(j10);
        this.f37540d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f37537a == fVar.f37537a && this.f37538b == fVar.f37538b && this.f37540d.equals(fVar.f37540d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f37537a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f37537a + " (" + f0.M0(this.f37537a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f37538b + ",date-before-cutover=" + this.f37540d + ",date-at-cutover=" + this.f37539c + ']';
    }
}
