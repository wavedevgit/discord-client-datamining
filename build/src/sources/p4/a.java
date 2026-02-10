package p4;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class a {

    /* renamed from: a  reason: collision with root package name */
    private final String f42941a;

    /* renamed from: b  reason: collision with root package name */
    private final String f42942b;

    public a(String workSpecId, String prerequisiteId) {
        Intrinsics.checkNotNullParameter(workSpecId, "workSpecId");
        Intrinsics.checkNotNullParameter(prerequisiteId, "prerequisiteId");
        this.f42941a = workSpecId;
        this.f42942b = prerequisiteId;
    }

    public final String a() {
        return this.f42942b;
    }

    public final String b() {
        return this.f42941a;
    }
}
