package zs;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c implements SerialDescriptor {

    /* renamed from: a  reason: collision with root package name */
    private final SerialDescriptor f56094a;

    /* renamed from: b  reason: collision with root package name */
    public final KClass f56095b;

    /* renamed from: c  reason: collision with root package name */
    private final String f56096c;

    public c(SerialDescriptor original, KClass kClass) {
        Intrinsics.checkNotNullParameter(original, "original");
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        this.f56094a = original;
        this.f56095b = kClass;
        this.f56096c = original.h() + '<' + kClass.getSimpleName() + '>';
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return this.f56094a.b();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f56094a.c(name);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f56094a.d();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f56094a.e(i10);
    }

    public boolean equals(Object obj) {
        c cVar;
        if (obj instanceof c) {
            cVar = (c) obj;
        } else {
            cVar = null;
        }
        if (cVar == null || !Intrinsics.areEqual(this.f56094a, cVar.f56094a) || !Intrinsics.areEqual(cVar.f56095b, this.f56095b)) {
            return false;
        }
        return true;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        return this.f56094a.f(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f56094a.g(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f56094a.getAnnotations();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public k getKind() {
        return this.f56094a.getKind();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f56096c;
    }

    public int hashCode() {
        return (this.f56095b.hashCode() * 31) + h().hashCode();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f56094a.i(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return this.f56094a.isInline();
    }

    public String toString() {
        return "ContextDescriptor(kClass: " + this.f56095b + ", original: " + this.f56094a + ')';
    }
}
