package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f44911a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44912b;

    public a(String workSpecId, String prerequisiteId) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        Intrinsics.checkNotNullParameter(prerequisiteId, "prerequisiteId");
        this.f44911a = workSpecId;
        this.f44912b = prerequisiteId;
    }

    public final String a() {
        return this.f44912b;
    }

    public final String b() {
        return this.f44911a;
    }
}
