package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeCheckerState f34631d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeSystemContext f34632e;

    /* renamed from: i  reason: collision with root package name */
    private final RigidTypeMarker f34633i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f34634o;

    public b(TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        this.f34631d = typeCheckerState;
        this.f34632e = typeSystemContext;
        this.f34633i = rigidTypeMarker;
        this.f34634o = rigidTypeMarker2;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        boolean r10;
        r10 = AbstractTypeChecker.r(this.f34631d, this.f34632e, this.f34633i, this.f34634o);
        return Boolean.valueOf(r10);
    }
}
