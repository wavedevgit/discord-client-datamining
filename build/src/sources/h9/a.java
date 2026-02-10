package h9;

import aa.j;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends va.a {

    /* renamed from: a  reason: collision with root package name */
    private final w8.b f25784a;

    /* renamed from: b  reason: collision with root package name */
    private final j f25785b;

    public a(w8.b bVar, j jVar) {
        this.f25784a = bVar;
        this.f25785b = jVar;
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestCancellation(String str) {
        this.f25785b.J(this.f25784a.now());
        this.f25785b.P(str);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestFailure(ImageRequest imageRequest, String str, Throwable th2, boolean z10) {
        this.f25785b.J(this.f25784a.now());
        this.f25785b.I(imageRequest);
        this.f25785b.P(str);
        this.f25785b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestStart(ImageRequest imageRequest, Object obj, String str, boolean z10) {
        this.f25785b.K(this.f25784a.now());
        this.f25785b.I(imageRequest);
        this.f25785b.y(obj);
        this.f25785b.P(str);
        this.f25785b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestSuccess(ImageRequest imageRequest, String str, boolean z10) {
        this.f25785b.J(this.f25784a.now());
        this.f25785b.I(imageRequest);
        this.f25785b.P(str);
        this.f25785b.O(z10);
    }
}
