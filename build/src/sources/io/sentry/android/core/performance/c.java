package io.sentry.android.core.performance;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes4.dex */
public class c implements Comparable {

    /* renamed from: d  reason: collision with root package name */
    private final i f28518d = new i();

    /* renamed from: e  reason: collision with root package name */
    private final i f28519e = new i();

    @Override // java.lang.Comparable
    /* renamed from: a */
    public int compareTo(c cVar) {
        int compare = Long.compare(this.f28518d.m(), cVar.f28518d.m());
        if (compare == 0) {
            return Long.compare(this.f28519e.m(), cVar.f28519e.m());
        }
        return compare;
    }

    public final i d() {
        return this.f28518d;
    }

    public final i e() {
        return this.f28519e;
    }
}
