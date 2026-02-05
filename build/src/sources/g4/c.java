package g4;

import org.chromium.support_lib_boundary.WebkitToCompatConverterBoundaryInterface;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes.dex */
public class c implements g {

    /* renamed from: a  reason: collision with root package name */
    private static final String[] f23654a = new String[0];

    @Override // g4.g
    public String[] a() {
        return f23654a;
    }

    @Override // g4.g
    public WebkitToCompatConverterBoundaryInterface getWebkitToCompatConverter() {
        throw new UnsupportedOperationException("This should never happen, if this method was called it means we're trying to reach into WebView APK code on an incompatible device. This most likely means the current method is being called too early, or is being called on start-up rather than lazily");
    }
}
