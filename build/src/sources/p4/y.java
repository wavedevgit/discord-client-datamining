package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final String f43048a;

    /* renamed from: b  reason: collision with root package name */
    private final String f43049b;

    public y(String tag, String workSpecId) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f43048a = tag;
        this.f43049b = workSpecId;
    }

    public final String a() {
        return this.f43048a;
    }

    public final String b() {
        return this.f43049b;
    }
}
