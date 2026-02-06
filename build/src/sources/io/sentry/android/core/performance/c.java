package io.sentry.android.core.performance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final i f27335d = new i();

    /* renamed from: e  reason: collision with root package name */
    private final i f27336e = new i();

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int compare = Long.compare(this.f27335d.m(), cVar.f27335d.m());
        if (compare == 0) {
            return Long.compare(this.f27336e.m(), cVar.f27336e.m());
        }
        return compare;
    }

    public final i d() {
        return this.f27335d;
    }

    public final i e() {
        return this.f27336e;
    }
}
