package androidx.work.impl;

import androidx.lifecycle.MutableLiveData;
import k4.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements k4.q {

    /* renamed from: c  reason: collision with root package name */
    private final MutableLiveData f5791c = new MutableLiveData();

    /* renamed from: d  reason: collision with root package name */
    private final androidx.work.impl.utils.futures.c f5792d = androidx.work.impl.utils.futures.c.t();

    public q() {
        a(k4.q.f31609b);
    }

    public void a(q.b bVar) {
        this.f5791c.m(bVar);
        if (bVar instanceof q.b.c) {
            this.f5792d.p((q.b.c) bVar);
        } else if (bVar instanceof q.b.a) {
            this.f5792d.q(((q.b.a) bVar).a());
        }
    }
}
