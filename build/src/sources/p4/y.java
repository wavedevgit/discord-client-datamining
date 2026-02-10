package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final String f41506a;

    /* renamed from: b  reason: collision with root package name */
    private final String f41507b;

    public y(String tag, String workSpecId) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f41506a = tag;
        this.f41507b = workSpecId;
    }

    public final String a() {
        return this.f41506a;
    }

    public final String b() {
        return this.f41507b;
    }
}
