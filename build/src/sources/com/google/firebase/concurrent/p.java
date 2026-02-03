package com.google.firebase.concurrent;

import java.util.concurrent.Delayed;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
class p extends androidx.concurrent.futures.a implements ScheduledFuture {

    /* renamed from: s  reason: collision with root package name */
    private final ScheduledFuture f15947s;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    class a implements b {
        a() {
        }

        @Override // com.google.firebase.concurrent.p.b
        public void a(Throwable th2) {
            p.this.t(th2);
        }

        @Override // com.google.firebase.concurrent.p.b
        public void set(Object obj) {
            p.this.s(obj);
        }
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    public interface b {
        void a(Throwable th2);

        void set(Object obj);
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
    interface c {
        ScheduledFuture a(b bVar);
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public p(c cVar) {
        this.f15947s = cVar.a(new a());
    }

    @Override // androidx.concurrent.futures.a
    protected void e() {
        this.f15947s.cancel(v());
    }

    @Override // java.util.concurrent.Delayed
    public long getDelay(TimeUnit timeUnit) {
        return this.f15947s.getDelay(timeUnit);
    }

    @Override // java.lang.Comparable
    /* renamed from: y */
    public int compareTo(Delayed delayed) {
        return this.f15947s.compareTo(delayed);
    }
}
