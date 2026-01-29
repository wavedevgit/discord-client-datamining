package fi;

import java.security.cert.X509Certificate;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f25218e;

    public k0(X509Certificate x509Certificate, byte[] bArr) {
        super(x509Certificate);
        this.f25218e = bArr;
    }

    @Override // java.security.cert.Certificate
    public final byte[] getEncoded() {
        return this.f25218e;
    }
}
