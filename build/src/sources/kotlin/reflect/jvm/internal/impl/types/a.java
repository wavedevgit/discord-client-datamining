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
    private final Collection f34647d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeCheckerState f34648e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeSystemContext f34649i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f34650o;

    public a(Collection collection, TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker) {
        this.f34647d = collection;
        this.f34648e = typeCheckerState;
        this.f34649i = typeSystemContext;
        this.f34650o = rigidTypeMarker;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit q10;
        q10 = AbstractTypeChecker.q(this.f34647d, this.f34648e, this.f34649i, this.f34650o, (TypeCheckerState.ForkPointContext) obj);
        return q10;
    }
}
