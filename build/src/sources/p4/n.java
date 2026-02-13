package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final String f42000a;

    /* renamed from: b  reason: collision with root package name */
    private final String f42001b;

    public n(String name, String workSpecId) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f42000a = name;
        this.f42001b = workSpecId;
    }

    public final String a() {
        return this.f42000a;
    }

    public final String b() {
        return this.f42001b;
    }
}
