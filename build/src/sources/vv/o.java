package vv;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final int f53101d;

    /* renamed from: e  reason: collision with root package name */
    private final String f53102e;

    /* renamed from: i  reason: collision with root package name */
    private final transient z f53103i;

    public o(z zVar) {
        super(a(zVar));
        this.f53101d = zVar.b();
        this.f53102e = zVar.h();
        this.f53103i = zVar;
    }

    private static String a(z zVar) {
        Objects.requireNonNull(zVar, "response == null");
        return "HTTP " + zVar.b() + " " + zVar.h();
    }
}
