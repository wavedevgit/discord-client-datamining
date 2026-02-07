package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f43686a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43687b;

    public a(String workSpecId, String prerequisiteId) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        Intrinsics.checkNotNullParameter(prerequisiteId, "prerequisiteId");
        this.f43686a = workSpecId;
        this.f43687b = prerequisiteId;
    }

    public final String a() {
        return this.f43687b;
    }

    public final String b() {
        return this.f43686a;
    }
}
