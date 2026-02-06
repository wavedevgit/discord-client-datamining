package ji;

import java.security.cert.X509Certificate;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class k0 extends l0 {

    /* renamed from: e  reason: collision with root package name */
    private final byte[] f29911e;

    public k0(X509Certificate x509Certificate, byte[] bArr) {
        super(x509Certificate);
        this.f29911e = bArr;
    }

    @Override // java.security.cert.Certificate
    public final byte[] getEncoded() {
        return this.f29911e;
    }
}
