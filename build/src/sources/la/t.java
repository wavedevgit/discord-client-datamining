package la;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements w {

    /* renamed from: a  reason: collision with root package name */
    private final w f37049a;

    /* renamed from: b  reason: collision with root package name */
    private final x f37050b;

    public t(w wVar, x xVar) {
        this.f37049a = wVar;
        this.f37050b = xVar;
    }

    @Override // la.w
    public void b(Object obj) {
        this.f37049a.b(obj);
    }

    @Override // la.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        this.f37050b.c(obj);
        return this.f37049a.c(obj, closeableReference);
    }

    @Override // la.w
    public boolean e(o8.k kVar) {
        return this.f37049a.e(kVar);
    }

    @Override // la.w
    public int f(o8.k kVar) {
        return this.f37049a.f(kVar);
    }

    @Override // la.w
    public CloseableReference get(Object obj) {
        CloseableReference closeableReference = this.f37049a.get(obj);
        if (closeableReference == null) {
            this.f37050b.b(obj);
            return closeableReference;
        }
        this.f37050b.a(obj);
        return closeableReference;
    }
}
