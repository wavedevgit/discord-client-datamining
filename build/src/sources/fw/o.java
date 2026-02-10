package fw;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final int f24453d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24454e;

    /* renamed from: i  reason: collision with root package name */
    private final transient z f24455i;

    public o(z zVar) {
        super(a(zVar));
        this.f24453d = zVar.b();
        this.f24454e = zVar.h();
        this.f24455i = zVar;
    }

    private static String a(z zVar) {
        Objects.requireNonNull(zVar, "response == null");
        return "HTTP " + zVar.b() + " " + zVar.h();
    }
}
