package jt;

import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlin.reflect.KClass;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
final class c implements SerialDescriptor {

    /* renamed from: a  reason: collision with root package name */
    private final SerialDescriptor f30471a;

    /* renamed from: b  reason: collision with root package name */
    public final KClass f30472b;

    /* renamed from: c  reason: collision with root package name */
    private final String f30473c;

    public c(SerialDescriptor original, KClass kClass) {
        Intrinsics.checkNotNullParameter(original, "original");
        Intrinsics.checkNotNullParameter(kClass, "kClass");
        this.f30471a = original;
        this.f30472b = kClass;
        this.f30473c = original.h() + '<' + kClass.getSimpleName() + '>';
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return this.f30471a.b();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f30471a.c(name);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f30471a.d();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f30471a.e(i10);
    }

    public boolean equals(Object obj) {
        c cVar;
        if (obj instanceof c) {
            cVar = (c) obj;
        } else {
            cVar = null;
        }
        if (cVar == null || !Intrinsics.areEqual(this.f30471a, cVar.f30471a) || !Intrinsics.areEqual(cVar.f30472b, this.f30472b)) {
            return false;
        }
        return true;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        return this.f30471a.f(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f30471a.g(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f30471a.getAnnotations();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public k getKind() {
        return this.f30471a.getKind();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f30473c;
    }

    public int hashCode() {
        return (this.f30472b.hashCode() * 31) + h().hashCode();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f30471a.i(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return this.f30471a.isInline();
    }

    public String toString() {
        return "ContextDescriptor(kClass: " + this.f30472b + ", original: " + this.f30471a + ')';
    }
}
