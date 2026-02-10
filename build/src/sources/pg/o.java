package pg;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.Map;
/* loaded from: /home/runner/work/discord-client-datamining/discord-client-datamining/build/classes3.dex */
public final class o {

    /* renamed from: a  reason: collision with root package name */
    private final Map f43828a;

    /* renamed from: b  reason: collision with root package name */
    private final Map f43829b;

    /* renamed from: c  reason: collision with root package name */
    private final zi.d f43830c;

    /* JADX INFO: Access modifiers changed from: package-private */
    public o(Map map, Map map2, zi.d dVar) {
        this.f43828a = map;
        this.f43829b = map2;
        this.f43830c = dVar;
    }

    public final byte[] a(Object obj) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        try {
            new l(byteArrayOutputStream, this.f43828a, this.f43829b, this.f43830c).i(obj);
        } catch (IOException unused) {
        }
        return byteArrayOutputStream.toByteArray();
    }
}
