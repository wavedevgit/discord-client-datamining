package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class n {

    /* renamed from: a  reason: collision with root package name */
    private final String f44911a;

    /* renamed from: b  reason: collision with root package name */
    private final String f44912b;

    public n(String name, String workSpecId) {
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        this.f44911a = name;
        this.f44912b = workSpecId;
    }

    public final String a() {
        return this.f44911a;
    }

    public final String b() {
        return this.f44912b;
    }
}
