package dt;

import java.util.List;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j2 implements SerialDescriptor, l {

    /* renamed from: a  reason: collision with root package name */
    private final SerialDescriptor f20957a;

    /* renamed from: b  reason: collision with root package name */
    private final String f20958b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f20959c;

    public j2(SerialDescriptor original) {
        Intrinsics.checkNotNullParameter(original, "original");
        this.f20957a = original;
        this.f20958b = original.h() + '?';
        this.f20959c = u1.a(original);
    }

    @Override // dt.l
    public Set a() {
        return this.f20959c;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return true;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f20957a.c(name);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f20957a.d();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f20957a.e(i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof j2) && Intrinsics.areEqual(this.f20957a, ((j2) obj).f20957a)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        return this.f20957a.f(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f20957a.g(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f20957a.getAnnotations();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public ct.k getKind() {
        return this.f20957a.getKind();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f20958b;
    }

    public int hashCode() {
        return this.f20957a.hashCode() * 31;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f20957a.i(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return this.f20957a.isInline();
    }

    public final SerialDescriptor j() {
        return this.f20957a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f20957a);
        sb2.append('?');
        return sb2.toString();
    }
}
