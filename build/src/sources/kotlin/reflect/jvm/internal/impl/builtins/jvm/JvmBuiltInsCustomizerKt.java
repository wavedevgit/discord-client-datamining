package kotlin.reflect.jvm.internal.impl.builtins.jvm;

import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.jvm.internal.impl.name.Name;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class JvmBuiltInsCustomizerKt {

    /* renamed from: a  reason: collision with root package name */
    private static final Name f32027a;

    /* renamed from: b  reason: collision with root package name */
    private static final Name f32028b;

    static {
        Name identifier = Name.identifier("getFirst");
        Intrinsics.checkNotNullExpressionValue(identifier, "identifier(...)");
        f32027a = identifier;
        Name identifier2 = Name.identifier("getLast");
        Intrinsics.checkNotNullExpressionValue(identifier2, "identifier(...)");
        f32028b = identifier2;
    }
}
