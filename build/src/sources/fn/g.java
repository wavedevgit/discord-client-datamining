package fn;

import fn.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f23890a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f23891b;

    /* renamed from: c  reason: collision with root package name */
    private g f23892c;

    public g(String key, Job job) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f23890a = key;
        this.f23891b = job;
    }

    public final Job c() {
        return this.f23891b;
    }

    public final String d() {
        return this.f23890a;
    }

    @Override // fn.e.a
    /* renamed from: e */
    public g a() {
        return this.f23892c;
    }

    @Override // fn.e.a
    /* renamed from: f */
    public void b(g gVar) {
        this.f23892c = gVar;
    }
}
