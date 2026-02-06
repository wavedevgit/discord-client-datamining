package cn;

import cn.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f7594a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f7595b;

    /* renamed from: c  reason: collision with root package name */
    private g f7596c;

    public g(String key, Job job) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f7594a = key;
        this.f7595b = job;
    }

    public final Job c() {
        return this.f7595b;
    }

    public final String d() {
        return this.f7594a;
    }

    @Override // cn.e.a
    /* renamed from: e */
    public g a() {
        return this.f7596c;
    }

    @Override // cn.e.a
    /* renamed from: f */
    public void b(g gVar) {
        this.f7596c = gVar;
    }
}
