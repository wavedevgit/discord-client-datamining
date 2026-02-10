package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final String f42973a;

    /* renamed from: b  reason: collision with root package name */
    private final String f42974b;

    public n(String name, String workSpecId) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f42973a = name;
        this.f42974b = workSpecId;
    }

    public final String a() {
        return this.f42973a;
    }

    public final String b() {
        return this.f42974b;
    }
}
