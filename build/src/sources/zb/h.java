package zb;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final xb.c f56137a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f56138b;

    public h(xb.c cVar, byte[] bArr) {
        if (cVar != null) {
            if (bArr != null) {
                this.f56137a = cVar;
                this.f56138b = bArr;
                return;
            }
            throw new NullPointerException("bytes is null");
        }
        throw new NullPointerException("encoding is null");
    }

    public byte[] a() {
        return this.f56138b;
    }

    public xb.c b() {
        return this.f56137a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (!this.f56137a.equals(hVar.f56137a)) {
            return false;
        }
        return Arrays.equals(this.f56138b, hVar.f56138b);
    }

    public int hashCode() {
        return ((this.f56137a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f56138b);
    }

    public String toString() {
        return "EncodedPayload{encoding=" + this.f56137a + ", bytes=[...]}";
    }
}
