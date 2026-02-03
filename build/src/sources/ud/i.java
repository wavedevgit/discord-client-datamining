package ud;

import android.net.Uri;
import ne.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final long f50552a;

    /* renamed from: b  reason: collision with root package name */
    public final long f50553b;

    /* renamed from: c  reason: collision with root package name */
    private final String f50554c;

    /* renamed from: d  reason: collision with root package name */
    private int f50555d;

    public i(String str, long j10, long j11) {
        this.f50554c = str == null ? "" : str;
        this.f50552a = j10;
        this.f50553b = j11;
    }

    public i a(i iVar, String str) {
        String c10 = c(str);
        i iVar2 = null;
        if (iVar != null && c10.equals(iVar.c(str))) {
            long j10 = this.f50553b;
            long j11 = -1;
            if (j10 != -1) {
                long j12 = this.f50552a;
                if (j12 + j10 == iVar.f50552a) {
                    long j13 = iVar.f50553b;
                    if (j13 != -1) {
                        j11 = j10 + j13;
                    }
                    return new i(c10, j12, j11);
                }
            }
            long j14 = iVar.f50553b;
            if (j14 != -1) {
                long j15 = iVar.f50552a;
                if (j15 + j14 == this.f50552a) {
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
        return u0.e(str, this.f50554c);
    }

    public String c(String str) {
        return u0.d(str, this.f50554c);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && i.class == obj.getClass()) {
            i iVar = (i) obj;
            if (this.f50552a == iVar.f50552a && this.f50553b == iVar.f50553b && this.f50554c.equals(iVar.f50554c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f50555d == 0) {
            this.f50555d = ((((527 + ((int) this.f50552a)) * 31) + ((int) this.f50553b)) * 31) + this.f50554c.hashCode();
        }
        return this.f50555d;
    }

    public String toString() {
        return "RangedUri(referenceUri=" + this.f50554c + ", start=" + this.f50552a + ", length=" + this.f50553b + ")";
    }
}
