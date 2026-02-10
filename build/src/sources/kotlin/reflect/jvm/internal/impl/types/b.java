package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeCheckerState f34630d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeSystemContext f34631e;

    /* renamed from: i  reason: collision with root package name */
    private final RigidTypeMarker f34632i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f34633o;

    public b(TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        this.f34630d = typeCheckerState;
        this.f34631e = typeSystemContext;
        this.f34632i = rigidTypeMarker;
        this.f34633o = rigidTypeMarker2;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        boolean r10;
        r10 = AbstractTypeChecker.r(this.f34630d, this.f34631e, this.f34632i, this.f34633o);
        return Boolean.valueOf(r10);
    }
}
