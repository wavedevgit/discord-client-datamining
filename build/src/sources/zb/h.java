package zb;

import java.util.Arrays;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class h {

    /* renamed from: a  reason: collision with root package name */
    private final xb.c f55486a;

    /* renamed from: b  reason: collision with root package name */
    private final byte[] f55487b;

    public h(xb.c cVar, byte[] bArr) {
        if (cVar != null) {
            if (bArr != null) {
                this.f55486a = cVar;
                this.f55487b = bArr;
                return;
            }
            throw new NullPointerException("bytes is null");
        }
        throw new NullPointerException("encoding is null");
    }

    public byte[] a() {
        return this.f55487b;
    }

    public xb.c b() {
        return this.f55486a;
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof h)) {
            return false;
        }
        h hVar = (h) obj;
        if (!this.f55486a.equals(hVar.f55486a)) {
            return false;
        }
        return Arrays.equals(this.f55487b, hVar.f55487b);
    }

    public int hashCode() {
        return ((this.f55486a.hashCode() ^ 1000003) * 1000003) ^ Arrays.hashCode(this.f55487b);
    }

    public String toString() {
        return "EncodedPayload{encoding=" + this.f55486a + ", bytes=[...]}";
    }
}
