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
    private UUID f5614a;

    /* renamed from: b  reason: collision with root package name */
    private b f5615b;

    /* renamed from: c  reason: collision with root package name */
    private Set f5616c;

    /* renamed from: d  reason: collision with root package name */
    private a f5617d;

    /* renamed from: e  reason: collision with root package name */
    private int f5618e;

    /* renamed from: f  reason: collision with root package name */
    private Executor f5619f;

    /* renamed from: g  reason: collision with root package name */
    private r4.b f5620g;

    /* renamed from: h  reason: collision with root package name */
    private a0 f5621h;

    /* renamed from: i  reason: collision with root package name */
    private s f5622i;

    /* renamed from: j  reason: collision with root package name */
    private h f5623j;

    /* renamed from: k  reason: collision with root package name */
    private int f5624k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public List f5625a;

        /* renamed from: b  reason: collision with root package name */
        public List f5626b;

        /* renamed from: c  reason: collision with root package name */
        public Network f5627c;

        public a() {
            List list = Collections.EMPTY_LIST;
            this.f5625a = list;
            this.f5626b = list;
        }
    }

    public WorkerParameters(UUID uuid, b bVar, Collection collection, a aVar, int i10, int i11, Executor executor, r4.b bVar2, a0 a0Var, s sVar, h hVar) {
        this.f5614a = uuid;
        this.f5615b = bVar;
        this.f5616c = new HashSet(collection);
        this.f5617d = aVar;
        this.f5618e = i10;
        this.f5624k = i11;
        this.f5619f = executor;
        this.f5620g = bVar2;
        this.f5621h = a0Var;
        this.f5622i = sVar;
        this.f5623j = hVar;
    }

    public Executor a() {
        return this.f5619f;
    }

    public h b() {
        return this.f5623j;
    }

    public UUID c() {
        return this.f5614a;
    }

    public b d() {
        return this.f5615b;
    }

    public r4.b e() {
        return this.f5620g;
    }

    public a0 f() {
        return this.f5621h;
    }
}
