package io.sentry.android.core.performance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final i f29206d = new i();

    /* renamed from: e  reason: collision with root package name */
    private final i f29207e = new i();

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int compare = Long.compare(this.f29206d.l(), cVar.f29206d.l());
        if (compare == 0) {
            return Long.compare(this.f29207e.l(), cVar.f29207e.l());
        }
        return compare;
    }

    public final i d() {
        return this.f29206d;
    }

    public final i e() {
        return this.f29207e;
    }
}
