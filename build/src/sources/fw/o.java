package fw;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final int f24454d;

    /* renamed from: e  reason: collision with root package name */
    private final String f24455e;

    /* renamed from: i  reason: collision with root package name */
    private final transient z f24456i;

    public o(z zVar) {
        super(a(zVar));
        this.f24454d = zVar.b();
        this.f24455e = zVar.h();
        this.f24456i = zVar;
    }

    private static String a(z zVar) {
        Objects.requireNonNull(zVar, "response == null");
        return "HTTP " + zVar.b() + " " + zVar.h();
    }
}
