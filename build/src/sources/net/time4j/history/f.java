package net.time4j.history;

import bu.a0;
import net.time4j.f0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f37536a;

    /* renamed from: b  reason: collision with root package name */
    final c f37537b;

    /* renamed from: c  reason: collision with root package name */
    final h f37538c;

    /* renamed from: d  reason: collision with root package name */
    final h f37539d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f37536a = j10;
        this.f37537b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f37538c = hVar;
            this.f37539d = hVar;
            return;
        }
        this.f37538c = cVar2.e(j10);
        this.f37539d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f37536a == fVar.f37536a && this.f37537b == fVar.f37537b && this.f37539d.equals(fVar.f37539d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f37536a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f37536a + " (" + f0.M0(this.f37536a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f37537b + ",date-before-cutover=" + this.f37539d + ",date-at-cutover=" + this.f37538c + ']';
    }
}
