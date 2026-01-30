package io.sentry.transport;

import java.net.Authenticator;
import java.net.PasswordAuthentication;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class v extends Authenticator {

    /* renamed from: a  reason: collision with root package name */
    private final String f30784a;

    /* renamed from: b  reason: collision with root package name */
    private final String f30785b;

    /* JADX INFO: Access modifiers changed from: package-private */
    public v(String str, String str2) {
        this.f30784a = (String) io.sentry.util.y.c(str, "user is required");
        this.f30785b = (String) io.sentry.util.y.c(str2, "password is required");
    }

    @Override // java.net.Authenticator
    protected PasswordAuthentication getPasswordAuthentication() {
        if (getRequestorType() == Authenticator.RequestorType.PROXY) {
            return new PasswordAuthentication(this.f30784a, this.f30785b.toCharArray());
        }
        return null;
    }
}
