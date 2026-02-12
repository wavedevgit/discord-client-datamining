package h9;

import aa.j;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends va.a {

    /* renamed from: a  reason: collision with root package name */
    private final w8.b f27003a;

    /* renamed from: b  reason: collision with root package name */
    private final j f27004b;

    public a(w8.b bVar, j jVar) {
        this.f27003a = bVar;
        this.f27004b = jVar;
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestCancellation(String str) {
        this.f27004b.J(this.f27003a.now());
        this.f27004b.P(str);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestFailure(ImageRequest imageRequest, String str, Throwable th2, boolean z10) {
        this.f27004b.J(this.f27003a.now());
        this.f27004b.I(imageRequest);
        this.f27004b.P(str);
        this.f27004b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestStart(ImageRequest imageRequest, Object obj, String str, boolean z10) {
        this.f27004b.K(this.f27003a.now());
        this.f27004b.I(imageRequest);
        this.f27004b.y(obj);
        this.f27004b.P(str);
        this.f27004b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestSuccess(ImageRequest imageRequest, String str, boolean z10) {
        this.f27004b.J(this.f27003a.now());
        this.f27004b.I(imageRequest);
        this.f27004b.P(str);
        this.f27004b.O(z10);
    }
}
