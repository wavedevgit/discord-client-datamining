package io.sentry.transport;

import java.net.Authenticator;
import java.net.PasswordAuthentication;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v extends Authenticator {

    /* renamed from: a  reason: collision with root package name */
    private final String f30096a;

    /* renamed from: b  reason: collision with root package name */
    private final String f30097b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(String str, String str2) {
        this.f30096a = (String) io.sentry.util.y.c(str, "user is required");
        this.f30097b = (String) io.sentry.util.y.c(str2, "password is required");
    }

    @Override // java.net.Authenticator
    protected PasswordAuthentication getPasswordAuthentication() {
        if (getRequestorType() == Authenticator.RequestorType.PROXY) {
            return new PasswordAuthentication(this.f30096a, this.f30097b.toCharArray());
        }
        return null;
    }
}
