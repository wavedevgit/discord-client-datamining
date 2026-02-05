package g4;

import org.chromium.support_lib_boundary.WebViewProviderFactoryBoundaryInterface;
import org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class h implements g {

    /* renamed from: a  reason: collision with root package name */
    WebViewProviderFactoryBoundaryInterface f23682a;

    public h(WebViewProviderFactoryBoundaryInterface webViewProviderFactoryBoundaryInterface) {
        this.f23682a = webViewProviderFactoryBoundaryInterface;
    }

    @Override // g4.g
    public String[] a() {
        return this.f23682a.getSupportedFeatures();
    }

    @Override // g4.g
    public WebkitToCompatConverterBoundaryInterface getWebkitToCompatConverter() {
        return (WebkitToCompatConverterBoundaryInterface) fv.a.a(WebkitToCompatConverterBoundaryInterface.class, this.f23682a.getWebkitToCompatConverter());
    }
}
