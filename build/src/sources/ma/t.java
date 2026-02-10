package ma;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements w {

    /* renamed from: a  reason: collision with root package name */
    private final w f36830a;

    /* renamed from: b  reason: collision with root package name */
    private final x f36831b;

    public t(w wVar, x xVar) {
        this.f36830a = wVar;
        this.f36831b = xVar;
    }

    @Override // ma.w
    public void a(Object obj) {
        this.f36830a.a(obj);
    }

    @Override // ma.w
    public boolean b(p8.k kVar) {
        return this.f36830a.b(kVar);
    }

    @Override // ma.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        this.f36831b.c(obj);
        return this.f36830a.c(obj, closeableReference);
    }

    @Override // ma.w
    public int e(p8.k kVar) {
        return this.f36830a.e(kVar);
    }

    @Override // ma.w
    public CloseableReference get(Object obj) {
        CloseableReference closeableReference = this.f36830a.get(obj);
        if (closeableReference == null) {
            this.f36831b.b(obj);
            return closeableReference;
        }
        this.f36831b.a(obj);
        return closeableReference;
    }
}
