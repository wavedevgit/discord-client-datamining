package jt;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlin.reflect.KType;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class r0 implements KType {

    /* renamed from: d  reason: collision with root package name */
    private final KType f31117d;

    public r0(KType origin) {
        Intrinsics.checkNotNullParameter(origin, "origin");
        this.f31117d = origin;
    }

    public boolean equals(Object obj) {
        r0 r0Var;
        KType kType;
        KType kType2;
        if (obj == null) {
            return false;
        }
        KType kType3 = this.f31117d;
        kotlin.reflect.d dVar = null;
        if (obj instanceof r0) {
            r0Var = (r0) obj;
        } else {
            r0Var = null;
        }
        if (r0Var != null) {
            kType = r0Var.f31117d;
        } else {
            kType = null;
        }
        if (!Intrinsics.areEqual(kType3, kType)) {
            return false;
        }
        kotlin.reflect.d classifier = getClassifier();
        if (classifier instanceof KClass) {
            if (obj instanceof KType) {
                kType2 = (KType) obj;
            } else {
                kType2 = null;
            }
            if (kType2 != null) {
                dVar = kType2.getClassifier();
            }
            if (dVar != null && (dVar instanceof KClass)) {
                return Intrinsics.areEqual(ds.a.b((KClass) classifier), ds.a.b((KClass) dVar));
            }
        }
        return false;
    }

    @Override // kotlin.reflect.b
    public List getAnnotations() {
        return this.f31117d.getAnnotations();
    }

    @Override // kotlin.reflect.KType
    public List getArguments() {
        return this.f31117d.getArguments();
    }

    @Override // kotlin.reflect.KType
    public kotlin.reflect.d getClassifier() {
        return this.f31117d.getClassifier();
    }

    public int hashCode() {
        return this.f31117d.hashCode();
    }

    @Override // kotlin.reflect.KType
    public boolean isMarkedNullable() {
        return this.f31117d.isMarkedNullable();
    }

    public String toString() {
        return "KTypeWrapper: " + this.f31117d;
    }
}
