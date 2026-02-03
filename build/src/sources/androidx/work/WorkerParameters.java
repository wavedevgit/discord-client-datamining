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
    private UUID f5497a;

    /* renamed from: b  reason: collision with root package name */
    private b f5498b;

    /* renamed from: c  reason: collision with root package name */
    private Set f5499c;

    /* renamed from: d  reason: collision with root package name */
    private a f5500d;

    /* renamed from: e  reason: collision with root package name */
    private int f5501e;

    /* renamed from: f  reason: collision with root package name */
    private Executor f5502f;

    /* renamed from: g  reason: collision with root package name */
    private r4.b f5503g;

    /* renamed from: h  reason: collision with root package name */
    private a0 f5504h;

    /* renamed from: i  reason: collision with root package name */
    private s f5505i;

    /* renamed from: j  reason: collision with root package name */
    private h f5506j;

    /* renamed from: k  reason: collision with root package name */
    private int f5507k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public List f5508a;

        /* renamed from: b  reason: collision with root package name */
        public List f5509b;

        /* renamed from: c  reason: collision with root package name */
        public Network f5510c;

        public a() {
            List list = Collections.EMPTY_LIST;
            this.f5508a = list;
            this.f5509b = list;
        }
    }

    public WorkerParameters(UUID uuid, b bVar, Collection collection, a aVar, int i10, int i11, Executor executor, r4.b bVar2, a0 a0Var, s sVar, h hVar) {
        this.f5497a = uuid;
        this.f5498b = bVar;
        this.f5499c = new HashSet(collection);
        this.f5500d = aVar;
        this.f5501e = i10;
        this.f5507k = i11;
        this.f5502f = executor;
        this.f5503g = bVar2;
        this.f5504h = a0Var;
        this.f5505i = sVar;
        this.f5506j = hVar;
    }

    public Executor a() {
        return this.f5502f;
    }

    public h b() {
        return this.f5506j;
    }

    public UUID c() {
        return this.f5497a;
    }

    public b d() {
        return this.f5498b;
    }

    public r4.b e() {
        return this.f5503g;
    }

    public a0 f() {
        return this.f5504h;
    }
}
