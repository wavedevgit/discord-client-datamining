package kotlin.reflect.jvm.internal.impl.descriptors.annotations;

import org.jetbrains.annotations.NotNull;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public class AnnotatedImpl implements Annotated {

    /* renamed from: d  reason: collision with root package name */
    private final Annotations f33631d;

    public AnnotatedImpl(@NotNull Annotations annotations) {
        if (annotations == null) {
            a(0);
        }
        this.f33631d = annotations;
    }

    private static /* synthetic */ void a(int i10) {
        String str = i10 != 1 ? "Argument for @NotNull parameter '%s' of %s.%s must not be null" : "@NotNull method %s.%s must not return null";
        Object[] objArr = new Object[i10 != 1 ? 3 : 2];
        if (i10 != 1) {
            objArr[0] = "annotations";
        } else {
            objArr[0] = "kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotatedImpl";
        }
        if (i10 != 1) {
            objArr[1] = "kotlin/reflect/jvm/internal/impl/descriptors/annotations/AnnotatedImpl";
        } else {
            objArr[1] = "getAnnotations";
        }
        if (i10 != 1) {
            objArr[2] = "<init>";
        }
        String format = String.format(str, objArr);
        if (i10 == 1) {
            throw new IllegalStateException(format);
        }
    }

    @Override // kotlin.reflect.jvm.internal.impl.descriptors.annotations.Annotated
    @NotNull
    public Annotations getAnnotations() {
        Annotations annotations = this.f33631d;
        if (annotations == null) {
            a(1);
        }
        return annotations;
    }
}
