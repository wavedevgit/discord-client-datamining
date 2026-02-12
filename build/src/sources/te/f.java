package te;

import hf.q;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class f {

    /* renamed from: a  reason: collision with root package name */
    private final h f48763a;

    /* renamed from: b  reason: collision with root package name */
    private final com.google.android.gms.common.util.d f48764b;

    /* renamed from: c  reason: collision with root package name */
    private long f48765c;

    /* renamed from: d  reason: collision with root package name */
    private long f48766d;

    /* renamed from: e  reason: collision with root package name */
    private boolean f48767e;

    /* renamed from: f  reason: collision with root package name */
    private final Map f48768f;

    /* renamed from: g  reason: collision with root package name */
    private final List f48769g;

    /* JADX INFO: Access modifiers changed from: package-private */
    public f(h hVar, com.google.android.gms.common.util.d dVar) {
        q.l(hVar);
        q.l(dVar);
        this.f48763a = hVar;
        this.f48764b = dVar;
        this.f48765c = 1800000L;
        this.f48766d = 3024000000L;
        this.f48768f = new HashMap();
        this.f48769g = new ArrayList();
    }

    /* JADX INFO: Access modifiers changed from: package-private */
    public final void a() {
        this.f48767e = true;
    }
}
