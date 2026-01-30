package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeCheckerState f35941d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeSystemContext f35942e;

    /* renamed from: i  reason: collision with root package name */
    private final RigidTypeMarker f35943i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f35944o;

    public b(TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        this.f35941d = typeCheckerState;
        this.f35942e = typeSystemContext;
        this.f35943i = rigidTypeMarker;
        this.f35944o = rigidTypeMarker2;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        boolean r10;
        r10 = AbstractTypeChecker.r(this.f35941d, this.f35942e, this.f35943i, this.f35944o);
        return Boolean.valueOf(r10);
    }
}
