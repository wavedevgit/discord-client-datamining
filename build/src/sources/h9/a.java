package h9;

import aa.j;
import com.facebook.imagepipeline.request.ImageRequest;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public class a extends va.a {

    /* renamed from: a  reason: collision with root package name */
    private final w8.b f27002a;

    /* renamed from: b  reason: collision with root package name */
    private final j f27003b;

    public a(w8.b bVar, j jVar) {
        this.f27002a = bVar;
        this.f27003b = jVar;
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestCancellation(String str) {
        this.f27003b.J(this.f27002a.now());
        this.f27003b.P(str);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestFailure(ImageRequest imageRequest, String str, Throwable th2, boolean z10) {
        this.f27003b.J(this.f27002a.now());
        this.f27003b.I(imageRequest);
        this.f27003b.P(str);
        this.f27003b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestStart(ImageRequest imageRequest, Object obj, String str, boolean z10) {
        this.f27003b.K(this.f27002a.now());
        this.f27003b.I(imageRequest);
        this.f27003b.y(obj);
        this.f27003b.P(str);
        this.f27003b.O(z10);
    }

    @Override // com.facebook.imagepipeline.listener.RequestListener
    public void onRequestSuccess(ImageRequest imageRequest, String str, boolean z10) {
        this.f27003b.J(this.f27002a.now());
        this.f27003b.I(imageRequest);
        this.f27003b.P(str);
        this.f27003b.O(z10);
    }
}
