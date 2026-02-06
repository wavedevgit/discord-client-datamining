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
    private UUID f5907a;

    /* renamed from: b  reason: collision with root package name */
    private b f5908b;

    /* renamed from: c  reason: collision with root package name */
    private Set f5909c;

    /* renamed from: d  reason: collision with root package name */
    private a f5910d;

    /* renamed from: e  reason: collision with root package name */
    private int f5911e;

    /* renamed from: f  reason: collision with root package name */
    private Executor f5912f;

    /* renamed from: g  reason: collision with root package name */
    private r4.b f5913g;

    /* renamed from: h  reason: collision with root package name */
    private a0 f5914h;

    /* renamed from: i  reason: collision with root package name */
    private s f5915i;

    /* renamed from: j  reason: collision with root package name */
    private h f5916j;

    /* renamed from: k  reason: collision with root package name */
    private int f5917k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public List f5918a;

        /* renamed from: b  reason: collision with root package name */
        public List f5919b;

        /* renamed from: c  reason: collision with root package name */
        public Network f5920c;

        public a() {
            List list = Collections.EMPTY_LIST;
            this.f5918a = list;
            this.f5919b = list;
        }
    }

    public WorkerParameters(UUID uuid, b bVar, Collection collection, a aVar, int i10, int i11, Executor executor, r4.b bVar2, a0 a0Var, s sVar, h hVar) {
        this.f5907a = uuid;
        this.f5908b = bVar;
        this.f5909c = new HashSet(collection);
        this.f5910d = aVar;
        this.f5911e = i10;
        this.f5917k = i11;
        this.f5912f = executor;
        this.f5913g = bVar2;
        this.f5914h = a0Var;
        this.f5915i = sVar;
        this.f5916j = hVar;
    }

    public Executor a() {
        return this.f5912f;
    }

    public h b() {
        return this.f5916j;
    }

    public UUID c() {
        return this.f5907a;
    }

    public b d() {
        return this.f5908b;
    }

    public r4.b e() {
        return this.f5913g;
    }

    public a0 f() {
        return this.f5914h;
    }
}
