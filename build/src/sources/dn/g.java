package dn;

import dn.e;
import kotlin.jvm.internal.Intrinsics;
import kotlinx.coroutines.Job;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public final class g implements e.a {

    /* renamed from: a  reason: collision with root package name */
    private final String f20873a;

    /* renamed from: b  reason: collision with root package name */
    private final Job f20874b;

    /* renamed from: c  reason: collision with root package name */
    private g f20875c;

    public g(String key, Job job) {
        Intrinsics.checkNotNullParameter(key, "key");
        Intrinsics.checkNotNullParameter(job, "job");
        this.f20873a = key;
        this.f20874b = job;
    }

    public final Job c() {
        return this.f20874b;
    }

    public final String d() {
        return this.f20873a;
    }

    @Override // dn.e.a
    /* renamed from: e */
    public g a() {
        return this.f20875c;
    }

    @Override // dn.e.a
    /* renamed from: f */
    public void b(g gVar) {
        this.f20875c = gVar;
    }
}
