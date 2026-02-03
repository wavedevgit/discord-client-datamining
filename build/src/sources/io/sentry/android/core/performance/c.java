package io.sentry.android.core.performance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final i f29133d = new i();

    /* renamed from: e  reason: collision with root package name */
    private final i f29134e = new i();

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int compare = Long.compare(this.f29133d.l(), cVar.f29133d.l());
        if (compare == 0) {
            return Long.compare(this.f29134e.l(), cVar.f29134e.l());
        }
        return compare;
    }

    public final i d() {
        return this.f29133d;
    }

    public final i e() {
        return this.f29134e;
    }
}
