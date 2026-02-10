package kt;

import jt.k;
import jt.l;
import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a2 {

    /* renamed from: m  reason: collision with root package name */
    private final jt.k f35108m;

    /* renamed from: n  reason: collision with root package name */
    private final Lazy f35109n;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b0(final String name, final int i10) {
        super(name, null, i10, 2, null);
        Intrinsics.checkNotNullParameter(name, "name");
        this.f35108m = k.b.f30494a;
        this.f35109n = rr.l.a(new Function0() { // from class: kt.a0
            @Override // kotlin.jvm.functions.Function0
            public final Object invoke() {
                SerialDescriptor[] A;
                A = b0.A(i10, name, this);
                return A;
            }
        });
    }

    /* JADX INFO: Access modifiers changed from: private */
    public static final SerialDescriptor[] A(int i10, String str, b0 b0Var) {
        SerialDescriptor[] serialDescriptorArr = new SerialDescriptor[i10];
        for (int i11 = 0; i11 < i10; i11++) {
            serialDescriptorArr[i11] = jt.j.e(str + '.' + b0Var.e(i11), l.d.f30498a, new SerialDescriptor[0], null, 8, null);
        }
        return serialDescriptorArr;
    }

    private final SerialDescriptor[] B() {
        return (SerialDescriptor[]) this.f35109n.getValue();
    }

    @Override // kt.a2
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof SerialDescriptor)) {
            return false;
        }
        SerialDescriptor serialDescriptor = (SerialDescriptor) obj;
        if (serialDescriptor.getKind() == k.b.f30494a && Intrinsics.areEqual(h(), serialDescriptor.h()) && Intrinsics.areEqual(u1.a(this), u1.a(serialDescriptor))) {
            return true;
        }
        return false;
    }

    @Override // kt.a2, kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return B()[i10];
    }

    @Override // kt.a2, kotlinx.serialization.descriptors.SerialDescriptor
    public jt.k getKind() {
        return this.f35108m;
    }

    @Override // kt.a2
    public int hashCode() {
        int i10;
        int hashCode = h().hashCode();
        int i11 = 1;
        for (String str : jt.h.b(this)) {
            int i12 = i11 * 31;
            if (str != null) {
                i10 = str.hashCode();
            } else {
                i10 = 0;
            }
            i11 = i12 + i10;
        }
        return (hashCode * 31) + i11;
    }

    @Override // kt.a2
    public String toString() {
        Iterable b10 = jt.h.b(this);
        return CollectionsKt.x0(b10, ", ", h() + '(', ")", 0, null, null, 56, null);
    }
}
