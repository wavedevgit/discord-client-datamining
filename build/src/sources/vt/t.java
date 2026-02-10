package vt;

import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes5.dex */
public final class t extends m {

    /* renamed from: c  reason: collision with root package name */
    private final boolean f51954c;

    /* JADX WARN: 'super' call moved to the top of the method (can break code semantics) */
    public t(z writer, boolean z10) {
        super(writer);
        Intrinsics.checkNotNullParameter(writer, "writer");
        this.f51954c = z10;
    }

    @Override // vt.m
    public void e(byte b10) {
        boolean z10 = this.f51954c;
        String g10 = as.x.g(as.x.d(b10));
        if (z10) {
            n(g10);
        } else {
            k(g10);
        }
    }

    @Override // vt.m
    public void i(int i10) {
        boolean z10 = this.f51954c;
        String a10 = q.a(as.z.d(i10));
        if (z10) {
            n(a10);
        } else {
            k(a10);
        }
    }

    @Override // vt.m
    public void j(long j10) {
        String a10;
        String a11;
        boolean z10 = this.f51954c;
        long d10 = as.b0.d(j10);
        if (z10) {
            a11 = s.a(d10, 10);
            n(a11);
            return;
        }
        a10 = s.a(d10, 10);
        k(a10);
    }

    @Override // vt.m
    public void l(short s10) {
        boolean z10 = this.f51954c;
        String g10 = as.e0.g(as.e0.d(s10));
        if (z10) {
            n(g10);
        } else {
            k(g10);
        }
    }
}
