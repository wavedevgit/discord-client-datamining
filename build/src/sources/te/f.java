package te;

import hf.q;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f50830a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.util.d f50831b;

    /* renamed from: c  reason: collision with root package name */
    private long f50832c;

    /* renamed from: d  reason: collision with root package name */
    private long f50833d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f50834e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f50835f;

    /* renamed from: g  reason: collision with root package name */
    private final List f50836g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(h hVar, com.google.android.gms.common.util.d dVar) {
        q.l(hVar);
        q.l(dVar);
        this.f50830a = hVar;
        this.f50831b = dVar;
        this.f50832c = 1800000L;
        this.f50833d = 3024000000L;
        this.f50835f = new HashMap();
        this.f50836g = new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f50834e = true;
    }
}
