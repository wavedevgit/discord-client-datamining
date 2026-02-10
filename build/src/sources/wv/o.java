package wv;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final int f54128d;

    /* renamed from: e  reason: collision with root package name */
    private final String f54129e;

    /* renamed from: i  reason: collision with root package name */
    private final transient z f54130i;

    public o(z zVar) {
        super(a(zVar));
        this.f54128d = zVar.b();
        this.f54129e = zVar.h();
        this.f54130i = zVar;
    }

    private static String a(z zVar) {
        Objects.requireNonNull(zVar, "response == null");
        return "HTTP " + zVar.b() + " " + zVar.h();
    }
}
