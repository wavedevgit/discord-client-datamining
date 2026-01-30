package id.zelory.compressor.constraint;

import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import zq.a;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Compression {

    /* renamed from: a  reason: collision with root package name */
    private final List f28461a = new ArrayList();

    public final void a(a constraint) {
        Intrinsics.checkParameterIsNotNull(constraint, "constraint");
        this.f28461a.add(constraint);
    }

    public final List b() {
        return this.f28461a;
    }
}
