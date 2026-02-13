package te;

import hf.q;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f49331a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.util.d f49332b;

    /* renamed from: c  reason: collision with root package name */
    private long f49333c;

    /* renamed from: d  reason: collision with root package name */
    private long f49334d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f49335e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f49336f;

    /* renamed from: g  reason: collision with root package name */
    private final List f49337g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(h hVar, com.google.android.gms.common.util.d dVar) {
        q.l(hVar);
        q.l(dVar);
        this.f49331a = hVar;
        this.f49332b = dVar;
        this.f49333c = 1800000L;
        this.f49334d = 3024000000L;
        this.f49336f = new HashMap();
        this.f49337g = new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f49335e = true;
    }
}
