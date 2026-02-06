package zb;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final xb.c f56089a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f56090b;

    public h(xb.c cVar, byte[] bArr) {
        if (cVar != null) {
            if (bArr != null) {
                this.f56089a = cVar;
                this.f56090b = bArr;
                return;
            }
            throw new NullPointerException("bytes is null");
        }
        throw new NullPointerException("encoding is null");
    }

    public byte[] a() {
        return this.f56090b;
    }

    public xb.c b() {
        return this.f56089a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (!this.f56089a.equals(hVar.f56089a)) {
            return false;
        }
        return Arrays.equals(this.f56090b, hVar.f56090b);
    }

    public int hashCode() {
        return ((this.f56089a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f56090b);
    }

    public String toString() {
        return "EncodedPayload{encoding=" + this.f56089a + ", bytes=[...]}";
    }
}
