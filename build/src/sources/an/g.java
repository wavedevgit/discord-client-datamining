package an;

import an.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f798a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f799b;

    /* renamed from: c  reason: collision with root package name */
    private g f800c;

    public g(String key, Job job) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f798a = key;
        this.f799b = job;
    }

    public final Job c() {
        return this.f799b;
    }

    public final String d() {
        return this.f798a;
    }

    @Override // an.e.a
    /* renamed from: e */
    public g a() {
        return this.f800c;
    }

    @Override // an.e.a
    /* renamed from: f */
    public void b(g gVar) {
        this.f800c = gVar;
    }
}
