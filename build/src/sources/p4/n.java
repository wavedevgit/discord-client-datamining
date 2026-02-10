package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final String f41431a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41432b;

    public n(String name, String workSpecId) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f41431a = name;
        this.f41432b = workSpecId;
    }

    public final String a() {
        return this.f41431a;
    }

    public final String b() {
        return this.f41432b;
    }
}
