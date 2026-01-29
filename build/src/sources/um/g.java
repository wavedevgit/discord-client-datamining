package um;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
import um.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f50423a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f50424b;

    /* renamed from: c  reason: collision with root package name */
    private g f50425c;

    public g(String key, Job job) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f50423a = key;
        this.f50424b = job;
    }

    public final Job c() {
        return this.f50424b;
    }

    public final String d() {
        return this.f50423a;
    }

    @Override // um.e.a
    /* renamed from: e */
    public g a() {
        return this.f50425c;
    }

    @Override // um.e.a
    /* renamed from: f */
    public void b(g gVar) {
        this.f50425c = gVar;
    }
}
