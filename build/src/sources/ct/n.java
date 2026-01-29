package ct;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class n extends m {

    /* renamed from: c  reason: collision with root package name */
    private final boolean f21376c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public n(z writer, boolean z10) {
        super(writer);
        Intrinsics.checkNotNullParameter(writer, "writer");
        this.f21376c = z10;
    }

    @Override // ct.m
    public void n(String value) {
        Intrinsics.checkNotNullParameter(value, "value");
        if (this.f21376c) {
            super.n(value);
        } else {
            super.k(value);
        }
    }
}
