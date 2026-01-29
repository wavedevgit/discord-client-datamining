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
    private UUID f5453a;

    /* renamed from: b  reason: collision with root package name */
    private b f5454b;

    /* renamed from: c  reason: collision with root package name */
    private Set f5455c;

    /* renamed from: d  reason: collision with root package name */
    private a f5456d;

    /* renamed from: e  reason: collision with root package name */
    private int f5457e;

    /* renamed from: f  reason: collision with root package name */
    private Executor f5458f;

    /* renamed from: g  reason: collision with root package name */
    private r4.b f5459g;

    /* renamed from: h  reason: collision with root package name */
    private a0 f5460h;

    /* renamed from: i  reason: collision with root package name */
    private s f5461i;

    /* renamed from: j  reason: collision with root package name */
    private h f5462j;

    /* renamed from: k  reason: collision with root package name */
    private int f5463k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public List f5464a;

        /* renamed from: b  reason: collision with root package name */
        public List f5465b;

        /* renamed from: c  reason: collision with root package name */
        public Network f5466c;

        public a() {
            List list = Collections.EMPTY_LIST;
            this.f5464a = list;
            this.f5465b = list;
        }
    }

    public WorkerParameters(UUID uuid, b bVar, Collection collection, a aVar, int i10, int i11, Executor executor, r4.b bVar2, a0 a0Var, s sVar, h hVar) {
        this.f5453a = uuid;
        this.f5454b = bVar;
        this.f5455c = new HashSet(collection);
        this.f5456d = aVar;
        this.f5457e = i10;
        this.f5463k = i11;
        this.f5458f = executor;
        this.f5459g = bVar2;
        this.f5460h = a0Var;
        this.f5461i = sVar;
        this.f5462j = hVar;
    }

    public Executor a() {
        return this.f5458f;
    }

    public h b() {
        return this.f5462j;
    }

    public UUID c() {
        return this.f5453a;
    }

    public b d() {
        return this.f5454b;
    }

    public r4.b e() {
        return this.f5459g;
    }

    public a0 f() {
        return this.f5460h;
    }
}
