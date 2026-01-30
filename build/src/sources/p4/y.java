package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final String f44986a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44987b;

    public y(String tag, String workSpecId) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f44986a = tag;
        this.f44987b = workSpecId;
    }

    public final String a() {
        return this.f44986a;
    }

    public final String b() {
        return this.f44987b;
    }
}
