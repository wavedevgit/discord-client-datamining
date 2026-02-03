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
    private UUID f5466a;

    /* renamed from: b  reason: collision with root package name */
    private b f5467b;

    /* renamed from: c  reason: collision with root package name */
    private Set f5468c;

    /* renamed from: d  reason: collision with root package name */
    private a f5469d;

    /* renamed from: e  reason: collision with root package name */
    private int f5470e;

    /* renamed from: f  reason: collision with root package name */
    private Executor f5471f;

    /* renamed from: g  reason: collision with root package name */
    private r4.b f5472g;

    /* renamed from: h  reason: collision with root package name */
    private a0 f5473h;

    /* renamed from: i  reason: collision with root package name */
    private s f5474i;

    /* renamed from: j  reason: collision with root package name */
    private h f5475j;

    /* renamed from: k  reason: collision with root package name */
    private int f5476k;

    /* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
    public static class a {

        /* renamed from: a  reason: collision with root package name */
        public List f5477a;

        /* renamed from: b  reason: collision with root package name */
        public List f5478b;

        /* renamed from: c  reason: collision with root package name */
        public Network f5479c;

        public a() {
            List list = Collections.EMPTY_LIST;
            this.f5477a = list;
            this.f5478b = list;
        }
    }

    public WorkerParameters(UUID uuid, b bVar, Collection collection, a aVar, int i10, int i11, Executor executor, r4.b bVar2, a0 a0Var, s sVar, h hVar) {
        this.f5466a = uuid;
        this.f5467b = bVar;
        this.f5468c = new HashSet(collection);
        this.f5469d = aVar;
        this.f5470e = i10;
        this.f5476k = i11;
        this.f5471f = executor;
        this.f5472g = bVar2;
        this.f5473h = a0Var;
        this.f5474i = sVar;
        this.f5475j = hVar;
    }

    public Executor a() {
        return this.f5471f;
    }

    public h b() {
        return this.f5475j;
    }

    public UUID c() {
        return this.f5466a;
    }

    public b d() {
        return this.f5467b;
    }

    public r4.b e() {
        return this.f5472g;
    }

    public a0 f() {
        return this.f5473h;
    }
}
