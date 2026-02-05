package mg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class u2 {

    /* renamed from: a  reason: collision with root package name */
    private final Map f38146a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f38147b;

    /* renamed from: c  reason: collision with root package name */
    private final xi.d f38148c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public u2(Map map, Map map2, xi.d dVar) {
        this.f38146a = map;
        this.f38147b = map2;
        this.f38148c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new r2(byteArrayOutputStream, this.f38146a, this.f38147b, this.f38148c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
