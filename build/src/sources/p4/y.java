package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class y {

    /* renamed from: a  reason: collision with root package name */
    private final String f45060a;

    /* renamed from: b  reason: collision with root package name */
    private final String f45061b;

    public y(String tag, String workSpecId) {
        Intrinsics.checkNotNullParameter(tag, "tag");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f45060a = tag;
        this.f45061b = workSpecId;
    }

    public final String a() {
        return this.f45060a;
    }

    public final String b() {
        return this.f45061b;
    }
}
