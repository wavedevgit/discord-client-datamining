package vd;

import android.net.Uri;
import oe.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final long f51513a;

    /* renamed from: b  reason: collision with root package name */
    public final long f51514b;

    /* renamed from: c  reason: collision with root package name */
    private final String f51515c;

    /* renamed from: d  reason: collision with root package name */
    private int f51516d;

    public i(String str, long j10, long j11) {
        this.f51515c = str == null ? "" : str;
        this.f51513a = j10;
        this.f51514b = j11;
    }

    public i a(i iVar, String str) {
        String c10 = c(str);
        i iVar2 = null;
        if (iVar != null && c10.equals(iVar.c(str))) {
            long j10 = this.f51514b;
            long j11 = -1;
            if (j10 != -1) {
                long j12 = this.f51513a;
                if (j12 + j10 == iVar.f51513a) {
                    long j13 = iVar.f51514b;
                    if (j13 != -1) {
                        j11 = j10 + j13;
                    }
                    return new i(c10, j12, j11);
                }
            }
            long j14 = iVar.f51514b;
            if (j14 != -1) {
                long j15 = iVar.f51513a;
                if (j15 + j14 == this.f51513a) {
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
        return u0.e(str, this.f51515c);
    }

    public String c(String str) {
        return u0.d(str, this.f51515c);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && i.class == obj.getClass()) {
            i iVar = (i) obj;
            if (this.f51513a == iVar.f51513a && this.f51514b == iVar.f51514b && this.f51515c.equals(iVar.f51515c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f51516d == 0) {
            this.f51516d = ((((527 + ((int) this.f51513a)) * 31) + ((int) this.f51514b)) * 31) + this.f51515c.hashCode();
        }
        return this.f51516d;
    }

    public String toString() {
        return "RangedUri(referenceUri=" + this.f51515c + ", start=" + this.f51513a + ", length=" + this.f51514b + ")";
    }
}
