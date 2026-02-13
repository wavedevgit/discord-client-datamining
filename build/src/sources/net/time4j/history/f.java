package net.time4j.history;

import bu.a0;
import net.time4j.f0;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    final long f38105a;

    /* renamed from: b  reason: collision with root package name */
    final c f38106b;

    /* renamed from: c  reason: collision with root package name */
    final h f38107c;

    /* renamed from: d  reason: collision with root package name */
    final h f38108d;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(long j10, c cVar, c cVar2) {
        this.f38105a = j10;
        this.f38106b = cVar2;
        if (j10 == Long.MIN_VALUE) {
            h hVar = new h(j.BC, 1000000000, 1, 1);
            this.f38107c = hVar;
            this.f38108d = hVar;
            return;
        }
        this.f38107c = cVar2.e(j10);
        this.f38108d = cVar.e(j10 - 1);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj instanceof f) {
            f fVar = (f) obj;
            if (this.f38105a == fVar.f38105a && this.f38106b == fVar.f38106b && this.f38108d.equals(fVar.f38108d)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        long j10 = this.f38105a;
        return (int) (j10 ^ (j10 >>> 32));
    }

    public String toString() {
        return f.class.getName() + "[start=" + this.f38105a + " (" + f0.M0(this.f38105a, a0.MODIFIED_JULIAN_DATE) + "),algorithm=" + this.f38106b + ",date-before-cutover=" + this.f38108d + ",date-at-cutover=" + this.f38107c + ']';
    }
}
