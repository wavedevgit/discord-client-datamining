package dt;

import ct.l;
import java.util.List;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j1 implements SerialDescriptor {

    /* renamed from: a  reason: collision with root package name */
    public static final j1 f20954a = new j1();

    /* renamed from: b  reason: collision with root package name */
    private static final ct.k f20955b = l.d.f19856a;

    /* renamed from: c  reason: collision with root package name */
    private static final String f20956c = "kotlin.Nothing";

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
        throw new lr.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return 0;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        a();
        throw new lr.h();
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
        throw new lr.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        a();
        throw new lr.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return SerialDescriptor.a.a(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public ct.k getKind() {
        return f20955b;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return f20956c;
    }

    public int hashCode() {
        return h().hashCode() + (getKind().hashCode() * 31);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        a();
        throw new lr.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return SerialDescriptor.a.b(this);
    }

    public String toString() {
        return "NothingSerialDescriptor";
    }
}
