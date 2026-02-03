package gc;

import android.app.job.JobInfo;
import gc.c;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public abstract class f {

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        private jc.a f25917a;

        /* renamed from: b  reason: collision with root package name */
        private Map f25918b = new HashMap();

        public a a(xb.e eVar, b bVar) {
            this.f25918b.put(eVar, bVar);
            return this;
        }

        public f b() {
            if (this.f25917a != null) {
                if (this.f25918b.keySet().size() >= xb.e.values().length) {
                    Map map = this.f25918b;
                    this.f25918b = new HashMap();
                    return f.d(this.f25917a, map);
                }
                throw new IllegalStateException("Not all priorities have been configured");
            }
            throw new NullPointerException("missing required property: clock");
        }

        public a c(jc.a aVar) {
            this.f25917a = aVar;
            return this;
        }
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public static abstract class b {

        /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
        public static abstract class a {
            public abstract b a();

            public abstract a b(long j10);

            public abstract a c(Set set);

            public abstract a d(long j10);
        }

        public static a a() {
            return new c.b().c(Collections.EMPTY_SET);
        }

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract long b();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract Set c();

        /* JADX INFO: Access modifiers changed from: package-private */
        public abstract long d();
    }

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
    public enum c {
        NETWORK_UNMETERED,
        DEVICE_IDLE,
        DEVICE_CHARGING
    }

    private long a(int i10, long j10) {
        long j11;
        int i11 = i10 - 1;
        if (j10 > 1) {
            j11 = j10;
        } else {
            j11 = 2;
        }
        return (long) (Math.pow(3.0d, i11) * j10 * Math.max(1.0d, Math.log(10000.0d) / Math.log(j11 * i11)));
    }

    public static a b() {
        return new a();
    }

    static f d(jc.a aVar, Map map) {
        return new gc.b(aVar, map);
    }

    public static f f(jc.a aVar) {
        return b().a(xb.e.DEFAULT, b.a().b(30000L).d(86400000L).a()).a(xb.e.HIGHEST, b.a().b(1000L).d(86400000L).a()).a(xb.e.VERY_LOW, b.a().b(86400000L).d(86400000L).c(i(c.DEVICE_IDLE)).a()).c(aVar).b();
    }

    private static Set i(Object... objArr) {
        return Collections.unmodifiableSet(new HashSet(Arrays.asList(objArr)));
    }

    private void j(JobInfo.Builder builder, Set set) {
        if (set.contains(c.NETWORK_UNMETERED)) {
            builder.setRequiredNetworkType(2);
        } else {
            builder.setRequiredNetworkType(1);
        }
        if (set.contains(c.DEVICE_CHARGING)) {
            builder.setRequiresCharging(true);
        }
        if (set.contains(c.DEVICE_IDLE)) {
            builder.setRequiresDeviceIdle(true);
        }
    }

    public JobInfo.Builder c(JobInfo.Builder builder, xb.e eVar, long j10, int i10) {
        builder.setMinimumLatency(g(eVar, j10, i10));
        j(builder, ((b) h().get(eVar)).c());
        return builder;
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract jc.a e();

    public long g(xb.e eVar, long j10, int i10) {
        long a10 = j10 - e().a();
        b bVar = (b) h().get(eVar);
        return Math.min(Math.max(a(i10, bVar.b()), a10), bVar.d());
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public abstract Map h();
}
