package ma;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements w {

    /* renamed from: a  reason: collision with root package name */
    private final w f36205a;

    /* renamed from: b  reason: collision with root package name */
    private final x f36206b;

    public t(w wVar, x xVar) {
        this.f36205a = wVar;
        this.f36206b = xVar;
    }

    @Override // ma.w
    public void a(Object obj) {
        this.f36205a.a(obj);
    }

    @Override // ma.w
    public boolean b(p8.k kVar) {
        return this.f36205a.b(kVar);
    }

    @Override // ma.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        this.f36206b.c(obj);
        return this.f36205a.c(obj, closeableReference);
    }

    @Override // ma.w
    public int e(p8.k kVar) {
        return this.f36205a.e(kVar);
    }

    @Override // ma.w
    public CloseableReference get(Object obj) {
        CloseableReference closeableReference = this.f36205a.get(obj);
        if (closeableReference == null) {
            this.f36206b.b(obj);
            return closeableReference;
        }
        this.f36206b.a(obj);
        return closeableReference;
    }
}
