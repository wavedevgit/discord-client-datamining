package zb;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final xb.c f55502a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f55503b;

    public h(xb.c cVar, byte[] bArr) {
        if (cVar != null) {
            if (bArr != null) {
                this.f55502a = cVar;
                this.f55503b = bArr;
                return;
            }
            throw new NullPointerException("bytes is null");
        }
        throw new NullPointerException("encoding is null");
    }

    public byte[] a() {
        return this.f55503b;
    }

    public xb.c b() {
        return this.f55502a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (!this.f55502a.equals(hVar.f55502a)) {
            return false;
        }
        return Arrays.equals(this.f55503b, hVar.f55503b);
    }

    public int hashCode() {
        return ((this.f55502a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f55503b);
    }

    public String toString() {
        return "EncodedPayload{encoding=" + this.f55502a + ", bytes=[...]}";
    }
}
