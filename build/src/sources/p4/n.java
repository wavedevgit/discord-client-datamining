package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final String f41432a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41433b;

    public n(String name, String workSpecId) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f41432a = name;
        this.f41433b = workSpecId;
    }

    public final String a() {
        return this.f41432a;
    }

    public final String b() {
        return this.f41433b;
    }
}
