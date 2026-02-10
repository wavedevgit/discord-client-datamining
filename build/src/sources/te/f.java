package te;

import hf.q;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f48762a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.util.d f48763b;

    /* renamed from: c  reason: collision with root package name */
    private long f48764c;

    /* renamed from: d  reason: collision with root package name */
    private long f48765d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f48766e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f48767f;

    /* renamed from: g  reason: collision with root package name */
    private final List f48768g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(h hVar, com.google.android.gms.common.util.d dVar) {
        q.l(hVar);
        q.l(dVar);
        this.f48762a = hVar;
        this.f48763b = dVar;
        this.f48764c = 1800000L;
        this.f48765d = 3024000000L;
        this.f48767f = new HashMap();
        this.f48768g = new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f48766e = true;
    }
}
