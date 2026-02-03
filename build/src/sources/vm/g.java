package vm;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
import vm.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f51395a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f51396b;

    /* renamed from: c  reason: collision with root package name */
    private g f51397c;

    public g(String key, Job job) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f51395a = key;
        this.f51396b = job;
    }

    public final Job c() {
        return this.f51396b;
    }

    public final String d() {
        return this.f51395a;
    }

    @Override // vm.e.a
    /* renamed from: e */
    public g a() {
        return this.f51397c;
    }

    @Override // vm.e.a
    /* renamed from: f */
    public void b(g gVar) {
        this.f51397c = gVar;
    }
}
