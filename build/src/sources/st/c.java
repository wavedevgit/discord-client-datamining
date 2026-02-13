package st;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c implements SerialDescriptor {

    /* renamed from: a  reason: collision with root package name */
    private final SerialDescriptor f48924a;

    /* renamed from: b  reason: collision with root package name */
    public final KClass f48925b;

    /* renamed from: c  reason: collision with root package name */
    private final String f48926c;

    public c(SerialDescriptor original, KClass kClass) {
        Intrinsics.checkNotNullParameter(original, "original");
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        this.f48924a = original;
        this.f48925b = kClass;
        this.f48926c = original.h() + '<' + kClass.getSimpleName() + '>';
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return this.f48924a.b();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f48924a.c(name);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f48924a.d();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f48924a.e(i10);
    }

    public boolean equals(Object obj) {
        c cVar;
        if (obj instanceof c) {
            cVar = (c) obj;
        } else {
            cVar = null;
        }
        if (cVar == null || !Intrinsics.areEqual(this.f48924a, cVar.f48924a) || !Intrinsics.areEqual(cVar.f48925b, this.f48925b)) {
            return false;
        }
        return true;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        return this.f48924a.f(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f48924a.g(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f48924a.getAnnotations();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public k getKind() {
        return this.f48924a.getKind();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f48926c;
    }

    public int hashCode() {
        return (this.f48925b.hashCode() * 31) + h().hashCode();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f48924a.i(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return this.f48924a.isInline();
    }

    public String toString() {
        return "ContextDescriptor(kClass: " + this.f48925b + ", original: " + this.f48924a + ')';
    }
}
