package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeCheckerState f35107d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeSystemContext f35108e;

    /* renamed from: i  reason: collision with root package name */
    private final RigidTypeMarker f35109i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f35110o;

    public b(TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        this.f35107d = typeCheckerState;
        this.f35108e = typeSystemContext;
        this.f35109i = rigidTypeMarker;
        this.f35110o = rigidTypeMarker2;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        boolean r10;
        r10 = AbstractTypeChecker.r(this.f35107d, this.f35108e, this.f35109i, this.f35110o);
        return Boolean.valueOf(r10);
    }
}
