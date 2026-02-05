package gt;

import ft.l;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j1 implements SerialDescriptor {

    /* renamed from: a  reason: collision with root package name */
    public static final j1 f25278a = new j1();

    /* renamed from: b  reason: collision with root package name */
    private static final ft.k f25279b = l.d.f23497a;

    /* renamed from: c  reason: collision with root package name */
    private static final String f25280c = "kotlin.Nothing";

    private j1() {
    }

    private final Void a() {
        throw new IllegalStateException("Descriptor for type `kotlin.Nothing` does not have elements");
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean b() {
        return SerialDescriptor.a.c(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int c(String name) {
        Intrinsics.checkNotNullParameter(name, "name");
        a();
        throw new or.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return 0;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        a();
        throw new or.h();
    }

    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        return false;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List f(int i10) {
        a();
        throw new or.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        a();
        throw new or.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return SerialDescriptor.a.a(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public ft.k getKind() {
        return f25279b;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return f25280c;
    }

    public int hashCode() {
        return h().hashCode() + (getKind().hashCode() * 31);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        a();
        throw new or.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return SerialDescriptor.a.b(this);
    }

    public String toString() {
        return "NothingSerialDescriptor";
    }
}
