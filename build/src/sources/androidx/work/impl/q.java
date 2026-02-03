package androidx.work.impl;

import androidx.lifecycle.MutableLiveData;
import k4.q;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class q implements k4.q {

    /* renamed from: c  reason: collision with root package name */
    private final MutableLiveData f5710c = new MutableLiveData();

    /* renamed from: d  reason: collision with root package name */
    private final androidx.work.impl.utils.futures.c f5711d = androidx.work.impl.utils.futures.c.t();

    public q() {
        a(k4.q.f32748b);
    }

    public void a(q.b bVar) {
        this.f5710c.m(bVar);
        if (bVar instanceof q.b.c) {
            this.f5711d.p((q.b.c) bVar);
        } else if (bVar instanceof q.b.a) {
            this.f5711d.q(((q.b.a) bVar).a());
        }
    }
}
