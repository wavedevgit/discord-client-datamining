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
    private final Collection f34626d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeCheckerState f34627e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeSystemContext f34628i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f34629o;

    public a(Collection collection, TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker) {
        this.f34626d = collection;
        this.f34627e = typeCheckerState;
        this.f34628i = typeSystemContext;
        this.f34629o = rigidTypeMarker;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit q10;
        q10 = AbstractTypeChecker.q(this.f34626d, this.f34627e, this.f34628i, this.f34629o, (TypeCheckerState.ForkPointContext) obj);
        return q10;
    }
}
