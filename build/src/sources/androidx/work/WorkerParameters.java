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
    private UUID f5578a;

    /* renamed from: b  reason: collision with root package name */
    private b f5579b;

    /* renamed from: c  reason: collision with root package name */
    private Set f5580c;

    /* renamed from: d  reason: collision with root package name */
    private a f5581d;

    /* renamed from: e  reason: collision with root package name */
    private int f5582e;

    /* renamed from: f  reason: collision with root package name */
    private Executor f5583f;

    /* renamed from: g  reason: collision with root package name */
    private r4.b f5584g;

    /* renamed from: h  reason: collision with root package name */
    private a0 f5585h;

    /* renamed from: i  reason: collision with root package name */
    private s f5586i;

    /* renamed from: j  reason: collision with root package name */
    private h f5587j;

    /* renamed from: k  reason: collision with root package name */
    private int f5588k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public List f5589a;

        /* renamed from: b  reason: collision with root package name */
        public List f5590b;

        /* renamed from: c  reason: collision with root package name */
        public Network f5591c;

        public a() {
            List list = Collections.EMPTY_LIST;
            this.f5589a = list;
            this.f5590b = list;
        }
    }

    public WorkerParameters(UUID uuid, b bVar, Collection collection, a aVar, int i10, int i11, Executor executor, r4.b bVar2, a0 a0Var, s sVar, h hVar) {
        this.f5578a = uuid;
        this.f5579b = bVar;
        this.f5580c = new HashSet(collection);
        this.f5581d = aVar;
        this.f5582e = i10;
        this.f5588k = i11;
        this.f5583f = executor;
        this.f5584g = bVar2;
        this.f5585h = a0Var;
        this.f5586i = sVar;
        this.f5587j = hVar;
    }

    public Executor a() {
        return this.f5583f;
    }

    public h b() {
        return this.f5587j;
    }

    public UUID c() {
        return this.f5578a;
    }

    public b d() {
        return this.f5579b;
    }

    public r4.b e() {
        return this.f5584g;
    }

    public a0 f() {
        return this.f5585h;
    }
}
