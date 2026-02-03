package lv;

import java.util.Objects;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class o extends RuntimeException {

    /* renamed from: d  reason: collision with root package name */
    private final int f37400d;

    /* renamed from: e  reason: collision with root package name */
    private final String f37401e;

    /* renamed from: i  reason: collision with root package name */
    private final transient z f37402i;

    public o(z zVar) {
        super(a(zVar));
        this.f37400d = zVar.b();
        this.f37401e = zVar.h();
        this.f37402i = zVar;
    }

    private static String a(z zVar) {
        Objects.requireNonNull(zVar, "response == null");
        return "HTTP " + zVar.b() + " " + zVar.h();
    }
}
