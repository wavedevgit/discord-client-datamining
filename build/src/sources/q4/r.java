package q4;

import androidx.work.impl.a0;
import kotlin.jvm.internal.Intrinsics;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class r implements Runnable {

    /* renamed from: d  reason: collision with root package name */
    private final androidx.work.impl.u f47421d;

    /* renamed from: e  reason: collision with root package name */
    private final a0 f47422e;

    /* renamed from: i  reason: collision with root package name */
    private final boolean f47423i;

    /* renamed from: o  reason: collision with root package name */
    private final int f47424o;

    public r(androidx.work.impl.u processor, a0 token, boolean z10, int i10) {
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(token, "token");
        this.f47421d = processor;
        this.f47422e = token;
        this.f47423i = z10;
        this.f47424o = i10;
    }

    @Override // java.lang.Runnable
    public void run() {
        boolean t10;
        if (this.f47423i) {
            t10 = this.f47421d.s(this.f47422e, this.f47424o);
        } else {
            t10 = this.f47421d.t(this.f47422e, this.f47424o);
        }
        k4.m e10 = k4.m.e();
        String i10 = k4.m.i("StopWorkRunnable");
        e10.a(i10, "StopWorkRunnable for " + this.f47422e.a().b() + "; Processor.stopWork = " + t10);
    }

    /* JADX WARN: 'this' call moved to the top of the method (can break code semantics) */
    public r(androidx.work.impl.u processor, a0 token, boolean z10) {
        this(processor, token, z10, -512);
        Intrinsics.checkNotNullParameter(processor, "processor");
        Intrinsics.checkNotNullParameter(token, "token");
    }
}
