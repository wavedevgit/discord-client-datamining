package jt;

import java.util.List;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j2 implements SerialDescriptor, l {

    /* renamed from: a  reason: collision with root package name */
    private final SerialDescriptor f31068a;

    /* renamed from: b  reason: collision with root package name */
    private final String f31069b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f31070c;

    public j2(SerialDescriptor original) {
        Intrinsics.checkNotNullParameter(original, "original");
        this.f31068a = original;
        this.f31069b = original.h() + '?';
        this.f31070c = u1.a(original);
    }

    @Override // jt.l
    public Set a() {
        return this.f31070c;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return true;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f31068a.c(name);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f31068a.d();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f31068a.e(i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof j2) && Intrinsics.areEqual(this.f31068a, ((j2) obj).f31068a)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        return this.f31068a.f(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f31068a.g(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f31068a.getAnnotations();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public ht.k getKind() {
        return this.f31068a.getKind();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f31069b;
    }

    public int hashCode() {
        return this.f31068a.hashCode() * 31;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f31068a.i(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return this.f31068a.isInline();
    }

    public final SerialDescriptor j() {
        return this.f31068a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f31068a);
        sb2.append('?');
        return sb2.toString();
    }
}
