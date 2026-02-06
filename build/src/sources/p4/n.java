package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final String f43670a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43671b;

    public n(String name, String workSpecId) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f43670a = name;
        this.f43671b = workSpecId;
    }

    public final String a() {
        return this.f43670a;
    }

    public final String b() {
        return this.f43671b;
    }
}
