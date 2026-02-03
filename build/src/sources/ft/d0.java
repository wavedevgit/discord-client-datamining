package ft;

import kotlin.jvm.functions.Function2;
import kotlin.jvm.internal.FunctionReferenceImpl;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.serialization.descriptors.SerialDescriptor;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class d0 {

    /* renamed from: a  reason: collision with root package name */
    private final dt.z f24713a;

    /* renamed from: b  reason: collision with root package name */
    private boolean f24714b;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
    /* synthetic */ class a extends FunctionReferenceImpl implements Function2 {
        a(Object obj) {
            super(2, obj, d0.class, "readIfAbsent", "readIfAbsent(Lkotlinx/serialization/descriptors/SerialDescriptor;I)Z", 0);
        }

        public final Boolean a(SerialDescriptor p02, int i10) {
            Intrinsics.checkNotNullParameter(p02, "p0");
            return Boolean.valueOf(((d0) this.receiver).e(p02, i10));
        }

        @Override // kotlin.jvm.functions.Function2
        public /* bridge */ /* synthetic */ Object invoke(Object obj, Object obj2) {
            return a((SerialDescriptor) obj, ((Number) obj2).intValue());
        }
    }

    public d0(SerialDescriptor descriptor) {
        Intrinsics.checkNotNullParameter(descriptor, "descriptor");
        this.f24713a = new dt.z(descriptor, new a(this));
    }

    /* JADX INFO: Access modifiers changed from: private */
    public final boolean e(SerialDescriptor serialDescriptor, int i10) {
        boolean z10;
        if (!serialDescriptor.i(i10) && serialDescriptor.g(i10).b()) {
            z10 = true;
        } else {
            z10 = false;
        }
        this.f24714b = z10;
        return z10;
    }

    public final boolean b() {
        return this.f24714b;
    }

    public final void c(int i10) {
        this.f24713a.a(i10);
    }

    public final int d() {
        return this.f24713a.d();
    }
}
