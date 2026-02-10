package kt;

import java.util.List;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j2 implements SerialDescriptor, l {

    /* renamed from: a  reason: collision with root package name */
    private final SerialDescriptor f35160a;

    /* renamed from: b  reason: collision with root package name */
    private final String f35161b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f35162c;

    public j2(SerialDescriptor original) {
        Intrinsics.checkNotNullParameter(original, "original");
        this.f35160a = original;
        this.f35161b = original.h() + '?';
        this.f35162c = u1.a(original);
    }

    @Override // kt.l
    public Set a() {
        return this.f35162c;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return true;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f35160a.c(name);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f35160a.d();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f35160a.e(i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof j2) && Intrinsics.areEqual(this.f35160a, ((j2) obj).f35160a)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        return this.f35160a.f(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f35160a.g(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f35160a.getAnnotations();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public jt.k getKind() {
        return this.f35160a.getKind();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f35161b;
    }

    public int hashCode() {
        return this.f35160a.hashCode() * 31;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f35160a.i(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return this.f35160a.isInline();
    }

    public final SerialDescriptor j() {
        return this.f35160a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f35160a);
        sb2.append('?');
        return sb2.toString();
    }
}
