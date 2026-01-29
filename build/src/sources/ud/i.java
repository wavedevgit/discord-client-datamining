package ud;

import android.net.Uri;
import ne.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final long f50193a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50194b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50195c;

    /* renamed from: d  reason: collision with root package name */
    private int f50196d;

    public i(String str, long j10, long j11) {
        this.f50195c = str == null ? "" : str;
        this.f50193a = j10;
        this.f50194b = j11;
    }

    public i a(i iVar, String str) {
        String c10 = c(str);
        i iVar2 = null;
        if (iVar != null && c10.equals(iVar.c(str))) {
            long j10 = this.f50194b;
            long j11 = -1;
            if (j10 != -1) {
                long j12 = this.f50193a;
                if (j12 + j10 == iVar.f50193a) {
                    long j13 = iVar.f50194b;
                    if (j13 != -1) {
                        j11 = j10 + j13;
                    }
                    return new i(c10, j12, j11);
                }
            }
            long j14 = iVar.f50194b;
            if (j14 != -1) {
                long j15 = iVar.f50193a;
                if (j15 + j14 == this.f50193a) {
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
        return u0.e(str, this.f50195c);
    }

    public String c(String str) {
        return u0.d(str, this.f50195c);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && i.class == obj.getClass()) {
            i iVar = (i) obj;
            if (this.f50193a == iVar.f50193a && this.f50194b == iVar.f50194b && this.f50195c.equals(iVar.f50195c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f50196d == 0) {
            this.f50196d = ((((527 + ((int) this.f50193a)) * 31) + ((int) this.f50194b)) * 31) + this.f50195c.hashCode();
        }
        return this.f50196d;
    }

    public String toString() {
        return "RangedUri(referenceUri=" + this.f50195c + ", start=" + this.f50193a + ", length=" + this.f50194b + ")";
    }
}
