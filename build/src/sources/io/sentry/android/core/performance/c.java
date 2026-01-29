package io.sentry.android.core.performance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final i f29190d = new i();

    /* renamed from: e  reason: collision with root package name */
    private final i f29191e = new i();

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int compare = Long.compare(this.f29190d.l(), cVar.f29190d.l());
        if (compare == 0) {
            return Long.compare(this.f29191e.l(), cVar.f29191e.l());
        }
        return compare;
    }

    public final i d() {
        return this.f29190d;
    }

    public final i e() {
        return this.f29191e;
    }
}
