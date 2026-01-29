package se;

import gf.q;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f48994a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.util.d f48995b;

    /* renamed from: c  reason: collision with root package name */
    private long f48996c;

    /* renamed from: d  reason: collision with root package name */
    private long f48997d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f48998e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f48999f;

    /* renamed from: g  reason: collision with root package name */
    private final List f49000g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(h hVar, com.google.android.gms.common.util.d dVar) {
        q.l(hVar);
        q.l(dVar);
        this.f48994a = hVar;
        this.f48995b = dVar;
        this.f48996c = 1800000L;
        this.f48997d = 3024000000L;
        this.f48999f = new HashMap();
        this.f49000g = new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f48998e = true;
    }
}
