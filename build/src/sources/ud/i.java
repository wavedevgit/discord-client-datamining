package ud;

import android.net.Uri;
import ne.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final long f51410a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51411b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51412c;

    /* renamed from: d  reason: collision with root package name */
    private int f51413d;

    public i(String str, long j10, long j11) {
        this.f51412c = str == null ? "" : str;
        this.f51410a = j10;
        this.f51411b = j11;
    }

    public i a(i iVar, String str) {
        String c10 = c(str);
        i iVar2 = null;
        if (iVar != null && c10.equals(iVar.c(str))) {
            long j10 = this.f51411b;
            long j11 = -1;
            if (j10 != -1) {
                long j12 = this.f51410a;
                if (j12 + j10 == iVar.f51410a) {
                    long j13 = iVar.f51411b;
                    if (j13 != -1) {
                        j11 = j10 + j13;
                    }
                    return new i(c10, j12, j11);
                }
            }
            long j14 = iVar.f51411b;
            if (j14 != -1) {
                long j15 = iVar.f51410a;
                if (j15 + j14 == this.f51410a) {
                    if (j10 != -1) {
                        j11 = j14 + j10;
                    }
                    iVar2 = new i(c10, j15, j11);
                }
            }
        }
        return iVar2;
    }

    public Uri b(String str) {
        return u0.e(str, this.f51412c);
    }

    public String c(String str) {
        return u0.d(str, this.f51412c);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && i.class == obj.getClass()) {
            i iVar = (i) obj;
            if (this.f51410a == iVar.f51410a && this.f51411b == iVar.f51411b && this.f51412c.equals(iVar.f51412c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f51413d == 0) {
            this.f51413d = ((((527 + ((int) this.f51410a)) * 31) + ((int) this.f51411b)) * 31) + this.f51412c.hashCode();
        }
        return this.f51413d;
    }

    public String toString() {
        return "RangedUri(referenceUri=" + this.f51412c + ", start=" + this.f51410a + ", length=" + this.f51411b + ")";
    }
}
