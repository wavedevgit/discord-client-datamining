package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeCheckerState f35199d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeSystemContext f35200e;

    /* renamed from: i  reason: collision with root package name */
    private final RigidTypeMarker f35201i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f35202o;

    public b(TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        this.f35199d = typeCheckerState;
        this.f35200e = typeSystemContext;
        this.f35201i = rigidTypeMarker;
        this.f35202o = rigidTypeMarker2;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        boolean r10;
        r10 = AbstractTypeChecker.r(this.f35199d, this.f35200e, this.f35201i, this.f35202o);
        return Boolean.valueOf(r10);
    }
}
