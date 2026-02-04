package xm;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
import xm.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f53431a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f53432b;

    /* renamed from: c  reason: collision with root package name */
    private g f53433c;

    public g(String key, Job job) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f53431a = key;
        this.f53432b = job;
    }

    public final Job c() {
        return this.f53432b;
    }

    public final String d() {
        return this.f53431a;
    }

    @Override // xm.e.a
    /* renamed from: e */
    public g a() {
        return this.f53433c;
    }

    @Override // xm.e.a
    /* renamed from: f */
    public void b(g gVar) {
        this.f53433c = gVar;
    }
}
