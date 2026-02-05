package ud;

import android.net.Uri;
import ne.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final long f51321a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51322b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51323c;

    /* renamed from: d  reason: collision with root package name */
    private int f51324d;

    public i(String str, long j10, long j11) {
        this.f51323c = str == null ? "" : str;
        this.f51321a = j10;
        this.f51322b = j11;
    }

    public i a(i iVar, String str) {
        String c10 = c(str);
        i iVar2 = null;
        if (iVar != null && c10.equals(iVar.c(str))) {
            long j10 = this.f51322b;
            long j11 = -1;
            if (j10 != -1) {
                long j12 = this.f51321a;
                if (j12 + j10 == iVar.f51321a) {
                    long j13 = iVar.f51322b;
                    if (j13 != -1) {
                        j11 = j10 + j13;
                    }
                    return new i(c10, j12, j11);
                }
            }
            long j14 = iVar.f51322b;
            if (j14 != -1) {
                long j15 = iVar.f51321a;
                if (j15 + j14 == this.f51321a) {
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
        return u0.e(str, this.f51323c);
    }

    public String c(String str) {
        return u0.d(str, this.f51323c);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && i.class == obj.getClass()) {
            i iVar = (i) obj;
            if (this.f51321a == iVar.f51321a && this.f51322b == iVar.f51322b && this.f51323c.equals(iVar.f51323c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f51324d == 0) {
            this.f51324d = ((((527 + ((int) this.f51321a)) * 31) + ((int) this.f51322b)) * 31) + this.f51323c.hashCode();
        }
        return this.f51324d;
    }

    public String toString() {
        return "RangedUri(referenceUri=" + this.f51323c + ", start=" + this.f51321a + ", length=" + this.f51322b + ")";
    }
}
