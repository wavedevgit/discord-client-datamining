package ud;

import android.net.Uri;
import ne.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final long f50549a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50550b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50551c;

    /* renamed from: d  reason: collision with root package name */
    private int f50552d;

    public i(String str, long j10, long j11) {
        this.f50551c = str == null ? "" : str;
        this.f50549a = j10;
        this.f50550b = j11;
    }

    public i a(i iVar, String str) {
        String c10 = c(str);
        i iVar2 = null;
        if (iVar != null && c10.equals(iVar.c(str))) {
            long j10 = this.f50550b;
            long j11 = -1;
            if (j10 != -1) {
                long j12 = this.f50549a;
                if (j12 + j10 == iVar.f50549a) {
                    long j13 = iVar.f50550b;
                    if (j13 != -1) {
                        j11 = j10 + j13;
                    }
                    return new i(c10, j12, j11);
                }
            }
            long j14 = iVar.f50550b;
            if (j14 != -1) {
                long j15 = iVar.f50549a;
                if (j15 + j14 == this.f50549a) {
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
        return u0.e(str, this.f50551c);
    }

    public String c(String str) {
        return u0.d(str, this.f50551c);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && i.class == obj.getClass()) {
            i iVar = (i) obj;
            if (this.f50549a == iVar.f50549a && this.f50550b == iVar.f50550b && this.f50551c.equals(iVar.f50551c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f50552d == 0) {
            this.f50552d = ((((527 + ((int) this.f50549a)) * 31) + ((int) this.f50550b)) * 31) + this.f50551c.hashCode();
        }
        return this.f50552d;
    }

    public String toString() {
        return "RangedUri(referenceUri=" + this.f50551c + ", start=" + this.f50549a + ", length=" + this.f50550b + ")";
    }
}
