package androidx.work;

import android.net.Network;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.UUID;
import java.util.concurrent.Executor;
import k4.a0;
import k4.h;
import k4.s;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public final class WorkerParameters {

    /* renamed from: a  reason: collision with root package name */
    private UUID f5604a;

    /* renamed from: b  reason: collision with root package name */
    private b f5605b;

    /* renamed from: c  reason: collision with root package name */
    private Set f5606c;

    /* renamed from: d  reason: collision with root package name */
    private a f5607d;

    /* renamed from: e  reason: collision with root package name */
    private int f5608e;

    /* renamed from: f  reason: collision with root package name */
    private Executor f5609f;

    /* renamed from: g  reason: collision with root package name */
    private r4.b f5610g;

    /* renamed from: h  reason: collision with root package name */
    private a0 f5611h;

    /* renamed from: i  reason: collision with root package name */
    private s f5612i;

    /* renamed from: j  reason: collision with root package name */
    private h f5613j;

    /* renamed from: k  reason: collision with root package name */
    private int f5614k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public List f5615a;

        /* renamed from: b  reason: collision with root package name */
        public List f5616b;

        /* renamed from: c  reason: collision with root package name */
        public Network f5617c;

        public a() {
            List list = Collections.EMPTY_LIST;
            this.f5615a = list;
            this.f5616b = list;
        }
    }

    public WorkerParameters(UUID uuid, b bVar, Collection collection, a aVar, int i10, int i11, Executor executor, r4.b bVar2, a0 a0Var, s sVar, h hVar) {
        this.f5604a = uuid;
        this.f5605b = bVar;
        this.f5606c = new HashSet(collection);
        this.f5607d = aVar;
        this.f5608e = i10;
        this.f5614k = i11;
        this.f5609f = executor;
        this.f5610g = bVar2;
        this.f5611h = a0Var;
        this.f5612i = sVar;
        this.f5613j = hVar;
    }

    public Executor a() {
        return this.f5609f;
    }

    public h b() {
        return this.f5613j;
    }

    public UUID c() {
        return this.f5604a;
    }

    public b d() {
        return this.f5605b;
    }

    public r4.b e() {
        return this.f5610g;
    }

    public a0 f() {
        return this.f5611h;
    }
}
