package g9;

import com.facebook.imagepipeline.request.ImageRequest;
import z9.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends ua.a {

    /* renamed from: a  reason: collision with root package name */
    private final v8.b f25873a;

    /* renamed from: b  reason: collision with root package name */
    private final j f25874b;

    public a(v8.b bVar, j jVar) {
        this.f25873a = bVar;
        this.f25874b = jVar;
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestCancellation(String str) {
        this.f25874b.J(this.f25873a.now());
        this.f25874b.P(str);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestFailure(ImageRequest imageRequest, String str, Throwable th2, boolean z10) {
        this.f25874b.J(this.f25873a.now());
        this.f25874b.I(imageRequest);
        this.f25874b.P(str);
        this.f25874b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestStart(ImageRequest imageRequest, Object obj, String str, boolean z10) {
        this.f25874b.K(this.f25873a.now());
        this.f25874b.I(imageRequest);
        this.f25874b.y(obj);
        this.f25874b.P(str);
        this.f25874b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestSuccess(ImageRequest imageRequest, String str, boolean z10) {
        this.f25874b.J(this.f25873a.now());
        this.f25874b.I(imageRequest);
        this.f25874b.P(str);
        this.f25874b.O(z10);
    }
}
