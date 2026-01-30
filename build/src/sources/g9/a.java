package g9;

import com.facebook.imagepipeline.request.ImageRequest;
import z9.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends ua.a {

    /* renamed from: a  reason: collision with root package name */
    private final v8.b f26565a;

    /* renamed from: b  reason: collision with root package name */
    private final j f26566b;

    public a(v8.b bVar, j jVar) {
        this.f26565a = bVar;
        this.f26566b = jVar;
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestCancellation(String str) {
        this.f26566b.J(this.f26565a.now());
        this.f26566b.P(str);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestFailure(ImageRequest imageRequest, String str, Throwable th2, boolean z10) {
        this.f26566b.J(this.f26565a.now());
        this.f26566b.I(imageRequest);
        this.f26566b.P(str);
        this.f26566b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestStart(ImageRequest imageRequest, Object obj, String str, boolean z10) {
        this.f26566b.K(this.f26565a.now());
        this.f26566b.I(imageRequest);
        this.f26566b.y(obj);
        this.f26566b.P(str);
        this.f26566b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestSuccess(ImageRequest imageRequest, String str, boolean z10) {
        this.f26566b.J(this.f26565a.now());
        this.f26566b.I(imageRequest);
        this.f26566b.P(str);
        this.f26566b.O(z10);
    }
}
