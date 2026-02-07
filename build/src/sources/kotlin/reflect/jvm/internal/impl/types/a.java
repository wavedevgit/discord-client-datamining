package kotlin.reflect.jvm.internal.impl.types;

import java.util.Collection;
import kotlin.Unit;
import kotlin.jvm.functions.Function1;
import kotlin.reflect.jvm.internal.impl.types.TypeCheckerState;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class a implements Function1 {

    /* renamed from: d  reason: collision with root package name */
    private final Collection f34695d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeCheckerState f34696e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeSystemContext f34697i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f34698o;

    public a(Collection collection, TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker) {
        this.f34695d = collection;
        this.f34696e = typeCheckerState;
        this.f34697i = typeSystemContext;
        this.f34698o = rigidTypeMarker;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit q10;
        q10 = AbstractTypeChecker.q(this.f34695d, this.f34696e, this.f34697i, this.f34698o, (TypeCheckerState.ForkPointContext) obj);
        return q10;
    }
}
