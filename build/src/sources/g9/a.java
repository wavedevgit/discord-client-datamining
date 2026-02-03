package g9;

import com.facebook.imagepipeline.request.ImageRequest;
import z9.j;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends ua.a {

    /* renamed from: a  reason: collision with root package name */
    private final v8.b f26660a;

    /* renamed from: b  reason: collision with root package name */
    private final j f26661b;

    public a(v8.b bVar, j jVar) {
        this.f26660a = bVar;
        this.f26661b = jVar;
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestCancellation(String str) {
        this.f26661b.J(this.f26660a.now());
        this.f26661b.P(str);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestFailure(ImageRequest imageRequest, String str, Throwable th2, boolean z10) {
        this.f26661b.J(this.f26660a.now());
        this.f26661b.I(imageRequest);
        this.f26661b.P(str);
        this.f26661b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestStart(ImageRequest imageRequest, Object obj, String str, boolean z10) {
        this.f26661b.K(this.f26660a.now());
        this.f26661b.I(imageRequest);
        this.f26661b.y(obj);
        this.f26661b.P(str);
        this.f26661b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestSuccess(ImageRequest imageRequest, String str, boolean z10) {
        this.f26661b.J(this.f26660a.now());
        this.f26661b.I(imageRequest);
        this.f26661b.P(str);
        this.f26661b.O(z10);
    }
}
