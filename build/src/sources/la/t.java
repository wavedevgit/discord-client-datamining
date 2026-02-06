package la;

import com.facebook.common.references.CloseableReference;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class t implements w {

    /* renamed from: a  reason: collision with root package name */
    private final w f35952a;

    /* renamed from: b  reason: collision with root package name */
    private final x f35953b;

    public t(w wVar, x xVar) {
        this.f35952a = wVar;
        this.f35953b = xVar;
    }

    @Override // la.w
    public void b(Object obj) {
        this.f35952a.b(obj);
    }

    @Override // la.w
    public CloseableReference c(Object obj, CloseableReference closeableReference) {
        this.f35953b.c(obj);
        return this.f35952a.c(obj, closeableReference);
    }

    @Override // la.w
    public boolean e(o8.k kVar) {
        return this.f35952a.e(kVar);
    }

    @Override // la.w
    public int f(o8.k kVar) {
        return this.f35952a.f(kVar);
    }

    @Override // la.w
    public CloseableReference get(Object obj) {
        CloseableReference closeableReference = this.f35952a.get(obj);
        if (closeableReference == null) {
            this.f35953b.b(obj);
            return closeableReference;
        }
        this.f35953b.a(obj);
        return closeableReference;
    }
}
