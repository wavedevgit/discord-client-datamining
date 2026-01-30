package ud;

import android.net.Uri;
import ne.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final long f50209a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50210b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50211c;

    /* renamed from: d  reason: collision with root package name */
    private int f50212d;

    public i(String str, long j10, long j11) {
        this.f50211c = str == null ? "" : str;
        this.f50209a = j10;
        this.f50210b = j11;
    }

    public i a(i iVar, String str) {
        String c10 = c(str);
        i iVar2 = null;
        if (iVar != null && c10.equals(iVar.c(str))) {
            long j10 = this.f50210b;
            long j11 = -1;
            if (j10 != -1) {
                long j12 = this.f50209a;
                if (j12 + j10 == iVar.f50209a) {
                    long j13 = iVar.f50210b;
                    if (j13 != -1) {
                        j11 = j10 + j13;
                    }
                    return new i(c10, j12, j11);
                }
            }
            long j14 = iVar.f50210b;
            if (j14 != -1) {
                long j15 = iVar.f50209a;
                if (j15 + j14 == this.f50209a) {
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
        return u0.e(str, this.f50211c);
    }

    public String c(String str) {
        return u0.d(str, this.f50211c);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && i.class == obj.getClass()) {
            i iVar = (i) obj;
            if (this.f50209a == iVar.f50209a && this.f50210b == iVar.f50210b && this.f50211c.equals(iVar.f50211c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f50212d == 0) {
            this.f50212d = ((((527 + ((int) this.f50209a)) * 31) + ((int) this.f50210b)) * 31) + this.f50211c.hashCode();
        }
        return this.f50212d;
    }

    public String toString() {
        return "RangedUri(referenceUri=" + this.f50211c + ", start=" + this.f50209a + ", length=" + this.f50210b + ")";
    }
}
