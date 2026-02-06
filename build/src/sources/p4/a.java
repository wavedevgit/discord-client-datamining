package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f43638a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43639b;

    public a(String workSpecId, String prerequisiteId) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        Intrinsics.checkNotNullParameter(prerequisiteId, "prerequisiteId");
        this.f43638a = workSpecId;
        this.f43639b = prerequisiteId;
    }

    public final String a() {
        return this.f43639b;
    }

    public final String b() {
        return this.f43638a;
    }
}
