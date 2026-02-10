package kt;

import java.util.List;
import jt.l;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class j1 implements SerialDescriptor {

    /* renamed from: a  reason: collision with root package name */
    public static final j1 f35157a = new j1();

    /* renamed from: b  reason: collision with root package name */
    private static final jt.k f35158b = l.d.f30498a;

    /* renamed from: c  reason: collision with root package name */
    private static final String f35159c = "kotlin.Nothing";

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
        throw new rr.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public int d() {
        return 0;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String e(int i10) {
        a();
        throw new rr.h();
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
        throw new rr.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        a();
        throw new rr.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public List getAnnotations() {
        return SerialDescriptor.a.a(this);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public jt.k getKind() {
        return f35158b;
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public String h() {
        return f35159c;
    }

    public int hashCode() {
        return h().hashCode() + (getKind().hashCode() * 31);
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean i(int i10) {
        a();
        throw new rr.h();
    }

    @Override // kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return SerialDescriptor.a.b(this);
    }

    public String toString() {
        return "NothingSerialDescriptor";
    }
}
