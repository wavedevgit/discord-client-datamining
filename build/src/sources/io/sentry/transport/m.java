package io.sentry.transport;

import java.net.Authenticator;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
final class m {

    /* renamed from: a  reason: collision with root package name */
    private static final m f30758a = new m();

    private m() {
    }

    public static m a() {
        return f30758a;
    }

    public void b(Authenticator authenticator) {
        Authenticator.setDefault(authenticator);
    }
}
