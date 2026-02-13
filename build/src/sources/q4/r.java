package q4;

import androidx.work.impl.a0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final androidx.work.impl.u f44509d;

    /* renamed from: e  reason: collision with root package name */
    private final a0 f44510e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f44511i;

    /* renamed from: o  reason: collision with root package name */
    private final int f44512o;

    public r(androidx.work.impl.u processor, a0 token, boolean z10, int i10) {
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(token, "token");
        this.f44509d = processor;
        this.f44510e = token;
        this.f44511i = z10;
        this.f44512o = i10;
    }

    @Override // java.lang.Runnable
    public void run() {
        boolean t10;
        if (this.f44511i) {
            t10 = this.f44509d.s(this.f44510e, this.f44512o);
        } else {
            t10 = this.f44509d.t(this.f44510e, this.f44512o);
        }
        k4.m e10 = k4.m.e();
        String i10 = k4.m.i("StopWorkRunnable");
        e10.a(i10, "StopWorkRunnable for " + this.f44510e.a().b() + "; Processor.stopWork = " + t10);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public r(androidx.work.impl.u processor, a0 token, boolean z10) {
        this(processor, token, z10, -512);
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(token, "token");
    }
}
