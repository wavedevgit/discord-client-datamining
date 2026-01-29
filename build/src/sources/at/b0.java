package at;

import kotlin.Lazy;
import kotlin.collections.CollectionsKt;
import kotlin.jvm.functions.Function0;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
import zs.k;
import zs.l;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class b0 extends a2 {

    /* renamed from: m  reason: collision with root package name */
    private final zs.k f6775m;

    /* renamed from: n  reason: collision with root package name */
    private final Lazy f6776n;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public b0(final String name, final int i10) {
        super(name, null, i10, 2, null);
        Intrinsics.checkNotNullParameter(name, "name");
        this.f6775m = k.b.f56101a;
        this.f6776n = ir.l.b(new Function0() { // from class: at.a0
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
            serialDescriptorArr[i11] = zs.j.e(str + '.' + b0Var.e(i11), l.d.f56105a, new SerialDescriptor[0], null, 8, null);
        }
        return serialDescriptorArr;
    }

    private final SerialDescriptor[] B() {
        return (SerialDescriptor[]) this.f6776n.getValue();
    }

    @Override // at.a2
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || !(obj instanceof SerialDescriptor)) {
            return false;
        }
        SerialDescriptor serialDescriptor = (SerialDescriptor) obj;
        if (serialDescriptor.getKind() == k.b.f56101a && Intrinsics.areEqual(h(), serialDescriptor.h()) && Intrinsics.areEqual(u1.a(this), u1.a(serialDescriptor))) {
            return true;
        }
        return false;
    }

    @Override // at.a2, kotlinx.serialization.descriptors.SerialDescriptor
    public SerialDescriptor g(int i10) {
        return B()[i10];
    }

    @Override // at.a2, kotlinx.serialization.descriptors.SerialDescriptor
    public zs.k getKind() {
        return this.f6775m;
    }

    @Override // at.a2
    public int hashCode() {
        int i10;
        int hashCode = h().hashCode();
        int i11 = 1;
        for (String str : zs.h.b(this)) {
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

    @Override // at.a2
    public String toString() {
        Iterable b10 = zs.h.b(this);
        return CollectionsKt.x0(b10, ", ", h() + '(', ")", 0, null, null, 56, null);
    }
}
