package kotlin.reflect.jvm.internal.impl.types;

import kotlin.jvm.functions.Function0;
import kotlin.reflect.jvm.internal.impl.types.model.RigidTypeMarker;
import kotlin.reflect.jvm.internal.impl.types.model.TypeSystemContext;
/* JADX INFO: Access modifiers changed from: package-private */
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class b implements Function0 {

    /* renamed from: d  reason: collision with root package name */
    private final TypeCheckerState f34651d;

    /* renamed from: e  reason: collision with root package name */
    private final TypeSystemContext f34652e;

    /* renamed from: i  reason: collision with root package name */
    private final RigidTypeMarker f34653i;

    /* renamed from: o  reason: collision with root package name */
    private final RigidTypeMarker f34654o;

    public b(TypeCheckerState typeCheckerState, TypeSystemContext typeSystemContext, RigidTypeMarker rigidTypeMarker, RigidTypeMarker rigidTypeMarker2) {
        this.f34651d = typeCheckerState;
        this.f34652e = typeSystemContext;
        this.f34653i = rigidTypeMarker;
        this.f34654o = rigidTypeMarker2;
    }

    @Override // kotlin.jvm.functions.Function0
    public Object invoke() {
        boolean r10;
        r10 = AbstractTypeChecker.r(this.f34651d, this.f34652e, this.f34653i, this.f34654o);
        return Boolean.valueOf(r10);
    }
}
