package id.zelory.compressor.constraint;

import ir.a;
import java.util.ArrayList;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class Compression {

    /* renamed from: a  reason: collision with root package name */
    private final List f26803a = new ArrayList();

    public final void a(a constraint) {
        Intrinsics.checkParameterIsNotNull(constraint, "constraint");
        this.f26803a.add(constraint);
    }

    public final List b() {
        return this.f26803a;
    }
}
