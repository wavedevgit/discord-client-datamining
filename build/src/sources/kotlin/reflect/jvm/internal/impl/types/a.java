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
    private final Collection f35103d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeCheckerState f35104e;

    /* renamed from: i  reason: collision with root package name */
    private final TypeSystemContext f35105i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f35106o;

    public a(Collection collection, TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker) {
        this.f35103d = collection;
        this.f35104e = typeCheckerState;
        this.f35105i = typeSystemContext;
        this.f35106o = rigidTypeMarker;
    }

    @Override // kotlin.jvm.functions.Function1
    public Object invoke(Object obj) {
        Unit q10;
        q10 = AbstractTypeChecker.q(this.f35103d, this.f35104e, this.f35105i, this.f35106o, (TypeCheckerState.ForkPointContext) obj);
        return q10;
    }
}
