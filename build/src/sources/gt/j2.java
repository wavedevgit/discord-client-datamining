package gt;

import java.util.List;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j2 implements SerialDescriptor, l {

    /* renamed from: a  reason: collision with root package name */
    private final SerialDescriptor f25281a;

    /* renamed from: b  reason: collision with root package name */
    private final String f25282b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f25283c;

    public j2(SerialDescriptor original) {
        Intrinsics.checkNotNullParameter(original, "original");
        this.f25281a = original;
        this.f25282b = original.h() + '?';
        this.f25283c = u1.a(original);
    }

    @Override // gt.l
    public Set a() {
        return this.f25283c;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return true;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f25281a.c(name);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f25281a.d();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f25281a.e(i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof j2) && Intrinsics.areEqual(this.f25281a, ((j2) obj).f25281a)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        return this.f25281a.f(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f25281a.g(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f25281a.getAnnotations();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public ft.k getKind() {
        return this.f25281a.getKind();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f25282b;
    }

    public int hashCode() {
        return this.f25281a.hashCode() * 31;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f25281a.i(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return this.f25281a.isInline();
    }

    public final SerialDescriptor j() {
        return this.f25281a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f25281a);
        sb2.append('?');
        return sb2.toString();
    }
}
