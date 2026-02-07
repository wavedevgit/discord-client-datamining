package io.sentry.android.core.performance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final i f27383d = new i();

    /* renamed from: e  reason: collision with root package name */
    private final i f27384e = new i();

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int compare = Long.compare(this.f27383d.m(), cVar.f27383d.m());
        if (compare == 0) {
            return Long.compare(this.f27384e.m(), cVar.f27384e.m());
        }
        return compare;
    }

    public final i d() {
        return this.f27383d;
    }

    public final i e() {
        return this.f27384e;
    }
}
