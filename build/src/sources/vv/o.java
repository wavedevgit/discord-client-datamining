package vv;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final int f53053d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53054e;

    /* renamed from: i  reason: collision with root package name */
    private final transient z f53055i;

    public o(z zVar) {
        super(a(zVar));
        this.f53053d = zVar.b();
        this.f53054e = zVar.h();
        this.f53055i = zVar;
    }

    private static String a(z zVar) {
        Objects.requireNonNull(zVar, "response == null");
        return "HTTP " + zVar.b() + " " + zVar.h();
    }
}
