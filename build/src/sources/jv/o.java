package jv;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final int f32462d;

    /* renamed from: e  reason: collision with root package name */
    private final String f32463e;

    /* renamed from: i  reason: collision with root package name */
    private final transient z f32464i;

    public o(z zVar) {
        super(a(zVar));
        this.f32462d = zVar.b();
        this.f32463e = zVar.h();
        this.f32464i = zVar;
    }

    private static String a(z zVar) {
        Objects.requireNonNull(zVar, "response == null");
        return "HTTP " + zVar.b() + " " + zVar.h();
    }
}
