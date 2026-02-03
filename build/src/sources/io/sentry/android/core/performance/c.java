package io.sentry.android.core.performance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final i f28772d = new i();

    /* renamed from: e  reason: collision with root package name */
    private final i f28773e = new i();

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int compare = Long.compare(this.f28772d.m(), cVar.f28772d.m());
        if (compare == 0) {
            return Long.compare(this.f28773e.m(), cVar.f28773e.m());
        }
        return compare;
    }

    public final i d() {
        return this.f28772d;
    }

    public final i e() {
        return this.f28773e;
    }
}
