package xm;

import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
import xm.e;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f53434a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f53435b;

    /* renamed from: c  reason: collision with root package name */
    private g f53436c;

    public g(String key, Job job) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f53434a = key;
        this.f53435b = job;
    }

    public final Job c() {
        return this.f53435b;
    }

    public final String d() {
        return this.f53434a;
    }

    @Override // xm.e.a
    /* renamed from: e */
    public g a() {
        return this.f53436c;
    }

    @Override // xm.e.a
    /* renamed from: f */
    public void b(g gVar) {
        this.f53436c = gVar;
    }
}
