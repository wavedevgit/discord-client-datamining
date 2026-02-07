package gu;

import java.io.IOException;
import java.io.InterruptedIOException;
import java.net.ProtocolException;
import java.net.UnknownServiceException;
import java.security.cert.CertificateException;
import java.util.Arrays;
import java.util.List;
import javax.net.ssl.SSLException;
import javax.net.ssl.SSLHandshakeException;
import javax.net.ssl.SSLPeerUnverifiedException;
import javax.net.ssl.SSLSocket;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b {

    /* renamed from: a  reason: collision with root package name */
    private final List f25600a;

    /* renamed from: b  reason: collision with root package name */
    private int f25601b;

    /* renamed from: c  reason: collision with root package name */
    private boolean f25602c;

    /* renamed from: d  reason: collision with root package name */
    private boolean f25603d;

    public b(List connectionSpecs) {
        Intrinsics.checkNotNullParameter(connectionSpecs, "connectionSpecs");
        this.f25600a = connectionSpecs;
    }

    private final boolean c(SSLSocket sSLSocket) {
        int size = this.f25600a.size();
        for (int i10 = this.f25601b; i10 < size; i10++) {
            if (((okhttp3.d) this.f25600a.get(i10)).e(sSLSocket)) {
                return true;
            }
        }
        return false;
    }

    public final okhttp3.d a(SSLSocket sslSocket) {
        okhttp3.d dVar;
        Intrinsics.checkNotNullParameter(sslSocket, "sslSocket");
        int i10 = this.f25601b;
        int size = this.f25600a.size();
        while (true) {
            if (i10 < size) {
                dVar = (okhttp3.d) this.f25600a.get(i10);
                if (dVar.e(sslSocket)) {
                    this.f25601b = i10 + 1;
                    break;
                }
                i10++;
            } else {
                dVar = null;
                break;
            }
        }
        if (dVar != null) {
            this.f25602c = c(sslSocket);
            dVar.c(sslSocket, this.f25603d);
            return dVar;
        }
        StringBuilder sb2 = new StringBuilder();
        sb2.append("Unable to find acceptable protocols. isFallback=");
        sb2.append(this.f25603d);
        sb2.append(", modes=");
        sb2.append(this.f25600a);
        sb2.append(", supported protocols=");
        String[] enabledProtocols = sslSocket.getEnabledProtocols();
        Intrinsics.checkNotNull(enabledProtocols);
        String arrays = Arrays.toString(enabledProtocols);
        Intrinsics.checkNotNullExpressionValue(arrays, "toString(this)");
        sb2.append(arrays);
        throw new UnknownServiceException(sb2.toString());
    }

    public final boolean b(IOException e10) {
        Intrinsics.checkNotNullParameter(e10, "e");
        this.f25603d = true;
        if (!this.f25602c || (e10 instanceof ProtocolException) || (e10 instanceof InterruptedIOException)) {
            return false;
        }
        if ((!(e10 instanceof SSLHandshakeException) || !(e10.getCause() instanceof CertificateException)) && !(e10 instanceof SSLPeerUnverifiedException) && (e10 instanceof SSLException)) {
            return true;
        }
        return false;
    }
}
