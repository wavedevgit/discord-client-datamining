package tt;

import java.util.List;
import java.util.Set;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j2 implements SerialDescriptor, l {

    /* renamed from: a  reason: collision with root package name */
    private final SerialDescriptor f50580a;

    /* renamed from: b  reason: collision with root package name */
    private final String f50581b;

    /* renamed from: c  reason: collision with root package name */
    private final Set f50582c;

    public j2(SerialDescriptor original) {
        Intrinsics.checkNotNullParameter(original, "original");
        this.f50580a = original;
        this.f50581b = original.h() + '?';
        this.f50582c = u1.a(original);
    }

    @Override // tt.l
    public Set a() {
        return this.f50582c;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return true;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        return this.f50580a.c(name);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return this.f50580a.d();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        return this.f50580a.e(i10);
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if ((obj instanceof j2) && Intrinsics.areEqual(this.f50580a, ((j2) obj).f50580a)) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        return this.f50580a.f(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return this.f50580a.g(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return this.f50580a.getAnnotations();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public st.k getKind() {
        return this.f50580a.getKind();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return this.f50581b;
    }

    public int hashCode() {
        return this.f50580a.hashCode() * 31;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        return this.f50580a.i(i10);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return this.f50580a.isInline();
    }

    public final SerialDescriptor j() {
        return this.f50580a;
    }

    public String toString() {
        StringBuilder sb2 = new StringBuilder();
        sb2.append(this.f50580a);
        sb2.append('?');
        return sb2.toString();
    }
}
