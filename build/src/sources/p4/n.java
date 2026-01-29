package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final String f44895a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44896b;

    public n(String name, String workSpecId) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f44895a = name;
        this.f44896b = workSpecId;
    }

    public final String a() {
        return this.f44895a;
    }

    public final String b() {
        return this.f44896b;
    }
}
