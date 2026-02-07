package se;

import gf.q;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f49989a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.util.d f49990b;

    /* renamed from: c  reason: collision with root package name */
    private long f49991c;

    /* renamed from: d  reason: collision with root package name */
    private long f49992d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f49993e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f49994f;

    /* renamed from: g  reason: collision with root package name */
    private final List f49995g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(h hVar, com.google.android.gms.common.util.d dVar) {
        q.l(hVar);
        q.l(dVar);
        this.f49989a = hVar;
        this.f49990b = dVar;
        this.f49991c = 1800000L;
        this.f49992d = 3024000000L;
        this.f49994f = new HashMap();
        this.f49995g = new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f49993e = true;
    }
}
