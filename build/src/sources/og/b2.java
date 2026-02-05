package og;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class b2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f42587a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f42588b;

    /* renamed from: c  reason: collision with root package name */
    private final xi.d f42589c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public b2(Map map, Map map2, xi.d dVar) {
        this.f42587a = map;
        this.f42588b = map2;
        this.f42589c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new y1(byteArrayOutputStream, this.f42587a, this.f42588b, this.f42589c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
