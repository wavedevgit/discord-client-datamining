package io.sentry.android.core.performance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final i f29087d = new i();

    /* renamed from: e  reason: collision with root package name */
    private final i f29088e = new i();

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int compare = Long.compare(this.f29087d.m(), cVar.f29087d.m());
        if (compare == 0) {
            return Long.compare(this.f29088e.m(), cVar.f29088e.m());
        }
        return compare;
    }

    public final i d() {
        return this.f29087d;
    }

    public final i e() {
        return this.f29088e;
    }
}
