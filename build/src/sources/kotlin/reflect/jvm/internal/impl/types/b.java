package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeCheckerState f34408d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeSystemContext f34409e;

    /* renamed from: i  reason: collision with root package name */
    private final RigidTypeMarker f34410i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f34411o;

    public b(TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        this.f34408d = typeCheckerState;
        this.f34409e = typeSystemContext;
        this.f34410i = rigidTypeMarker;
        this.f34411o = rigidTypeMarker2;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        boolean r10;
        r10 = AbstractTypeChecker.r(this.f34408d, this.f34409e, this.f34410i, this.f34411o);
        return Boolean.valueOf(r10);
    }
}
