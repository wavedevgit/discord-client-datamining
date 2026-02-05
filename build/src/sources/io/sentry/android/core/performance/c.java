package io.sentry.android.core.performance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final i f28191d = new i();

    /* renamed from: e  reason: collision with root package name */
    private final i f28192e = new i();

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int compare = Long.compare(this.f28191d.m(), cVar.f28191d.m());
        if (compare == 0) {
            return Long.compare(this.f28192e.m(), cVar.f28192e.m());
        }
        return compare;
    }

    public final i d() {
        return this.f28191d;
    }

    public final i e() {
        return this.f28192e;
    }
}
