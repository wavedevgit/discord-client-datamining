package um;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
import um.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f50439a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f50440b;

    /* renamed from: c  reason: collision with root package name */
    private g f50441c;

    public g(String key, Job job) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f50439a = key;
        this.f50440b = job;
    }

    public final Job c() {
        return this.f50440b;
    }

    public final String d() {
        return this.f50439a;
    }

    @Override // um.e.a
    /* renamed from: e */
    public g a() {
        return this.f50441c;
    }

    @Override // um.e.a
    /* renamed from: f */
    public void b(g gVar) {
        this.f50441c = gVar;
    }
}
