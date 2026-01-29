package iv;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final int f31349d;

    /* renamed from: e  reason: collision with root package name */
    private final String f31350e;

    /* renamed from: i  reason: collision with root package name */
    private final transient z f31351i;

    public o(z zVar) {
        super(a(zVar));
        this.f31349d = zVar.b();
        this.f31350e = zVar.h();
        this.f31351i = zVar;
    }

    private static String a(z zVar) {
        Objects.requireNonNull(zVar, "response == null");
        return "HTTP " + zVar.b() + " " + zVar.h();
    }
}
