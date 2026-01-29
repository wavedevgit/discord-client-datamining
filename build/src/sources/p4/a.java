package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f44863a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44864b;

    public a(String workSpecId, String prerequisiteId) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        Intrinsics.checkNotNullParameter(prerequisiteId, "prerequisiteId");
        this.f44863a = workSpecId;
        this.f44864b = prerequisiteId;
    }

    public final String a() {
        return this.f44864b;
    }

    public final String b() {
        return this.f44863a;
    }
}
