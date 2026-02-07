package g9;

import com.facebook.imagepipeline.request.ImageRequest;
import z9.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends ua.a {

    /* renamed from: a  reason: collision with root package name */
    private final v8.b f24873a;

    /* renamed from: b  reason: collision with root package name */
    private final j f24874b;

    public a(v8.b bVar, j jVar) {
        this.f24873a = bVar;
        this.f24874b = jVar;
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestCancellation(String str) {
        this.f24874b.J(this.f24873a.now());
        this.f24874b.P(str);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestFailure(ImageRequest imageRequest, String str, Throwable th2, boolean z10) {
        this.f24874b.J(this.f24873a.now());
        this.f24874b.I(imageRequest);
        this.f24874b.P(str);
        this.f24874b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestStart(ImageRequest imageRequest, Object obj, String str, boolean z10) {
        this.f24874b.K(this.f24873a.now());
        this.f24874b.I(imageRequest);
        this.f24874b.y(obj);
        this.f24874b.P(str);
        this.f24874b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestSuccess(ImageRequest imageRequest, String str, boolean z10) {
        this.f24874b.J(this.f24873a.now());
        this.f24874b.I(imageRequest);
        this.f24874b.P(str);
        this.f24874b.O(z10);
    }
}
