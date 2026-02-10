package vd;

import android.net.Uri;
import oe.u0;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class i {

    /* renamed from: a  reason: collision with root package name */
    public final long f52270a;

    /* renamed from: b  reason: collision with root package name */
    public final long f52271b;

    /* renamed from: c  reason: collision with root package name */
    private final String f52272c;

    /* renamed from: d  reason: collision with root package name */
    private int f52273d;

    public i(String str, long j10, long j11) {
        this.f52272c = str == null ? "" : str;
        this.f52270a = j10;
        this.f52271b = j11;
    }

    public i a(i iVar, String str) {
        String c10 = c(str);
        i iVar2 = null;
        if (iVar != null && c10.equals(iVar.c(str))) {
            long j10 = this.f52271b;
            long j11 = -1;
            if (j10 != -1) {
                long j12 = this.f52270a;
                if (j12 + j10 == iVar.f52270a) {
                    long j13 = iVar.f52271b;
                    if (j13 != -1) {
                        j11 = j10 + j13;
                    }
                    return new i(c10, j12, j11);
                }
            }
            long j14 = iVar.f52271b;
            if (j14 != -1) {
                long j15 = iVar.f52270a;
                if (j15 + j14 == this.f52270a) {
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
        return u0.e(str, this.f52272c);
    }

    public String c(String str) {
        return u0.d(str, this.f52272c);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj != null && i.class == obj.getClass()) {
            i iVar = (i) obj;
            if (this.f52270a == iVar.f52270a && this.f52271b == iVar.f52271b && this.f52272c.equals(iVar.f52272c)) {
                return true;
            }
        }
        return false;
    }

    public int hashCode() {
        if (this.f52273d == 0) {
            this.f52273d = ((((527 + ((int) this.f52270a)) * 31) + ((int) this.f52271b)) * 31) + this.f52272c.hashCode();
        }
        return this.f52273d;
    }

    public String toString() {
        return "RangedUri(referenceUri=" + this.f52272c + ", start=" + this.f52270a + ", length=" + this.f52271b + ")";
    }
}
