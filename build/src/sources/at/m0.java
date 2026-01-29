package at;

import java.util.Arrays;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class m0 extends a2 {

    /* renamed from: m  reason: collision with root package name */
    private final boolean f6839m;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public m0(String name, h0 generatedSerializer) {
        super(name, generatedSerializer, 1);
        Intrinsics.checkNotNullParameter(name, "name");
        Intrinsics.checkNotNullParameter(generatedSerializer, "generatedSerializer");
        this.f6839m = true;
    }

    @Override // at.a2
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (!(obj instanceof m0)) {
            return false;
        }
        SerialDescriptor serialDescriptor = (SerialDescriptor) obj;
        if (!Intrinsics.areEqual(h(), serialDescriptor.h())) {
            return false;
        }
        m0 m0Var = (m0) obj;
        if (!m0Var.isInline() || !Arrays.equals(t(), m0Var.t()) || d() != serialDescriptor.d()) {
            return false;
        }
        int d10 = d();
        for (int i10 = 0; i10 < d10; i10++) {
            if (!Intrinsics.areEqual(g(i10).h(), serialDescriptor.g(i10).h()) || !Intrinsics.areEqual(g(i10).getKind(), serialDescriptor.g(i10).getKind())) {
                return false;
            }
        }
        return true;
    }

    @Override // at.a2
    public int hashCode() {
        return super.hashCode() * 31;
    }

    @Override // at.a2, kotlinx.serialization.descriptors.SerialDescriptor
    public boolean isInline() {
        return this.f6839m;
    }
}
